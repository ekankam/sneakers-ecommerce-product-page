'use client';
import { next, previous, productImages } from '@/assets';
import useImageSlider from '@/hooks/useImageSlider';
import Image from 'next/image';

export default function Carousel() {
  const [currentIndex, { handleNextSlide, handlePrevSlide }] =
    useImageSlider(productImages);
  return (
    <div className="relative h-[300px] w-full lg:hidden">
      <Image src={productImages[currentIndex].src} alt="image" fill priority />
      <div
        className="absolute top-1/2 left-4 flex h-[50px] w-[50px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-custom-white"
        onClick={handlePrevSlide}
      >
        <div className="relative h-4 w-2">
          <Image src={previous} alt="back icon" fill />
        </div>
      </div>
      <div
        className="absolute top-1/2 right-4 flex h-[50px] w-[50px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-custom-white"
        onClick={handleNextSlide}
      >
        <div className="relative h-4 w-2">
          <Image src={next} alt="back icon" fill />
        </div>
      </div>
    </div>
  );
}
