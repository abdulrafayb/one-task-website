"use client";

import AppScreen from "../../public/assets/images/app-screen.png";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="bg-black bg-gradient-to-b from-black to-[#5D2CAB] text-white py-[72px] md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-center">
          Intuitive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-white/70 text-xl text-center mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <motion.div
          className="flex justify-center"
          style={{ opacity, rotateX, transformPerspective: "800px" }}
        >
          <Image
            src={AppScreen}
            alt="The Product Screenshot"
            className="mt-14"
            ref={appImage}
          />
        </motion.div>
      </div>
    </div>
  );
};
