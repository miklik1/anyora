"use client";

import NavbarSub from "@/components/navbar/navbar-sub";
import About from "@/components/poradenstvi/about";
import Contact from "@/components/poradenstvi/contact";
import Hero from "@/components/poradenstvi/hero";
import Services from "@/components/poradenstvi/services";
import Testimonial from "@/components/poradenstvi/testimonials";

import React, { useState, useEffect, useRef, } from "react";
import { motion, useInView } from "framer-motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  const sectionRefs = {
    domu: useRef(null),
    sluzby: useRef(null),
    omne: useRef(null),
    reference: useRef(null),
    kontakt: useRef(null),
  };

  const updateActiveSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <>
      <main>
        <NavbarSub activeSection={activeSection} />
        {/* Pass relevant ref to each Hero */}
        <Hero
          ref={sectionRefs.domu}
          onViewportEnter={() => updateActiveSection("domu")}
        />
        <Services
          ref={sectionRefs.sluzby}
          onViewportEnter={() => updateActiveSection("sluzby")}
        />
        <About
          ref={sectionRefs.omne}
          onViewportEnter={() => updateActiveSection("omne")}
        />
        <Testimonial
          ref={sectionRefs.reference}
          onViewportEnter={() => updateActiveSection("reference")}
        />
        <Contact
          ref={sectionRefs.kontakt}
          onViewportEnter={() => updateActiveSection("kontakt")}
        />
      </main>
    </>
  );
}
