"use client";
import { ILoginRequest } from "@/app/core/application/dto/auth/request-login.dto";
import {
  ErrorResponse,
  FieldError
} from "@/app/core/application/dto/common/error-response.dto";
import { FormField } from "@/ui/Molecules/common/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("El correo es inválido")
    .required("El correo es obligatorio"),
  password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("La contraseña es obligatoria"),
});

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ILoginRequest>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const router = useRouter();
  const handleLogin = async (data: ILoginRequest) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.error) {
        handleError(JSON.parse(result.error));
        return;
      }
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const handleError = (error: unknown) => {
    const erroData = error as ErrorResponse;
    if (erroData && erroData.errors) {
      if (Array.isArray(erroData.errors) && "field" in erroData.errors[0]) {
        erroData.errors.forEach((fieldError) => {
          const { field, error } = fieldError as FieldError;
          setError(field as keyof ILoginRequest, {
            message: error,
          });
        });
      } else {
        if ("message" in erroData.errors[0]) {
          setError("email", {
            message: erroData.errors[0].message,
          });
        }
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      <form
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm"
        onSubmit={handleSubmit(handleLogin)}
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Iniciar Sesión
        </h2>

        <FormField<ILoginRequest>
          control={control}
          type="email"
          label="Correo Electrónico"
          name="email"
          error={errors.email}
          placeholder="Ingresa tu correo"
        />

        <FormField<ILoginRequest>
          control={control}
          type="password"
          label="Contraseña"
          name="password"
          error={errors.password}
          placeholder="Ingresa tu contraseña"
        />
        
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};
