import Link from "next/link"
import Gallery from "../components/Gallery"
import { useRouter } from "next/router";

export default function portfolio() {

  const router = useRouter();

  return (
    <div className="bg-lightWhite pt-[13rem] md:pt-[12rem] lg:pt-[13rem] xl:pt-[16rem]">
      <div className='max-w-1440px m-auto md:px-8 xl:px-12 xl:mb-6'>
        <Gallery section={router.query.section} />
      </div>
    </div>
  )
}
