import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import useScrollPosition from '../hooks/scrollPosition';
import { useRouter } from 'next/router';

export default function Navbar(data) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollPosition = useScrollPosition();

  const router = useRouter();


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
      <div className="w-full bg-lightWhite xl:mb-4">
          <nav className="bg-transparent relative flex justify-between items-center py-6 pl-6 pr-8 md:py-5 md:px-8 lg:px-12 lg:py-8 xl:pt-12 xl:pb-8 xl:px-12 max-w-1440px xl:m-auto">
              <div className="nav-logo flex items-center justify-start md:justify-center ">
                <div className="relative w-120px h-65px">
                  <Link href="/">
                      <Image className="cursor-pointer object-contain" alt="GoodWeird Logo" src="/images/logoTerezie.png" fill />
                  </Link>
                </div>
              </div>
              <div className='hidden lg:block lg:border-b-[1px] lg:border-black lg:-mb-12 lg:w-full lg:mx-12 '></div>
              <div className="hidden lg:flex lg:space-x-9 lg:-mb-12">
                <Link className={`${router.pathname == "/" ? "text-pink anim_underline anim_underline_active" : "anim_underline"} pb-2 linkDesktop`} href="/">Home</Link>
                <Link className={`${router.pathname == "/portfolio" ? "text-pink anim_underline anim_underline_active" : "anim_underline"} pb-2 linkDesktop`} href="/portfolio">Portfolio</Link>
                <Link className={`${router.pathname == "/contact" ? "text-pink anim_underline anim_underline_active" : "anim_underline"} pb-2 linkDesktop`} href="/contact">Contact</Link>
              </div>

              <div className='hidden lg:block lg:absolute lg:top-10 lg:right-12 xl:top-14 xl:right-12'>
                <svg width="235" height="16" viewBox="0 0 235 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M231.233 9.58582L229.533 16L228 9.55039L224 7.90255L227.75 6.53821L229.417 0L231.167 6.39646L235 8.00886L231.233 9.58582Z" fill="black"/>
                  <path d="M175.233 9.58582L173.533 16L172 9.55039L168 7.90255L171.75 6.53821L173.417 0L175.167 6.39646L179 8.00886L175.233 9.58582Z" fill="black"/>
                  <path d="M119.233 9.58582L117.533 16L116 9.55039L112 7.90255L115.75 6.53821L117.417 0L119.167 6.39646L123 8.00886L119.233 9.58582Z" fill="black"/>
                </svg>
              </div>

              <div>
                <svg width="39" height="42" viewBox="0 0 39 42" fill="none" xmlns="http://www.w3.org/2000/svg" className='select-none lg:hidden cursor-pointer' onClick={menuToggle}>
                  <g clipPath="url(#clip0_936_242)">
                  <path d="M4.60303 5.99114L3.52121 10L2.54545 5.96899L0 4.93909L2.38636 4.08638L3.44697 0L4.56061 3.99779L7 5.00554L4.60303 5.99114Z" fill="black"/>
                  </g>
                  <g clipPath="url(#clip1_936_242)">
                  <path d="M4.60303 21.9911L3.52121 26L2.54545 21.969L0 20.9391L2.38636 20.0864L3.44697 16L4.56061 19.9978L7 21.0055L4.60303 21.9911Z" fill="black"/>
                  </g>
                  <path d="M20.603 37.9911L19.5212 42L18.5455 37.969L16 36.9391L18.3864 36.0864L19.447 32L20.5606 35.9978L23 37.0055L20.603 37.9911Z" fill="black"/>
                  <path d="M36.603 37.9911L35.5212 42L34.5455 37.969L32 36.9391L34.3864 36.0864L35.447 32L36.5606 35.9978L39 37.0055L36.603 37.9911Z" fill="black"/>
                  <g clipPath="url(#clip2_936_242)">
                  <path d="M20.603 5.99114L19.5212 10L18.5455 5.96899L16 4.93909L18.3864 4.08638L19.447 0L20.5606 3.99779L23 5.00554L20.603 5.99114Z" fill="black"/>
                  </g>
                  <g clipPath="url(#clip3_936_242)">
                  <path d="M20.603 21.9911L19.5212 26L18.5455 21.969L16 20.9391L18.3864 20.0864L19.447 16L20.5606 19.9978L23 21.0055L20.603 21.9911Z" fill="black"/>
                  </g>
                  <g clipPath="url(#clip4_936_242)">
                  <path d="M36.603 5.99114L35.5212 10L34.5455 5.96899L32 4.93909L34.3864 4.08638L35.447 0L36.5606 3.99779L39 5.00554L36.603 5.99114Z" fill="black"/>
                  </g>
                  <g clipPath="url(#clip5_936_242)">
                  <path d="M36.603 21.9911L35.5212 26L34.5455 21.969L32 20.9391L34.3864 20.0864L35.447 16L36.5606 19.9978L39 21.0055L36.603 21.9911Z" fill="black"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_936_242">
                  <rect width="7" height="10" fill="white"/>
                  </clipPath>
                  <clipPath id="clip1_936_242">
                  <rect width="7" height="10" fill="white" transform="translate(0 16)"/>
                  </clipPath>
                  <clipPath id="clip2_936_242">
                  <rect width="7" height="10" fill="white" transform="translate(16)"/>
                  </clipPath>
                  <clipPath id="clip3_936_242">
                  <rect width="7" height="10" fill="white" transform="translate(16 16)"/>
                  </clipPath>
                  <clipPath id="clip4_936_242">
                  <rect width="7" height="10" fill="white" transform="translate(32)"/>
                  </clipPath>
                  <clipPath id="clip5_936_242">
                  <rect width="7" height="10" fill="white" transform="translate(32 16)"/>
                  </clipPath>
                  </defs>
                </svg>
              </div>
          </nav>

          <div className={`mobile-menu ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-all w-screen h-screen absolute top-0 left-0 z-50 bg-lightWhite lg:hidden`}>
            <div className='absolute top-6 left-6 md:left-8 md:top-5'>
              <div className="relative w-120px h-65px xl:w-40 xl:h-32">
                <Link href="/">
                    <Image className="cursor-pointer object-contain" alt="GoodWeird Logo" src="/images/logoTerezie.png" fill />
                </Link>
              </div>
            </div>
            <div className='close-btn absolute select-none w-auto right-8 top-9 md:top-8 cursor-pointer' onClick={menuToggle}>
              <svg width="45" height="45" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <Link className='link select-none mb-4' onClick={menuToggle} href="/">Home</Link>
                <Link className='link select-none mb-4' onClick={menuToggle} href="/portfolio">Portfolio</Link>
                <Link className='link select-none' onClick={menuToggle} href="/contact">Contact</Link>
            </div>
            
            <div className='absolute bottom-[200px] right-9'>
              <svg width="1" height="240" viewBox="0 0 1 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="439.018" x2="0.5" y2="-3.05176e-05" stroke="#565656"/>
              </svg>
            </div>

            <div className='absolute bottom-10 right-8'>
              <svg width="11" height="116" viewBox="0 0 11 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.23333 9.58582L5.53333 16L4 9.55039L0 7.90255L3.75 6.53821L5.41667 0L7.16667 6.39646L11 8.00886L7.23333 9.58582Z" fill="black"/>
                <path d="M7.23333 59.5858L5.53333 66L4 59.5504L0 57.9025L3.75 56.5382L5.41667 50L7.16667 56.3965L11 58.0089L7.23333 59.5858Z" fill="black"/>
                <path d="M7.23333 109.586L5.53333 116L4 109.55L0 107.903L3.75 106.538L5.41667 100L7.16667 106.396L11 108.009L7.23333 109.586Z" fill="black"/>
              </svg>
            </div>

          </div>

      </div>
    </>
  );
}