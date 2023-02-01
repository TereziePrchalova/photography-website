import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import useScrollPosition from '../hooks/scrollPosition';

export default function Navbar(data) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollPosition = useScrollPosition();


  useEffect(() => {
    document.querySelector('body').classList.remove('overflow-y-hidden');
    document.querySelector('#__next').classList.remove('overflow-y-hidden');
    document.querySelector('html').classList.remove('overflow-y-hidden');
  },[])

  function menuToggle(){
    if(!menuOpen){
      document.querySelector('body').classList.add('overflow-y-hidden');
      document.querySelector('#__next').classList.add('overflow-y-hidden');
      document.querySelector('html').classList.add('overflow-y-hidden');
    }
    else {
      document.querySelector('body').classList.remove('overflow-y-hidden');
      document.querySelector('#__next').classList.remove('overflow-y-hidden');
      document.querySelector('html').classList.remove('overflow-y-hidden');
    }
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <div className="w-full fixed z-50 left-0 top-0">
          <nav className="bg-transparent flex justify-between items-center pl-3 pr-6 h-[90px] md:px-7 xl:h-[150px] xl:px-12">
              <div className="nav-logo flex items-center justify-start md:justify-center md:w-1/6 xl:w-1/5">
                <div className="animate-logo-spin select-none relative w-20 h-14 md:w-24 md:h-20 xl:w-40 xl:h-32">
                  <Link href="/">
                      <Image className="cursor-pointer" alt="GoodWeird Logo" src="/images/logo.png" layout="fill" objectFit="contain" />
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-9 md:w-5/12 xl:w-[60%]">
                <Link href="/">Photography</Link>
                <Link href="/">Photography</Link>
              </div>
              <div>
                <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-7 h-5 md:hidden cursor-pointer' onClick={menuToggle}>
                    <path d="M1.72366 0.0283203C1.04785 0.0283203 0.5 0.576172 0.5 1.25198C0.5 1.92779 1.04785 2.47564 1.72366 2.47564H28.2763C28.9522 2.47564 29.5 1.92779 29.5 1.25198C29.5 0.576172 28.9521 0.0283203 28.2763 0.0283203H1.72366ZM1.72366 9.81762C1.04785 9.81762 0.5 10.3655 0.5 11.0413C0.5 11.7171 1.04785 12.2649 1.72366 12.2649H28.2763C28.9522 12.2649 29.5 11.7171 29.5 11.0413C29.5 10.3655 28.9521 9.81762 28.2763 9.81762H1.72366ZM1.72366 19.6069C1.04785 19.6069 0.5 20.1548 0.5 20.8306C0.5 21.5064 1.04785 22.0542 1.72366 22.0542H28.2763C28.9522 22.0542 29.5 21.5064 29.5 20.8306C29.5 20.1548 28.9521 19.6069 28.2763 19.6069H1.72366Z" fill="black"/>
                </svg>
              </div>
          </nav>

          <div className={`mobile-menu ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-all w-screen h-screen-safe absolute top-0 left-0 z-50 bg-green dark:text-khaki md:hidden`}>
            <div className='absolute top-4 left-3 '>
              <div className="select-none relative w-20 h-14">
                <Link href="/">
                    <Image className="cursor-pointer" alt="GoodWeird Logo" src="/images/logo.png" layout="fill" objectFit="contain" />
                </Link>
              </div>
            </div>
            <div className='close-btn absolute w-[20px] h-[20px] right-7 top-9 cursor-pointer' onClick={menuToggle}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.6592 0.340805C16.1136 0.795212 16.1136 1.53195 15.6592 1.98636L9.64555 7.99999L15.6592 14.0136C16.1136 14.468 16.1136 15.2048 15.6592 15.6592C15.2048 16.1136 14.468 16.1136 14.0136 15.6592L7.99998 9.64556L1.98636 15.6592C1.53195 16.1136 0.795213 16.1136 0.340805 15.6592C-0.113602 15.2048 -0.113602 14.468 0.340805 14.0136L6.35445 7.99999L0.340805 1.98636C-0.113602 1.53195 -0.113602 0.795212 0.340805 0.340805C0.795213 -0.113601 1.53195 -0.113601 1.98636 0.340805L7.99998 6.35446L14.0136 0.340805C14.468 -0.113602 15.2048 -0.113602 15.6592 0.340805Z" fill="black"/>
              </svg>
            </div>

            <div className='mt-20 ml-5 flex flex-col'>
                <Link href="/">Photography</Link>
                <Link href="/">Websites</Link>
            </div>

          </div>

      </div>
    </>
  );
}