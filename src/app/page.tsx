"use client";


import HeroSection from "@/Components/HeroSection";
import Project from"@/Components/Project";
import Skills from "@/Components/Skills";
import Contact from "@/Components/Contact";
import About from "@/Components/About"
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import AOS from "aos";
import"aos/dist/aos.css";
import { useEffect } from "react";


export default function Home() {
  useEffect (() => {
      AOS. init ({ 
        easing:"ease-out-back",
        duration: 1200,
        delay: 100,
        mirror: true,
        anchorPlacement: "bottom-bottom",
        offset: 160,
      });
      AOS.refresh ();

      }, []);

  return (
    <main>
      <HeroSection />
      <Project />
      <Skills />
      <Contact />
      <About />
      
    </main>

  )
  
}