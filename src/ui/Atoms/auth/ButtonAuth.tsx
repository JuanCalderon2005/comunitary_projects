import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const ButtonAuth = ({
    label,
    type,
    onClick,
    ...props
}:
    ButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            {...props}
        >
            {label}
        </button>
    );
};

export default ButtonAuth;