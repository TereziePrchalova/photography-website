import Calendly from "./Calendly";

export default function Book(data) {
    return (
        <>
            <div className='max-w-1440px m-auto'>
                <div className="flex justify-between w-screen pl-6 md:pl-10 xl:pl-12">
                    <div className="mr-3 xl:mr-4">
                        <h2 className='h2 text-purple w-max'>Book your photoshoot</h2>
                    </div>
                    <div className="w-full my-auto pt-1">
                        <svg width="100%" height="1" viewBox="0 0 100% 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="100%" y2="0.5" stroke="#af99cc"/>
                        </svg>
                    </div>
                </div>
                <Calendly/>
            </div>
        </>
    );
}