import Image from 'next/image';
import imageAccueil from '../public/images/accueil/fondArcadie.jpg';
import React from 'react';

const Hero = ({
  heading,
  message,
}: {
  heading: string;
  message: string;
}): JSX.Element => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover">
      {/* Conditional background */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[1]">
        <Image
          src={imageAccueil}
          alt={'Atelier Arcadie'}
          className="object-cover w-full h-full"
        />
      </div>
      {/* Overlay */}
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <div className="flex justify-center">
          <button
            className="px-8 py-2 border-2 rounded-md"
            onClick={() => {
              const sliderSection = document.getElementById('gallery');
              if (sliderSection != null) {
                window.scrollTo({
                  top: sliderSection.offsetTop,
                  behavior: 'smooth',
                });
              }
            }}>
            <p className="font-bold text-xl">Visiter</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
