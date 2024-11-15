import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
}

const MenuItemContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Alinea a la izquierda */
  gap: 0.75rem;
  cursor: pointer;
  width: 100%; /* Ocupa todo el ancho disponible */
  background-color: ${({ isActive }) => (isActive ? '#d1d5db' : 'transparent')};
  padding: 0.5rem;
  transition: background-color 0.3s ease;
`;

const IconContainer = styled.span`
  font-size: 1.25rem;
`;

const Label = styled.span`
  font-weight: 500;
`;

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, href, isActive }) => {
  return (
    <Link href={href} passHref>
      <MenuItemContainer isActive={isActive}>
        <IconContainer>{icon}</IconContainer>
        <Label>{label}</Label>
      </MenuItemContainer>
    </Link>
  );
};

export default MenuItem;
