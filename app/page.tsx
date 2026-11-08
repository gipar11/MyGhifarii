import Preloader from "./components/global/Preloader";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer"; // Import Footer
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Analytics from "./components/sections/Analytics";
import Achievements from "./components/sections/Achievements"; // Import Baru
import Contact from "./components/sections/Contact"; // Import Baru

export default function Home() {
  return (
    <main>
      <Preloader />
      <Navbar />
      
      <div className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Analytics />
        <Achievements />
        <Contact />
      </div>
      
      <Footer />
    </main>
  );
}