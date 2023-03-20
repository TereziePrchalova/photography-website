import Image from "next/image";
import Link from "next/link";

export default function Footer(data) {
    return (
        <>
            <div className='relative w-full bg-black text-pink p-10'>
                <div className="max-w-1440px m-auto">
                    <div className="flex flex-col items-center ">
                        <div className="relative w-8 h-8 mb-2">
                            <Link href="https://www.instagram.com/terezieprchalova/" target="_blank">
                                <Image className="cursor-pointer object-cover" alt="instagram" src="/images/instagram.png" fill/>
                            </Link>
                        </div>
                        <div>
                            <p className="footer">© 2023 Terezie Prchalova, All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}