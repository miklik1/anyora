"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import jsonData from "@/data/services.json";
import { useRouter, useParams } from "next/navigation";

export function ServiceHero() {
  const params = useParams<{ handle: string }>();
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        id="services"
        className="flex flex-col items-center w-full justify-center backdrop-grayscale-0 bg-slate-100 overflow-hidden relative"
      >
        <Image
          width={1152}
          height={768}
          src={`/services/${params.handle}.jpg`}
          alt="car!"
          className=" w-full h-full object-cover absolute blur transition duration-300"
          priority
        />

        <div className="container  grid gap-4 p-4  xl:grid-cols-3">
          {jsonData.map((item, index) => (
            <Link href={`${item.handle}`} key={index}>
              <div className="card h-full glass shadow-xl transition duration-300 hover:-translate-y-1">
                <figure className="xl:h-32">
                  <Image
                    width={1152}
                    height={768}
                    src={`/services/${item.handle}.jpg`}
                    alt="car!"
                    className="hidden xl:inline-flex"
                    priority
                  />
                </figure>
                <div className="card-body backdrop-brightness-200 p-4">
                  <h2 className="card-title">{item.name}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
      <div className="container flex justify-start px-4">
        <button
          className=" mt-8 btn outline-0 bg-transparent"
          type="button"
          onClick={() => router.push("/poradenstvi")}
        >
          Zpět
        </button>
      </div>
    </div>
  );
}
