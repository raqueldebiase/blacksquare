'use client';

import React, { useState, useEffect } from 'react';
import Image1 from '../../../../public/1.jpeg';
import Image2 from '../../../../public/2.jpeg';
import Image3 from '../../../../public/meninaSemBrinco.jpeg';

const Spotlight = () => {
  // Convertendo as imagens importadas em URLs válidas
  const imageUrl1 = Image1.src;
  const imageUrl2 = Image2.src;
  const imageUrl3 = Image3.src;

  // Array com as informações das imagens
  const imageInfos = [
    {
      url: imageUrl1,
      title: 'Obra 1',
      description: 'Descrição da Obra 1'
    },
    {
      url: imageUrl2,
      title: 'Obra 2',
      description: 'Descrição da Obra 2'
    },
    {
      url: imageUrl3,
      title: 'Obra 3',
      description: 'Descrição da Obra 3'
    }
  ];

  // Estado para controlar o índice da imagem ativa
  const [activeIndex, setActiveIndex] = useState(0);

  // Função para avançar para a próxima imagem
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % imageInfos.length);
  };

  // Função para retroceder para a imagem anterior
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + imageInfos.length) % imageInfos.length);
  };

  // Efeito para avançar automaticamente entre os slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % imageInfos.length);
    }, 5000); // Intervalo de 5 segundos (5000 milissegundos)

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div className="relative overflow-hidden h-screen">
      <div className="absolute inset-0 flex">
        {imageInfos.map((imageInfo, index) => (
          <div
            key={index}
            className={`w-full h-full bg-cover bg-center absolute top-0 left-0 transition-opacity duration-500 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${imageInfo.url})` }}
          >
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded">
              <h2 className="text-2xl font-bold">{imageInfo.title}</h2>
              <p>{imageInfo.description}</p>
              <button className="mt-4 px-4 py-2 bg-black bg-opacity-50 text-white rounded hover:bg-opacity-90">
                more info
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        className="absolute top-0 bottom-0 left-0 cursor-pointer flex items-center justify-center"
        onClick={prevSlide}
      >
        <svg
          className="h-12 w-12 text-bege"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div
        className="absolute top-0 bottom-0 right-0 cursor-pointer flex items-center justify-center"
        onClick={nextSlide}
      >
        <svg
          className="h-12 w-12 text-bege"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Spotlight;
