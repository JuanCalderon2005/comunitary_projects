'use client';

import { IRequestRegisterUsersDto } from "@/app/core/application/dto/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import FormField from "@/ui/Molecules/common/InputField";
import { InputSelectField } from "@/ui/Molecules/common/InputSelectField";
import { InputSelectFile } from "@/ui/Molecules/common/InputSelectFile";
import ButtonAuth from "@/ui/Atoms/auth/ButtonAuth";

const registerSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email requerido"),
    password: yup
        .string()
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .required("Contraseña requerida"),
    name: yup.string().min(1, "El nombre de usuario debe tener al menos 1 carácter").required("Nombre de usuario requerido"),
    role: yup.string().required("Rol requerido"),
    photo: yup.mixed<File>().nullable().notRequired(),
});

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 70%;
  background-color: white;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: black;
`;

const Description = styled.p`
  color: #6b7280;
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const SubmitButton = styled(ButtonAuth)`
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: black;
  color: white;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #333;
  }
`;

const RoleOptions = [
    { label: "Organizador", value: "organizer" },
    { label: "Invitado", value: "user" },
];

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const HalfWidth = styled.div`
  width: 48%;
`;

const RegisterForm = () => {
    const router = useRouter();
    const { control, handleSubmit, formState: { errors } } = useForm<IRequestRegisterUsersDto>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(registerSchema),
    });

    const handleRegister = async (data: IRequestRegisterUsersDto) => {
        try {
            const formData = new FormData();
            formData.append("email", data.email);
            formData.append("password", data.password);
            formData.append("name", data.name);
            formData.append("role", data.role);
            if (data.photo) formData.append("photo", data.photo);

            const response = await fetch("/api/users/post", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Error al registrar el servicio");
            }

            console.log(response);
            alert("Usuario registrado exitosamente");
            router.refresh();
            return await response.json();
        } catch (error) {
            console.error("Error en el POST:", error);
            throw error;
        }
    };

    return (
        <FormWrapper onSubmit={handleSubmit(handleRegister)}>
            <Title>Registro</Title>
            <Description>Completa el formulario para registrarte</Description>

            <FormRow>
                <HalfWidth>
                    <FormField<IRequestRegisterUsersDto>
                        label="Nombre de Usuario"
                        name="name"
                        control={control}
                        type="text"
                        error={errors.name}
                        placeholder="Ingrese su nombre de usuario"
                    />
                </HalfWidth>

                <HalfWidth>
                    <FormField<IRequestRegisterUsersDto>
                        label="Correo Electrónico"
                        name="email"
                        control={control}
                        type="email"
                        error={errors.email}
                        placeholder="Ingrese su correo electrónico"
                    />
                </HalfWidth>
            </FormRow>

            <FormRow>
                <HalfWidth>
                    <FormField<IRequestRegisterUsersDto>
                        label="Contraseña"
                        name="password"
                        control={control}
                        type="password"
                        error={errors.password}
                        placeholder="Ingrese su contraseña"
                    />
                </HalfWidth>

                <HalfWidth>
                    <InputSelectField<IRequestRegisterUsersDto>
                        label="Rol"
                        name="role"
                        control={control}
                        options={RoleOptions}
                        error={errors.role}
                        placeholder="Seleccione su rol"
                    />
                </HalfWidth>
            </FormRow>

            <InputSelectFile<IRequestRegisterUsersDto>
                label="Foto de perfil"
                name="photo"
                control={control}
                error={errors.photo}
                accept="image/*"
            />

            <SubmitButton type="submit" label="Registrarse" />
        </FormWrapper>
    );
};

export default RegisterForm;
