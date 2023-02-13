import Image from "next/image";

export default function HeroSlider(data) {
    return (
        <>
            <div className='px-6 my-4 md:hidden'>
                <div className="relative w-[285px] h-[190px]">
                    <Image src="/images/slider/heroSliderFirst.jpeg" alt="me" objectFit="cover" layout="fill"/>
                </div>
                <div className="my-4">
                    <h2 className="h2">Moments that matter</h2>
                    <p className="p w-[300px] mt-1 mb-6">If you're looking for an artist to capture your milestones and moments in-between, we just might be a match made in heaven!</p>
                    <a href="https://eu.zonerama.com/TereziePrchalova/743152" target="_blank">
                        <button className="w-[150px] h-[40px] bg-black text-white">More</button>
                    </a>
                </div>
                <div className="flex mt-8 mb-12">
                    <div className="relative w-[150px] h-[225px] mr-3">
                        <Image src="/images/slider/heroSliderSecond.jpg" alt="me" objectFit="cover" layout="fill"/>
                    </div>
                    <div>
                        <div className="relative w-[125px] h-[125px] mb-3">
                            <Image src="/images/slider/heroSliderThird.jpg" alt="me" objectFit="cover" layout="fill"/>
                        </div>
                        <div className="relative w-[125px] h-[125px]">
                            <Image src="/images/slider/heroSliderFourth.jpg" alt="me" objectFit="cover" layout="fill"/>
                        </div>

                    </div>
                </div>
            </div>
            <div className='hidden px-6 my-4 md:block'>
                <div className="flex">
                    <div className="relative w-[292px] h-[437px]">
                        <Image src="/images/slider/heroSliderSecond.jpg" alt="me" objectFit="cover" layout="fill"/>
                    </div>
                    <div className="ml-4 flex flex-col justify-between">
                        <div className="relative w-[279px] h-[203px]">
                            <Image src="/images/slider/heroSliderFirst.jpg" alt="me" objectFit="cover" layout="fill"/>
                        </div>
                        <h2 className="h2">Moments that matter</h2>
                        <p className="p w-[300px] mt-1 mb-6">If you're looking for an artist to capture your milestones and moments in-between, we just might be a match made in heaven!</p>
                        <a href="https://eu.zonerama.com/TereziePrchalova/743152" target="_blank">
                            <button className="w-[150px] h-[40px] bg-black text-white">More</button>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col mt-8 mb-12">
                    <div className="relative w-[443px] h-[266px] mr-3">
                        <Image src="/images/slider/heroSliderFirst.jpg" alt="me" objectFit="cover" layout="fill"/>
                    </div>
                    <div className="flex">
                        <div className="relative w-[125px] h-[125px] mb-3">
                            <Image src="/images/slider/heroSliderThird.jpg" alt="me" objectFit="cover" layout="fill"/>
                        </div>
                        <div className="relative w-[125px] h-[125px]">
                            <Image src="/images/slider/heroSliderFourth.jpg" alt="me" objectFit="cover" layout="fill"/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}