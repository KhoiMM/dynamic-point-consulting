
import React from 'react';
import ValueCard from './ValueCard';
import type { ValueFrameworkItem } from '../types';

const valueFrameworkData: ValueFrameworkItem[] = [
  {
    id: 'commitment',
    title: 'Commitment',
    description: 'Long-term partnerships to unlock full business potential.',
  },
  {
    id: 'approach',
    title: 'Approach',
    description: 'Holistic due diligence and insight-driven strategy.',
  },
  {
    id: 'success',
    title: 'Success',
    description: 'Measured by transformation, not just financial returns.',
  },
];

const ValueFrameworkSection: React.FC = () => {
  return (
    <section id="value-framework" className="relative py-16 md:py-24 bg-gray-700">
      <div 
        className="absolute inset-0 bg-cover bg-center filter grayscale opacity-30" 
        style={{ backgroundImage: "url('https://picsum.photos/id/431/1920/1080?grayscale')" }}
      ></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-montserrat font-bold text-white mb-3">Our Value Framework</h2>
          <p className="text-xl text-gray-200 font-open-sans">Shaping Long-Term Value Through Smart Advisory</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {valueFrameworkData.map((item) => (
            <ValueCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueFrameworkSection;