
import React from 'react';
import WorkWithGroup from './WorkWithGroup';
import type { WorkWithCategory } from '../types';
import { UserGroupIcon, LightBulbIcon, ChartBarIcon, ShieldCheckIcon } from './icons'; // Assuming general icons for founders/investors

const weWorkWithData: WorkWithCategory[] = [
  {
    id: 'founders',
    title: 'Founders',
    icon: <UserGroupIcon />,
    intro: 'Providing professional capital raising and M&A financial advisory services with our in-depth industry know-how, investor coverage, and extensive experience in deal execution.',
    subSections: [
      {
        heading: 'Capital Raising',
        points: [
          'Financial Investment: Helping secure growth-stage funding to scale operations',
          'Strategic Investment: Identifying and onboarding strategic partners to support regional/global expansion',
        ],
      },
      {
        heading: 'M&A',
        points: [
          'Supporting the company’s growth through product, market, or geographic expansion via buy-side and sell-side advisory',
        ],
      },
    ],
  },
  {
    id: 'investors',
    title: 'Investors',
    icon: <ChartBarIcon />,
    intro: 'We offer strategic support to investors and their portfolio companies, leveraging our industry insight and transaction experience to maximize value.',
    subSections: [
      {
        heading: 'Deal Sourcing',
        points: ['Identifying promising investment opportunities in emerging Asian markets'],
      },
      {
        heading: 'Portfolio Management',
        points: ['Supporting continuous portfolio growth via capital raising and M&A advisory'],
      },
      {
        heading: 'Exit',
        points: ['Facilitating secondary share sales and M&A exits to help achieve fund-level returns'],
      },
    ],
  },
];

const WeWorkWithSection: React.FC = () => {
  return (
    <section id="we-work-with" className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-montserrat font-bold text-navy-blue mb-4">We Work With</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">Tailored financial strategies for visionary founders and discerning investors to navigate complex markets and achieve exceptional outcomes.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          {weWorkWithData.map((category) => (
            <WorkWithGroup key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeWorkWithSection;