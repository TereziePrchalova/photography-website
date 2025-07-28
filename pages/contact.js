import Calendly from "../components/Calendly";
import Navbar from "../components/Navbar";


export default function contact() {
  return (
    <div className="h-[80vh] pt-[7rem] lg:pt-[8rem] xl:pt-[10rem]">
      <div className="fixed w-full top-0 z-50">
        <Navbar/>
      </div>
      <div className="max-w-1440px m-auto px-4 md:px-8 xl:px-12 xl:mb-6">
        <h1 className='h1 w-330px m-auto md:w-696px lg:w-942px xl:w-1188px 2xl:w-auto'>Contact</h1>
          <h2 className="font-PoppinsMedium text-20px mt-8 mb-4">Terezie Prchalová</h2>
          <p className="">Email</p>
          <p className="mb-4"><a className="underline" href="mailto:terezie.prchalova1@gmail.com">terezie.prchalova1@gmail.com</a></p>
          <p className="">Phone</p>
          <p><a className="underline" href="tel:+420608297238">+420 608 297 238</a></p>
      </div>
    </div>
  )
}
