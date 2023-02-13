import About from "../components/About";
import HeroSlider from "../components/HeroSlider";
import HeroText from "../components/HeroText";
import Work from "../components/Work";

export default function Home() {
  return (
    <div className="mt-[8rem] xl:mt-[12rem]">
      <HeroText/>
      <HeroSlider/>
      <About/>
      <Work/>
    </div>
  )
}
