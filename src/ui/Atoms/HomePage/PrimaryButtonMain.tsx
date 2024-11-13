import styled from 'styled-components';

const PrimaryButtonMain = styled.button`
  padding: 0.5rem 1rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

export default PrimaryButtonMain;