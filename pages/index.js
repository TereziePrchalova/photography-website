import About from "../components/About";
import HeroSlider from "../components/HeroSlider";
import HeroText from "../components/HeroText";

export default function Home() {
  return (
    <div className="mt-[9rem] md:mt-[12rem]">
      <HeroText/>
      <HeroSlider/>
      <About/>
    </div>
  )
}
