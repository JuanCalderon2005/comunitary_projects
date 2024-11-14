"use client";

import { Control, Controller, FieldError, FieldValues, Path } from 'react-hook-form';
import styled from 'styled-components';

interface IPropsSelectFile<T extends FieldValues> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  error?: FieldError;
  id?: string;
  accept?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: black;
  margin-bottom: 8px;
`;

const InputWrapper = styled.div<{ hasError: boolean }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 2px solid ${({ hasError }) => (hasError ? '#f87171' : '#e2e8f0')};
  background-color: #f7fafc;
  padding: 10px 12px;
  transition: all 0.2s ease;

  &:hover {
    border-color: Black;
  }
`;

const StyledInput = styled.input`
  font-size: 0.875rem;
  border: none;
  background-color: transparent;
  outline: none;
  width: 100%;
  padding: 8px;
  color: #4a5568;
  ::file-selector-button {
    background-color: black;
    color: white;
    border-radius: 5px;
    padding: 6px 10px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    transition: all 0.2s ease;

    &:hover {
      background-color: #2b6cb0;
    }
  }
`;

const ErrorMessage = styled.p`
  font-size: 0.75rem;
  color: #f87171;
  margin-top: 4px;
`;

const FileInfo = styled.p`
  font-size: 0.75rem;
  color: #718096;
  margin-top: 8px;
`;

export const InputSelectFile = <T extends FieldValues>({
  label,
  name,
  control,
  error,
  id,
  accept,
}: IPropsSelectFile<T>) => {
  return (
    <Container>
      <Label htmlFor={id || label.toLowerCase()}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <InputWrapper hasError={!!error}>
            <StyledInput
              type="file"
              id={id || label.toLowerCase()}
              {...field}
              accept={accept}
            />
          </InputWrapper>
        )}
      />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {accept && !error && <FileInfo>Archivos permitidos: {accept.replace(/\*/g, '').split(',').join(', ')}</FileInfo>}
    </Container>
  );
};
