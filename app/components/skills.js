"use client";

import { useState } from "react";

export default function Skills() {
  const [extraClasses, setExtraClasses] = useState("");
  return (
    <section id="skills">
      <div className="center">
        <h2>Skills</h2>
        <div className={extraClasses + "skills-container"}>
          <div className="skill-box">
            <img src="/img/html-5.png" alt="html-5 logo" />
            <span>HTML</span>
          </div>
          <div className="skill-box">
            <img src="/img/css-3.png" alt="css-3 logo" />
            <span>CSS</span>
          </div>
          <div className="skill-box">
            <img src="/img/js.png" alt="js logo" />
            <span>JavaScript</span>
          </div>
          <div className="skill-box">
            <img src="/img/react.webp" alt="react logo" />
            <span>React</span>
          </div>
          <div className="skill-box">
            <img src="/img/ts.png" alt="typescript logo" />
            <span>TypeScript</span>
          </div>
          <div className="skill-box">
            <img src="/img/next-js.png" alt="nextjs logo" />
            <span>Next JS</span>
          </div>
          <div className="skill-box">
            <img src="/img/mongodb.webp" alt="mongodb logo" />
            <span>MongoDB</span>
          </div>
          <div className="skill-box">
            <img src="/img/git.png" alt="github logo" />
            <span>Git</span>
          </div>
        </div>
      </div>
    </section>
  );
}
