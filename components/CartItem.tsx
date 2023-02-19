'use client';
import { trash } from '@/assets';
import { removeItem, getTotal } from '@/redux/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import { useEffect } from 'react';

export default function CartItem({ product }: any) {
  const { totalAmount } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleRemoveProduct = () => {
    dispatch(removeItem(product.id));
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch]);

  return (
    <div className="flex items-center gap-4 text-16">
      <div className="relative h-[50px] w-[50px] overflow-hidden rounded">
        <Image src={product.imageUrl} alt={product.title} fill />
      </div>
      <div>
        <p>{product.title}</p>
        <div className="item-center flex gap-2">
          <p>
            ${product.price} x {product.quantity}
          </p>
          <p className="font-bold">${totalAmount}</p>
        </div>
      </div>
      <div
        className="relative h-4 w-[14px] cursor-pointer"
        onClick={handleRemoveProduct}
      >
        <Image src={trash} alt="trash icon" fill />
      </div>
    </div>
  );
}
