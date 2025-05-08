import About from "./About";
import HeroSection from "./HeroSection";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  );
}

export default HomePage;