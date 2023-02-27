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
            <div className='m-auto max-w-[1440px]'>
                <div className="hidden mt-4 mb-14 m-auto md:flex md:flex-col md:items-center lg:flex lg:flex-row lg:w-[1024px] lg:justify-center xl:justify-start xl:w-auto xl:mx-12 xl:mb-[10rem] 2xl:justify-center">
                    <div className="flex">
                        <div className="relative w-[320px] h-[470px] lg:w-[250px] lg:h-[403px] xl:w-[330px] xl:h-[482px] 2xl:w-[390px] 2xl:h-[542px]">
                            <Image src="/images/slider/heroSliderSecond.jpeg" alt="me" objectFit="cover" layout="fill"/>
                        </div>
                        <div className="ml-4 flex flex-col justify-between xl:ml-6">
                            <div className="relative w-[360px] h-[240px] lg:w-[330px] lg:h-[230px] xl:w-[390px] xl:h-[260px] 2xl:w-[450px] 2xl:h-[300px]">
                                <Image src="/images/slider/heroSliderFirst.jpeg" alt="me" objectFit="cover" layout="fill"/>
                            </div>
                            <h2 className="heroSubheadline md:-mb-2 lg:mt-4">Moments that matter</h2>
                            <p className="heroText w-[300px] mt-1 mb-6 xl:w-[390px]">If you're looking for an artist to capture your milestones and moments in-between, we just might be a match made in heaven!</p>
                            <a href="https://eu.zonerama.com/TereziePrchalova/743152" target="_blank">
                                <button className="w-[150px] h-[40px] bg-black text-white transition-all duration-500 hover:bg-orange">More</button>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col md:w-[696px] lg:w-auto lg:ml-4 xl:ml-6">
                        <div className="hidden relative w-[486px] h-[320px] mr-3 lg:mr-0 lg:block lg:w-[330px] lg:h-[230px] xl:w-[420px] xl:h-[260px] 2xl:w-[460px] 2xl:h-[300px]">
                            <Image src="/images/slider/heroSliderConcert.jpg" alt="me" objectFit="cover" layout="fill"/>
                        </div>
                        <div className="flex mt-4 xl:mt-6">
                            <div className="relative w-[235px] h-[235px] mr-4 lg:w-[157px] lg:h-[157px] xl:w-[198px] xl:h-[198px] 2xl:w-[218px] 2xl:h-[218px] xl:mr-6">
                                <Image src="/images/slider/heroSliderThird.jpg" alt="me" objectFit="cover" layout="fill"/>
                            </div>
                            <div className="relative w-[235px] h-[235px] lg:w-[157px] lg:h-[157px] xl:w-[198px] xl:h-[198px] 2xl:w-[218px] 2xl:h-[218px]">
                                <Image src="/images/slider/heroSliderFourth.jpg" alt="me" objectFit="cover" layout="fill"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}