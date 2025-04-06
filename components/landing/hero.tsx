import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import VectorImage from "@/public/vectors/firstvector.png";
import { fadeIn, staggerContainer, textVariant } from "@/utils/motions";

const Hero = () => {
  return (
    <div id="Home" className="flex justify-center">
      <motion.div
        variants={staggerContainer({
          staggerChildren: 0.2,
          delayChildren: 0.1,
        })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex max-w-[1240px] items-center lg:flex-row flex-col lg:gap-14 overflow-hidden "
      >
        <div className=" lg:max-w-[500px] w-full flex flex-col gap-8 ">
          <motion.h1
            variants={textVariant(0.5)}
            viewport={{ once: false }}
            style={{ fontFamily: "Fjalla One, sans-serif" }}
            className=" capitalize lg:text-[55px] lg:leading-[80px] leading-[47px] md:text-5xl text-[40px] font-medium text-[#2D7D90] "
          >
            Determine whether the comments are spam or not!
          </motion.h1>
          <motion.p
            variants={textVariant(0.7)}
            viewport={{ once: false }}
            style={{ fontFamily: "Roboto" }}
            className="font-medium lg:text-lg md:text-lg text-sm leading-6  text-[#00AA95]"
          >
            A project designed for detection of spam comments by quickly and
            accurately identifying irrelevant, inappropriate, and promotional
            messages.
          </motion.p>
          <Link rel="preload" href={"./login"} as="login">
            <motion.button
              variants={textVariant(0.8)}
              className="flex justify-start"
            >
              <p
                className="inline-flex items-center font-medium justify-center px-6 py-2 mb-2 text-lg text-white bg-[#256D85] rounded-3xl hover:bg-[#00CC76] sm:w-auto sm:mb-0 duration-500 "
                data-primary="green-400"
                data-rounded="rounded-2xl"
                data-primary-reset="{}"
              >
                Get Started
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </p>
            </motion.button>
          </Link>
        </div>
        <motion.div
          variants={fadeIn({
            direction: "up",
            type: "tween",
            delay: 0.3,
            duration: 1,
          })}
          className="object-contain md:w-[70%] w-[90%] h-auto flex justify-center"
        >
          <Image
            src={VectorImage}
            alt="vectorimg"
            width={586}
            priority={true}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Hero;
