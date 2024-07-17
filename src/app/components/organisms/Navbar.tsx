// src/components/organisms/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/BS.svg';

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="">
        <Image
              src={logo.src}
              alt={logo}
              width={40}
              height={40}
              layout="intrinsic"
              className=""
            />
        </Link>
        <div className="flex space-x-10">
          <div className="relative group">
            <Link href="/#spotlight" className="text-gray-700 transition duration-300">
              <span className="relative z-10">Art Spotlight</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-gray-900 transition duration-300"></span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/#gallery" className="text-gray-700 transition duration-300">
              <span className="relative z-10">Gallery</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-gray-900 transition duration-300"></span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/#magazine" className="text-gray-700 transition duration-300">
              <span className="relative z-10">Magazine</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-gray-900 transition duration-300"></span>
            </Link>
          </div>
        </div>
        <p>login</p>
      </div>
    </nav>
  );
};

export default Navbar;
