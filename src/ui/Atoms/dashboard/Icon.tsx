
import React from 'react';

interface IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name }) => {
  return <i className={`icon-${name} text-indigo-500`} />;
};

export default Icon;
