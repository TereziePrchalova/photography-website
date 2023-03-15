import Image from "next/image";
import Link from "next/link";

export default function Work(data) {
    return (
        <>
            <div className='max-w-[1440px] m-auto'>
                <div className="flex justify-between w-[100vw] pl-6 md:pl-10 xl:pl-12">
                    <div className="w-[140px] mr-3 md:w-[155px] md:mr-3 xl:w-[170px] xl:mr-4">
                        <h2 className='h2 text-black'>My work</h2>
                    </div>
                    <div className="w-[100%] my-auto">
                        <svg width="100%" height="1" viewBox="0 0 100% 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="100%" y2="0.5" stroke="#565656"/>
                        </svg>
                    </div>
                </div>
                <div className="mt-8 pb-14 md:flex md:w-[696px] md:mx-auto lg:w-[942px] xl:w-[1188px] 2xl:w-[1344px]">
                    <div>
                        <div className="relative m-auto w-[330px] h-[220px] md:w-[310px] md:h-[200px] lg:w-[420px] lg:h-[280px] xl:w-[510px] xl:h-[340px]">
                            <Image className="rounded-[12px]" src="/images/slider/heroSliderConcert.jpg" alt="me" objectFit="cover" layout="fill"/>
                        </div>
                        <div className="flex justify-center mt-4 xl:mt-6">
                            <div className="relative w-[157px] h-[157px] mr-4 md:w-[147px] md:h-[147px] lg:w-[202px] lg:h-[202px] xl:w-[243px] xl:h-[243px] xl:mr-6">
                                <Image className="rounded-[12px]" src="/images/slider/heroSliderFourth.jpg" alt="me" objectFit="cover" layout="fill"/>
                            </div>
                            <div className="relative w-[157px] h-[157px] md:w-[147px] md:h-[147px] lg:w-[202px] lg:h-[202px] xl:w-[243px] xl:h-[243px]">
                                <Image className="rounded-[12px]" src="/images/first.jpg" alt="me" objectFit="cover" layout="fill"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4 md:mt-0 md:ml-4 md:relative xl:ml-6">
                        <div class="group relative mr-4 w-[194px] md:w-[235px] lg:w-[332px] xl:mr-6 xl:w-[404px]">
                            <div className="relative object-cover w-[194px] h-[291px] md:w-[235px] md:h-[363px] lg:w-[332px] lg:h-[498px] xl:w-[404px] xl:h-[607px]">
                                <Image className="rounded-[12px]" src="/images/slider/heroSliderSecond.jpeg" alt="me" objectFit="cover" layout="fill"/>
                            </div>
                            <Link href="/portfolio">
                                <div class="absolute top-0 rounded-[12px] left-0 w-full h-full mr-4 flex xl:mr-6 bg-opacity-60 opacity-0 flex-col justify-center items-center bg-white group-hover:opacity-100 duration-500"> 
                                    <p class="work opacity-100 text-black">✨ Portraits ✨</p>
                                </div>
                            </Link>
                        </div>
                        <a href="/portfolio">
                            <button className="w-[120px] h-[35px] bg-black text-white rounded-[6px] md:absolute md:bottom-0 lg:w-[150px] lg:h-[40px] transition-all duration-500 hover:bg-orange">Go to</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
