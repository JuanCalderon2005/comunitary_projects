import TextLabel from '@/ui/Atoms/dashboard/TextLabel';
import React from 'react';

interface IconButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const IconButtonLogout: React.FC<IconButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 text-indigo-600 dark:text-indigo-400 ${className}`}
    >
      <TextLabel text={label} />
    </button>
  );
};

export default IconButtonLogout;
