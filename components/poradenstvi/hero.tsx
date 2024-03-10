import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import heroImg from "/public/hero.jpg";

const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      id="domu"
      className="hero flex justify-center lg:mt-20"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="hero-content flex-col-reverse justify-between lg:flex-row-reverse"
      >
        <Image
          src={heroImg}
          alt="Picture of the author"
          className="max-w-xs rounded-b-box rounded-t-[14rem] shadow-2xl outline outline-base-content/5 md:max-w-md"
        />
        <div className="text-center lg:text-start md:mr-16">
          <span className="badge badge-outline badge-lg mb-2">
            Nutriční poradenství
          </span>
          <h1 className="text-5xl leading-tight text-secondary font-black uppercase md:text-7xl md:leading-tight">
            <span className="opacity-50">Pociťte </span>
            <p>sebejistotu,</p>
            <p>vyváženost</p>
            <p>a klid</p>
            <span className="opacity-50"> s jídlem.</span>
          </h1>
          <p className="py-6  lg:max-w-lg">
            Vítejte na mém webu, Anyora!
            <br />
            Snažím se zjednodušit cestu k zdraví. Bez zázračných řešení, jen
            osvědčené metody a lidský přístup.
          </p>
          <div className="flex gap-2 max-lg:justify-center">
            <a
              href="#kontakt"
              className="btn bg-base-100 md:btn-lg rounded-full shadow"
            >
              Začít
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
