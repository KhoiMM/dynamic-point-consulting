
import React from 'react';
import type { WorkWithCategory, WorkWithSubItem } from '../types';

interface WorkWithGroupProps {
  category: WorkWithCategory;
}

const WorkWithGroup: React.FC<WorkWithGroupProps> = ({ category }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col h-full transition-all duration-300 hover:shadow-navy-blue/20 hover:ring-2 hover:ring-burnt-orange">
      <div className="flex items-center mb-6">
        <div className="text-burnt-orange mr-4">
         {React.cloneElement(category.icon, { className: "w-12 h-12" })}
        </div>
        <h3 className="text-3xl font-montserrat font-bold text-navy-blue">{category.title}</h3>
      </div>
      <p className="text-gray-700 font-open-sans mb-8 leading-relaxed">{category.intro}</p>
      
      {category.subSections.map((section: WorkWithSubItem, index: number) => (
        <div key={index} className="mb-6 last:mb-0">
          <h4 className="text-xl font-montserrat font-bold text-burnt-orange mb-3">{section.heading}</h4>
          <ul className="space-y-2 text-gray-600 font-open-sans">
            {section.points.map((point, pointIndex) => (
              <li key={pointIndex} className="flex items-start">
                <svg className="w-4 h-4 text-navy-blue mr-3 flex-shrink-0 mt-1.5" fill="currentColor" viewBox="0 0 20 20" >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkWithGroup;