import Calendly from "../components/Calendly";
import Navbar from "../components/Navbar";


export default function contact() {
  return (
    <div className="pt-[7rem] lg:pt-[8rem] xl:pt-[10rem]">
      <div className="fixed w-full top-0 z-50">
        <Navbar/>
      </div>
      <div className="max-w-1440px m-auto md:px-8 xl:px-12 xl:mb-6">
        <h1 className='h1 w-330px m-auto md:w-696px lg:w-942px xl:w-1188px 2xl:w-auto'>Contact</h1>
        <Calendly/>
      </div>
    </div>
  )
}
