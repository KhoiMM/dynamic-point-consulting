
import React from 'react';
import ServiceCard from './ServiceCard';
import type { ServiceItem } from '../types';
import { BriefcaseIcon, TrendingUpIcon } from './icons';

const servicesData: ServiceItem[] = [
  {
    id: 'cfo-services',
    title: 'CFO Services',
    description: 'Expert financial leadership and strategic support tailored to your business operations and long-term planning.',
    icon: <BriefcaseIcon />,
    path: '#/services/cfo', // Placeholder path for CFO services detail page
  },
  {
    id: 'capital-raising',
    title: 'Capital Raising',
    description: 'Guiding your company through equity, debt, and strategic fundraising processes to secure essential growth capital.',
    icon: <TrendingUpIcon />,
    path: '#/services/capital-raising', // Placeholder path for Capital Raising detail page
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-navy-blue mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">We provide comprehensive financial advisory to steer your business towards sustainable success.</p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} item={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;