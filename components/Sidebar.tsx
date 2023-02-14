import { close } from "@/assets";
import ContextSidebar from "@/context/SidebarContext";
import Image from "next/image";
import { useContext } from "react";

const items = ['Collections', 'Men', 'Women', 'About', 'Contact'];

export default function Sidebar() {
  const { handleClose } = useContext(ContextSidebar);

  return (
    <div className="fixed z-50 w-screen min-h-screen bg-overlay">
      <div className="w-[250px] bg-custom-white h-screen p-[25px]">
        <div className="relative w-[13.44px] h-[13.44px] mb-[53.78px] cursor-pointer" onClick={handleClose}>
          <Image src={close} alt="X icon" fill />
        </div>
        <ul className="flex flex-col gap-5">
          {items.map((item, index) => (
            <li key={index} className="font-bold text-18 text-dark-blue">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}