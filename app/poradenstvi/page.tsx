"use client";

import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Testimonial />
        <About />
        <Contact />
      </main>
    </>
  );
}
