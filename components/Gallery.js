import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Document from "next/document";
import { useEffect } from "react";

export default function Gallery(data) {

    const Gallery = [

        {
            id: 1,
            image: "/images/heroHighQuality/2.jpg",
            category: "Wedding",
        },

        {
            id: 2,
            image: "/images/heroHighQuality/3.jpg",
            category: "Wedding",
        },
        {
            id: 3,
            image: "/images/heroHighQuality/5.jpg",
            category: "Wedding",
        },
        {
            id: 4,
            image: "/images/heroHighQuality/5.jpg",
            category: "Wedding",
        },
        {
            id: 5,
            image: "/images/heroHighQuality/2.jpg",
            category: "Wedding",
        },
        {
            id: 6,
            image: "/images/concerts/1.jpg",
            category: "Concert",
        },
        {
            id: 7,
            image: "/images/concerts/2.jpg",
            category: "Concert",
        },
        {
            id: 8,
            image: "/images/concerts/4.jpg",
            category: "Concert",
        },
        {
            id: 9,
            image: "/images/concerts/5.jpg",
            category: "Concert",
        },
        {
            id: 10,
            image: "/images/first.jpg",
            category: "Portrait",
        },
        {
            id: 11,
            image: "/images/first.jpg",
            category: "Portrait",
        },
        {
            id: 12,
            image: "/images/first.jpg",
            category: "Portrait",
        },
        {
            id: 14,
            image: "/images/concerts/3.jpg",
            category: "Concert",
        },
        {
            id: 15,
            image: "/images/concerts/6.jpg",
            category: "Concert",
        },
        
    ]

    const [items, setItems] = useState(Gallery);

    const filterItem = (categItem) => {
        const updatedItems = Gallery.filter((curElem) => {

            return curElem.category === categItem;
        });

        setItems(updatedItems);

    }

    let activeDiv = null;

    useEffect(() => {

        const all = document.querySelector(".all")

        function toggleDiv(div) {

            if (activeDiv === div) {
        // Clicked on the same active div, reset to default state
                all.style.color = "black";
                div.style.color = "black";
                activeDiv = null;
            } else {
        // Clicked on a new div
                if (activeDiv) {
            // Reset the previously active div to default state
                    activeDiv.style.color = "black";
                    all.style.color = "black";
                }
    
            // Set the new div as active
                div.style.color = "#EDAEA8";
                activeDiv = div;
            }
        }

        const divs = document.querySelectorAll(".clickable");
  
        for (let i = 0; i < divs.length; i++) {
            let div = divs[i];
            div.addEventListener("click", function() {
                toggleDiv(this);
            });
        }
      });


    return (
        <>
            <div className="">
                <div className="fixed w-full top-[7rem] z-40 left-0 md:top-[6rem] bg-lightWhite xl:top-[9rem]">
                    <div className="relative flex flex-col justify-start pt-4 pb-6 px-6 md:flex-row md:pt-8 md:pb-4 md:px-8 lg:px-12 lg:pb-5 xl:px-12 max-w-[1440px] xl:m-auto xl:pt-4">
                        <h1 className='h1 leading-10 md:leading-tight'>Portfolio</h1>
                        <div className="mt-1 md:my-auto md:ml-8">
                            <div className='all text-pink clickable inline cursor-pointer' onClick={() => setItems(Gallery)}>All</div>
                            <div className='clickable inline cursor-pointer mx-4 md:mx-8' onClick={() => filterItem('Wedding')} >Weddings</div>
                            <div className='clickable inline cursor-pointer' onClick={() => filterItem('Portrait')}>Portraits</div>
                            <div className='clickable inline cursor-pointer mx-4 md:mx-8' onClick={() => filterItem('Concert')}>Concerts</div>
                        </div>
                    </div>
                </div>
                <div className="gallery">
                    {
                        items.map((elem) => {
                            const { id, image, category } = elem;
                            return (
                                <div>
                                    <div className="pics unset-img-gallery">
                                        <Image className="rounded-[12px] custom-img-gallery" src={image} alt="me" objectFit="cover" layout="fill"/>
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