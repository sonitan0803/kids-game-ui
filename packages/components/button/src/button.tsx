import React from 'react';
import { buttonStyle } from './button.style';

export type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick} style={buttonStyle}>{label}</button>;
};
