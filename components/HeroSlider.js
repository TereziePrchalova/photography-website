import Image from "next/image";

export default function HeroSlider(data) {
    return (
        <>
            <div className='my-4 md:hidden'>
                <div className="relative w-[330px] h-[220px] m-auto">
                    <Image src="/images/slider/heroSliderFirst.jpeg" alt="me" objectFit="cover" layout="fill"/>
                </div>
                <div className="my-4 mx-auto w-[330px]">
                    <h2 className="h2">Moments that matter</h2>
                    <p className="p w-[300px] mt-1 mb-6">If you're looking for an artist to capture your milestones and moments in-between, we just might be a match made in heaven!</p>
                    <a href="https://eu.zonerama.com/TereziePrchalova/743152" target="_blank">
                        <button className="w-[120px] h-[35px] bg-black text-white rounded-[2px]">More</button>
                    </a>
                </div>
                <div className="flex justify-center mt-8 mb-12">
                    <div className="relative w-[160px] h-[240px] mr-4">
                        <Image src="/images/slider/heroSliderSecond.jpeg" alt="me" objectFit="cover" layout="fill"/>
                    </div>
                    <div>
                        <div className="relative w-[154px] h-[154px] mb-4">
                            <Image src="/images/slider/heroSliderThird.jpg" alt="me" objectFit="cover" layout="fill"/>
                        </div>
                        <div className="relative w-[154px] h-[154px]">
                            <Image src="/images/slider/heroSliderFourth.jpg" alt="me" objectFit="cover" layout="fill"/>
                        </div>

                    </div>
                </div>
            </div>
            <div className='hidden mt-4 mb-14 max-w-[1440px] md:flex md:flex-col md:items-center m-auto lg:flex lg:flex-row xl:px-12 xl:mb-[10rem]'>
                <div className="flex">
                    <div className="relative w-[320px] h-[470px] lg:w-[250px] lg:h-[403px] xl:w-[330px] xl:h-[482px]">
                        <Image src="/images/slider/heroSliderSecond.jpeg" alt="me" objectFit="cover" layout="fill"/>
                    </div>
                    <div className="ml-4 flex flex-col justify-between xl:ml-6">
                        <div className="relative w-[360px] h-[240px] lg:w-[330px] lg:h-[230px] xl:w-[390px] xl:h-[260px]">
                            <Image src="/images/slider/heroSliderFirst.jpeg" alt="me" objectFit="cover" layout="fill"/>
                        </div>
                        <h2 className="heroSubheadline md:-mb-2 lg:mt-4">Moments that matter</h2>
                        <p className="heroText w-[300px] mt-1 mb-6 xl:w-[390px]">If you're looking for an artist to capture your milestones and moments in-between, we just might be a match made in heaven!</p>
                        <a href="https://eu.zonerama.com/TereziePrchalova/743152" target="_blank">
                            <button className="w-[150px] h-[40px] bg-black text-white transition-all duration-500 hover:bg-orange">More</button>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col mt-4 md:w-[696px] lg:mt-0 lg:ml-4 xl:ml-6">
                    <div className="relative w-[486px] h-[320px] mr-3 lg:w-[330px] lg:h-[230px] xl:w-[420px] xl:h-[260px]">
                        <Image src="/images/slider/heroSliderConcert.jpg" alt="me" objectFit="cover" layout="fill"/>
                    </div>
                    <div className="flex mt-4 xl:mt-6">
                        <div className="relative w-[235px] h-[235px] mr-4 lg:w-[157px] lg:h-[157px] xl:w-[198px] xl:h-[198px] xl:mr-6">
                            <Image src="/images/slider/heroSliderThird.jpg" alt="me" objectFit="cover" layout="fill"/>
                        </div>
                        <div className="relative w-[235px] h-[235px] lg:w-[157px] lg:h-[157px] xl:w-[198px] xl:h-[198px]">
                            <Image src="/images/slider/heroSliderFourth.jpg" alt="me" objectFit="cover" layout="fill"/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}