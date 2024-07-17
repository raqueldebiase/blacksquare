'use client';

// src/components/organisms/Navbar.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/BS.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="">
          <Image
            src={logo.src}
            alt="BS"
            width={40}
            height={40}
            
          />
        </Link>
        <div className="hidden md:flex space-x-10">
          <div className="relative group">
            <NavLink href="/#spotlight">
              <span className="relative z-10">Art Spotlight</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-gray-900 transition duration-300"></span>
            </NavLink>
          </div>
          <div className="relative group">
            <NavLink href="/#gallery">
              <span className="relative z-10">Gallery</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-gray-900 transition duration-300"></span>
            </NavLink>
          </div>
          <div className="relative group">
            <NavLink href="/#Magazine">
              <span className="relative z-10">Magazine</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-gray-900 transition duration-300"></span>
            </NavLink>
          </div>
        </div>
        <div className="hidden md:block">
          <Link href="/login" className="p-2 border-transparent hover:border-gray-300 focus:border-gray-300 cursor-pointer">SING IN </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute inset-x-0 top-16 z-50">
          <div className="px-2 py-3 space-y-1">
            <NavLinkMobile href="/#spotlight">Art Spotlight</NavLinkMobile>
            <NavLinkMobile href="/#gallery">Gallery</NavLinkMobile>
            <NavLinkMobile href="/#magazine">Magazine</NavLinkMobile>
            <p className="block py-2 text-gray-700 hover:text-gray-900 transition duration-300">ENTER</p>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} className="text-gray-700 hover:text-gray-900 transition duration-300">
    {children}
  </Link>
);

const NavLinkMobile: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} className="block py-2 text-gray-700 hover:text-gray-900 transition duration-300">
    {children}
  </Link>
);

export default Navbar;
