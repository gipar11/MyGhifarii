"use client";
import { useState } from "react";
import Preloader from "./components/global/Preloader";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Analytics from "./components/sections/Analytics";
import Achievements from "./components/sections/Achievements";
import Contact from "./components/sections/Contact";

export default function Home() {
  const [lang, setLang] = useState<"ID" | "EN">("ID");

  return (
    <main>
      <Preloader />
      <Navbar lang={lang} setLang={setLang} />
      
      <div className="flex flex-col">
        <Hero lang={lang} />
        <About lang={lang} />
        <Skills />
        <Projects />
        <Analytics />
        <Achievements />
        <Contact lang={lang} />
      </div>
      
      <Footer lang={lang} />
    </main>
  );
}