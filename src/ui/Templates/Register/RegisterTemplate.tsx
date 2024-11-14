'use client';
import BackToHome from '@/ui/Atoms/auth/BackToHome';
import RegisterForm from '@/ui/Organisms/auth/RegisterForm';
import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const FormWrapper = styled.div`
  position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
`;

export default function RegisterTemplate() {
  const router = useRouter();
  return (
    <Container>
      <FormWrapper>
        <BackToHome label="Volver al inicio" onClick={
          () => {
            router.push('/');
          }
        } />
      </FormWrapper>
        <RegisterForm />
    </Container>
  );
}
