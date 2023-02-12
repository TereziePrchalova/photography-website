import Image from "next/image";

export default function About(data) {
    return (
        <>
            <div className=''>
                <div className="flex pl-6">
                    <h2 className='h2 text-transparent bg-clip-text bg-gradient-to-br from-orange to-purple w-[250px]'>A little bit about me</h2>
                    <div className="w-[35vw] m-auto md:w-[75vw]">
                        <svg width="100%" height="1" viewBox="0 0 100% 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="100%" y2="0.5" stroke="#E597C8"/>
                        </svg>
                    </div>
                </div>
                <div className="px-6">
                    <div className="flex mt-4 mb-6">
                        <div className="relative w-[140px] h-[140px] mr-3">
                            <Image src="/images/first.png" alt="me" objectFit="cover" layout="fill"/>
                        </div>
                        <div className="relative w-[140px] h-[140px]">
                            <Image src="/images/second.jpg" alt="me" objectFit="cover" layout="fill"/>
                        </div>
                    </div>
                    <div className="w-[90%]">
                        <p className='p mb-3'>I'm a high school student, IT. Although I study IT, which is really a technical field, I am more of an artistic type. I am based in Czech Republic, near Brno. Photography has been taking me since I was little. In 2017, I bought my first camera and that's how it all started.</p>
                        <p className="p">The beginnings were interesting, I tried to do my best, but not always succeeded. In 2019 I started taking pictures for Man and Faith. I learned a lot there, more than anywhere else. A moment later, I started photographing weddings, concerts and people in general and I found myself in photographing emotions. I'm also interested in building websites and travelling.</p>
                    </div>
                </div>
            </div>
        </>
    );
}