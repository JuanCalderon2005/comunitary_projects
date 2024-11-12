import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
}

const HomePageButton = ({
    label,
    onClick,
    type = 'button',
    ...props
}: ButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            {...props}
        >
            {label}
        </button>
    )
}

export default HomePageButton