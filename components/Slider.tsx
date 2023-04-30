import Image from 'next/image';
import React, { useState } from 'react';
import SliderData from '@/components/SliderData.json';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

import { type Slide } from '@/types/interfaces';

const slides: Slide[] = SliderData as Slide[];

const Slider = (): JSX.Element => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = (): void => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = (): void => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return <div>no slides !</div>;
  }

  return (
    <div id="gallery" className="w-full h-screen overflow-hidden relative">
      <div className="relative flex justify-center items-center h-full">
        {SliderData.map((slide, index) => {
          const slideClass =
            current === index ? 'slide-current' : 'slide-hidden';
          const slidePosition =
            current === index ? 0 : (current - index) * -100;

          return (
            <div
              key={index}
              className={`absolute top-0 left-0 h-full w-full transition-transform duration-1000 ${slideClass}`}
              style={{ transform: `translateX(${slidePosition}%)` }}>
              <FiArrowLeft
                onClick={prevSlide}
                className="absolute top-1/2 left-[30px] transform -translate-y-1/2 text-white"
                size={60}
              />
              <FiArrowRight
                onClick={nextSlide}
                className="absolute top-1/2 right-[30px] transform -translate-y-1/2 text-white"
                size={60}
              />
              <Image
                src={slide.picturePath}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
              />
              <Link
                href={slide.buttonTargetPath}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={slide.buttonPath}
                  alt=""
                  width={slide.buttonWidth}
                  height={slide.buttonHeight}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
