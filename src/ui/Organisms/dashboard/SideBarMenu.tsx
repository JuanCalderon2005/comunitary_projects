'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaFolderOpen } from 'react-icons/fa';
import { signOut } from 'next-auth/react';
import MenuItem from '@/ui/Atoms/dashboard/MenuItem';
import IconButtonLogout from '@/ui/Molecules/dashboard/ButtonLogout';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  height: 100vh;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    color: #6366f1;
  } 
`;

const TopSection = styled.div`
  width: 100%;
  margin-top: 2rem;
  
`;

const Title = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  color: inherit;
  margin-bottom: 1.5rem;
`;

const MenuList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

const LogoutButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
`;

const SideBarMenu: React.FC = () => {
  const pathname = usePathname();

  const menuItems = [
    { icon: <FaFolderOpen />, label: 'Proyectos', href: '/projects' }
  ];

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <SidebarContainer>
      <TopSection>
        <Title>VolunteerConenect</Title>
        <MenuList>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              label={item.label}
              href={item.href}
              isActive={pathname === item.href}
            />
          ))}
        </MenuList>
      </TopSection>
      <LogoutButtonContainer>
        <IconButtonLogout label="Logout" onClick={handleLogout} />
      </LogoutButtonContainer>
    </SidebarContainer>
  );
};

export default SideBarMenu;
