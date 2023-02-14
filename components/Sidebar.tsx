'use client';
import Image from 'next/image';
import { close } from '@/assets';
import { modalClose } from '@/redux/features/modal/modalSlice';
import { useAppDispatch } from '@/redux/hooks';
import Overlay from './Overlay';


const items = ['Collections', 'Men', 'Women', 'About', 'Contact'];

export default function Sidebar() {
  const dispatch = useAppDispatch();

  const handleModalClose = () => {
    dispatch(modalClose());
  }
  return (
    <Overlay>
      <div className="h-screen w-[250px] bg-custom-white p-[25px]">
        <div className="relative mb-[53.78px] h-[13.44px] w-[13.44px] cursor-pointer" onClick={handleModalClose}>
          <Image src={close} alt="X icon" fill />
        </div>
        <ul className="flex flex-col gap-5">
          {items.map((item, index) => (
            <li key={index} className="font-bold text-18 text-dark-blue">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Overlay>
  );
}
