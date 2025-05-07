"use client";

import ArrowWIcon from "../../public/assets/icons/arrow-w.svg";
import CursorImage from "../../public/assets/images/cursor.png";
import MessageImage from "../../public/assets/images/message.png";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative bg-black text-white bg-[linear-gradient(to_bottom,#000000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] md:py-24 lg:pb-96 overflow-clip">
      <div className="absolute bg-black w-[750px] md:w-[1536px] lg:w-[2400px] h-[375px] md:h-[768px] lg:h-[1200px] top-[calc(100%-96px)] md:top-[calc(100%-120px)] lg:top-[calc(100%-408px)] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000000_82%,#9560EB)] rounded-[100%]"></div>

      <div className="relative container">
        <div className="flex justify-center items-center">
          <Link
            href="/"
            className="inline-flex gap-3 border border-white/30 py-1 px-2 rounded-lg"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowWIcon />
            </span>
          </Link>
        </div>
        <div className="flex justify-center mt-8">
          <div className="relative inline-flex">
            <motion.div
              className="absolute top-[108px] right-[476px] hidden md:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={CursorImage}
                alt=""
                className="max-w-none"
                draggable={false}
              />
            </motion.div>
            <motion.div
              className="absolute top-[56] left-[498px] hidden md:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={MessageImage}
                width={200}
                alt=""
                className="max-w-none"
                draggable={false}
              />
            </motion.div>
            <h1 className="inline-flex text-7xl md:text-9xl font-bold tracking-tighter text-center">
              One Task <br /> at a Time
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-xl max-w-md text-center mt-8">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black font-medium py-3 px-5 rounded-lg">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};
