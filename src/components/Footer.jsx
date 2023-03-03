import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 container mx-auto text-center p-10 text-sm text-teal-600 ">
      <p>&copy; {new Date().getFullYear()} DO!IT App. All rights reserved</p>
    </footer>
  );
};

export default Footer;
