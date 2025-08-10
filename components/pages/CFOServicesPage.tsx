
import React from 'react';

const CFOServicesPage: React.FC = () => {
  const pillars = [
    {
      title: "1. Financial Planning & Capital Management",
      points: [
        "Develop annual financial plans and budgets.",
        "Monitor and manage cash flow.",
        "Ensure sufficient capital for operations, investment, and expansion.",
        "Manage relationships with banks, investors, and funds."
      ]
    },
    {
      title: "2. Financial Reporting & Analysis",
      points: [
        "Lead monthly, quarterly, and annual financial reporting.",
        "Analyze business performance (P&L, ROI, EBITDA, etc.).",
        "Identify financial risks and provide early warnings of unfavorable trends."
      ]
    },
    {
      title: "3. Cost & Performance Management",
      points: [
        "Evaluate operational costs and recommend improvements.",
        "Supervise departmental budget adherence.",
        "Analyze margins and profitability for pricing optimization."
      ]
    },
    {
      title: "4. Accounting & Tax Systems",
      points: [
        "Implement or upgrade accounting software and reporting systems.",
        "Set up internal audit and control processes."
      ]
    },
    {
      title: "5. Policy & Compensation Structure",
      points: [
        "Design effective compensation and incentive schemes.",
        "Develop KPI-linked performance appraisal and cost transparency policies."
      ]
    },
    {
      title: "6. Working Capital & Procurement Optimization",
      points: [
        "Build purchasing and sales policies for optimal cash flow.",
        "Establish regular monitoring and reporting of working capital.",
        "Review and approve credit, payment terms, and discount schemes."
      ]
    },
    {
      title: "7. Compliance & Risk Management",
      points: [
        "Ensure tax, accounting, and legal compliance.",
        "Liaise with tax authorities, external auditors, and legal consultants."
      ]
    },
    {
      title: "8. Internal Controls & Governance",
      points: [
        "Design and implement corporate governance frameworks.",
        "Align interests between management and shareholders."
      ]
    }
  ];

  return (
    <section id="cfo-service-detail" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <a href="#services" className="text-navy-blue hover:text-burnt-orange font-montserrat font-semibold transition-colors duration-300">
            &larr; Back to Our Services
          </a>
        </div>

        <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-navy-blue mb-6 text-center">
          CFO Services
        </h1>
        <p className="text-lg text-gray-700 font-open-sans mb-12 max-w-3xl mx-auto text-center">
          Our <strong>CFO Subscription – Full Scope</strong> offering provides a comprehensive 8-pillar framework designed to optimize financial performance, ensure compliance, and support strategic growth. This full-scope service includes:
        </p>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-light-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-montserrat font-bold text-burnt-orange mb-4">{pillar.title}</h3>
              <ul className="space-y-2">
                {pillar.points.map((point, pIndex) => (
                  <li key={pIndex} className="flex items-start text-gray-700 font-open-sans">
                    <span className="text-burnt-orange mr-2 mt-1 flex-shrink-0">&#x1F539;</span> {/* Unicode for 🔹 */}
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CFOServicesPage;
