import Image from "next/image";
import Logo from "@/public/icons/nospamlogo.svg";
import { motion } from "framer-motion";
import Predictive from "@/public/icons/icon1.png";
import Eazyccess from "@/public/icons/icon2.png";
import Clover from "@/public/icons/icon3.png";
import OpenSource from "@/public/icons/icon4.png";
import { fadeIn, staggerContainer } from "@/utils/motions";

const FeaturesCard = () => {
  return (
    <>
      <motion.div
        variants={staggerContainer({
          staggerChildren: 0.2,
          delayChildren: 0.1,
        })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" flex justify-center "
      >
        {/* heading */}
        <motion.div
          variants={fadeIn({
            direction: "up",
            type: "tween",
            delay: 0.2,
            duration: 0.5,
          })}
          className=" flex flex-row  justify-center items-center  lg:gap-3 gap-2 "
        >
          <h1
            style={{ fontFamily: "Gothic A1, sans-serif" }}
            className=" font-black lg:text-5xl  text-[27px] text-center  text-[#146691] "
          >
            Why{" "}
          </h1>
          <h1
            style={{ fontFamily: "Gothic A1, sans-serif" }}
            className=" font-black lg:text-5xl text-[27px] text-center  text-[#146691] "
          >
            Choose
          </h1>
          <Image
            src={Logo}
            alt="logo"
            width={220}
            className=" lg:w-56 w-32 lg:mb-2 mb-1"
          />
        </motion.div>
      </motion.div>
      <motion.div
        variants={staggerContainer({
          staggerChildren: 0.2,
          delayChildren: 0.1,
        })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className=" grid lg:grid-cols-4 grid-cols-2 lg:py-28 py-16 lg:gap-6 md:gap-6 max-w-[1280px]">
          <motion.div
            variants={fadeIn({
              direction: "up",
              type: "tween",
              delay: 0.4,
              duration: 0.6,
            })}
            className="flex flex-col items-center m-10 cursor-pointer "
          >
            <Image
              src={Predictive}
              alt="predictive"
              width={78}
              className="lg:w-24"
            />
            <p
              style={{ fontFamily: "Sarabun, sans-serif" }}
              className="text-[#0D4C92] font-secondary uppercase font-extrabold text-center lg:text-base text-sm w-44  p-2"
            >
              highly predective datasets
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn({
              direction: "up",
              type: "tween",
              delay: 0.6,
              duration: 0.6,
            })}
            className="flex flex-col items-center m-10 cursor-pointer"
          >
            <Image
              src={Eazyccess}
              alt="eazy access"
              width={65}
              className="lg:w-20"
            />
            <p
              style={{ fontFamily: "Sarabun, sans-serif" }}
              className="text-[#0D4C92] font-secondary uppercase font-extrabold text-center lg:text-base text-sm w-44 lg:mt-3 mt-2 p-2"
            >
              easy to access
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn({
              direction: "up",
              type: "tween",
              delay: 0.8,
              duration: 0.6,
            })}
            className="flex flex-col items-center m-10 cursor-pointer"
          >
            <Image src={Clover} alt="free" width={65} className="lg:w-20" />
            <p
              style={{ fontFamily: "Sarabun, sans-serif" }}
              className="text-[#0D4C92] font-secondary uppercase font-bold text-center lg:text-base text-sm w-44 lg:mt-3 mt-2  p-2"
            >
              free for everyone
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn({
              direction: "up",
              type: "tween",
              delay: 1,
              duration: 0.6,
            })}
            className="flex flex-col items-center m-10 cursor-pointer"
          >
            <Image
              src={OpenSource}
              alt="open source"
              width={65}
              className="lg:w-20"
            />
            <p
              style={{ fontFamily: "Sarabun, sans-serif" }}
              className="text-[#0D4C92] font-secondary uppercase text-center font-bold lg:text-base text-sm w-44  p-2"
            >
              designed as <br></br> open-source project
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
export default FeaturesCard;
