'use client';
import ButtonCompontet from '@/ui/Atoms/HomePage/Button';
import PrimaryButtonMain from '@/ui/Atoms/HomePage/PrimaryButtonMain';
import SecondaryButtonMain from '@/ui/Atoms/HomePage/SecundaryButtonMain';
import Subtitle from '@/ui/Atoms/HomePage/SubtitleMain';
import Title from '@/ui/Atoms/HomePage/TilteMain';
import React from 'react';
import styled from 'styled-components';

const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  height: 85vh;
`;

const MainHome = () => {
  return (
    <ContainerMain>
      <Title>Conecta, Colabora, Cambia el Mundo</Title>
      <Subtitle>Únete a nuestra comunidad de voluntarios y organizadores. Encuentra proyectos que te apasionen o crea los tuyos propios para hacer una diferencia en tu comunidad.</Subtitle>
      <ContainerButtons>
        <PrimaryButtonMain as={ButtonCompontet} label="Explorar Proyectos" />
        <SecondaryButtonMain as={ButtonCompontet} label="Comenzar como organizador" />
      </ContainerButtons>
    </ContainerMain>
  );
};

export default MainHome;