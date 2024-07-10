// src/components/organisms/Hero.tsx
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      <div className="absolute inset-0">
        <Image 
          src="/hero.jpeg" 
          alt="Hero Image" 
          layout="fill" 
          objectFit="cover"
          quality={100} 
        />
      </div>
      <div className="absolute inset-0 flex flex-wrap items-center justify-center items-center gap-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">It's all about art</h1>
        <p className='text-white'>MAKE EVERYTHING AROUND YOU PART OF YOUR INSPIRATION</p>
      </div>
    </section>
  );
};

export default Hero;
