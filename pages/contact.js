import About from "../components/About";
import Script from 'next/script';

export default function contact() {
  return (
    <div className="pt-[7rem] lg:pt-[8rem] xl:pt-[10rem] max-w-1440px m-auto md:px-8 xl:px-12 xl:mb-6">
      <h1 className='h1 leading-10 w-330px m-auto md:leading-tight md:w-696px lg:w-942px xl:w-1188px 2xl:w-auto'>Contact</h1>
      <div className="calendly-inline-widget min-w-[320px] h-[100vh]" data-url="https://calendly.com/terezieprchalova/wedding-consultation?primary_color=e198c2"></div>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
    </div>
  )
}
