'use client';
import { minus, plus, whiteCart } from '@/assets';
import { addToCart, decrementQuantity, incrementQuantity } from '@/redux/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ProductItem } from '@/type';
import Image from 'next/image';
import Carousel from './Carousel';
import ImageSlider from './ImageSlider';

const product: ProductItem = {
  id: 'sneaker-1',
  title: 'Fall Limited Edition Sneakers',
  description: `These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.`,
  imageUrl: '/images/image-product-1.jpg',
  price: 125,
  quantity: 0,
};

export default function ProductDetail() {
  const { cart } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  }

  const handleQuantityIncrement = () => {
    dispatch(incrementQuantity(product.id))
  }

  const handleQuantityDecrement = () => {
    dispatch(decrementQuantity(product.id))
  }

  return (
    <div className="lg:mt-[70px] lg:mb-7 lg:flex lg:items-start lg:gap-[50px] lg:px-6">
      <div className="mb-6 lg:flex-1">
        <ImageSlider />
        <Carousel />
      </div>

      <div className="px-3 pb-3 lg:mt-16 lg:flex-1 lg:pb-0">
        <p className="mb-6 font-bold tracking-wide uppercase text-12 text-custom-orange-900 lg:text-13">
          Sneaker company
        </p>
        <h1 className="mb-[15px] text-28 font-bold capitalize text-custom-black lg:mb-8 lg:text-44">
          {product.title}
        </h1>
        <p className="mb-6 text-15 text-grayish-blue-300 lg:text-16">
          {product.description}
        </p>
        <div className="flex items-center justify-between mb-8 lg:flex-col lg:items-start">
          <div className="flex items-start gap-[23px]">
            <p className="font-bold text-28 text-custom-black">
              ${product.price}.00
            </p>
            <div className="px-2 py-1 rounded-md bg-custom-orange-300">
              <p className="font-bold text-16 text-custom-orange-900">50%</p>
            </div>
          </div>
          <p className="mt-1 font-bold line-through text-16 text-grayish-blue-200">
            $250.00
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <div className="flex w-full items-center justify-between rounded-[10px] bg-grayish-blue-100 px-3 py-3 lg:w-1/3">
            <button type="button" onClick={handleQuantityDecrement}>
              <div className="relative w-3 h-1">
                <Image src={minus} alt="minus" fill />
              </div>
            </button>
            <p className="font-bold text-16 text-custom-black">{cart[0]?.quantity || 0}</p>
            <button type="button" onClick={handleQuantityIncrement}>
              <div className="relative w-3 h-3">
                <Image src={plus} alt="plus" fill />
              </div>
            </button>
          </div>
          <button
            type="button"
            className="primary-btn-shadow flex w-full items-center justify-center gap-4 rounded-[10px] bg-custom-orange-900 py-3 lg:flex-1 lg:shadow-none lg:hover:opacity-80"
            onClick={handleAddToCart}
          >
            <div className="relative h-4 w-[17px]">
              <Image src={whiteCart} alt="cart" fill />
            </div>
            <p className="font-bold text-16 text-custom-white">Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}
