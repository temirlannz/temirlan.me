import About from "@/components/About";
import Projects from "@/components/Projects";
import React from "react";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className='flex flex-col gap-10'>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
    </div>
  );
}
