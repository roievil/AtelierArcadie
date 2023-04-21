import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import imageLogo from '../public/images/arcadieTitreBarreNavigation.png';

const Navbar = (): JSX.Element => {
  const [nav, setNav] = useState(false);
  const [opacity, setOpacity] = useState(0.6);

  const handleNav = (): void => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = (): void => {
      if (window.scrollY >= 90) {
        setOpacity(1);
      } else {
        setOpacity(0.6);
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ opacity: `${opacity}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-black">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <Image
            className="h-auto max-w-full"
            src={imageLogo}
            alt="Logo Atelier Arcadie"
          />
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4">
            <Link href="/coffrets">Coffrets et Présentoirs</Link>
          </li>
          <li className="p-4">
            <Link href="/materiaux">Matériaux et Fabrication</Link>
          </li>
          <li className="p-4">
            <Link href="/arcadie">Arcadie ?</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }>
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500">
              <Link href="/coffrets">Coffrets et Présentoirs</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500">
              <Link href="/materiaux">Matériaux et Fabrication</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500">
              <Link href="/arcadie">Arcadie ?</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
