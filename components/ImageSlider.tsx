'use client';
import Image from 'next/image';
import cn from 'classnames';
import { next, previous, productImages, thumbnails } from '@/assets';
import useImageSlider from '@/hooks/useImageSlider';
import { useAppDispatch } from '@/redux/hooks';
import { lightBoxOpen } from '@/redux/features/modal/modalSlice';

export default function ImageSlider() {
  const [currentIndex, { goToSlide }] = useImageSlider(productImages);
  const dispatch = useAppDispatch()

  const handleLightBoxOpen = () => {
    dispatch(lightBoxOpen())
  }

  return (
    <div className='relative'>
      <div className="flex w-[455px] flex-col gap-8">
        <div className="relative h-[455px] w-full cursor-pointer">
          <Image
            src={productImages[currentIndex].src}
            alt="image"
            fill
            priority
            className="rounded-lg"
            onClick={handleLightBoxOpen}
          />
        </div>
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-x-[31px]">
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
    </div>
  );
}
