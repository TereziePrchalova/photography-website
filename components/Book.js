import Calendly from "./Calendly";

export default function Book(data) {
    return (
        <>
            <div className='container reveal fade-bottom max-w-1440px m-auto'>
                <h2 className='h2 md:tracking-[0.4rem] text-center'>Book your photoshoot</h2>
                <Calendly/>
            </div>
        </>
    );
}