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
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        id="services"
        className="flex flex-col items-center justify-center backdrop-grayscale-0 bg-slate-100 overflow-hidden relative"
      >
          <Image
            width={1152}
            height={768}
            src={`/services/${params.handle}.jpg`}
            alt="car!"
            className="w-full absolute blur transition duration-300"
          />


        <div className="container  grid gap-10 p-4 md:grid-cols-2 xl:grid-cols-3">
          {jsonData.map((item, index) => (
            <Link href={`${item.handle}`} key={index}>
              <div className="card w-96 h-64 glass shadow-xl transition duration-300 hover:-translate-y-1">

                  <figure>
                    <Image
                      width={1152}
                      height={768}
                      src={`/services/${item.handle}.jpg`}
                      alt="car!"
                    />
                  </figure>
                  <div className="card-body backdrop-brightness-200">
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.desc}</p>
                  </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
      <button type="button" onClick={() => router.push("/poradenstvi")}>
        Dashboard
      </button>
    </>
  );
}
