'use client';
import cn from 'classnames';
import { lightBoxClose } from "@/redux/features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Overlay from "./Overlay";
import useImageSlider from '@/hooks/useImageSlider';
import { next, previous, productImages, thumbnails, whiteClose } from '@/assets';
import Image from 'next/image';

export default function LightBox() {
  const [currentIndex, { goToSlide, handleNextSlide, handlePrevSlide }] = useImageSlider(productImages);
  const { isLightBoxOpen } = useAppSelector(state => state.modal);
  const dispatch = useAppDispatch();

  const handleLightBoxClose = () => {
    dispatch(lightBoxClose())
  }


  return (
    <>
      {isLightBoxOpen && (<Overlay className='flex items-center justify-center'>
        <div className="flex w-[400px] relative flex-col">
          <div className='flex items-center justify-end w-full mb-6'>
            <div className='relative w-5 h-5 cursor-pointer' onClick={handleLightBoxClose}>
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
            <div className='w-[50px] h-[50px] bg-custom-white rounded-full flex items-center justify-center cursor-pointer absolute top-1/2 -translate-y-1/2 -left-6' onClick={handlePrevSlide}>
              <div className='relative w-2 h-4'>
                <Image src={previous} alt="back icon" fill />
              </div>
            </div>
            <div className='w-[50px] h-[50px] bg-custom-white rounded-full flex items-center justify-center cursor-pointer absolute top-1/2 -translate-y-1/2 -right-6' onClick={handleNextSlide}>
              <div className='relative w-2 h-4'>
                <Image src={next} alt="back icon" fill />
              </div>
            </div>
          </div>
          <div className="hidden lg:grid lg:grid-cols-4 lg:gap-x-[31px] px-2 mt-8">
            {thumbnails.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={cn(
                  'relative h-[88px] w-[88px] cursor-pointer overflow-hidden rounded-[10px]',
                  currentIndex === slideIndex && 'border-2 border-custom-orange-900'
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
      </Overlay>)}
    </>
  );
}