import Image from "next/image";
import { use, useState } from "react";
import Img1 from "../public/images/portraits/3.jpg"
import Img2 from "../public/images/heroHighQuality/1.jpg"
import Img3 from "../public/images/concerts/5.jpg"
import Img4 from "../public/images/concerts/2.jpg"
import Img5 from "../public/images/weddings/14.jpg"

export default function Hero(data) {

    const [modal, setModal] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModal(true);
    }

    return (
        <>
            <div className='my-4 md:hidden'>
                <div className="relative w-330px h-220px m-auto">
                    <Image className="object-cover" src="/images/hero/3.jpg" alt="photo" fill/>
                </div>
                <div className="my-4 mx-auto w-330px">
                    <h2 className="h2">Moments that matter</h2>
                    <p className="p mt-1 mb-6">If you're looking for an artist to capture your milestones and moments in-between, we just might be a match made in heaven!</p>
                    <a href="/portfolio">
                        <button className="button w-120px h-35px bg-black text-white rounded-[6px]">More</button>
                    </a>
                </div>
                <div className="flex justify-center mt-8 mb-16">
                    <div className="relative w-160px h-240px mr-4">
                        <Image className="object-cover" src="/images/hero/1.jpg" alt="photo" fill/>
                    </div>
                    <div>
                        <div className="relative w-154px h-154px mb-4">
                            <Image className="object-cover object-left" src={Img3} alt="photo" fill/>
                        </div>
                        <div className="relative w-154px h-154px">
                            <Image className="object-cover object-left" src={Img4} alt="photo" fill/>
                        </div>

                    </div>
                </div>
            </div>

            <div className={`${modal ? "flex w-screen h-screen fixed top-0 left-0 justify-center items-center bg-white z-[200]" : "hidden" }`}>
                <Image className="object-contain m-auto max-w-[1512px]" src={tempImgSrc} alt="photo" fill/>
                <div className='close-btn fixed z-[201] select-none w-auto right-8 top-9 md:top-8 cursor-pointer' onClick={() => setModal(false)}>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3.03711" y="1.09048" width="12" height="3" rx="1" transform="rotate(44.3233 3.03711 1.09048)" fill="black"/>
                        <rect x="15.9629" y="17.9095" width="12" height="3" rx="1" transform="rotate(-135.677 15.9629 17.9095)" fill="black"/>
                        <rect x="11.6211" y="9.47495" width="12" height="3" rx="1" transform="rotate(134.323 11.6211 9.47495)" fill="black"/>
                        <rect x="7.37891" y="9.52505" width="12" height="3" rx="1" transform="rotate(-45.6767 7.37891 9.52505)" fill="black"/>
                    </svg>
                </div>
            </div>

            <div className='m-auto max-w-1440px'>
                <div className="hidden mt-4 mb-14 m-auto md:flex md:flex-col md:items-center md:mt-8 md:mb-20 lg:flex lg:flex-row lg:w-1024px lg:justify-center xl:w-auto xl:justify-center xl:mx-12 xl:mb-[7rem]">
                    <div className="flex">
                        <div className="group relative cursor-pointer" onClick={() => getImg(Img2)}>
                            <div className="relative w-320px h-470px lg:w-250px lg:h-403px xl:w-330px xl:h-482px 2xl:w-390px 2xl:h-542px">
                                <Image className="object-cover" src="/images/hero/1.jpg" alt="photo" fill/>
                            </div>
                            <div className="absolute top-0 left-0 h-full w-full bg-white bg-opacity-25 opacity-0 group-hover:opacity-100 duration-500"></div>
                        </div>
                        <div className="ml-4 flex flex-col justify-between xl:ml-6">
                            <div className="group relative cursor-pointer" onClick={() => getImg(Img1)}>
                                <div className="relative w-360px h-240px lg:w-330px lg:h-230px xl:w-390px xl:h-260px 2xl:w-450px 2xl:h-300px">
                                    <Image className="object-cover" src="/images/hero/3.jpg" alt="photo" fill/>
                                </div>
                                <div className="absolute top-0 left-0 h-full w-full bg-white bg-opacity-25 opacity-0 group-hover:opacity-100 duration-500"></div>
                            </div>
                            <h2 className="heroSubheadline md:-mb-2 lg:mt-2">Moments that matter</h2>
                            <p className="heroText w-358px mt-1 mb-6 lg:w-330px xl:w-390px 2xl:w-450px">If you're looking for an artist to capture your milestones and moments in-between, we just might be a match made in heaven!</p>
                            <a href="/portfolio">
                                <button className="button w-150px h-40px bg-black text-white rounded-[6px] transition-all duration-500 hover:bg-purple">More</button>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col md:w-696px lg:w-auto lg:ml-4 xl:ml-6">
                        <div className="group relative cursor-pointer mr-3 lg:mr-0" onClick={() => getImg(Img5)}>
                            <div className="hidden cursor-pointer relative w-486px h-320px lg:block lg:w-330px lg:h-230px xl:w-420px xl:h-260px 2xl:w-460px 2xl:h-300px">
                                <Image className="object-cover" src={Img5} alt="photo" fill/>
                            </div>
                            <div className="absolute top-0 left-0 h-full w-full bg-white bg-opacity-25 opacity-0 group-hover:opacity-100 duration-500"></div>
                        </div>
                        <div className="flex mt-4 xl:mt-6">
                            <div className="group relative cursor-pointer mr-4 xl:mr-6" onClick={() => getImg(Img3)}>
                                <div className="relative w-235px h-235px lg:w-157px lg:h-157px xl:w-198px xl:h-198px 2xl:w-218px 2xl:h-218px">
                                    <Image className="object-cover object-left" src={Img3} alt="photo" fill/>
                                </div>
                                <div className="absolute top-0 left-0 h-full w-full bg-white bg-opacity-25 opacity-0 group-hover:opacity-100 duration-500"></div>
                            </div>
                            <div className="group relative cursor-pointer" onClick={() => getImg(Img4)}>    
                                <div className="relative w-235px h-235px lg:w-157px lg:h-157px xl:w-198px xl:h-198px 2xl:w-218px 2xl:h-218px">
                                    <Image className="object-cover object-left" src={Img4} alt="photo" fill/>
                                </div>
                                <div className="absolute top-0 left-0 h-full w-full bg-white bg-opacity-25 opacity-0 group-hover:opacity-100 duration-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}