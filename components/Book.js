import Image from "next/image";
import Link from "next/link";

export default function Book(data) {
    return (
        <>
            <div className='max-w-[1440px] m-auto'>
                <div className="flex justify-between w-[100vw] pl-6 md:pl-10 xl:pl-12">
                    <div className="w-[225px] mr-3 md:w-[295px] md:mr-3 xl:w-[445px] xl:mr-4">
                        <h2 className='h2 text-transparent bg-clip-text bg-gradient-to-br from-orange to-purple w-max'>Book your photoshoot</h2>
                    </div>
                    <div className="w-[100%] my-auto">
                        <svg width="100%" height="1" viewBox="0 0 100% 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="100%" y2="0.5" stroke="#E597C8"/>
                        </svg>
                    </div>
                </div>
                {/*
                <div>
                    <div className="calendly-inline-widget min-w-[320px] h-[100vh]" data-url="https://calendly.com/terezieprchalova/wedding-consultation?primary_color=e198c2"></div>
                    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                </div>
                */}
            </div>
        </>
    );
}