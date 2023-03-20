import Link from "next/link"
import Gallery from "../components/Gallery"
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

export default function portfolio() {

  const router = useRouter();

  return (
    <div>
      <div className="sticky z-50">
        <Navbar/>
      </div>
      <div className='max-w-1440px m-auto md:px-8 xl:px-12 xl:mb-6'>
        <Gallery section={router.query.section} />
      </div>
    </div>
  )
}
