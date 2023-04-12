import Image from "next/image";

export default function About(data) {
    return (
        <>
            <div className='max-w-1440px m-auto'>
                <div className="flex justify-between w-screen pl-6 md:pl-10 xl:pl-12">
                    <div className="mr-3 xl:mr-4">
                        <h2 className='h2 text-purple w-max'>A little bit about me</h2>
                    </div>
                    <div className="w-full my-auto pt-1">
                        <svg width="100%" height="1" viewBox="0 0 100% 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="100%" y2="0.5" stroke="#af99cc"/>
                        </svg>
                    </div>
                </div>
                <div className="mt-8 mb-14 md:flex md:mx-auto md:w-696px lg:w-942px lg:flex lg:my-10 xl:w-1188px xl:my-14 xl:mb-[8rem] 2xl:w-1344px">
                    <div className="flex justify-center mt-1 mb-6 md:my-0 md:flex md:flex-col xl:flex-row">
                        <div className="relative w-157px h-157px mr-4 md:mb-4 lg:mr-4 xl:mb-0 xl:mr-6 xl:w-255px xl:h-255px">
                            <Image className="rounded-[6px] object-cover" src="/images/first.jpg" alt="photo" fill/>
                        </div>
                        <div className="relative w-157px h-157px xl:w-255px xl:h-255px">
                            <Image className="rounded-[6px] object-cover" src="/images/second.jpg" alt="photo" fill/>
                        </div>
                    </div>
                    <div className="m-auto w-320px md:w-420px md:mt-0 md:mx-0 xl:w-510px xl:ml-6">
                        <p className='p mb-3 md:mb-9 xl:mb-4'>I'm a high school student, IT. Although I study IT, which is really a technical field, I am more of an artistic type. I am based in Czech Republic, near Brno. Photography has been taking me since I was little.</p>
                        <p className="p">The beginnings were interesting, I tried to do my best, but not always succeeded. I've learned a lot along the way and a moment later, I started photographing weddings, concerts and people in general and I found myself in photographing emotions.</p>
                    </div>
                </div>
            </div>
        </>
    );
}