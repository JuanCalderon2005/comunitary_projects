'use client';
import HeaderDashboard from '@/ui/Organisms/dashboard/HeaderMain';
import AuthGuard from './guard/AuthGuard';
import SideBarMenu from '@/ui/Organisms/dashboard/SideBarMenu';
import styled from 'styled-components';
import { useSession } from 'next-auth/react';

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const SidebarWrapper = styled.div`
  width: 20%;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  background-color: #f9f9f9;
`;

export default function PrivateLayout({ children }: { children: React.ReactNode }) {

    const session = useSession();

    console.log('session', session);

    return (
        <AuthGuard>
            <LayoutContainer>
                <SidebarWrapper>
                    <SideBarMenu />
                </SidebarWrapper>
                <ContentWrapper>
                    <HeaderDashboard
                        title="Dashboard"
                        userName={session?.data?.user?.email ?? 'Guest'}
                        userImageUrl={session?.data?.user?.photo ?? ''}
                        onDownloadReport={() => console.log('Download Report')}
                        onNewProject={() => console.log('New Project')}
                    />
                    {children}
                </ContentWrapper>
            </LayoutContainer>
        </AuthGuard>
    );
}
