
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-blue text-white py-8 text-center">
      <div className="container mx-auto px-6">
        <p className="font-open-sans text-sm">
          &copy; {new Date().getFullYear()} Dynamic Point Consulting. All rights reserved.
        </p>
        <p className="font-open-sans text-xs mt-2">
          Strategic Financial Advisory for Asia's Growth Leaders.
        </p>
      </div>
    </footer>
  );
};

export default Footer;