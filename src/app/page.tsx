import React from 'react';
import Hero from './components/molecules/Hero';
import Main from './components/molecules/Main';
import Spotlight from './components/molecules/Spotlight';
import Gallery from './components/organisms/Gallery';
import Magazine from './components/organisms/Magazine';
import Upcoming from './components/molecules/Upcoming';
import Seach from './components/molecules/Seach';

const HomePage = () => {
  return (
    <section>
      <Hero />
      <Main />
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
