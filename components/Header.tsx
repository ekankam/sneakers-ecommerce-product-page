'use client';
import Image from 'next/image';
import { cart, menu, logo, avatar } from '@/assets';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { modalOpen, toggleCart } from '@/redux/features/modal/modalSlice';
import Cart from './Cart';

const items = ['Collections', 'Men', 'Women', 'About', 'Contact'];

export default function Header() {
  const { cart: cartItem } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  const handleModal = () => {
    dispatch(modalOpen());
  };

  const handleCart = () => {
    dispatch(toggleCart());
  };

  return (
    <header className="h-[112px] w-full px-6 md:px-[100px] lg:px-[165px]">
      <nav className="flex h-full items-center justify-between md:border-b-[1px] md:border-b-slate-200">
        <div className="flex items-center gap-4 md:gap-14">
          <div
            className="relative w-4 h-4 cursor-pointer md:hidden"
            onClick={handleModal}
          >
            <Image
              src={menu}
              alt="menu icon"
              fill
              style={{ backgroundSize: 'object-fit' }}
            />
          </div>
          <div className="relative h-5 w-[137px]">
            <Image
              src={logo}
              alt="sneakers"
              fill
              style={{ backgroundSize: 'object-fit' }}
            />
          </div>
          <ul className="hidden gap-8 md:flex md:items-center">
            {items.map((item, index) => (
              <li key={`${item}-${index}`} className="nav-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-5 md:gap-[41px]">
          <div
            className="relative h-5 w-[21px] cursor-pointer"
            onClick={handleCart}
          >
            <Image
              src={cart}
              alt="cart"
              fill
            />
            {cartItem.length > 0 && <span className='absolute -top-2 -right-2 w-[19px] h-[13px] rounded-full bg-custom-orange-900 text-custom-white text-10 font-bold flex items-center justify-center'>{cartItem.length}</span>}
          </div>
          <div className="h-6 w-6 cursor-pointer overflow-hidden rounded-full border-2 border-custom-white md:h-[50px] md:w-[50px] md:hover:border-custom-orange-900">
            <Image
              src={avatar}
              alt="profile picture of a man with lots of curly hair"
            />
          </div>
          <Cart />
        </div>
      </nav>
    </header>
  );
}
