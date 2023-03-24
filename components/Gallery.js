import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";

export default function Gallery({section}) {

    const images = [

        {
            id: 0,
            imageHigh: "/images/heroHighQuality/2.jpg",
            image: "/images/heroHighQuality/2.jpg",
            category: "wedding",
        },

        {
            id: 1,
            imageHigh: "/images/heroHighQuality/3.jpg",
            image: "/images/heroHighQuality/3.jpg",
            category: "wedding",
        },
        {
            id: 2,
            imageHigh: "/images/heroHighQuality/5.jpg",
            image: "/images/heroHighQuality/5.jpg",
            category: "wedding",
        },
        {
            id: 3,
            imageHigh: "/images/heroHighQuality/5.jpg",
            image: "/images/heroHighQuality/5.jpg",
            category: "wedding",
        },
        {
            id: 4,
            imageHigh: "/images/heroHighQuality/2.jpg",
            image: "/images/heroHighQuality/2.jpg",
            category: "wedding",
        },
        {
            id: 5,
            imageHigh: "/images/concerts/highQuality/1.jpg",
            image: "/images/concerts/1.jpg",
            category: "concert",
        },
        {
            id: 6,
            imageHigh: "/images/concerts/highQuality/2.jpg",
            image: "/images/concerts/2.jpg",
            category: "concert",
        },
        {
            id: 7,
            imageHigh: "/images/concerts/highQuality/3.jpg",
            image: "/images/concerts/3.jpg",
            category: "concert",
        },
        {
            id: 8,
            imageHigh: "/images/concerts/highQuality/4.jpg",
            image: "/images/concerts/4.jpg",
            category: "concert",
        },
        {
            id: 9,
            imageHigh: "/images/portraits/highQuality/2.jpg",
            image: "/images/portraits/2.jpg",
            category: "portrait",
        },
        {
            id: 10,
            imageHigh: "/images/portraits/highQuality/3.jpg",
            image: "/images/portraits/3.jpg",
            category: "portrait",
        },
        {
            id: 11,
            imageHigh: "/images/first.jpg",
            image: "/images/first.jpg",
            category: "portrait",
        },
        {
            id: 12,
            imageHigh: "/images/concerts/highQuality/5.jpg",
            image: "/images/concerts/5.jpg",
            category: "concert",
        },
        {
            id: 13,
            imageHigh: "/images/concerts/highQuality/6.jpg",
            image: "/images/concerts/6.jpg",
            category: "concert",
        },
        {
            id: 14,
            imageHigh: "/images/concerts/highQuality/7.jpg",
            image: "/images/concerts/7.jpg",
            category: "concert",
        },
        {
            id: 15,
            imageHigh: "/images/concerts/highQuality/8.jpg",
            image: "/images/concerts/8.jpg",
            category: "concert",
        },
        {
            id: 16,
            imageHigh: "/images/concerts/highQuality/9.jpg",
            image: "/images/concerts/9.jpg",
            category: "concert",
        },
        {
            id: 17,
            imageHigh: "/images/concerts/highQuality/10.jpg",
            image: "/images/concerts/10.jpg",
            category: "concert",
        },
        
    ]

    const [items, setItems] = useState(images);

    const top = () => {
        window.scrollTo(0,0);   
    };

    const filterItem = (categItem) => {
        const updatedItems = images.filter((curElem) => {
            window.scrollTo(0,0);
            return curElem.category === categItem;
        });

        setItems(updatedItems);
        setSlideNumber(updatedItems[1].id);
        updatedItems.forEach(e => {
            console.log(e.id);
        });
        console.log()
    }

    const [active, setActive] = useState('all');

    useEffect(() => {

        if (section) {
            filterItem(section);
            setActive(section);
        }

    }, [section]);

    const [modal, setModal] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0)


    const getImg = (id) => {
        setSlideNumber(id)
        console.log("hello" + id)
        setModal(true);
    }

    const hello = () => {
        setSlideNumber(items[0].id)
    }

    const prevSlide = () => {
        slideNumber === 0 
        ? setSlideNumber( items.length -1 ) 
        : setSlideNumber( slideNumber - 1 )
    }
    
      // Next Image  
    const nextSlide = () => {
        slideNumber + 1 === items.length 
        ? setSlideNumber(0) 
        : setSlideNumber(slideNumber + 1)
    }

      {/*
      const getImg = (index) => {
          setTempImgSrc(Gallery[index].imageHigh);
          setModal(true);
      }
    */}

    return (
        <>
            <div>
                <div className="sticky top-0 w-full z-40 left-0  bg-lightWhite">
                    <div className="relative max-w-[1440px] flex flex-col justify-start -mt-4 p-6 md:flex-row md:pt-8 md:pb-4 md:px-0 md:-mt-8 lg:-mt-9 lg:pt-9 lg:pb-5 xl:mx-auto xl:pt-6 xl:mb-2 xl:-mt-6">
                        <h1 className='h1'>Portfolio</h1>
                        <div className="mt-1 md:my-auto md:ml-8">
                            <div className={`${active == 'all' ? 'text-pink' : 'text-black'} linkGallery inline cursor-pointer`} onClick={() => {setActive('all'), setItems(images), top();}}>All</div>
                            <div className={`${active == 'wedding' ? 'text-pink' : 'text-black'} linkGallery inline cursor-pointer mx-4 md:mx-6`} onClick={() => {setActive('wedding'), filterItem('wedding');}} >Weddings</div>
                            <div className={`${active == 'portrait' ? 'text-pink' : 'text-black'} linkGallery inline cursor-pointer`} onClick={() => {setActive('portrait'), filterItem('portrait');}}>Portraits</div>
                            <div className={`${active == 'concert' ? 'text-pink' : 'text-black'} linkGallery inline cursor-pointer mx-4 md:mx-6`} onClick={() => {setActive('concert'), filterItem('concert');}}>Concerts</div>
                        </div>
                    </div>
                </div>

                <div className={`${modal ? "flex w-screen h-screen fixed top-0 left-0 justify-center items-center bg-white z-[200]" : "hidden" }`}>
                    <div>
                        <div onClick={prevSlide} className="absolute cursor-pointer top-[50%] left-8 z-10">
                            <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="9.02148" y="16.9694" width="12" height="3" rx="1" transform="rotate(-135.677 9.02148 16.9694)" fill="black"/>
                                <rect x="0.4375" y="8.5849" width="12" height="3" rx="1" transform="rotate(-45.6767 0.4375 8.5849)" fill="black"/>
                            </svg>
                        </div>
                        <div onClick={nextSlide} className="absolute cursor-pointer top-[50%] right-8 z-10">
                            <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2.0957" width="12" height="3" rx="1" transform="rotate(44.3233 2.0957 0)" fill="black"/>
                                <rect x="10.6797" y="8.38446" width="12" height="3" rx="1" transform="rotate(134.323 10.6797 8.38446)" fill="black"/>
                            </svg>
                        </div>
                    </div>
                    <Image 
                        className="object-contain m-auto max-w-[1512px]" 
                        src={items[slideNumber].image} 
                        alt='' 
                        quality={50}
                        fill
                    />
                    <div className='close-btn fixed z-[201] select-none w-auto right-8 top-9 md:top-8 cursor-pointer' onClick={() => {setModal(false)}} >
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3.03711" y="1.09048" width="12" height="3" rx="1" transform="rotate(44.3233 3.03711 1.09048)" fill="black"/>
                            <rect x="15.9629" y="17.9095" width="12" height="3" rx="1" transform="rotate(-135.677 15.9629 17.9095)" fill="black"/>
                            <rect x="11.6211" y="9.47495" width="12" height="3" rx="1" transform="rotate(134.323 11.6211 9.47495)" fill="black"/>
                            <rect x="7.37891" y="9.52505" width="12" height="3" rx="1" transform="rotate(-45.6767 7.37891 9.52505)" fill="black"/>
                        </svg>
                    </div>
                </div>

                <div className="columns-1 md:columns-2 md:mb-4 lg:columns-3 ">
                    {
                        items.map((item, index) => {
                            const { imageHigh, image, } = item;
                            return (
                                <div>
                                    <div className="transition-all duration-300 ease-in-out h-full w-full mb-4 cursor-pointer hover:opacity-80" key={image} onClick={() => getImg(index)}>
                                        <Image 
                                            key={image} 
                                            className="object-contain !relative" 
                                            src={image} 
                                            alt="me" 
                                            quality={25}
                                            fill
                                        />
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