'use client'
import HeaderComponent from '@/ui/Organisms/HomePage/Header'
import MainHome from '@/ui/Organisms/HomePage/MainHome'
import React from 'react'

export const HomePageTeplate = () => {
  return (
    <>
      <HeaderComponent />
      <div className="flex-grow flex items-center justify-center">
        <MainHome />
      </div>
    </>
  )
}