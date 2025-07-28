import Image from "next/image";
import Link from "next/link";

export default function Work(data) {
    return (
        <>
            <div className='container reveal fade-bottom md:flex max-w-1440px m-auto mb-14 md:mt-20 md:mx-auto md:justify-center xl:mb-20'>
                <h2 className='relative z-10 w-330px m-auto font-PoppinsBold tracking-wide md:hidden text-60px text-black'>My work</h2>
                <div className="hidden md:flex md:w-120px flex-col justify-between md:mr-4 lg:w-[150px] xl:w-[190px] xl:mr-6">
                    <h2 className='relative z-10 w-330px font-PoppinsBold tracking-wide text-60px text-black'>My work</h2>
                    <div className="">
                        <a href="/photography">
                            <button className="button hidden md:block w-120px h-35px bg-black text-white rounded-[6px] md:absolute md:bottom-0 lg:w-150px lg:h-40px xl:w-[190px] xl:h-[50px] transition-all duration-500 hover:bg-grey">Portfolio</button>
                        </a>
                    </div>
                </div>
                <div className="-mt-8 md:flex md:mt-0 xl:mt-12">
                    <div>
                        <div className="flex justify-center">
                            <div className="group relative">
                                <div className="relative w-330px h-220px md:w-310px md:h-200px lg:w-420px lg:h-280px xl:w-510px xl:h-340px">
                                    <Image className="object-cover" src="/images/events/2.jpg" alt="photo" fill/>
                                </div>
                                <Link href="/photography?section=event">
                                    <div class="absolute top-0 left-0 w-330px md:w-full h-full flex bg-opacity-60 opacity-0 flex-col justify-center items-center bg-grey group-hover:opacity-100 duration-500"> 
                                        <p class="work text-white">Events</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center mt-4 xl:mt-6">
                            <div className="group relative cursor-pointer mr-4 xl:mr-6">
                                <div className="relative w-157px h-157px md:w-147px md:h-147px lg:w-202px lg:h-202px xl:w-243px xl:h-243px">
                                    <Image className="object-cover" src="/images/events/5.jpg" alt="photo" fill/>
                                </div>
                                <Link href="/photography?section=event">
                                    <div class="absolute top-0 left-0 w-full h-full flex bg-opacity-60 opacity-0 flex-col justify-center items-center bg-grey group-hover:opacity-100 duration-500"> 
                                        <p class="work text-white">Events</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="group relative cursor-pointer">
                                <div className="relative w-157px h-157px md:w-147px md:h-147px lg:w-202px lg:h-202px xl:w-243px xl:h-243px">
                                    <Image className="object-cover object-center" src="/images/portraits/3.jpg" alt="photo" fill/>
                                </div>
                                <Link href="/photography?section=portrait">
                                    <div class="absolute top-0 left-0 w-full h-full flex bg-opacity-60 opacity-0 flex-col justify-center items-center bg-grey group-hover:opacity-100 duration-500"> 
                                        <p class="work text-white">Portraits</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4 md:mt-0 md:ml-4 md:relative xl:ml-6">
                        <div class="group relative cursor-pointer">
                            <div className="relative object-cover w-194px h-291px md:w-235px md:h-363px lg:w-332px lg:h-498px xl:w-404px xl:h-607px">
                                <Image className="object-cover" src="/images/weddings/2.jpg" alt="photo" fill/>
                            </div>
                            <Link href="/photography?section=wedding">
                                <div class="absolute top-0 left-0 w-full h-full flex bg-opacity-60 opacity-0 flex-col justify-center items-center bg-grey group-hover:opacity-100 duration-500"> 
                                    <p class="work text-white">Weddings</p>
                                </div>
                            </Link>
                        </div>
                        <a href="/photography">
                            <button className="button md:hidden w-120px h-35px bg-black text-white ml-4 rounded-[6px] transition-all duration-500 hover:bg-grey">Portfolio</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
