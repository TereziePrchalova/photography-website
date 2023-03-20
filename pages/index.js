import About from "../components/About";
import Book from "../components/Book";
import HeroSlider from "../components/Hero";
import HeroText from "../components/HeroText";
import Navbar from "../components/Navbar";
import Work from "../components/Work";

export default function Home() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar/>
      </div>
      <HeroText/>
      <HeroSlider/>
      <About/>
      <Work/>
      <Book/>
    </div>
  )
}
