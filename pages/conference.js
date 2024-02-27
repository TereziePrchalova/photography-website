import ConferencePage from "../components/ConferencePage";
import Navbar from "../components/Navbar";

export default function Conference() {
  return (
    <div className="pt-[7rem] lg:pt-[8rem] xl:pt-[9rem]">
      <div className="fixed w-full top-0 z-50">
        <Navbar/>
      </div>
        <ConferencePage/>
    </div>
  )
}