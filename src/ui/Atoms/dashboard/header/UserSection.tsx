import React from 'react';
import styled from 'styled-components';

interface ProfileProps {
  imageUrl: string;
  name: string;
}

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileName = styled.span`
  font-weight: 600;
  color: #333;
`;

const Profile: React.FC<ProfileProps> = ({ imageUrl, name }) => {
  return (
    <ProfileContainer>
      <ProfileImage src={imageUrl} alt={name} />
      <ProfileName>{name}</ProfileName>
    </ProfileContainer>
  );
};

export default Profile;
