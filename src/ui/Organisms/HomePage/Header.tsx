'use client'
import HomePageButton from '@/ui/Atoms/HomePage/Button'
import TitleHeader from '@/ui/Atoms/HomePage/TitleHeader'
import React from 'react'
import styled from 'styled-components'

const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    width: 100%;
`

const ContainerButtons = styled.div`
    display: flex;
    gap: 1rem;
`

const HeaderComponent = () => {
    return (
        <ContainerHeader>
            <TitleHeader />
            <ContainerButtons>
                <HomePageButton label="Inicia Sesion" style={{ padding: '0.5rem 1rem', color: 'black'}} />
                <HomePageButton label="Registrate" style={{ padding: '0.5rem 1rem', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '5px' }} />
            </ContainerButtons>
        </ContainerHeader>
    )
}

export default HeaderComponent
