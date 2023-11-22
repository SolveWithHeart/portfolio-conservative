import 'pure-react-carousel/dist/react-carousel.es.css';

import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';
import type { FC } from 'react';
import React from 'react';

import { ArrowLeftIcon } from '../icons/ArrowLeft/ArrowLeft';
import { ArrowRightIcon } from '../icons/ArrowRight/ArrowRight';

type Props = {
  children: React.ReactNode[];
};

export const Carousel: FC<Props> = ({ children }) => {
  return (
    <div className="container mx-auto">
      <div className="flex h-full w-full items-center justify-center py-24 sm:py-8">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="hidden lg:block"
          naturalSlideHeight={250}
          naturalSlideWidth={100}
          isIntrinsicHeight
          totalSlides={children.length}
          visibleSlides={4}
          step={1}
          infinite
        >
          <div className="relative flex w-full items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute left-0 z-30 ml-8 cursor-pointer focus:outline-none focus:ring-offset-2"
              id="prev"
            >
              <ArrowLeftIcon />
            </ButtonBack>
            <div className="mx-auto h-full w-5/6 overflow-hidden">
              <Slider>
                <div
                  id="slider"
                  className="flex h-full items-center justify-start gap-14 transition duration-700 ease-out md:gap-6 lg:gap-8"
                >
                  {children.map((child, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Slide index={i} key={`${i}-${Math.random()}`}>
                      <li className="max-w-sm rounded shadow-lg">{child}</li>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute right-0 z-30 mr-8  focus:outline-none  focus:ring-offset-2"
              id="next"
            >
              <ArrowRightIcon />
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for tablet and medium size devices */}
        <CarouselProvider
          className="hidden md:block lg:hidden"
          naturalSlideHeight={250}
          naturalSlideWidth={100}
          isIntrinsicHeight
          totalSlides={children.length}
          visibleSlides={2}
          step={1}
          infinite
        >
          <div className="relative flex w-full items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute left-0 z-30 ml-8 cursor-pointer  focus:outline-none  focus:ring-offset-2"
              id="prev"
            >
              <ArrowLeftIcon />
            </ButtonBack>
            <div className="mx-auto h-full w-5/6 overflow-hidden">
              <Slider>
                <div
                  id="slider"
                  className="flex h-full items-center justify-start gap-14 transition duration-700 ease-out md:gap-6 lg:gap-8"
                >
                  {children.map((child, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Slide index={i} key={`${i}-${Math.random()}`}>
                      <li className="max-w-sm rounded shadow-lg">{child}</li>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute right-0 z-30 mr-8  focus:outline-none  focus:ring-offset-2"
              id="next"
            >
              <ArrowRightIcon />
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for mobile and Small size Devices */}
        <CarouselProvider
          className="block md:hidden"
          naturalSlideHeight={250}
          naturalSlideWidth={100}
          isIntrinsicHeight
          totalSlides={children.length}
          visibleSlides={1}
          step={1}
          infinite
        >
          <div className="relative flex w-full items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute left-0 z-30 ml-8 cursor-pointer  focus:outline-none  focus:ring-offset-2"
              id="prev"
            >
              <ArrowLeftIcon />
            </ButtonBack>
            <div className="mx-auto h-full w-5/6 overflow-hidden">
              <Slider>
                <div
                  id="slider"
                  className="flex h-full w-full items-center justify-start transition duration-700 ease-out md:gap-6 lg:gap-8"
                >
                  {children.map((child, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Slide index={i} key={`${i}-${Math.random()}`}>
                      <li className="max-w-sm rounded shadow-lg">{child}</li>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute right-0 z-30 mr-8  focus:outline-none  focus:ring-offset-2"
              id="next"
            >
              <ArrowRightIcon />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};
