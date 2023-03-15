import Link from "next/link"
import Gallery from "../components/Gallery"

export default function portfolio() {
  return (
    <div className="bg-lightWhite pt-[8rem] xl:pt-[20rem]">
      <div className='max-w-[1440px] m-auto md:px-8 xl:px-12 xl:mb-6'>
        <Gallery/>
      </div>
    </div>
  )
}
