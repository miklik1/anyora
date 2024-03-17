import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import heroImg from "/public/hero.jpg";
import NewsletterForm from "../forms/form-newsletter";

const Hero = ({ onViewportEnter, ref }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      id="domu"
      onViewportEnter={onViewportEnter}
      className="hero flex justify-center lg:mt-20"
      ref={ref}
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="hero-content w-full flex-col-reverse justify-between lg:flex-row-reverse"
      >
        <Image
          src={heroImg}
          alt="Picture of the author"
          className="max-w-xs rounded-b-box rounded-t-[14rem] shadow-2xl  md:max-w-md"
          priority
        />
        <div className="text-center lg:text-start lg:mr-16">
          <span className="badge badge-outline badge-lg mb-2">
            Nutriční poradenství
          </span>
          <h1 className="text-5xl leading-tight text-hunter-green-500 font-black uppercase md:text-7xl md:leading-tight">
            <span className="opacity-50">Pociťte </span>
            <p>sebejistotu,</p>
            <p>vyváženost</p>
            <p>a klid</p>
            <span className="opacity-50"> s jídlem.</span>
          </h1>
          <p className="py-6  lg:max-w-lg">
            Vítejte na mém webu, Anyora!
            <br />
            Snažím se zjednodušit cestu k zdraví.
            <br />
            Bez zázračných řešení, jen osvědčené metody a lidský přístup.
          </p>
          <div className="flex gap-2 max-lg:justify-center">
            <NewsletterForm />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
