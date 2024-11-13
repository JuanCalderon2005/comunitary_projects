import React from 'react'

interface ButtonCompontetProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    label?: string
    onClick?: () => void
}

const ButtonCompontet = ({
    className,
    label,
    onClick,
    ...props
}: ButtonCompontetProps) => {
    return (
        <button
            className={className}
            onClick={onClick}
            {...props}
        >
            {label}
        </button>
    )
}

export default ButtonCompontet