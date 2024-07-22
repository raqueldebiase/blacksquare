import React from 'react';
import Image from 'next/image';
import ImageCard from '../atoms/ImageCard';
import Upcoming from '../molecules/Upcoming';
import News1 from '../../../../public/magazine/steven-su-kbZkBKrYBAk-unsplash.jpg';
import News2 from '../../../../public/magazine/mcgill-library--xleXxEcvX8-unsplash.jpg';
import News3 from '../../../../public/magazine/boston-public-library-CfeRsl6jVGQ-unsplash.jpg';
import News4 from '../../../../public/magazine/ajeet-mestry-UBhpOIHnazM-unsplash.jpg';

const Magazine = () => {
  const images = [
    { src: News1, title: 'Title 1', description: 'Description 1' },
    { src: News2, title: 'Title 2', description: 'Description 2' },
    { src: News3, title: 'Title 3', description: 'Description 3' },
    { src: News4, title: 'Title 4', description: 'Description 4' },
    // Adicione mais imagens conforme necessário
  ];

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-2xl py-5 mb-4">Magazine</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-96">
          <h2 className="text-lg mb-4">Upcoming</h2>
          <Upcoming />
        </div>
        <div className="h-80">
          <h2 className="text-lg mb-4">Talking about</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div key={index} className="h-48 relative overflow-hidden ">
                <ImageCard
                  src={image.src}
                  title={image.title}
                  description={image.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
