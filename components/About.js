import Image from "next/image";

export default function About(data) {
    return (
        <>
            <div className='max-w-[1440px] m-auto'>
                <div className="flex justify-between w-[100vw] pl-6 md:pl-10 xl:pl-12">
                    <div className="w-[225px] mr-3 md:w-[295px] md:mr-3 xl:w-[445px] xl:mr-4">
                        <h2 className='h2 text-transparent bg-clip-text bg-gradient-to-br from-orange to-purple w-max'>A little bit about me</h2>
                    </div>
                    <div className="w-[100%] my-auto">
                        <svg width="100%" height="1" viewBox="0 0 100% 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="100%" y2="0.5" stroke="#E597C8"/>
                        </svg>
                    </div>
                </div>
                <div className="mt-8 mb-14 md:flex md:mx-auto md:w-[696px] lg:w-[942px] lg:flex lg:my-10 xl:w-[1188px] xl:my-14 2xl:w-[1344px]">
                    <div className="flex justify-center mt-1 mb-6 md:my-0 md:flex md:flex-col xl:flex-row">
                        <div className="relative w-[157px] h-[157px] mr-4 md:mb-4 lg:mr-4 xl:mb-0 xl:mr-6 xl:w-[255px] xl:h-[255px]">
                            <Image src="/images/first.jpg" alt="me" objectFit="cover" layout="fill"/>
                        </div>
                        <div className="relative w-[157px] h-[157px] xl:w-[255px] xl:h-[255px]">
                            <Image src="/images/second.jpg" alt="me" objectFit="cover" layout="fill"/>
                        </div>
                    </div>
                    <div className="m-auto w-[320px] md:w-[400px] md:mt-0 md:mx-0 lg:w-[420px] xl:w-[480px] xl:ml-6">
                        <p className='p mb-3 md:mb-9 xl:mb-4'>I'm a high school student, IT. Although I study IT, which is really a technical field, I am more of an artistic type. I am based in Czech Republic, near Brno. Photography has been taking me since I was little.</p>
                        <p className="p">The beginnings were interesting, I tried to do my best, but not always succeeded. I've learned a lot along the way and a moment later, I started photographing weddings, concerts and people in general and I found myself in photographing emotions.</p>
                    </div>
                </div>
            </div>
        </>
    );
}