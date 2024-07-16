import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface ImageCardProps {
  src: StaticImageData;
  title: string;
  description: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, title, description }) => {
  return (
    <div className="relative h-full group">
      <div className="relative h-full">
        <Image
          src={src}
          alt={`Image - ${title}`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end justify-center">
        <div className="bg-black bg-opacity-50 text-white p-2 w-full">
          <h3 className="text-1xl font-bold mb-1">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
