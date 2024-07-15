// src/pages/index.tsx
import React from 'react';
import Hero from './components/molecules/Hero';
import Presentation from './components/molecules/Presentation';
import Spotlight from './components/molecules/Spotlight';
import Gallery from './components/organisms/Gallery';
import Magazine from './components/organisms/Magazine';
import Upcoming from './components/molecules/Upcoming';
import Seach from './components/molecules/Seach';

const HomePage = () => {
  return (
    <section>
      <Hero />
      <section className='bg-presentation'>
        <Presentation />
      </section>
      <Spotlight />
      <Gallery />
      <section className='flex'>
        <Magazine />
        <Upcoming />
      </section>
      <Seach />
    </section>
  );
};

export default HomePage;
