'use client'
import React from 'react';
import PrimaryButton from '@/ui/Atoms/HomePage/PrimaryButton';
import SecondaryButton from '@/ui/Atoms/HomePage/SecondaryButton';
import TitleHeader from '@/ui/Atoms/HomePage/TitleHeader';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 15vh;
  width: 100%;
`;

const ContainerButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const HeaderComponent = () => {
  const router = useRouter();
  return (
    <ContainerHeader>
      <TitleHeader />
      <ContainerButtons>
        <SecondaryButton
          label="Iniciar sesión"
          onClick={() => router.push('/login')} 
        />
        <PrimaryButton 
          label="Registrarse"
          onClick={() => router.push('/register')}
        />
      </ContainerButtons>
    </ContainerHeader>
  );
};

export default HeaderComponent;