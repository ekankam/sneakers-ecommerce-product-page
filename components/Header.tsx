import Logo from '../public/images/logo.svg';
import Menu from '../public/images/icon-menu.svg';
import Cart from '../public/images/icon-cart.svg';
import Avatar from '../public/images/image-avatar.png';
import Image from 'next/image';

const items = ['Collections', 'Men', 'Women', 'About', 'Contact'];

export default function Header() {
  return (
    <header className="w-full px-6 md:px-[100px] lg:px-[165px] h-[112px]">
      <nav className="flex items-center justify-between h-full md:border-b-slate-200 md:border-b-[1px]">
        <div className="flex items-center gap-4 md:gap-14">
          <div className="relative w-4 h-4 cursor-pointer md:hidden">
            <Image src={Menu} alt="menu icon" fill style={{ backgroundSize: "object-fit" }} />
          </div>
          <div className='w-[137px] h-5 relative'>
            <Image src={Logo} alt="sneakers" fill style={{ backgroundSize: "object-fit" }} />
          </div>
          <ul className="hidden gap-8 md:flex md:items-center">
            {items.map(item => (
              <><li key={item} className='nav-item'>{item}</li></>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-5 md:gap-[41px]">
          <div className='w-[21px] h-5 relative cursor-pointer'>
            <Image src={Cart} alt="cart" fill style={{ backgroundSize: "object-fit" }} />
          </div>
          <div className='w-6 h-6 md:w-[50px] md:h-[50px] cursor-pointer overflow-hidden border-2 border-custom-white md:hover:border-custom-orange-900 rounded-full'>
            <Image src={Avatar} alt="profile picture of a man with lots of curly hair" />
          </div>
        </div>
      </nav>
    </header>
  )
}