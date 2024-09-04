"use client";

import { heroAirPods } from "@/public";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const variants = {
    hidden: { x: 0, y: 70, opacity: 0.2 },
    visible: { x: 0, y: -10, opacity: 1, transition: { delay: 0.05 } },
  };
  return (
    <div className="w-full md:h-[450px] h-[300px] flex items-center">
      <div className="h-full md:max-w-[1024px] max-w-[600px] m-auto">
        <div className="object-cover">
          <motion.div initial="hidden" animate="visible" variants={variants}>
            <Image src={heroAirPods} height={150} width={1600} alt="banner" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
