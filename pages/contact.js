import About from "../components/About";
import Script from 'next/script';
import { InlineWidget } from "react-calendly";


export default function contact() {
  return (
    <div className="pt-[7rem] lg:pt-[8rem] xl:pt-[10rem] max-w-1440px m-auto md:px-8 xl:px-12 xl:mb-6">
      <h1 className='h1 leading-10 w-330px m-auto md:leading-tight md:w-696px lg:w-942px xl:w-1188px 2xl:w-auto'>Contact</h1>
      <div className="mt-6 sm:-mt-5 md:mt-0">
        <InlineWidget styles={{height: '102vh'}} url="https://calendly.com/terezieprchalova/wedding-consultation?primary_color=e198c2" />
      </div>
    </div>
  )
}
