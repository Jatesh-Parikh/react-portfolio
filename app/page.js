"use client";

import Image from "next/image";
import { useEffect } from "react";
import Header from "./components/header";
import Intro from "./components/intro";
import About from "./components/about";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Portfolio from "./components/portfolio";
import Experience from "./components/experience";
import Contact from "./components/contact";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, opts) => {
      entries.forEach((entry) => {
        // For having the animation only once
        // if (entry.isIntersecting) {
        //   entry.target.className += " visible";
        // }
        entry.target.classList.toggle("visible", entry.isIntersecting);
      });
    });
    observer.observe(document.querySelector("div.skills-container"));
    document.querySelectorAll("section").forEach((elem) => {
      observer.observe(elem);
    });
  }, []);
  return (
    <main>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
