import React from 'react'

interface BackToHomeProps {
    label: string;
    onClick: () => void;
}

const BackToHome: React.FC<BackToHomeProps> = ({ label, onClick }) => {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
};

export default BackToHome;