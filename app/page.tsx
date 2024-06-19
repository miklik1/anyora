"use client";
import About from "@/components/poradenstvi/about";
import Contact from "@/components/poradenstvi/contact";
import Hero from "@/components/poradenstvi/hero";
import Services from "@/components/poradenstvi/services";
import React from "react";

import localFont from "next/font/local";
const myFont = localFont({ src: "./unbounded.ttf" });

export default function Home() {
  return (
    <>
      <main className={myFont.className}>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
    </>
  );
}
