import About from "@/components/About";
import Projects from "@/components/Projects";
import React from "react";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
  return (
    <div className='flex flex-col gap-10'>
        <About />
        <Experience />
        <Projects />
        <Education />
    </div>
  );
}
