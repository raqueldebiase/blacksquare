// src/app/page.tsx
import React from 'react';
import Hero from './app/components/molecules/Hero';
import Presentation from './app/components/molecules/Presentation';
import Spotlight from './app/components/organisms/Spotlight';
import Gallery from './app/components/organisms/Gallery';
import Magazine from './app/components/organisms/Magazine';
import Upcoming from './app/components/molecules/Upcoming';
import Search from './app/components/organisms/Search';
import './styles/globals.css';

const HomePage = () => {
  return (
    <section>
      <Hero />
      <section id="presentation" className='bg-presentation'>
        <Presentation />
      </section>
      <section id='spotlight'>
        <Spotlight />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="magazine">
        <Magazine />
      </section>
      <section className='bg-search'>
        <Search />
      </section>
    </section>
  );
};

export default HomePage;
