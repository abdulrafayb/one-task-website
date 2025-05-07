"use client";

import EcosystemIcon from "../../public/assets/icons/ecosystem.svg";

import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const border = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current?.getBoundingClientRect();
      offsetX.set(e.x - borderRect?.x);
      offsetY.set(e.y - borderRect?.y);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [offsetX, offsetY]);

  return (
    <div className="relative py-10 px-5 md:flex-1 border border-white/30 text-center rounded-xl">
      <motion.div
        className="absolute inset-0 border-2 border-purple-400 rounded-lg"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={border}
      />
      <div className="bg-white inline-flex justify-center items-center w-14 h-14 text-black rounded-lg">
        <EcosystemIcon />
      </div>
      <h3 className="font-bold mt-6">{title}</h3>
      <p className="text-white/70 mt-2">{description}</p>
    </div>
  );
};
