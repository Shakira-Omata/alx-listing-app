// Define reusable constants for the project

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

export const SITE_NAME = 'ALX Listing App';

export const CURRENCY_SYMBOL = '$';

export const DEFAULT_IMAGE = '/assets/placeholder.png';

export const BUTTON_VARIANTS = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700',
  outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
};

export const BUTTON_SIZES = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};