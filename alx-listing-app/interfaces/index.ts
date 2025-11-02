// Define reusable TypeScript interfaces for the project

export interface CardProps {
  title: string;
  description: string;
  image: string;
  price?: number;
  rating?: number;
  location?: string;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
}