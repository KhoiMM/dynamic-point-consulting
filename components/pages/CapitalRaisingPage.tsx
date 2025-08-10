
import React from 'react';

const CapitalRaisingPage: React.FC = () => {
  const phases = [
    {
      title: "1. Preparation & Strategy",
      points: [
        "Refine business plan and financial model for investor scrutiny.",
        "Conduct in-depth valuation analysis and strategic positioning.",
        "Develop compelling investor presentations and marketing materials.",
        "Establish a virtual data room (VDR) for due diligence."
      ]
    },
    {
      title: "2. Investor Outreach & Roadshow",
      points: [
        "Identify and target a curated list of VCs, PEs, and strategic investors.",
        "Manage systematic outreach campaigns and investor communication.",
        "Coordinate and prepare leadership for investor roadshows and meetings.",
        "Gather and analyze investor feedback to refine the approach."
      ]
    },
    {
      title: "3. Due Diligence & Term Sheet",
      points: [
        "Facilitate and manage the entire due diligence process.",
        "Lead negotiation of term sheets to secure favorable terms.",
        "Analyze complex financing structures and their implications.",
        "Advise on syndicate formation and co-investor relations."
      ]
    },
    {
      title: "4. Closing & Post-Investment Support",
      points: [
        "Coordinate with legal counsel to finalize definitive agreements.",
        "Manage the closing process to ensure a timely and efficient transaction.",
        "Provide strategic guidance on post-investment stakeholder management.",
        "Assist in planning for future funding rounds and long-term capital strategy."
      ]
    }
  ];

  return (
    <section id="capital-raising-detail" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <a href="#services" className="text-navy-blue hover:text-burnt-orange font-montserrat font-semibold transition-colors duration-300">
            &larr; Back to Our Services
          </a>
        </div>

        <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-navy-blue mb-6 text-center">
          Capital Raising Advisory
        </h1>
        <p className="text-lg text-gray-700 font-open-sans mb-12 max-w-3xl mx-auto text-center">
          We specialize in guiding companies through the complex landscape of capital raising. Our end-to-end advisory services are designed to prepare your business for investment, connect you with the right partners, and structure deals that fuel sustainable growth.
        </p>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8 max-w-5xl mx-auto">
          {phases.map((phase, index) => (
            <div key={index} className="bg-light-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-montserrat font-bold text-burnt-orange mb-4">{phase.title}</h3>
              <ul className="space-y-2">
                {phase.points.map((point, pIndex) => (
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

export default CapitalRaisingPage;
