import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Gallery(data) {

    const Gallery = [

        {
            id: 1,
            image: "/images/first.jpg",
            category: "Wedding",
        },

        {
            id: 2,
            image: "/images/second.jpg",
            category: "Wedding",
        },
        {
            id: 3,
            image: "/images/first.jpg",
            category: "Wedding",
        },
        {
            id: 4,
            image: "/images/first.jpg",
            category: "Wedding",
        },
        {
            id: 5,
            image: "/images/first.jpg",
            category: "Wedding",
        },
        {
            id: 6,
            image: "/images/first.jpg",
            category: "Concert",
        },
        {
            id: 7,
            image: "/images/first.jpg",
            category: "Concert",
        },
        {
            id: 8,
            image: "/images/first.jpg",
            category: "Concert",
        },
        {
            id: 9,
            image: "/images/first.jpg",
            category: "Portrait",
        },
        {
            id: 10,
            image: "/images/first.jpg",
            category: "Portrait",
        },
        {
            id: 11,
            image: "/images/first.jpg",
            category: "Portraitt",
        },
        
    ]

    const [items, setItems] = useState(Gallery);



    return (
        <>
            <div className="">
                <div className="fixed top-[100px] xl:top-[130px] z-50 left-0 pl-8 w-full bg-lightWhite py-5">
                    <h1 className='h1 leading-10 w-[330px] m-auto md:leading-tight md:w-[696px] lg:w-[942px] xl:w-[1188px] 2xl:w-auto 2xl:mb-0'>Portfolio</h1>
                    <div className="nav ">
                        <Link className='select-none' href="/">All ✨</Link>
                        <Link className='select-none mx-4' href="/portfolio">Weddings ✨</Link>
                        <Link className='select-none' href="/">Portraits ✨</Link>
                        <Link className='select-none mx-4' href="/">Concerts ✨</Link>
                    </div>
                </div>

                {
                    items.map((elem) => {
                        const { id, image, category } = elem;

                        return (
                            <div>
                                <div className="relative w-[360px] h-[240px] lg:w-[330px] lg:h-[230px] xl:w-[390px] xl:h-[260px] 2xl:w-[450px] 2xl:h-[300px]">
                                    <Image className="rounded-[12px]" src={image} alt="me" objectFit="cover" layout="fill"/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}