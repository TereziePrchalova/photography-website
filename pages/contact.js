import Calendly from "../components/Calendly";
import Navbar from "../components/Navbar";


export default function contact() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar/>
      </div>
      <div className="max-w-1440px m-auto md:px-8 xl:px-12 xl:mb-6">
        <h1 className='h1 leading-10 w-330px m-auto md:leading-tight md:w-696px lg:w-942px xl:w-1188px 2xl:w-auto'>Contact</h1>
        <Calendly/>
      </div>
    </div>
  )
}
