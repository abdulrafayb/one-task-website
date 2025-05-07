"use client";

import HelixImage from "../../public/assets/images/helix2.png";
import EmojiStarImage from "../../public/assets/images/emojistar.png";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <div className="bg-black text-white py-[72px] md:py-24" ref={containerRef}>
      <div className="relative container max-w-xl text-center">
        <motion.div style={{ translateY }}>
          <Image
            src={HelixImage}
            alt=""
            className="absolute top-6 left-[calc(100%+36px)]"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={EmojiStarImage}
            alt=""
            className="absolute -top-[120px] right-[calc(100%+24px)]"
          />
        </motion.div>

        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
          Get instant access
        </h2>
        <p className="text-white/30 text-xl mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="max-w-sm mx-auto flex flex-col md:flex-row gap-2.5 mt-10">
          <input
            type="email"
            placeholder="your@gmail.com"
            className="bg-white/20 md:flex-1 h-12 px-5 font-medium rounded-lg placeholder:text-[#9CA3AF]"
          />
          <button className="bg-white text-black h-12 px-5 rounded-lg">
            Get Access
          </button>
        </form>
      </div>
    </div>
  );
};
