import DatabasePage from "../components/DatabasePage";
import Navbar from "../components/Navbar";
import PhotographyPage from "../components/PhotographyPage";

export default function photographyWebsite() {
  return (
    <div className="pt-[7rem] lg:pt-[8rem] xl:pt-[9rem]">
      <div className="fixed w-full top-0 z-50">
        <Navbar/>
      </div>
        <PhotographyPage/>
    </div>
  )
}