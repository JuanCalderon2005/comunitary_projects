import React from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: string;
  name?: string;
  error?: string;
}

// Styled components
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const StyledInput = styled.input<{ error?: string }>`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ error }) => (error ? "red" : "#d1d5db")};
  border-radius: 0.375rem;
  color: #1f2937;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  
  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ error }) => (error ? "red" : "#000000")};
    opacity: 0.7;
  }
`;

const ErrorMessage = styled.p`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #f87171;
`;

export const Input = ({
  placeholder,
  type = "text",
  name,
  error,
  ...props
}: InputProps) => {
  return (
    <InputWrapper>
      <StyledInput
        type={type}
        name={name}
        placeholder={placeholder}
        error={error}
        {...props}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
};
