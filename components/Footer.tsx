import React from 'react';
import { format } from 'date-fns';

const Footer = (): JSX.Element => {
  const currentYear = format(new Date(), 'yyyy');
  return (
    <footer className="bg-black py-4 px-6 flex items-center justify-center w-full">
      <p className="text-center text-white">
        Copyright © {currentYear} Arcadie. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
