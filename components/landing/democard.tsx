import Image from "next/image";
import SpamExp from "@/public/vectors/demo-spam.png";
import { HiChevronRight } from "react-icons/hi";
import { HiChevronDoubleRight } from "react-icons/hi";
import { staggerContainer, fadeIn } from "@/utils/motions";
import { motion } from "framer-motion";
import Link from "next/link";

const DemoCard = () => {
  return (
    <div className="flex  justify-center py-24">
      <motion.div
        variants={staggerContainer({
          staggerChildren: 0.2,
          delayChildren: 0.1,
        })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex max-w-[1240px] items-center lg:flex-row flex-col-reverse lg:gap-28 gap-8 overflow-hidden"
      >
        <motion.div
          variants={fadeIn({
            direction: "left",
            type: "tween",
            delay: 0.2,
            duration: 1,
          })}
          className="flex justify-center"
        >
          <Image
            src={SpamExp}
            alt="spamcomments"
            width={450}
            className="object-contain lg:w-[100%] md:w-[70%] w-[100%] h-auto"
            priority={true}
          />
        </motion.div>
        <div className="lg:max-w-[985px] flex flex-col gap-5">
          <motion.h1
            variants={fadeIn({
              direction: "up",
              type: "tween",
              delay: 0.2,
              duration: 0.8,
            })}
            style={{ fontFamily: "Fjalla One, sans-serif" }}
            className=" max-w-[700px] font-f capitalize lg:text-[54px] lg:leading-[68px] leading-[50px] md:text-[45px] md:font-medium text-[40px] font-medium text-[#2D7D90] "
          >
            Verify the spam comments with a few easy steps
          </motion.h1>
          <motion.div
            variants={fadeIn({
              direction: "up",
              type: "tween",
              delay: 0.3,
              duration: 1,
            })}
            className="flex justify-start"
          >
            <button className="border-2 border-[#0D4C92] px-3 py-[6px]  rounded-full flex items-center justify-center flex-row hover:bg-[#0D4C92] duration-500 hover:text-white text-[#0D4C92] hover:gap-2 ">
              <a className="uppercase text-sm font-secondary font-bold leading-4 pb-[2px] ">
                See A Tutorial
              </a>
              <HiChevronRight size={18} />
            </button>
          </motion.div>
          <motion.div
            variants={fadeIn({
              direction: "up",
              type: "tween",
              delay: 0.4,
              duration: 1,
            })}
            className="flex justify-start"
          >
            <Link rel="preload" href={"./login"} as="login">
              <button className=" px-4 py-2  rounded-full flex items-center justify-center flex-row bg-[#1d5567] hover:bg-[#003049] duration-500 text-white hover:gap-2 ">
                <p className="uppercase text-sm font-secondary font-medium leading-4 pb-[2px] ">
                  I can find out BY myself
                </p>
                <HiChevronDoubleRight size={18} />
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
export default DemoCard;
