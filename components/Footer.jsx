import React from 'react';

function Footer() {
  return (
   <footer className="w-full bg-gray-900 text-white md:py-6 mt-8 md:mt-auto">
  <div className="container mx-auto px-4 text-center">
    <p className="text-sm md:text-base">
      © {new Date().getFullYear()} Akhil Kumar · Frontend Developer | React & Tailwind Specialist · Open to Opportunities in 2025
    </p>
    <p className="text-xs mt-1 text-gray-400">
      Building modern, responsive web apps. Let's connect and innovate together!
    </p>
  </div>
</footer>

  );
}

export default Footer;
