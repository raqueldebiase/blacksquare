// src/components/organisms/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl">BS</Link>
        <div className="flex space-x-4">
          <Link href="/" className="text-gray-700 hover:text-gray-900">Art Spotlight </Link>
          <Link href="/cart" className="text-gray-700 hover:text-gray-900">Gallery</Link>
          <Link href="/profile" className="text-gray-700 hover:text-gray-900">Magazine</Link>
        </div>
        <p>login</p>
      </div>
    </nav>
  );
};

export default Navbar;
