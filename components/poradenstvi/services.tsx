"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import services from "@/data/services.json";

const Services = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="sluzby"
      className="mt-10 flex flex-col items-center justify-center md:mt-20"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-col items-center justify-center"
      >
        <h1 className="text-center text-3xl font-semibold md:text-5xl">
          Moje služby
        </h1>
        <span className="text-md mt-2 px-2 text-center  md:mt-4 md:px-5 md:text-xl">
          Uncover new paths, explore opportunities and chart your success with
          us.
        </span>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="container mt-10 grid gap-4 p-4 lg:grid-cols-3 xl:grid-cols-3"
      >
        {services.map((item, index) => (
          <Link href={`poradenstvi/sluzby/${item.handle}`} key={index}>
            <div className="card image-full shadow-xl transition duration-300 h-36 lg:h-full hover:-translate-y-1 cursor-pointer">
              <figure className="object-cover">
                <Image
                  width={1152}
                  height={768}
                  src={`/services/${item.handle}.jpg`}
                  alt={item.name}
                  priority
                />
              </figure>
              <div className="card-body p-4 lg:p-8">
                <div className="mt-auto text-white">
                  <h2 className="card-title text-4xl font-semibold">
                    {item.name}
                  </h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="container"
      >
        <div className="text-center w-full">
          <Link
            className=" mt-8 btn bg-base-100 hover:bg-secondary hover:border-primary hover:text-white rounded-full"
            type="button"
            href="/poradenstvi/sluzby"
          >
            Dozvědět se více
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
