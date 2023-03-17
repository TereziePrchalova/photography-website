import About from "../components/About";
import Book from "../components/Book";
import HeroSlider from "../components/Hero";
import HeroText from "../components/HeroText";
import Work from "../components/Work";

export default function Home() {
  return (
    <div className="bg-lightWhite pt-[7rem] lg:pt-[8rem] xl:pt-[10rem]">
      <HeroText/>
      <HeroSlider/>
      <About/>
      <Work/>
      <Book/>
    </div>
  )
}
