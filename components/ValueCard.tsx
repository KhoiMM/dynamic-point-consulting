
import React from 'react';
import type { ValueFrameworkItem } from '../types';

interface ValueCardProps {
  item: ValueFrameworkItem;
}

const ValueCard: React.FC<ValueCardProps> = ({ item }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl text-center h-full flex flex-col justify-center transform transition-all duration-300 hover:scale-105 hover:bg-white">
      <h3 className="text-2xl font-montserrat font-bold text-navy-blue mb-4">{item.title}</h3>
      <p className="text-gray-700 font-open-sans leading-relaxed">{item.description}</p>
    </div>
  );
};

export default ValueCard;