import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "@/utils/motions";

export const TypeMotionText = ({ title }: { title: string }) => (
  <motion.p
    variants={textContainer}
    style={{ fontFamily: "Poppins, sans-serif" }}
    className="lg:text-2xl md:text-base text-xs font-medium tracking-tight text-white  text-center text-wrap "
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);
