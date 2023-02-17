import { useState } from 'react';

export default function useImageSlider(slides: any) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handlePrevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return [
    currentIndex,
    {
      handleNextSlide,
      handlePrevSlide,
      goToSlide,
    },
  ] as const;
}
