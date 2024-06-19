"use client";

import About from "@/components/poradenstvi/about";
import Contact from "@/components/poradenstvi/contact";
import Hero from "@/components/poradenstvi/hero";
import Services from "@/components/poradenstvi/services";
import React from "react";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
    </>
  );
}
