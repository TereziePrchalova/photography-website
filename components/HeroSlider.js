import Image from "next/image";

export default function HeroSlider(data) {
    return (
        <>
            <div className='px-6 my-4'>
                <div className="relative w-[288px] h-[203px]">
                    <Image src="/images/slider/heroSliderFirst.jpg" alt="me" objectFit="cover" layout="fill"/>
                </div>
                <div className="my-4">
                    <h2 className="h2">Moments that matter</h2>
                    <p className="p w-[90%] mt-1 mb-6">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Aliquam erat volutpat.</p>
                    <a href="https://eu.zonerama.com/TereziePrchalova/743152" target="_blank">
                        <button className="w-[150px] h-[40px] bg-black text-white">More</button>
                    </a>
                </div>
                <div className="flex mt-8 mb-12">
                    <div className="relative w-[150px] h-[220px] mr-3">
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
        </>
    );
}