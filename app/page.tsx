"use client"

import Contact from "../components/Contact";
import Hero from "../components/Hero";
import LogoClouds from "../components/LogoClouds";
import NavBar from "../components/NavBar";
import Services from "../components/Services";
import About from "../components/About";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <>
    <main>
      <NavBar />
      <Hero />
      {/* <LogoClouds /> */}
      <Services />
      <Testimonial />
      <About />
      <Contact />
    </main>
    </>
  );
}
