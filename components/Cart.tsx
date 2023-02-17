import { useAppSelector } from '@/redux/hooks';

export default function Cart() {
  const { toggleCart } = useAppSelector((state) => state.modal);
  return (
    <>
      {toggleCart && (
        <div className="cart-shadow absolute top-32 left-1/2 z-30 flex min-h-[256px] w-[360px] -translate-x-1/2 flex-col rounded-[10px] bg-custom-white pb-1 lg:top-24 lg:left-3/4">
          <div className="border-1 w-full border-b border-slate-200 p-6">
            <p className="text-16 font-bold text-custom-black">Cart</p>
          </div>
          <div className="flex w-full flex-1 items-center justify-center px-6">
            <p className="text-16 font-bold text-grayish-blue-300">
              Your cart is empty.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
