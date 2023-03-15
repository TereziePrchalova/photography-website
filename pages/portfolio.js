import Link from "next/link"
import Gallery from "../components/Gallery"

export default function portfolio() {
  return (
    <div className="bg-lightWhite pt-[8rem] xl:pt-[20rem]">
      <div className='max-w-[1440px] m-auto md:px-8 xl:px-12 xl:mb-6'>
        <div className="fixed top-[130px] z-50 left-0 pl-8 w-full bg-lightWhite py-5">
          <h1 className='h1 leading-10 w-[330px] m-auto md:leading-tight md:w-[696px] lg:w-[942px] xl:w-[1188px] 2xl:w-auto 2xl:mb-0'>Portfolio</h1>
          <div className="nav ">
            <Link className='select-none' href="/">All ✨</Link>
            <Link className='select-none mx-4' href="/portfolio">Weddings ✨</Link>
            <Link className='select-none' href="/">Portraits ✨</Link>
            <Link className='select-none mx-4' href="/">Concerts ✨</Link>
          </div>
        </div>
        <Gallery/>
      </div>
    </div>
  )
}
