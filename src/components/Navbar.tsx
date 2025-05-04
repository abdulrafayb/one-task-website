import Logo from '../../public/assets/images/logosaas.png';
import MenuIcon from '../../public/assets/icons/menu.svg';

import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className='bg-black'>
      <div className='px-4'>
        <div className='flex justify-between items-center py-4'>
          <div className='relative'>
            <div className='absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] blur-md'></div>
            <Image src={Logo} alt='logo' className='relative w-12 h-12' />
          </div>
          <div className='inline-flex justify-center items-center w-10 h-10 border border-white border-opacity-30 rounded-lg sm:hidden'>
            <MenuIcon className='text-white' />
          </div>
          <nav className='sm:flex items-center gap-6 hidden'>
            <Link
              href='/'
              className='text-white text-opacity-60 hover:text-opacity-100 transition duration-300'
            >
              About
            </Link>
            <Link
              href='/'
              className='text-white text-opacity-60 hover:text-opacity-100 transition duration-300'
            >
              Features
            </Link>
            <Link
              href='/'
              className='text-white text-opacity-60 hover:text-opacity-100 transition duration-300'
            >
              Updates
            </Link>
            <Link
              href='/'
              className='text-white text-opacity-60 hover:text-opacity-100 transition duration-300'
            >
              Help
            </Link>
            <Link
              href='/'
              className='text-white text-opacity-60 hover:text-opacity-100 transition duration-300'
            >
              Customers
            </Link>
            <button className='bg-white py-2 px-4 rounded-lg'>
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
