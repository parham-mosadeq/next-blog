import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';

const navItems = ['home', 'blogs', 'aboutUs'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header
      className={` w-full h-10  sm:h-12  z-40 bg-blue-700 flex items-center justify-around  text-white`}
    >
      {/* logo start */}
      <div className='mx-2 text-md w-full'>
        <Link href='/'>
          <Image src='/images/logo.png' alt='logo' width={30} height={30} />
        </Link>
      </div>
      {/* logo end */}
      <span
        className={` fixed top-3 right-3  z-50 sm:hidden cursor-pointer text-lg`}
      >
        <HiMenu onClick={handleMenu} />
      </span>

      <nav
        className={`absolute top-0 right-0 h-screen text-center sm:justify-center w-1/2 sm:w-fit sm:h-10 sm:relative  bg-blue-600 sm:bg-inherit  sm:flex z-0 ${
          isOpen ? 'block  ' : 'hidden'
        }  `}
      >
        <ul className=' sm:flex sm:items-center sm:justify-center my-10 sm:my-0 border-t-2 sm:border-t-0 sm:mx-2 sm:px-2'>
          {navItems.map((item) => (
            <li
              className={`cursor-pointer mx-2 capitalize py-3 sm:p-0 hover:text-slate-200 z-50 `}
              key={item}
            >
              <Link
                href={`/${
                  item.toLocaleLowerCase() !== 'home'
                    ? item.toLocaleLowerCase()
                    : ''
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
