// src/pages/index.tsx (ou HomePage.tsx)
import React from 'react';
import Hero from './components/molecules/Hero';
import Presentation from './components/molecules/Presentation';
import Spotlight from './components/organisms/Spotlight';
import Gallery from './components/organisms/Gallery';
import Magazine from './components/organisms/Magazine';
import Upcoming from './components/molecules/Upcoming';
import Search from './components/organisms/Search';
import '../styles/globals.css';
import { AuthProvider } from '@/context/AuthContext';

const HomePage = () => {
  return (
    <AuthProvider>
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
    </AuthProvider>
    
  );
};

export default HomePage;
