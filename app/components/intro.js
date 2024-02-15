"use client";
import { DM_Serif_Display } from "next/font/google";
import { useState, useEffect } from "react";

const heading = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Intro() {
  const [classes, setClasses] = useState("");
  useEffect(() => {
    setClasses("visible");
  }, []);

  return (
    <section id="intro" className={classes}>
      <div className="text">
        <p>
          I&apos;m <span className={heading.className}>Jatesh Parikh</span>
          <br />
          Full Stack JavaScript Developer <br /> based in Mumbai, India.
        </p>
        <a href="">Contact me</a>
      </div>
      <div>
        <img src="/img/me.jpeg" alt="Profile pic" />
      </div>
    </section>
  );
}
