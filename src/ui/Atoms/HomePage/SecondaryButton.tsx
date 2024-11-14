import React from 'react';
import styled from 'styled-components';

interface SecondaryButtonProps {
  label: string;
  onClick: () => void;
}

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  color: black;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  outline: none;
`;

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default SecondaryButton;