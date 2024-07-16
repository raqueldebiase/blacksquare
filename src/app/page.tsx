import React from 'react';
import Hero from './components/molecules/Hero';
import Presentation from './components/molecules/Presentation';
import Spotlight from './components/organisms/Spotlight';
import Gallery from './components/organisms/Gallery';
import Magazine from './components/organisms/Magazine';
import Upcoming from './components/molecules/Upcoming';
import Search from './components/organisms/Search';
import '../app/globals.css';

const HomePage = () => {
  return (
    <section>
      <Hero />
      <section className='bg-presentation'>
        <Presentation />
      </section>
      <Spotlight />
      <Gallery />
      <Magazine />
      <section className='bg-search'>
        <Search />
      </section>
    </section>
  );
};

export default HomePage;
