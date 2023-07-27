import Image from "next/image";
import Link from "next/link";

export default function Work(data) {
    return (
        <>
            <div className='container reveal fade-bottom md:flex max-w-1440px m-auto mb-14 md:mt-20 md:mx-auto md:justify-center xl:mb-20'>
                <h2 className='relative z-10 w-330px m-auto font-PoppinsBold tracking-wide md:hidden text-60px text-black'>My work</h2>
                <div className="hidden md:flex md:w-120px flex-col justify-between md:mr-4 lg:w-[150px] xl:w-[190px] xl:mr-6">
                    <div className="-mt-6 w-[120px] lg:w-[150px] xl:w-[190px] xl:mt-0">
                        <svg className="w-full h-full" viewBox="0 0 192 443" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M102.84 47.76V132H82.32V81.48L63.48 132H46.92L27.96 81.36V132H7.44V47.76H31.68L55.32 106.08L78.72 47.76H102.84ZM191.396 65.04L149.396 163.8H127.316L142.676 129.72L115.436 65.04H138.356L153.836 106.92L169.196 65.04H191.396Z" fill="#161616"/>
                        <path d="M94.1612 164.648L80.2532 218H64.5212L56.0092 182.888L47.1932 218H31.4612L17.9332 164.648H31.8412L39.5172 203.484L49.0172 164.648H63.3052L72.4252 203.484L80.1772 164.648H94.1612ZM56.071 290.532C51.055 290.532 46.4443 289.367 42.239 287.036C38.0843 284.705 34.7656 281.463 32.283 277.308C29.851 273.103 28.635 268.391 28.635 263.172C28.635 257.953 29.851 253.267 32.283 249.112C34.7656 244.957 38.0843 241.715 42.239 239.384C46.4443 237.053 51.055 235.888 56.071 235.888C61.087 235.888 65.6723 237.053 69.827 239.384C74.0323 241.715 77.3256 244.957 79.707 249.112C82.139 253.267 83.355 257.953 83.355 263.172C83.355 268.391 82.139 273.103 79.707 277.308C77.275 281.463 73.9816 284.705 69.827 287.036C65.6723 289.367 61.087 290.532 56.071 290.532ZM56.071 278.676C60.327 278.676 63.7216 277.257 66.255 274.42C68.839 271.583 70.131 267.833 70.131 263.172C70.131 258.46 68.839 254.711 66.255 251.924C63.7216 249.087 60.327 247.668 56.071 247.668C51.7643 247.668 48.319 249.061 45.735 251.848C43.2016 254.635 41.935 258.409 41.935 263.172C41.935 267.884 43.2016 271.659 45.735 274.496C48.319 277.283 51.7643 278.676 56.071 278.676ZM63.1309 362L52.0349 341.86H48.9189V362H35.9229V308.648H57.7349C61.9403 308.648 65.5123 309.383 68.4509 310.852C71.4403 312.321 73.6696 314.348 75.1389 316.932C76.6083 319.465 77.3429 322.303 77.3429 325.444C77.3429 328.991 76.3296 332.157 74.3029 334.944C72.3269 337.731 69.3883 339.707 65.4869 340.872L77.7989 362H63.1309ZM48.9189 332.664H56.9749C59.3563 332.664 61.1296 332.081 62.2949 330.916C63.5109 329.751 64.1189 328.104 64.1189 325.976C64.1189 323.949 63.5109 322.353 62.2949 321.188C61.1296 320.023 59.3563 319.44 56.9749 319.44H48.9189V332.664ZM65.1479 434L47.2119 410.44V434H34.2159V380.648H47.2119V404.056L64.9959 380.648H80.2719L59.5999 406.792L81.0319 434H65.1479Z" fill="#161616"/>
                        </svg>
                    </div>
                    <div className="">
                        <a href="/portfolio">
                            <button className="button hidden md:block w-120px h-35px bg-black text-white rounded-[6px] md:absolute md:bottom-0 lg:w-150px lg:h-40px xl:w-[190px] xl:h-[50px] transition-all duration-500 hover:bg-grey">Portfolio</button>
                        </a>
                    </div>
                </div>
                <div className="-mt-8 md:flex md:mt-0 xl:mt-12">
                    <div>
                        <div className="flex justify-center">
                            <div className="group relative">
                                <div className="relative w-330px h-220px md:w-310px md:h-200px lg:w-420px lg:h-280px xl:w-510px xl:h-340px">
                                    <Image className="object-cover" src="/images/weddings/14.jpg" alt="photo" fill/>
                                </div>
                                <Link href="/portfolio?section=wedding">
                                    <div class="absolute top-0 left-0 w-330px md:w-full h-full flex bg-opacity-60 opacity-0 flex-col justify-center items-center bg-grey group-hover:opacity-100 duration-500"> 
                                        <p class="work text-white">Weddings</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center mt-4 xl:mt-6">
                            <div className="group relative cursor-pointer mr-4 xl:mr-6">
                                <div className="relative w-157px h-157px md:w-147px md:h-147px lg:w-202px lg:h-202px xl:w-243px xl:h-243px">
                                    <Image className="object-cover" src="/images/weddings/3.jpg" alt="photo" fill/>
                                </div>
                                <Link href="/portfolio?section=wedding">
                                    <div class="absolute top-0 left-0 w-full h-full flex bg-opacity-60 opacity-0 flex-col justify-center items-center bg-grey group-hover:opacity-100 duration-500"> 
                                        <p class="work text-white">Weddings</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="group relative cursor-pointer">
                                <div className="relative w-157px h-157px md:w-147px md:h-147px lg:w-202px lg:h-202px xl:w-243px xl:h-243px">
                                    <Image className="object-cover object-left" src="/images/portraits/3.jpg" alt="photo" fill/>
                                </div>
                                <Link href="/portfolio?section=portrait">
                                    <div class="absolute top-0 left-0 w-full h-full flex bg-opacity-60 opacity-0 flex-col justify-center items-center bg-grey group-hover:opacity-100 duration-500"> 
                                        <p class="work text-white">Portraits</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4 md:mt-0 md:ml-4 md:relative xl:ml-6">
                        <div class="group relative cursor-pointer">
                            <div className="relative object-cover w-194px h-291px md:w-235px md:h-363px lg:w-332px lg:h-498px xl:w-404px xl:h-607px">
                                <Image className="object-cover" src="/images/concerts/7.jpg" alt="photo" fill/>
                            </div>
                            <Link href="/portfolio?section=concert">
                                <div class="absolute top-0 left-0 w-full h-full flex bg-opacity-60 opacity-0 flex-col justify-center items-center bg-grey group-hover:opacity-100 duration-500"> 
                                    <p class="work text-white">Concerts</p>
                                </div>
                            </Link>
                        </div>
                        <a href="/portfolio">
                            <button className="button md:hidden w-120px h-35px bg-black text-white ml-4 rounded-[6px] transition-all duration-500 hover:bg-grey">Portfolio</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
