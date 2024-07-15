// src/components/organisms/Hero.tsx
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      <div className="absolute inset-0 top-0">
        {/* Imagem para desktop */}
      <div className="absolute inset-0 hidden md:block">
      <Image
          src="/hero.jpeg"
          alt="Hero Image for Desktop"
          width={1000}
          height={760}
          className="w-full h-auto"
          quality={100}
        />
      </div>
      {/* Imagem para mobile */}
      <div className="block md:hidden">
        <Image
          src="/hero.jpeg"
          alt="Hero Image for Mobile"
          width={560}
          height={620}
          className="w-full h-auto"
          quality={100}
        />
      </div>
      </div>
      
    </section>
  );
};

export default Hero;
