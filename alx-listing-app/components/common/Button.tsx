import React from 'react';
import { ButtonProps } from '@/interfaces';
import { BUTTON_VARIANTS, BUTTON_SIZES } from '@/constants';

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
}) => {
  const variantClass = BUTTON_VARIANTS[variant];
  const sizeClass = BUTTON_SIZES[size];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-lg font-medium transition-all duration-200 ${variantClass} ${sizeClass} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      } ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;