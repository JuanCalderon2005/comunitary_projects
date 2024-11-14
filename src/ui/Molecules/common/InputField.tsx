'use client';

import { Input } from "@/ui/Atoms/auth/InputAuth";
import { Control, Controller, FieldError, FieldValues, Path } from 'react-hook-form';
import styled from 'styled-components';

interface IPropsFormField<T extends FieldValues> {
  label: string;
  type: string;
  name: Path<T>;
  control: Control<T>;
  error?: FieldError;
  id?: string;
  placeholder?: string;
}

// Styled components
const FieldWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: black;
  margin-bottom: 0.25rem;
`;

const FormField = <T extends FieldValues>({
  label,
  type,
  name,
  control,
  error,
  id,
  placeholder,
}: IPropsFormField<T>) => {
  return (
    <FieldWrapper>
      <Label htmlFor={id || label.toLowerCase()}>
        {label}
      </Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            id={id || label.toLowerCase()}
            type={type}
            error={error?.message}
            placeholder={placeholder || `Ingrese su ${label.toLowerCase()}`}
            {...field}
          />
        )}
      />
    </FieldWrapper>
  );
};

export default FormField;
