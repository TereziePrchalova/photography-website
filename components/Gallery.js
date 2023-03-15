import Image from "next/image";

export default function Gallery(data) {
    return (
        <>
            <div className="relative w-[100px] h-[100px]">
                <Image className="cursor-pointer" alt="GoodWeird Logo" src="/images/first.jpg" layout="fill" objectFit="contain" />   
            </div>
        </>
    );
}