"use client";

import acmeLogo from "/public/assets/images/acme.png";
import quantumLogo from "/public/assets/images/quantum.png";
import echoLogo from "/public/assets/images/echo.png";
import celestialLogo from "/public/assets/images/celestial.png";
import pulseLogo from "/public/assets/images/pulse.png";
import apexLogo from "/public/assets/images/apex.png";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="relative bg-black text-white py-[72px] md:py-24 lg:pt-0 lg:pb-24 lg:-mt-20 z-10">
      <div className="container">
        <h2 className="text-xl text-white/70 text-center">
          Trusted by the world&apos;s most innovative teams
        </h2>
        <div className='relative flex before:content-[""] before:absolute before:z-10 before:w-5 before:h-full before:top-0 before:left-0 before:bg-[linear-gradient(to_right,#000000,rgb(0,0,0,0))] after:content-[""] after:absolute after:w-5 after:h-full after:top-0 after:right-0 after:bg-[linear-gradient(to_left,#000000,rgb(0,0,0,0))] mt-9 overflow-hidden'>
          <motion.div
            className="flex flex-none gap-16 pr-16"
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          >
            {images.map(({ src, alt }, index) => (
              <Image
                key={index}
                src={src}
                alt={alt}
                className="flex-none w-auto h-8"
              />
            ))}
            {images.map(({ src, alt }, index) => (
              <Image
                key={index}
                src={src}
                alt={alt}
                className="flex-none w-auto h-8"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
