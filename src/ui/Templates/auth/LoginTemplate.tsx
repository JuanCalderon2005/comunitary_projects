'use client'
import BackToHome from "@/ui/Atoms/auth/BackToHome"
import { LoginForm } from "@/ui/Organisms"
import { useRouter } from "next/navigation"
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackButtonWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
`;


export const LoginTemplate = () => {
    const router = useRouter()
    return (
        <Container>
            <BackButtonWrapper>
                <BackToHome label="Volver al inicio" onClick={() => router.push('/')} />
            </BackButtonWrapper>
            <LoginForm />
        </Container>
    )
}
