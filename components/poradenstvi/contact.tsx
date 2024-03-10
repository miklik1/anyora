"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import ContactForm from "../contact-form";

const Contact = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="kontakt"
      className="mt-20"
    >

        <ContactForm />

    </motion.section>
  );
};

export default Contact;
