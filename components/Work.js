export default function HeroText(data) {
    return (
        <>
            <div className=''>
                <div className="flex justify-between w-[100vw] pl-6 md:pl-8">
                    <div className="w-[225px] mr-2 md:w-[295px] md:mr-3 xl:w-[445px] xl:mr-4">
                        <h2 className='h2 text-black'>My work</h2>
                    </div>
                    <div className="w-[100%] my-auto">
                        <svg width="100%" height="1" viewBox="0 0 100% 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="100%" y2="0.5" stroke="#E597C8"/>
                        </svg>
                    </div>
                </div>
                <div className="px-6 md:pl-8">

                </div>
            </div>
        </>
    );
}
