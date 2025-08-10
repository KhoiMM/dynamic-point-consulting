import React from "react";

const LandingSection: React.FC = () => {
  return (
    <section
      id="landing"
      className="relative h-[calc(100vh-64px)] min-h-[600px] flex items-center justify-center text-white text-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('https://picsum.photos/id/1018/1600/900')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-6 max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 leading-tight">
          Financial Advisory
        </h2>
        <p className="text-lg md:text-xl font-open-sans mb-8 leading-relaxed">
          Dynamic Point Consulting is a strategic financial advisory firm
          dedicated to supporting business leaders and investors across Asia in
          unlocking sustainable growth through capital raising, mergers &
          acquisitions, and value-focused partnerships.
        </p>
      </div>
    </section>
  );
};

export default LandingSection;
