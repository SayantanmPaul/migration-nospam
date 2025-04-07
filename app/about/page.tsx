"use client";

import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motions";
import Navbar from "@/components/landing/navbar";
import Overview from "@/components/about/overview";
import { TypeMotionText } from "@/utils/typemotion";
import ProjectMembersComp from "@/components/about/projectmembers";
import Footer from "@/components/about/footer";
import BgAbout from "@/public/coverimages/background2.jpg";

const Documentation = () => {
  return (
    <>
      <Head>
        <title>NoSpam: About</title>
      </Head>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 3 }}
        className=" lg:px-28 px-6 pt-5 "
      >
        <Navbar />
        <div className=" flex flex-col items-center justify-center lg:pt-5 pt-4 ">
          {/* in green box */}
          <div className=" relative greenbox  h-auto  rounded-lg bg-gradient-to-br from-[#80FFDB]  to-[#2D7D90] max-w-[1280px] overflow-hidden ">
            <div className=" lg:p-10 md:p-8 p-4 flex flex-col lg:gap-7 gap-4 ">
              <Image
                src={BgAbout}
                alt="background"
                layout="fill"
                objectFit="cover"
                className=" absolute opacity-25 z-0"
              />
              <div className="z-10">
                <Overview />
                <ProjectMembersComp />

                <div>
                  <motion.div
                    variants={staggerContainer({
                      staggerChildren: 0.2,
                      delayChildren: 0.1,
                    })}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.01 }}
                    className="lg:p-10 lg:py-5 md:py-5 py-3"
                  >
                    <TypeMotionText
                      title={
                        "Thanks to this awesome team to make possible this project"
                      }
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          {/* footer section */}

          <div className=" bg-[#122D42] mt-5 p-2 w-screen">
            <Footer />
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Documentation;
