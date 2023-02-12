import Image from "next/image";

export default function HeroSlider(data) {
    return (
        <>
            <div className='px-6 my-4'>
                <div className="relative w-[288px] h-[203px]">
                    <Image src="/images/slider/heroSliderFirst.png" alt="me" objectFit="cover" layout="fill"/>
                </div>
                <div>
                    <h2 className="h2">impsum ipsum ...</h2>
                    <p className="p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Aliquam erat volutpat.</p>
                    <button>More</button>
                </div>
            </div>
        </>
    );
}