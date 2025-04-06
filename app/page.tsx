"use client";

import React from "react";
import Footer from "@/components/landing/footer";
import GetStartedCard from "@/components/landing/getstarted";
import Hero from "@/components/landing/hero";
import Navbar from "@/components/landing/navbar";
import FeaturesCard from "@/components/landing/features";
import DemoCard from "@/components/landing/democard";
import defaultstyles from "@/styles/defaultStyle";
import Image from "next/image";
import backgroundvillage from "@/public/coverimages/background2.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 4 }}
      className=""
    >
      <div className={`${defaultstyles.pxpadding} lg:px-28 px-6 pt-5 z-20 `}>
        <Navbar />
      </div>
      <div
        className={`${defaultstyles.pxpadding} lg:px-28 px-6 bg-repeat `}
        style={{
          backgroundImage:
            "url(https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png)",
        }}
      >
        <div className=" my-11 lg:my-0">
          <Hero />
        </div>
      </div>
      <div className={`${defaultstyles.pxpadding} lg:px-28 px-6 bg-[#80FFDB] `}>
        <DemoCard />
      </div>
      <div
        className={`${defaultstyles.pxpadding} lg:px-28 px-6 bg-repeat flex justify-center flex-col `}
        style={{
          backgroundImage:
            "url(https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png)",
        }}
      >
        <div className="mt-20 lg:mb-10 mb-5 flex flex-col items-center">
          <FeaturesCard />
        </div>
        <div className=" flex flex-col items-center  z-10">
          <GetStartedCard />
        </div>
      </div>
      <div className="bg-[#122D42] mt-10 overflow-hidden relative">
        <div
          className={`${defaultstyles.pxpadding} lg:px-28 px-6  flex flex-col `}
        >
          <div className="z-10">
            <Footer />
          </div>
          <Image
            src={backgroundvillage}
            alt="background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            className=" absolute object-center z-0 opacity-10"
          />
        </div>
      </div>
      <div className="w-screen h-2 bg-green-500"></div>
    </motion.div>
  );
}
