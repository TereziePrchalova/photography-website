import About from "../components/About";
import HeroSlider from "../components/HeroSlider";
import HeroText from "../components/HeroText";
import Work from "../components/Work";

export default function Home() {
  return (
    <div className="bg-lightWhite pt-[8rem] xl:pt-[10rem]">
      <HeroText/>
      <HeroSlider/>
      <About/>
      <Work/>
    </div>
  )
}
