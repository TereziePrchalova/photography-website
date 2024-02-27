import AccountingPage from "../components/AccountingPage";
import Navbar from "../components/Navbar";

export default function accounting() {
  return (
    <div className="pt-[7rem] lg:pt-[8rem] xl:pt-[9rem]">
      <div className="fixed w-full top-0 z-50">
        <Navbar/>
      </div>
        <AccountingPage/>
    </div>
  )
}