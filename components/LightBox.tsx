'use client';
import cn from 'classnames';
import { lightBoxClose } from '@/redux/features/modal/modalSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Overlay from './Overlay';
import useImageSlider from '@/hooks/useImageSlider';
import {
  next,
  previous,
  productImages,
  thumbnails,
  whiteClose,
} from '@/assets';
import Image from 'next/image';

export default function LightBox() {
  const [currentIndex, { goToSlide, handleNextSlide, handlePrevSlide }] =
    useImageSlider(productImages);
  const { isLightBoxOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const handleLightBoxClose = () => {
    dispatch(lightBoxClose());
  };

  return (
    <>
      {isLightBoxOpen && (
        <Overlay className="flex items-center justify-center">
          <div className="relative flex w-[400px] flex-col">
            <div className="mb-6 flex w-full items-center justify-end">
              <div
                className="relative h-5 w-5 cursor-pointer"
                onClick={handleLightBoxClose}
              >
                <Image src={whiteClose} alt="times icon" fill />
              </div>
            </div>
            <div className="relative h-[400px] w-full cursor-pointer">
              <Image
                src={productImages[currentIndex].src}
                alt="image"
                fill
                priority
                className="rounded-lg"
              />
              <div
                className="absolute top-1/2 -left-6 flex h-[50px] w-[50px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-custom-white"
                onClick={handlePrevSlide}
              >
                <div className="relative h-4 w-2">
                  <Image src={previous} alt="back icon" fill />
                </div>
              </div>
              <div
                className="absolute top-1/2 -right-6 flex h-[50px] w-[50px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-custom-white"
                onClick={handleNextSlide}
              >
                <div className="relative h-4 w-2">
                  <Image src={next} alt="back icon" fill />
                </div>
              </div>
            </div>
            <div className="mt-8 hidden px-2 lg:grid lg:grid-cols-4 lg:gap-x-[31px]">
              {thumbnails.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className={cn(
                    'relative h-[88px] w-[88px] cursor-pointer overflow-hidden rounded-[10px]',
                    currentIndex === slideIndex &&
                      'border-2 border-custom-orange-900'
                  )}
                >
                  <Image
                    src={slide.src}
                    alt="image"
                    fill
                    priority
                    className={cn(currentIndex === slideIndex && 'opacity-40')}
                  />
                </div>
              ))}
            </div>
          </div>
        </Overlay>
      )}
    </>
  );
}
