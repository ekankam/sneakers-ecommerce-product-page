import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import CartItem from './CartItem';
import { ProductItem } from '@/type';
import { useEffect } from 'react';
import { closeCart } from '@/redux/features/modal/modalSlice';

export default function Cart() {
  const { toggleCart } = useAppSelector((state) => state.modal);
  const { cart } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cart.length === 0) {
      dispatch(closeCart());
    }
  }, [cart, dispatch]);

  return (
    <>
      {toggleCart && (
        <div className="cart-shadow absolute top-32 left-1/2 z-30 flex min-h-[256px] w-[360px] -translate-x-1/2 flex-col rounded-[10px] bg-custom-white pb-1 lg:top-24 lg:left-3/4">
          <div className="border-1 w-full border-b border-slate-200 p-6">
            <p className="text-16 font-bold text-custom-black">Cart</p>
          </div>
          <div className="flex min-h-[150px] w-full flex-col justify-between gap-2 px-6">
            <div
              className={cn(
                'flex',
                cart.length === 0
                  ? 'min-h-[150px] items-center justify-center'
                  : 'h-full items-start pt-6'
              )}
            >
              {cart.length === 0 ? (
                <p className="text-16 font-bold text-grayish-blue-300">
                  Your cart is empty.
                </p>
              ) : (
                <>
                  {cart.map((product: ProductItem) => (
                    <CartItem key={product.id} product={product} />
                  ))}
                </>
              )}
            </div>
            {cart.length > 0 && (
              <button
                type="button"
                className="w-full rounded-[10px] bg-custom-orange-900 py-3 text-custom-white"
              >
                checkout
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
