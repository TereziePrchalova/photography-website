import Image from "next/image";
import Link from "next/link";
import Document from "next/document";
import { useEffect } from "react";
import { useState } from "react";

export default function Gallery({section}) {

    console.log(section)

    const Gallery = [

        {
            id: 1,
            image: "/images/heroHighQuality/2.jpg",
            category: "wedding",
        },

        {
            id: 2,
            image: "/images/heroHighQuality/3.jpg",
            category: "wedding",
        },
        {
            id: 3,
            image: "/images/heroHighQuality/5.jpg",
            category: "wedding",
        },
        {
            id: 4,
            image: "/images/heroHighQuality/5.jpg",
            category: "wedding",
        },
        {
            id: 5,
            image: "/images/heroHighQuality/2.jpg",
            category: "wedding",
        },
        {
            id: 6,
            image: "/images/concerts/1.jpg",
            category: "concert",
        },
        {
            id: 7,
            image: "/images/concerts/2.jpg",
            category: "concert",
        },
        {
            id: 8,
            image: "/images/concerts/4.jpg",
            category: "concert",
        },
        {
            id: 9,
            image: "/images/concerts/5.jpg",
            category: "concert",
        },
        {
            id: 10,
            image: "/images/first.jpg",
            category: "portrait",
        },
        {
            id: 11,
            image: "/images/first.jpg",
            category: "portrait",
        },
        {
            id: 12,
            image: "/images/first.jpg",
            category: "portrait",
        },
        {
            id: 14,
            image: "/images/concerts/3.jpg",
            category: "concert",
        },
        {
            id: 15,
            image: "/images/concerts/6.jpg",
            category: "concert",
        },
        
    ]

    const [items, setItems] = useState(Gallery);

    const filterItem = (categItem) => {
        const updatedItems = Gallery.filter((curElem) => {

            return curElem.category === categItem;
        });

        setItems(updatedItems);

    }

    const [active, setActive] = useState('all');

    useEffect(() => {

        if (section) {
            filterItem(section);
            setActive(section);
        }

      }, []);
      

    return (
        <>
            <div className="">
                <div className="fixed w-full top-[7rem] z-40 left-0 md:top-[6rem] bg-lightWhite xl:top-[9rem]">
                    <div className="relative flex flex-col justify-start pt-4 pb-6 px-6 md:flex-row md:pt-8 md:pb-4 md:px-8 lg:px-12 lg:pb-5 xl:px-12 max-w-[1440px] xl:m-auto xl:pt-4">
                        <h1 className='h1 leading-10 md:leading-tight'>Portfolio</h1>
                        <div className="mt-1 md:my-auto md:ml-8">
                            <div className={`${active == 'all' ? 'text-pink' : 'text-black'} inline cursor-pointer`} onClick={() => {setActive('all'), setItems(Gallery);}}>All</div>
                            <div className={`${active == 'wedding' ? 'text-pink' : 'text-black'} inline cursor-pointer mx-4`} onClick={() => {setActive('wedding'), filterItem('wedding');}} >Weddings</div>
                            <div className={`${active == 'portrait' ? 'text-pink' : 'text-black'} inline cursor-pointer`} onClick={() => {setActive('portrait'), filterItem('portrait');}}>Portraits</div>
                            <div className={`${active == 'concert' ? 'text-pink' : 'text-black'} inline cursor-pointer mx-4`} onClick={() => {setActive('concert'), filterItem('concert');}}>Concerts</div>
                        </div>
                    </div>
                </div>
                <div className="columns-3">
                    {
                        items.map((elem) => {
                            const { id, image, category } = elem;
                            return (
                                <div>
                                    <div className="pics unset-img-gallery">
                                        <Image className="rounded-[12px] custom-img-gallery" src={image} alt="me" fill/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>
    );
}