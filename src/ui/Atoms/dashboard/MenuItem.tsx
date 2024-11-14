import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
}

const MenuItemContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  width: 210px;
  transition: background-color 0.2s ease, color 0.2s ease;
  color: ${({ isActive }) => (isActive ? '#1f2937' : '#4b5563')}; /* Texto gris oscuro si está activo, más claro si no */
  
  ${({ isActive }) =>
    isActive
      ? css`
          background-color: #d1d5db; /* Fondo gris claro si está activo */
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        `
      : css`
          background-color: transparent; /* Sin fondo si no está activo */
          box-shadow: none;

          &:hover {
            color: gray; /* Texto color índigo al hacer hover */
          }
        `}
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
