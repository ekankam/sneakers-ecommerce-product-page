import { close } from '@/assets';
import Image from 'next/image';
import { useContext } from 'react';

const items = ['Collections', 'Men', 'Women', 'About', 'Contact'];

export default function Sidebar() {
  return (
    <div className="fixed z-50 min-h-screen w-screen bg-overlay">
      <div className="h-screen w-[250px] bg-custom-white p-[25px]">
        <div className="relative mb-[53.78px] h-[13.44px] w-[13.44px] cursor-pointer">
          <Image src={close} alt="X icon" fill />
        </div>
        <ul className="flex flex-col gap-5">
          {items.map((item, index) => (
            <li key={index} className="text-18 font-bold text-dark-blue">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
