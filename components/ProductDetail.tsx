import { minus, plus, whiteCart } from '@/assets';
import Image from 'next/image';
import Carousel from './Carousel';
import ImageSlider from './ImageSlider';

export default function ProductDetail() {
  return (
    <div className="lg:mt-[70px] lg:mb-7 lg:flex lg:items-start lg:gap-[50px] lg:px-6">
      <div className="mb-6 lg:flex-1">
        <ImageSlider />
        <Carousel />
      </div>

      <div className="px-3 pb-3 lg:mt-16 lg:flex-1 lg:pb-0">
        <p className="mb-6 text-12 font-bold uppercase tracking-wide text-custom-orange-900 lg:text-13">
          Sneaker company
        </p>
        <h1 className="mb-[15px] text-28 font-bold capitalize text-custom-black lg:mb-8 lg:text-44">
          Fall Limited Edition Sneakers
        </h1>
        <p className="mb-6 text-15 text-grayish-blue-300 lg:text-16">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="mb-8 flex items-center justify-between lg:flex-col lg:items-start">
          <div className="flex items-start gap-[23px]">
            <p className="text-28 font-bold text-custom-black">$125.00</p>
            <div className="rounded-md bg-custom-orange-300 px-2 py-1">
              <p className="text-16 font-bold text-custom-orange-900">50%</p>
            </div>
          </div>
          <p className="mt-1 text-16 font-bold text-grayish-blue-200 line-through">
            $250.00
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <div className="flex w-full items-center justify-between rounded-[10px] bg-grayish-blue-100 px-3 py-3 lg:w-1/3">
            <button type="button">
              <div className="relative h-1 w-3">
                <Image src={minus} alt="minus" fill />
              </div>
            </button>
            <span className="text-16 font-bold text-custom-black">0</span>
            <button type="button">
              <div className="relative h-3 w-3">
                <Image src={plus} alt="plus" fill />
              </div>
            </button>
          </div>
          <button
            type="button"
            className="primary-btn-shadow flex w-full items-center justify-center gap-4 rounded-[10px] bg-custom-orange-900 py-3 lg:flex-1 lg:shadow-none lg:hover:opacity-80"
          >
            <div className="relative h-4 w-[17px]">
              <Image src={whiteCart} alt="cart" fill />
            </div>
            <p className="text-16 font-bold text-custom-white">Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}
