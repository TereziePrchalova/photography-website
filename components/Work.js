import Image from "next/image";

export default function Work(data) {
    return (
        <>
            <div className=''>
                <div className="flex justify-between w-[100vw] pl-6 md:pl-8">
                    <div className="w-[140px] mr-3 md:w-[155px] md:mr-3 xl:w-[445px] xl:mr-4">
                        <h2 className='h2 text-black'>My work</h2>
                    </div>
                    <div className="w-[100%] my-auto">
                        <svg width="100%" height="1" viewBox="0 0 100% 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="100%" y2="0.5" stroke="#565656"/>
                        </svg>
                    </div>
                </div>
                <div className="my-6">
                    <div>
                        <div className="relative m-auto w-[330px] h-[220px] md:w-[330px] md:h-[220px] xl:mr-6 xl:w-[300px] xl:h-[300px]">
                            <Image src="/images/slider/heroSliderConcert.jpg" alt="me" objectFit="cover" layout="fill"/>
                        </div>
                        <div className="flex justify-center mt-4">
                            <div className="relative w-[157px] h-[157px] mr-4 md:w-[157px] md:h-[157px] xl:mr-6 xl:w-[300px] xl:h-[300px]">
                                <Image src="/images/slider/heroSliderFourth.jpg" alt="me" objectFit="cover" layout="fill"/>
                            </div>
                            <div className="relative w-[157px] h-[157px] md:w-[157px] md:h-[157px] xl:mr-6 xl:w-[300px] xl:h-[300px]">
                                <Image src="/images/first.jpg" alt="me" objectFit="cover" layout="fill"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <div className="relative w-[194px] h-[291px] mr-4 md:w-[225px] md:h-[225px] xl:mr-6 xl:w-[300px] xl:h-[300px]">
                            <Image src="/images/slider/heroSliderSecond.jpeg" alt="me" objectFit="cover" layout="fill"/>
                        </div>
                        <a href="https://eu.zonerama.com/TereziePrchalova/743152" target="_blank">
                            <button className="w-[120px] h-[35px] bg-black text-white rounded-[2px]">Go to</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
