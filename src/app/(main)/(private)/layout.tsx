'use client';
import AuthGuard from './guard/AuthGuard';
import SideBarMenu from '@/ui/Organisms/dashboard/SideBarMenu';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const SidebarWrapper = styled.div`
  width: auto;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #f9f9f9;
`;

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthGuard>
            <LayoutContainer>
                <SidebarWrapper>
                    <SideBarMenu />
                </SidebarWrapper>
                <ContentWrapper>
                    {children}
                </ContentWrapper>
            </LayoutContainer>
        </AuthGuard>
    );
}
