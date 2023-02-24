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
      <div className="w-full fixed z-50 left-0 top-0 bg-white">
          <nav className="bg-transparent relative flex justify-between items-center py-6 pl-6 pr-8 md:py-5 md:px-8 lg:py-8 xl:pt-[3rem] xl:pb-8 xl:px-12 max-w-[1440px] xl:m-auto">
              <div className="nav-logo flex items-center justify-start md:justify-center ">
                <div className="relative w-[120px] h-[65px]">
                  <Link href="/">
                      <Image className="cursor-pointer" alt="GoodWeird Logo" src="/images/logoTerezie.png" layout="fill" objectFit="contain" />
                  </Link>
                </div>
              </div>
              <div className='hidden lg:block lg:border-b-[1px] lg:border-grey lg:-mb-12 lg:w-[100%] lg:mx-12 '></div>
              <div className="hidden lg:flex lg:space-x-9 lg:-mb-12">
                <Link className='select-none' href="/">Home</Link>
                <Link className='select-none' href="/contact">Photography</Link>
                <Link className='select-none' href="/">Websites</Link>
                <Link className='select-none' href="/">Contact</Link>
              </div>

              <div className='hidden lg:block lg:absolute lg:top-10 lg:right-8 xl:top-14 xl:right-12'>
                <svg width="163" height="7" viewBox="0 0 163 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="156" y1="0.5" x2="163" y2="0.5" stroke="#565656"/>
                  <line x1="104" y1="0.5" x2="111" y2="0.5" stroke="#565656"/>
                  <line x1="52" y1="0.5" x2="59" y2="0.5" stroke="#565656"/>
                  <line y1="0.5" x2="7" y2="0.5" stroke="#565656"/>
                  <line x1="162.5" x2="162.5" y2="7" stroke="#565656"/>
                  <line x1="110.5" x2="110.5" y2="7" stroke="#565656"/>
                  <line x1="58.5" x2="58.5" y2="7" stroke="#565656"/>
                  <line x1="6.5" x2="6.5" y2="7" stroke="#565656"/>
                </svg>
              </div>

              <div>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className='select-none lg:hidden cursor-pointer' onClick={menuToggle}>
                  <line x1="30" y1="15.5" x2="35" y2="15.5" stroke="#565656"/>
                  <line x1="30" y1="0.5" x2="35" y2="0.5" stroke="#565656"/>
                  <line x1="30" y1="30.5" x2="35" y2="30.5" stroke="#565656"/>
                  <line x1="15" y1="15.5" x2="20" y2="15.5" stroke="#565656"/>
                  <line x1="15" y1="0.5" x2="20" y2="0.5" stroke="#565656"/>
                  <line x1="15" y1="30.5" x2="20" y2="30.5" stroke="#565656"/>
                  <line y1="15.5" x2="5" y2="15.5" stroke="#565656"/>
                  <line y1="0.5" x2="5" y2="0.5" stroke="#565656"/>
                  <line x1="34.5" y1="20" x2="34.5" y2="15" stroke="#565656"/>
                  <line x1="34.5" y1="5" x2="34.5" stroke="#565656"/>
                  <line x1="34.5" y1="35" x2="34.5" y2="30" stroke="#565656"/>
                  <line x1="19.5" y1="20" x2="19.5" y2="15" stroke="#565656"/>
                  <line x1="19.5" y1="5" x2="19.5" stroke="#565656"/>
                  <line x1="19.5" y1="35" x2="19.5" y2="30" stroke="#565656"/>
                  <line x1="4.5" y1="20" x2="4.5" y2="15" stroke="#565656"/>
                  <line x1="4.5" y1="5" x2="4.5" stroke="#565656"/>
                </svg>
              </div>
          </nav>

          <div className={`mobile-menu ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-all w-screen h-screen-safe absolute top-0 left-0 z-50 bg-white lg:hidden`}>
            <div className='absolute top-6 left-6 md:left-8 md:top-5'>
              <div className="relative w-[120px] h-[65px] xl:w-40 xl:h-32">
                <Link href="/">
                    <Image className="cursor-pointer" alt="GoodWeird Logo" src="/images/logoTerezie.png" layout="fill" objectFit="contain" />
                </Link>
              </div>
            </div>
            <div className='close-btn absolute select-none w-auto right-8 top-9 md:top-8 cursor-pointer' onClick={menuToggle}>
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

            <div className='mt-[10rem] ml-6 flex flex-col md:ml-8'>
                <Link className='link select-none mb-6' href="/">Home</Link>
                <Link className='link select-none' href="/contact">Photography</Link>
                <Link className='link select-none my-6' href="/">Websites</Link>
                <Link className='link select-none' href="/">Contact</Link>
            </div>
            
            <div className='absolute bottom-[245px] right-8'>
              <svg width="1" height="240" viewBox="0 0 1 240" fill="none" xmlns="http://www.w3.org/2000/svg">
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