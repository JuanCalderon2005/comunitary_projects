import React from "react";

interface TextLabelProps {
  text: string;
}

const TextLabel: React.FC<TextLabelProps> = ({ text }) => {
  return <span>{text}</span>;
};

export default TextLabel;