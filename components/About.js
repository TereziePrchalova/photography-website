import Image from "next/image";
import { useEffect } from "react";

export default function About(data) {

    useEffect(() => {
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
          
            for (var i = 0; i < reveals.length; i++) {
              var windowHeight = window.innerHeight;
              var elementTop = reveals[i].getBoundingClientRect().top;
              var elementVisible = 100;
          
              if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
              } else {
                reveals[i].classList.remove("active");
              }
            }
          }

          window.addEventListener("scroll", reveal);

      },[])

    return (
        <>
            <div className='container reveal fade-bottom max-w-1440px m-auto'>
                <h2 className='h2 text-center m-auto md:text-left md:w-696px lg:w-942px xl:w-1188px 2xl:w-1344px'>About me</h2>
                <div className="mt-4 mb-12 md:flex md:mx-auto md:w-696px lg:w-942px lg:flex lg:my-10 xl:w-1188px xl:my-14 xl:mb-[8rem] 2xl:w-1344px">
                    <div className="flex justify-center mt-1 mb-6 md:my-0 md:flex md:flex-col xl:flex-row">
                        <div className="relative w-157px h-157px mr-4 md:mb-4 md:w-147px md:h-147px lg:mr-4 xl:w-255px xl:h-255px xl:mb-0 xl:mr-6">
                            <Image className="rounded-[6px] object-cover" src="/images/first.jpg" alt="photo" fill/>
                        </div>
                        <div className="relative w-157px h-157px md:w-147px md:h-147px xl:w-255px xl:h-255px">
                            <Image className="rounded-[6px] object-cover" src="/images/second.jpg" alt="photo" fill/>
                        </div>
                    </div>
                    <div className="m-auto w-320px md:w-470px md:mt-0 md:mx-0 xl:w-510px xl:ml-6">
                        <p className='p text-justify mb-3 md:text-left xl:mb-4'>I’m a photographer with a true passion for visual storytelling. With an five-year journey behind the lens, I have cultivated a deep appreciation for capturing authentic moments and emotions. Specializing in weddings and events. Based in Prague.</p>
                    </div>
                </div>
            </div>
        </>
    );
}