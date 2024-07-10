// src/components/organisms/Hero.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-96 w-full">
      <div>
        <Image 
          src="/hero.jpeg" 
          alt="Hero Image" 
          layout="fill" 
          objectFit="cover"
          quality={100} 
        />
      </div>
    </section>
  );
};

export default Hero;
