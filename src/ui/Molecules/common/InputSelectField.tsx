"use client"

import { Control, Controller, FieldError, FieldValues, Path } from 'react-hook-form'
import styled from 'styled-components'

interface IPropsSelectField<T extends FieldValues> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  options: { label: string; value: string }[];
  error?: FieldError;
  id?: string;
  placeholder?: string;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: black;
  margin-bottom: 0.25rem;
`;

const Select = styled.select<{ hasError?: boolean }>`
  border: 1px solid ${({ hasError }) => (hasError ? '#F87171' : '#D1D5DB')};
  border-radius: 0.375rem;
  padding: 0.5rem;
  font-size: 0.875rem;
  outline: none;
  &:focus {
    border-color: #6366F1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.5);
  }
`;

const ErrorMessage = styled.span`
  font-size: 0.75rem;
  color: #F87171;
  margin-top: 0.25rem;
`;

export const InputSelectField = <T extends FieldValues>({
  label,
  name,
  control,
  options,
  error,
  id,
  placeholder,
}: IPropsSelectField<T>) => {
  return (
    <Container>
      <Label htmlFor={id || label.toLowerCase()}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            id={id || label.toLowerCase()}
            {...field}
            hasError={!!error}
          >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        )}
      />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Container>
  );
};
