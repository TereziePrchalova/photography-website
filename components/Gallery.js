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
            imageHigh: "/images/concerts/1.jpg",
            image: "/images/concerts/1.jpg",
            category: "concert",
        },
        {
            id: 6,
            imageHigh: "/images/concerts/2.jpg",
            image: "/images/concerts/2.jpg",
            category: "concert",
        },
        {
            id: 7,
            imageHigh: "/images/concerts/4.jpg",
            image: "/images/concerts/4.jpg",
            category: "concert",
        },
        {
            id: 8,
            imageHigh: "/images/concerts/5.jpg",
            image: "/images/concerts/5.jpg",
            category: "concert",
        },
        {
            id: 9,
            imageHigh: "/images/first.jpg",
            image: "/images/first.jpg",
            category: "portrait",
        },
        {
            id: 10,
            imageHigh: "/images/concerts/3.jpg",
            image: "/images/concerts/3.jpg",
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
            imageHigh: "/images/concerts/3.jpg",
            image: "/images/concerts/3.jpg",
            category: "concert",
        },
        {
            id: 13,
            imageHigh: "/images/concerts/6.jpg",
            image: "/images/concerts/6.jpg",
            category: "concert",
        },
        
    ]

    const [items, setItems] = useState(images);

    const filterItem = (categItem) => {
        const updatedItems = images.filter((curElem) => {

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

    }, [section]);

    const [modal, setModal] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0)


    const getImg = (id) => {
        setSlideNumber(id)
        console.log("hello" + id)
        setModal(true);
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
            <div className="">
                <div className="fixed w-full top-[7rem] z-40 left-0 md:top-[5rem] bg-lightWhite xl:top-[9rem]">
                    <div className="relative flex flex-col justify-start pb-6 px-6 md:flex-row md:pt-8 md:pb-4 md:px-8 lg:pt-12 lg:px-12 lg:pb-5 xl:px-12 max-w-[1440px] xl:m-auto xl:pt-4">
                        <h1 className='h1 leading-10 md:leading-tight'>Portfolio</h1>
                        <div className="mt-1 md:my-auto md:ml-8">
                            <div className={`${active == 'all' ? 'text-pink' : 'text-black'} inline cursor-pointer`} onClick={() => {setActive('all'), setItems(images);}}>All</div>
                            <div className={`${active == 'wedding' ? 'text-pink' : 'text-black'} inline cursor-pointer mx-4 md:mx-6`} onClick={() => {setActive('wedding'), filterItem('wedding');}} >Weddings</div>
                            <div className={`${active == 'portrait' ? 'text-pink' : 'text-black'} inline cursor-pointer`} onClick={() => {setActive('portrait'), filterItem('portrait');}}>Portraits</div>
                            <div className={`${active == 'concert' ? 'text-pink' : 'text-black'} inline cursor-pointer mx-4 md:mx-6`} onClick={() => {setActive('concert'), filterItem('concert');}}>Concerts</div>
                        </div>
                    </div>
                </div>

                <div className={`${modal ? "flex w-screen h-screen fixed top-0 left-0 justify-center items-center bg-white z-[200]" : "hidden" }`}>
                    <div>
                        <div onClick={prevSlide} className="leftArrowStyles">
                            &#10157;
                        </div>
                        <div onClick={nextSlide} className="rightArrowStyles">
                            &#10157;
                        </div>
                    </div>
                    <div className="unset-img">
                        <Image className="custom-img" src={items[slideNumber].imageHigh} alt='' fill/>
                    </div>
                    <div className='close-btn fixed z-[201] select-none w-auto right-8 top-9 md:top-8 cursor-pointer' onClick={() => setModal(false)}>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3.03711" y="1.09048" width="12" height="3" rx="1" transform="rotate(44.3233 3.03711 1.09048)" fill="black"/>
                            <rect x="15.9629" y="17.9095" width="12" height="3" rx="1" transform="rotate(-135.677 15.9629 17.9095)" fill="black"/>
                            <rect x="11.6211" y="9.47495" width="12" height="3" rx="1" transform="rotate(134.323 11.6211 9.47495)" fill="black"/>
                            <rect x="7.37891" y="9.52505" width="12" height="3" rx="1" transform="rotate(-45.6767 7.37891 9.52505)" fill="black"/>
                        </svg>
                    </div>
                </div>

                {/*
                <div className={`${modal ? "flex w-screen h-screen fixed top-0 left-0 justify-center items-center bg-white z-[200]" : "hidden" }`}>
                    <div className="unset-img">
                        <div className="w-8 h-8 bg-black fixed z-[199] left-0, top-[10rem]" onClick={() => getImg(index - 1)}></div>
                        <Image className="custom-img" src={tempImgSrc} alt="me" fill/>
                        <div className="w-8 h-8 bg-black fixed z-[199] right-0, top-[10rem]" onClick={getImg(index + 1)}></div>
                    </div>
                    <div className='close-btn fixed z-[201] select-none w-auto right-8 top-9 md:top-8 cursor-pointer' onClick={() => setModal(false)}>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3.03711" y="1.09048" width="12" height="3" rx="1" transform="rotate(44.3233 3.03711 1.09048)" fill="black"/>
                            <rect x="15.9629" y="17.9095" width="12" height="3" rx="1" transform="rotate(-135.677 15.9629 17.9095)" fill="black"/>
                            <rect x="11.6211" y="9.47495" width="12" height="3" rx="1" transform="rotate(134.323 11.6211 9.47495)" fill="black"/>
                            <rect x="7.37891" y="9.52505" width="12" height="3" rx="1" transform="rotate(-45.6767 7.37891 9.52505)" fill="black"/>
                        </svg>
                    </div>
                </div>

                                    {
                        items.map((elem, item, index) => {

                            const { imageHigh, image, id } = elem;
                            return (
                                <div>
                                    <div className="pics unset-img-gallery mb-4 cursor-pointer" key={id} onClick={() => getImg(id)}>
                                        <Image className="rounded-[12px] custom-img-gallery" src={image} alt="me" fill/>
                                    </div>
                                </div>
                            )
                        })
                    }
                */}

                <div className="columns-1 mx-4 md:mx-0 md:columns-2 lg:columns-3">
                    {
                        items.map((item, index) => {
                            const { imageHigh, image, } = item;
                            return (
                                <div>
                                    <div className="pics unset-img-gallery mb-4 cursor-pointer" key={index} onClick={() => getImg(index)}>
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