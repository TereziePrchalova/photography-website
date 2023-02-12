import About from "../components/About";
import HeroText from "../components/HeroText";

export default function Home() {
  return (
    <div className="mt-[9rem] md:mt-[12rem]">
      <HeroText/>
      <About/>
    </div>
  )
}
