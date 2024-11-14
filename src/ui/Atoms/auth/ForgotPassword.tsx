import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

interface ForgotPasswordProps {
  className?: string;
}

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
  font-size: 0.875rem;
`;

const LinkContainerRegister = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;
  margin-top: 1rem;
  font-size: 0.875rem;
`;

const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4f46e5;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #4338ca;
  }
`;

export const ForgotPassword = ({ className }: ForgotPasswordProps) => {
  const router = useRouter();

  const handleForgotPassword = () => {
    console.log("/forgot-password");
  };

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <div className={className}>
      <LinkContainer>
        <StyledLink onClick={handleForgotPassword}>¿Olvidaste tu contraseña?</StyledLink>
        <LinkContainerRegister>
          <p>¿No tienes cuenta? </p><StyledLink onClick={handleRegister}>Regístrate aquí</StyledLink>
        </LinkContainerRegister>
      </LinkContainer>
    </div>
  );
};
