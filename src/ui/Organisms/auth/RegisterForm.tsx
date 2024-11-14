"use client"
import { IRequestRegisterUsersDto } from "@/app/core/application/dto/auth";
import ButtonAuth from "@/ui/Atoms/auth/ButtonAuth";
import { FormField } from "@/ui/Molecules/common/InputField";
import { InputSelectField } from "@/ui/Molecules/common/InputSelectField";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputSelectFile } from "@/ui/Molecules/common/InputSelectFile";
import { useForm } from "react-hook-form";

import * as yup from 'yup';
import { useRouter } from "next/navigation";

const registerSchema = yup.object().shape({
    email: yup
        .string()
        .email('Email inválido')
        .required('Email requerido'),
    password: yup
        .string()
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .required('Contraseña requerida'),
    name: yup
        .string()
        .min(1, 'El nombre de usuario debe tener al menos 1 caracter')
        .required('Nombre de usuario requerido'),
    role: yup
        .string()
        .required('Rol requerido'),
    photo: yup
        .mixed<File>()
        .nullable()
        .notRequired()
});

const RegisterForm = () => {

    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<IRequestRegisterUsersDto>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(registerSchema)
    });

    const handleRegister = async (data: IRequestRegisterUsersDto) => {
        try {
            const formData = new FormData();

            formData.append("email", data.email);
            formData.append("password", data.password);
            formData.append("name", data.name);
            formData.append("role", data.role);

            if (data.photo) {
                formData.append("photo", data.photo);
            }

            const response = await fetch("/api/users/post", {
                method: "POST",
                body: formData
            });


            if (!response.ok) {
                throw new Error("Error al registrar el servicio");
            }

            console.log(response);
            alert('Usuario registrado exitosamente');
            router.refresh();
            return await response.json();

        } catch (error) {
            console.error("Error en el POST:", error);
            throw error;
        }
    };


    const RoleOptions = [
        { label: 'Organizador', value: 'organizer' },
        { label: 'Invitado', value: 'user' },
    ];

    return (
        <form onSubmit={handleSubmit(handleRegister)} className="space-y-6">
            <FormField<IRequestRegisterUsersDto>
                label="Nombre de Usuario"
                name="name"
                control={control}
                type="text"
                error={errors.name}
                placeholder="Ingrese su nombre de usuario"
            />

            <FormField<IRequestRegisterUsersDto>
                label="Correo Electrónico"
                name="email"
                control={control}
                type="email"
                error={errors.email}
                placeholder="Ingrese su correo electrónico"
            />

            <FormField<IRequestRegisterUsersDto>
                label="Contraseña"
                name="password"
                control={control}
                type="password"
                error={errors.password}
                placeholder="Ingrese su contraseña"
            />

            <InputSelectField<IRequestRegisterUsersDto>
                label="Rol"
                name="role"
                control={control}
                options={RoleOptions}
                error={errors.role}
                placeholder="Seleccione su país"
            />

            <InputSelectFile<IRequestRegisterUsersDto>
                label="Avatar"
                name="photo"
                control={control}
                error={errors.photo}
                accept="image/*"
            />

            <ButtonAuth
                type="submit"
                label="Registrarse"
            />
        </form>
    );
};

export default RegisterForm;
