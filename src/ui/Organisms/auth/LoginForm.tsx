'use client';
import { ILoginRequest } from "@/app/core/application/dto/auth/request-login.dto";
import { ErrorResponse, FieldError } from "@/app/core/application/dto/common/error-response.dto";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import styled from 'styled-components';
import FormField from "@/ui/Molecules/common/InputField";
import { ForgotPassword } from "@/ui/Atoms/auth/ForgotPassword";

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



const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 40%;
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



const SubmitButton = styled.button`
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
    <FormWrapper onSubmit={handleSubmit(handleLogin)}>
      <Title>Iniciar Sesión</Title>
      <Description>Ingresa tus credenciales para acceder a tu cuenta</Description>

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

      <SubmitButton type="submit">
        Iniciar Sesión
      </SubmitButton>
      <ForgotPassword />
    </FormWrapper>
  );
};
