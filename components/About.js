import Image from "next/image";

export default function About(data) {
    return (
        <>
            <div className='max-w-[1440px] m-auto'>
                <div className="flex justify-between w-[100vw] pl-6 md:pl-8">
                    <div className="w-[225px] mr-2 md:w-[295px] md:mr-3 xl:w-[445px] xl:mr-4">
                        <h2 className='h2 text-transparent bg-clip-text bg-gradient-to-br from-orange to-purple w-max'>A little bit about me</h2>
                    </div>
                    <div className="w-[100%] my-auto">
                        <svg width="100%" height="1" viewBox="0 0 100% 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="100%" y2="0.5" stroke="#E597C8"/>
                        </svg>
                    </div>
                </div>
                <div className="px-6 md:pl-8 xl:flex xl:my-6">
                    <div className="flex mt-4 mb-6 xl:my-0">
                        <div className="relative w-[140px] h-[140px] mr-3 md:mr-4 md:w-[225px] md:h-[225px] xl:mr-6 xl:w-[300px] xl:h-[300px]">
                            <Image src="/images/first.jpg" alt="me" objectFit="cover" layout="fill"/>
                        </div>
                        <div className="relative w-[140px] h-[140px] md:w-[225px] md:h-[225px] xl:w-[300px] xl:h-[300px]">
                            <Image src="/images/second.jpg" alt="me" objectFit="cover" layout="fill"/>
                        </div>
                    </div>
                    <div className="w-[300px] md:w-[400px] xl:w-[500px]">
                        <p className='p mb-3'>I'm a high school student, IT. Although I study IT, which is really a technical field, I am more of an artistic type. I am based in Czech Republic, near Brno. Photography has been taking me since I was little.</p>
                        <p className="p">The beginnings were interesting, I tried to do my best, but not always succeeded. I've learned a lot along the way and a moment later, I started photographing weddings, concerts and people in general and I found myself in photographing emotions.</p>
                    </div>
                </div>
            </div>
        </>
    );
}