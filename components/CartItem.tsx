'use client';
import { trash } from "@/assets";
import { removeItem } from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";

export default function CartItem({ product }: any) {
  const { cart } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  const handleRemoveProduct = () => {
    dispatch(removeItem(product.id));
  }

  const getTotal = () => {
    let totalPrice = 0
    cart.map((item: any) => {
      totalPrice += item.price * item.quantity
    })

    return totalPrice;

  }

  return (
    <div className="flex items-center gap-4 text-16">
      <div className="relative w-[50px] h-[50px] rounded overflow-hidden">
        <Image src={product.imageUrl} alt={product.title} fill />
      </div>
      <div>
        <p>{product.title}</p>
        <div className="flex gap-2 item-center">
          <p>${product.price} x {product.quantity}</p>
          <p className="font-bold">{getTotal()}</p>
        </div>
      </div>
      <div className="relative w-[14px] h-4 cursor-pointer" onClick={handleRemoveProduct}>
        <Image src={trash} alt="trash icon" fill />
      </div>
    </div>
  );
}