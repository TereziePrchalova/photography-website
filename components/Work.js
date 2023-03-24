import Image from "next/image";
import Link from "next/link";

export default function Work(data) {
    return (
        <>
            <div className='max-w-1440px m-auto'>
                <div className="flex justify-between w-screen pl-6 md:pl-10 xl:pl-12">
                    <div className="mr-3 xl:mr-4">
                        <h2 className='h2 text-black w-max'>My work</h2>
                    </div>
                    <div className="w-full my-auto pt-1">
                        <svg width="100%" height="1" viewBox="0 0 100% 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="100%" y2="0.5" stroke="#565656"/>
                        </svg>
                    </div>
                </div>
                <div className="mt-8 pb-14 md:flex md:w-696px md:mx-auto lg:w-942px xl:w-1188px xl:mt-12 xl:pb-20 2xl:w-1344px">
                    <div>
                        <div className="flex justify-center">
                            <div className="group relative">
                                <div className="relative w-330px h-220px md:w-310px md:h-200px lg:w-420px lg:h-280px xl:w-510px xl:h-340px">
                                    <Image className="object-cover" src="/images/hero/heroSliderConcert.jpg" alt="me" fill/>
                                </div>
                                <Link href="/portfolio?section=concert">
                                    <div class="absolute top-0 left-0 w-330px md:w-full h-full flex bg-opacity-60 opacity-0 flex-col justify-center items-center bg-grey group-hover:opacity-100 duration-500"> 
                                        <p class="work text-white">Concerts</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center mt-4 xl:mt-6">
                            <div className="group relative cursor-pointer mr-4 xl:mr-6">
                                <div className="relative w-157px h-157px md:w-147px md:h-147px lg:w-202px lg:h-202px xl:w-243px xl:h-243px">
                                    <Image className="object-cover" src="/images/hero/heroSliderFourth.jpg" alt="me" fill/>
                                </div>
                                <Link href="/portfolio?section=wedding">
                                    <div class="absolute top-0 left-0 w-full h-full flex bg-opacity-60 opacity-0 flex-col justify-center items-center bg-grey group-hover:opacity-100 duration-500"> 
                                        <p class="work text-white">Weddings</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="group relative cursor-pointer">
                                <div className="relative w-157px h-157px md:w-147px md:h-147px lg:w-202px lg:h-202px xl:w-243px xl:h-243px">
                                    <Image className="object-cover" src="/images/first.jpg" alt="me" fill/>
                                </div>
                                <Link href="/portfolio?section=portrait">
                                    <div class="absolute top-0 left-0 w-full h-full flex bg-opacity-60 opacity-0 flex-col justify-center items-center bg-grey group-hover:opacity-100 duration-500"> 
                                        <p class="work text-white">Portraits</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4 md:mt-0 md:ml-4 md:relative xl:ml-6">
                        <div class="group relative cursor-pointer mr-4 xl:mr-6">
                            <div className="relative object-cover w-194px h-291px md:w-235px md:h-363px lg:w-332px lg:h-498px xl:w-404px xl:h-607px">
                                <Image className="object-cover" src="/images/hero/heroSliderSecond.jpeg" alt="me" fill/>
                            </div>
                            <Link href="/portfolio?section=portrait">
                                <div class="absolute top-0 left-0 w-full h-full flex bg-opacity-60 opacity-0 flex-col justify-center items-center bg-grey group-hover:opacity-100 duration-500"> 
                                    <p class="work text-white">Portraits</p>
                                </div>
                            </Link>
                        </div>
                        <a href="/portfolio">
                            <button className="button w-120px h-35px bg-black text-white rounded-[6px] md:absolute md:bottom-0 lg:w-150px lg:h-40px transition-all duration-500 hover:bg-pink">Portfolio</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
