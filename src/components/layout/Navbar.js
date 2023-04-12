import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';

const navItems = ['blogs', 'aboutUS'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header
      className={` w-full sm:h-10 ${
        isOpen ? 'h-36  transform' : 'h-10'
      } bg-blue-700 flex justify-between items-center text-white`}
    >
      {/* logo start */}
      <div className='mx-1'>
        <Link href='/'>
          <Image src='/logo.png' alt='logo' width={30} height={30} />
        </Link>
      </div>
      {/* logo end */}
      <nav className='flex flex-col'>
        <span
          className={` fixed top-3 right-3  sm:hidden cursor-pointer text-lg`}
        >
          <HiMenu onClick={handleMenu} />
        </span>
        <ul className={`${isOpen ? 'block sm:flex ' : 'hidden'}  `}>
          {navItems.map((item) => (
            <li className='cursor-pointer mx-2 capitalize' key={item}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
