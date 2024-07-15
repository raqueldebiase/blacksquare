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

  // Estado para controlar o índice da imagem ativa
  const [activeIndex, setActiveIndex] = useState(0);

  // Array com as URLs das imagens
  const images = [imageUrl1, imageUrl2, imageUrl3];

  // Função para avançar para a próxima imagem
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Função para retroceder para a imagem anterior
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

    // Efeito para avançar automaticamente entre os slides
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Intervalo de 5 segundos (5000 milissegundos)
  
      return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

  return (
    <div className="relative overflow-hidden h-screen">
      <div className="absolute inset-0 flex">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full h-full bg-cover bg-center absolute top-0 left-0 transition-opacity duration-500 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
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
      {/* Área de clique para retroceder */}
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
