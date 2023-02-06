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
          <nav className="bg-transparent flex justify-between items-center py-8 pl-6 pr-8 md:px-7 xl:h-[150px] xl:px-12">
              <div className="nav-logo flex items-center justify-start md:justify-center md:w-1/6 xl:w-1/5">
                <div className="relative w-[120px] h-[65px] md:w-24 md:h-20 xl:w-40 xl:h-32">
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
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className='md:hidden cursor-pointer' onClick={menuToggle}>
                  <line x1="30" y1="15.5" x2="35" y2="15.5" stroke="black"/>
                  <line x1="30" y1="0.5" x2="35" y2="0.5" stroke="black"/>
                  <line x1="30" y1="30.5" x2="35" y2="30.5" stroke="black"/>
                  <line x1="15" y1="15.5" x2="20" y2="15.5" stroke="black"/>
                  <line x1="15" y1="0.5" x2="20" y2="0.5" stroke="black"/>
                  <line x1="15" y1="30.5" x2="20" y2="30.5" stroke="black"/>
                  <line y1="15.5" x2="5" y2="15.5" stroke="black"/>
                  <line y1="0.5" x2="5" y2="0.5" stroke="black"/>
                  <line x1="34.5" y1="20" x2="34.5" y2="15" stroke="black"/>
                  <line x1="34.5" y1="5" x2="34.5" stroke="black"/>
                  <line x1="34.5" y1="35" x2="34.5" y2="30" stroke="black"/>
                  <line x1="19.5" y1="20" x2="19.5" y2="15" stroke="black"/>
                  <line x1="19.5" y1="5" x2="19.5" stroke="black"/>
                  <line x1="19.5" y1="35" x2="19.5" y2="30" stroke="black"/>
                  <line x1="4.5" y1="20" x2="4.5" y2="15" stroke="black"/>
                  <line x1="4.5" y1="5" x2="4.5" stroke="black"/>
                </svg>
              </div>
          </nav>

          <div className={`mobile-menu ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-all w-screen h-screen-safe absolute top-0 left-0 z-50 bg-white md:hidden`}>
            <div className='absolute top-8 left-6 '>
              <div className="relative w-[120px] h-[65px] md:w-24 md:h-20 xl:w-40 xl:h-32">
                <Link href="/">
                    <Image className="cursor-pointer" alt="GoodWeird Logo" src="/images/logo.png" layout="fill" objectFit="contain" />
                </Link>
              </div>
            </div>
            <div className='close-btn absolute w-auto right-8 top-11 cursor-pointer' onClick={menuToggle}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="33.1817" y1="3.18197" x2="35.303" y2="5.30329" stroke="black"/>
                <line x1="33.1819" y1="3.88875" x2="35.3051" y2="1.76932" stroke="black"/>
                <line x1="31.7675" y1="5.30328" x2="33.8889" y2="3.18196" stroke="black"/>
                <line x1="31.77" y1="1.76542" x2="33.8888" y2="3.88921" stroke="black"/>
                <line x1="33.1817" y1="18.182" x2="35.303" y2="20.3033" stroke="black"/>
                <line x1="33.1819" y1="18.8887" x2="35.3051" y2="16.7693" stroke="black"/>
                <line x1="31.7675" y1="20.3033" x2="33.8889" y2="18.182" stroke="black"/>
                <line x1="31.77" y1="16.7654" x2="33.8888" y2="18.8892" stroke="black"/>
                <line x1="33.1817" y1="33.182" x2="35.303" y2="35.3033" stroke="black"/>
                <line x1="33.1819" y1="33.8887" x2="35.3051" y2="31.7693" stroke="black"/>
                <line x1="31.7675" y1="35.3033" x2="33.8889" y2="33.182" stroke="black"/>
                <line x1="31.77" y1="31.7654" x2="33.8888" y2="33.8892" stroke="black"/>
                <line x1="18.1817" y1="3.18197" x2="20.303" y2="5.30329" stroke="black"/>
                <line x1="18.1819" y1="3.88875" x2="20.3051" y2="1.76932" stroke="black"/>
                <line x1="16.7675" y1="5.30328" x2="18.8889" y2="3.18196" stroke="black"/>
                <line x1="16.77" y1="1.76542" x2="18.8888" y2="3.88921" stroke="black"/>
                <line x1="18.1817" y1="18.182" x2="20.303" y2="20.3033" stroke="black"/>
                <line x1="18.1819" y1="18.8887" x2="20.3051" y2="16.7693" stroke="black"/>
                <line x1="16.7675" y1="20.3033" x2="18.8889" y2="18.182" stroke="black"/>
                <line x1="16.77" y1="16.7654" x2="18.8888" y2="18.8892" stroke="black"/>
                <line x1="18.1817" y1="33.182" x2="20.303" y2="35.3033" stroke="black"/>
                <line x1="18.1819" y1="33.8887" x2="20.3051" y2="31.7693" stroke="black"/>
                <line x1="16.7675" y1="35.3033" x2="18.8889" y2="33.182" stroke="black"/>
                <line x1="16.77" y1="31.7654" x2="18.8888" y2="33.8892" stroke="black"/>
                <line x1="3.88871" y1="3.18198" x2="1.76739" y2="5.3033" stroke="black"/>
                <line x1="3.18199" y1="3.18229" x2="5.30142" y2="5.3055" stroke="black"/>
                <line x1="1.76762" y1="1.76775" x2="3.88894" y2="3.88907" stroke="black"/>
                <line x1="5.30431" y1="1.77093" x2="3.18052" y2="3.88975" stroke="black"/>
                <line x1="3.18168" y1="18.182" x2="5.303" y2="20.3033" stroke="black"/>
                <line x1="3.18192" y1="18.8887" x2="5.30514" y2="16.7693" stroke="black"/>
                <line x1="1.76754" y1="20.3033" x2="3.88886" y2="18.182" stroke="black"/>
                <line x1="1.76998" y1="16.7654" x2="3.88881" y2="18.8892" stroke="black"/>
              </svg>
            </div>

            <div className='mt-[10rem] ml-6 flex flex-col'>
                <Link className='link' href="/">Photography</Link>
                <Link className='link my-6' href="/">Websites</Link>
                <Link className='link' href="/">Contact</Link>
            </div>
            
            <div className='absolute bottom-[245px] right-8'>
              <svg width="1" height="439" viewBox="0 0 1 439" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="439.018" x2="0.5" y2="-3.05176e-05" stroke="#565656"/>
              </svg>
            </div>

            <div className='absolute bottom-10 right-8'>
              <svg width="7" height="163" viewBox="0 0 7 163" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="6.5" y1="156" x2="6.5" y2="163" stroke="#565656"/>
                <line x1="6.5" y1="104" x2="6.5" y2="111" stroke="#565656"/>
                <line x1="6.5" y1="52" x2="6.5" y2="59" stroke="#565656"/>
                <line x1="6.5" x2="6.5" y2="7" stroke="#565656"/>
                <line x1="7" y1="162.5" y2="162.5" stroke="#565656"/>
                <line x1="7" y1="110.5" y2="110.5" stroke="#565656"/>
                <line x1="7" y1="58.5" y2="58.5" stroke="#565656"/>
                <line x1="7" y1="6.5" y2="6.5" stroke="#565656"/>
              </svg>
            </div>

          </div>

      </div>
    </>
  );
}