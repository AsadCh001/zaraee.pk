"use client"
import { Carousel } from 'react-responsive-carousel';
import Sidebar from '@/components/Sidebar';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

const Section1 = () => {
  // Define the array of image URLs
  const imageUrls = [
    '/images/Carousel1.jpg',
    '/images/Carousel2.jpg',
    '/images/Carousel3.jpg',
    '/images/Carousel4.jpg',
  ];

  const autoSlideInterval = 4000;

  return (
    <div className="flex relative">
    <div className="z-10">
      <Sidebar />
    </div>
      <div className=" w-1/2 mx-20 mt-8 md:w-1/2 md:h-100 bg-gray-200 ">
        <Carousel
          showArrows={false}
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          interval={autoSlideInterval}
        >
          {imageUrls.map((imageUrl, index) => (
            <div key={index}>
              <Image
                src={imageUrl}
                alt={`Slide ${index}`}
                width={1400} // Set the width of your images
                height={400} // Set the height of your images
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Section1;
