import React from 'react';

function Footer() {
  return (
    <footer className="w-full  bg-gray-900 text-white md:py-6   md:mt-auto ">
      <div className="container  mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Akhil's Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
