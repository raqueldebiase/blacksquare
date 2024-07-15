// src/components/molecules/Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <section className="relative custom-hero-bg min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10  h-full">
        <h1 className="text-white text-4xl">Its all about ART.</h1>
        <p className='text-white tracking-wide'>MAKE EVERYTHING AROUND YOU PART OF YOUR INSPIRATION</p>
      </div>
    </section>
  );
};

export default Hero;
