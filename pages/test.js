import DesignHome from "../components/DesignHome";
import Navbar from "../components/Navbar";

export default function Test() {
  return (
    <div className="pt-[7rem] lg:pt-[8rem] xl:pt-[9rem]">
      <div className="fixed w-full top-0 z-50">
        <Navbar/>
      </div>
      <h1 className="test uppercase text-40px font-bold">Dnatco</h1>
      <div>
        <DesignHome/>
      </div>
    </div>
  )
}