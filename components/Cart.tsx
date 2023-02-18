import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import CartItem from './CartItem';
import { ProductItem } from '@/type';
import { useEffect } from 'react';
import { closeCart } from '@/redux/features/modal/modalSlice';

export default function Cart() {
  const { toggleCart } = useAppSelector((state) => state.modal);
  const { cart } = useAppSelector(state => state.cart);

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (cart.length === 0) {
      dispatch(closeCart());
    }
  }, [cart, dispatch])


  return (
    <>
      {toggleCart && (
        <div className="cart-shadow absolute top-32 left-1/2 z-30 flex min-h-[256px] w-[360px] -translate-x-1/2 flex-col rounded-[10px] bg-custom-white pb-1 lg:top-24 lg:left-3/4">
          <div className="w-full p-6 border-b border-1 border-slate-200">
            <p className="font-bold text-16 text-custom-black">Cart</p>
          </div>
          <div className='flex flex-col justify-between w-full min-h-[150px] px-6 gap-2'>
            <div className={cn('flex', (cart.length === 0 ? 'justify-center items-center min-h-[150px]' : 'items-start pt-6 h-full'))}>
              {
                cart.length === 0 ? (
                  <p className="font-bold text-16 text-grayish-blue-300">
                    Your cart is empty.
                  </p>
                ) : (
                  <>
                    {cart.map((product: ProductItem) => (<CartItem key={product.id} product={product} />))}
                  </>
                )
              }
            </div>
            {cart.length > 0 && <button type='button' className='w-full bg-custom-orange-900 rounded-[10px] py-3 text-custom-white'>checkout</button>}
          </div>
        </div>
      )}
    </>
  );
}
