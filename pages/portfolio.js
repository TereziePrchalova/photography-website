import Link from "next/link"
import Gallery from "../components/Gallery"
import { useRouter } from "next/router";

export default function portfolio() {

  const router = useRouter();

  return (
    <div className="bg-lightWhite pt-[14rem] xl:pt-[17rem]">
      <div className='max-w-1440px m-auto md:px-8 xl:px-12 xl:mb-6'>
        <Gallery section={router.query.section} />
      </div>
    </div>
  )
}
