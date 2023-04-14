import Image from "next/image";
import Link from "next/link";

export default function Footer(data) {
    return (
        <>
            <div className='relative bottom-0 w-full bg-black text-purple py-10'>
                <div className="max-w-1440px m-auto">
                    <div className="flex flex-col items-center ">
                        <div className="relative w-8 h-8 mb-2">
                            <Link href="https://www.instagram.com/terezieprchalova/" target="_blank">
                                <Image className="cursor-pointer object-cover" alt="instagram" src="/images/instagram.png" fill/>
                            </Link>
                        </div>
                        <div>
                            <p className="font-PoppinsMedium tracking-wide text-14px">© 2023 Terezie Prchalova, All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}