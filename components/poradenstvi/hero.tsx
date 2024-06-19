import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import heroImg from "/public/hero.jpg";
import NewsletterForm from "../forms/form-newsletter";

const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      id="domu"
      className="hero flex justify-center lg:mt-20"
    >
      <div className="hero-content w-full flex-col-reverse justify-between lg:flex-row-reverse">
        <motion.div variants={fadeIn("up", "tween", 0.8, 0.6)}>
          <Image
            src={heroImg}
            alt="Picture of the author"
            className="max-w-xs rounded-b-box rounded-t-[14rem] shadow-2xl  md:max-w-md"
            priority
          />
        </motion.div>
        <div className="text-center lg:text-start lg:mr-16">
          <motion.span
            variants={fadeIn("up", "tween", 0, 0.6)}
            className="badge badge-outline badge-lg mb-2 font-sans"
          >
            Nutriční poradenství
          </motion.span>
          <motion.h1
            variants={fadeIn("up", "tween", 0.2, 0.6)}
            className="text-5xl leading-tight text-hunter-green-500 font-black uppercase md:text-7xl md:leading-tight"
          >
            <span className="opacity-50">Pociťte </span>
            <p>sebejistotu,</p>
            <p>vyváženost</p>
            <p>a klid</p>
            <span className="opacity-50"> s jídlem.</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("up", "tween", 0.4, 0.6)}
            className="py-6  lg:max-w-lg"
          >
            Vítejte na mém webu, Anyora!
            <br />
            Snažím se zjednodušit cestu k zdraví.
            <br />
            Bez zázračných řešení, jen osvědčené metody a lidský přístup.
          </motion.p>
          <motion.div
            variants={fadeIn("up", "tween", 0.6, 0.6)}
            className="flex gap-2 max-lg:justify-center"
          >
            <NewsletterForm />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
