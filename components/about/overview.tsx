import { motion } from "framer-motion";
import { textVariant, staggerContainer } from "@/utils/motions";
import ReadMoreFn from "@/constant/readmore";

const Overview = () => {
  return (
    <div>
      <motion.div
        variants={staggerContainer({
          staggerChildren: 0.2,
          delayChildren: 0.1,
        })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="flex flex-col lg:gap-6 gap-3"
      >
        <div className="lg:pt-0 pt-2">
          <motion.h1
            variants={textVariant(0.2)}
            viewport={{ once: true }}
            style={{ fontFamily: "Fjalla One, sans-serif" }}
            className=" lg:text-5xl md:text-4xl text-3xl font-medium lg:leading-10 leading-5 tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-[#2D7D90] to-[#122D42] py-2"
          >
            Overview
          </motion.h1>
        </div>
        <motion.div
          variants={textVariant(0.4)}
          viewport={{ once: true }}
          className=""
        >
          <p
            style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
            className=" lg:text-2xl md:text-xl text-base leading-10  text-[#003049] antialiased text-justify "
          >
            The project NoSpam aims to develop a machine learning algorithm that
            can accurately classify comments on YouTube videos as either spam or
            legitimate, based on various features such as the text content, the
            user&aposs history, and the frequency of the comment. By identifying
            and filtering out spam comments, the project seeks to improve the
            user experience for viewers and creators on the platform, reduce the
            amount of unwanted content, and mitigate the negative effects of
            spam such as phishing attempts, scams, and malware.
          </p>
          <ReadMoreFn>
            Over 2.5 billion people access Youtube once a month and has 50
            million subscribers according to 2021 survey. Thus the audience of
            youtube spam detection can be may be youtube content creators,
            youtube viewers, youtube advertisers, platform administrators.
            Overall ,a spam detection project is valuable tool for any
            organization that wants to project its users from unwanted spams and
            potential security issues. While there are some potential drawbacks
            ,the benefits of using spam detection project far outweigh the
            potential downsides. With its high accuracy, versatility and
            potential to improve overall communication security, a spam
            detection project is a wise investment for any organization looking
            to stay ahead of the game in rapidly evolving digital landscape.The
            main features of the project can be highlighted as • Highly
            predictive datasets crucial for effective and accurate decision
            making • Can be accessed easily • Free access for everyone •
            Designed as an Open source project to support and allow developers
            from all over world to collaborate and contribute to the project
          </ReadMoreFn>
          <p
            style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
            className=" lg:text-2xl md:text-xl text-base leading-10 py-4  text-[#003049] antialiased text-justify "
          >
            Check out the project report we have created{" "}
            <a
              className="text-[#256D85] hover:text-[#2D70F3] hover:underline italic duration-300 px-1"
              href="https://drive.google.com/file/d/1njNnbrGLOH7NA8WsZQrOmno_65v_-Uyn/view?usp=sharing"
            >
              click here
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Overview;
