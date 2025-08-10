
import React from 'react';
import type { ServiceItem } from '../types';

interface ServiceCardProps {
  item: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  return (
    <a
      href={item.path}
      className="block bg-white p-8 rounded-xl shadow-2xl flex flex-col h-full transition-all duration-300 hover:shadow-burnt-orange/30 hover:scale-105 no-underline group"
      aria-label={`Learn more about ${item.title}`}
    >
      <div className="mb-6 text-burnt-orange flex justify-center transform transition-transform duration-300 group-hover:scale-110">
        {React.cloneElement(item.icon, { className: "w-16 h-16" })}
      </div>
      <h3 className="text-2xl font-montserrat font-bold text-navy-blue mb-4 text-center">{item.title}</h3>
      <p className="text-gray-600 font-open-sans text-center flex-grow">{item.description}</p>
      {/* Remove detailed list as per new structure */}
      {/* <ul className="space-y-2 text-sm text-gray-700 font-open-sans">
        {item.details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-burnt-orange mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            {detail}
          </li>
        ))}
      </ul> */}
       <div className="mt-6 text-center">
        <span className="text-burnt-orange font-montserrat font-semibold group-hover:underline">
          Learn More &rarr;
        </span>
      </div>
    </a>
  );
};

export default ServiceCard;