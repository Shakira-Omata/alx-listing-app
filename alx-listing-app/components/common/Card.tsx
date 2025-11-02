import React from 'react';
import { CardProps } from '@/interfaces';
import { CURRENCY_SYMBOL } from '@/constants';

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  price,
  rating,
  location,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        
        {location && (
          <p className="text-sm text-gray-500 mb-2">{location}</p>
        )}
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {description}
        </p>
        
        <div className="flex justify-between items-center">
          {price && (
            <span className="text-lg font-bold text-blue-600">
              {CURRENCY_SYMBOL}{price}
              <span className="text-sm text-gray-500"> / night</span>
            </span>
          )}
          
          {rating && (
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-sm font-medium text-gray-700">{rating}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;