import Image from 'next/image';
import React, { useState } from 'react';
import SliderData from '@/components/SliderData.json';
import { SlArrowLeft, SlArrowRight } from 'react-icons/Sl';
import Link from 'next/link';

const slides: Slide[] = SliderData as Slide[];

interface Slide {
  picturePath: string;
  alt: string;
  width: number;
  height: number;
  buttonPath: string;
  buttonTargetPath: string;
  buttonWidth: number;
  buttonHeight: number;
}

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
    <div id="gallery" className="w-screen mx-auto">
      <div className="relative flex justify-center">
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
              <SlArrowLeft
                onClick={prevSlide}
                className="absolute top-1/2 left-[30px] transform -translate-y-1/2 text-white/70 cursor-pointer select-none z-[2]"
                size={50}
                style={{ top: '50%' }}
              />
              <div className="relative">
                <Image
                  src={slide.picturePath}
                  alt={slide.alt}
                  width={slide.width}
                  height={slide.height}
                />
                <Link href={slide.buttonTargetPath}>
                  <Image
                    src={slide.buttonPath}
                    alt={'/'}
                    width={slide.buttonWidth}
                    height={slide.buttonHeight}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-grey-500 hover:bg-grey-600 text-white py-4 px-8 uppercase font-bold text-sm transition-colors duration-300"></Image>
                </Link>
              </div>
              <SlArrowRight
                onClick={nextSlide}
                className="absolute top-1/2 right-[30px] transform -translate-y-1/2 text-white/70 cursor-pointer select-none z-[2]"
                size={50}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
