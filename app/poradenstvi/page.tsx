"use client";

import NavbarSub from "@/components/navbar/navbar-sub";
import About from "@/components/poradenstvi/about";
import Contact from "@/components/poradenstvi/contact";
import Hero from "@/components/poradenstvi/hero";
import Services from "@/components/poradenstvi/services";
import Testimonial from "@/components/poradenstvi/testimonials";

export default function Home() {
  return (
    <>
      <main>
        <NavbarSub />
        <Hero />
        <Services />
        <About />
        <Testimonial />
        <Contact />
      </main>
    </>
  );
}
