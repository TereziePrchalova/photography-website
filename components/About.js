import Image from "next/image";

export default function About(data) {
    return (
        <>
            <div className=''>
                <div className="flex pl-6">
                    <h1 className='h2 text-transparent bg-clip-text bg-gradient-to-br from-orange to-purple w-[250px]'>A little bit about me</h1>
                    <div className="w-[35vw] m-auto md:w-[75vw]">
                        <svg width="100%" height="1" viewBox="0 0 100% 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="100%" y2="0.5" stroke="#E597C8"/>
                        </svg>
                    </div>
                </div>
                <div className="px-6">
                    <div className="flex mt-2 mb-6">
                        <div className="relative w-[140px] h-[140px] mr-3">
                            <Image src="/images/first.png" alt="me" objectFit="cover" layout="fill"/>
                        </div>
                        <div className="relative w-[140px] h-[140px]">
                            <Image src="/images/second.png" alt="me" objectFit="cover" layout="fill"/>
                        </div>
                    </div>
                    <div className="w-[90%]">
                        <p className='p mb-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Aliquam erat volutpat. </p>
                        <p className="p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Aliquam erat volutpat. </p>
                    </div>
                </div>
            </div>
        </>
    );
}