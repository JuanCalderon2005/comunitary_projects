import PrimaryButtonHeader from '@/ui/Atoms/dashboard/header/PrimaryButton';
import Profile from '@/ui/Atoms/dashboard/header/UserSection';
import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  title: string;
  userImageUrl: string;
  userName: string;
  onDownloadReport: () => void;
  onNewProject: () => void;
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: white;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const HeaderDashboard: React.FC<HeaderProps> = ({
  title,
  userImageUrl,
  userName,
  onDownloadReport,
  onNewProject,
}) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <ButtonGroup>
        <PrimaryButtonHeader onClick={onDownloadReport} label="Descargar Reporte" />
        <PrimaryButtonHeader onClick={onNewProject} label="Nuevo Proyecto" />
      </ButtonGroup>
      <Profile imageUrl={userImageUrl} name={userName} />
    </HeaderContainer>
  );
};

export default HeaderDashboard;