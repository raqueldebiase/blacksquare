'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Image1 from '../../../../public/spotlight/meninaSemBrinco.jpeg';
import Image2 from '../../../../public/gallery/atemporal.png';
import Image3 from '../../../../public/gallery/um-retrato-contemporaneo-renascentista-de-um-menin-64GPSNHXR8CQNjvJGah5Ug-GiwfX1tBQC2tL2cpWGxLuA.png';
import Image4 from '../../../../public/gallery/latinos.png';
import Image5 from '../../../../public/gallery/a-captivating-pontilismo-painting-that-vividly-por-0fu9K2BsTKm8jIXUNZztZA-ehyxQo9JQ5qzNXSX2nQGuw.png';
import Image6 from '../../../../public/gallery/midsummer.png';
import Image7 from '../../../../public/gallery/a-minimalistic-image-of-group-of-people-sitting-on-q1QeuLmbQnq0iP53P2buuA-33AI6c0rRq6qnm_q8vfiGg.png';
import Image8 from '../../../../public/gallery/psico.png';
import Image9 from '../../../../public/gallery/a-vivid-and-thought-provoking-cubist-style-paintin-iPHFCQ-wSeWh9cfUv5F9gw-qdyYb3KwQDKptU8a4Vk5RA.png';
import Image10 from '../../../../public/gallery/renascence.png';
import Image11 from '../../../../public/gallery/retratoModerno.png';
import Image12 from '../../../../public/gallery/crie-uma-cena-seguindo-o-estilo-artistico-de-picas-k-UJs_vMSqSkqYnmDwmivw-HH5pwZSoQoum8wWt1CY6OA.png';
import Image13 from '../../../../public/gallery/tessla.png';
import Image14 from '../../../../public/spotlight/2.jpeg';

const initialImages = [
  { src: Image1, title: 'Title 1', description: 'Description 1' },
  { src: Image2, title: 'Title 2', description: 'Description 2' },
  { src: Image3, title: 'Title 3', description: 'Description 3' },
  
  { src: Image5, title: 'Title 5', description: 'Description 5' },
  { src: Image12, title: 'Title 12', description: 'Description 12' },
  { src: Image14, title: 'Title 12', description: 'Description 12' },
  { src: Image4, title: 'Title 4', description: 'Description 4' },

  
];
const moreImages = [
  { src: Image6, title: 'Title 6', description: 'Description 6' },
  { src: Image7, title: 'Title 7', description: 'Description 7' },
  { src: Image8, title: 'Title 8', description: 'Description 8' },
  { src: Image9, title: 'Title 9', description: 'Description 9' },
  { src: Image10, title: 'Title 10', description: 'Description 10' },
  { src: Image11, title: 'Title 11', description: 'Description 11' },
  { src: Image13, title: 'Title 13', description: 'Description 13' },
];

const Gallery = () => {
  const [images, setImages] = useState(initialImages);
  const [showButton, setShowButton] = useState(true);

  const loadMoreImages = () => {
    setImages((prevImages) => [...prevImages, ...moreImages]);
    setShowButton(false); // Desativa o botão após carregar as imagens
  };

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h2 className="text-2xl py-5 mb-4">Gallery</h2>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((image, index) => (
          <div key={index} className="relative break-inside-avoid group overflow-hidden">
            <Image
              src={image.src.src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md"
              style={{ objectFit: 'cover' }}
              width={image.src.width}
              height={image.src.height}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
              <h3 className="text-lg font-semibold">{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      {showButton && (
        <div className="flex justify-center mt-6">
          <button
            className="mt-4 px-4 py-2 bg-black bg-opacity-50 text-white rounded hover:bg-opacity-90"
            onClick={loadMoreImages}
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
