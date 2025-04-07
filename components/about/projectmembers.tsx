import { staggerContainer, textVariant } from "@/utils/motions";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";

const ProjectMembersComp = () => {
  const memberList = [
    {
      name: "Avanni Sethia",
      image: "/team/avanisethia.jpeg",
      email: "mailto:aavani.sethia1504@gmail.com",
      linkedin: "https://www.linkedin.com/in/avani-sethia-84b64621b",
    },
    {
      name: "Deblina Banerjee",
      image: "/team/deblinabanerjee.jpg",
      email: "mailto:deblinabanerjee780@gmail.com",
      linkedin: "https://www.linkedin.com/in/deblina-banerjee-231290206",
    },
    {
      name: "Durgesh Gupta",
      image: "/team/durgeshgupta.jpg",
      email: "mailto:dg13974@gmail.com",
      linkedin: "https://www.linkedin.com/in/durgesh-gupta-66017811a",
    },
    {
      name: "Shreya Dubey",
      image: "/team/shreyadubey.jpeg",
      email: "mailto:dubeyshreya05@gmail.com",
      linkedin: "https://www.linkedin.com/in/shreya-dubey-a03b2a232",
    },
    {
      name: "Tanish Gupta",
      image: "/team/tanishagupta.png",
      email: "mailto:tanishagupta1234.college@gmail.com",
      linkedin: "https://www.linkedin.com/in/tanisha-gupta-a81158210",
    },
    {
      name: "Sayantan Paul",
      image: "/team/sayantanpaul.jpeg",
      email: "mailto:sayantan.college6291@gmail.com",
      linkedin: "https://www.linkedin.com/in/imsayantanpaul",
    },
  ];

  return (
    <div>
      <motion.div
        variants={staggerContainer({
          staggerChildren: 0.2,
          delayChildren: 0.1,
        })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col lg:gap-6 gap-3 lg:pt-6 md:pt-5 pt-3"
      >
        <div className="">
          <motion.h1
            variants={textVariant(0.1)}
            viewport={{ once: false }}
            style={{ fontFamily: "Fjalla One, sans-serif" }}
            className=" lg:text-5xl md:text-4xl text-[28px]  font-medium lg:leading-10 leading-5 tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-[#2D7D90] to-[#122D42] py-2 "
          >
            Project contributors
          </motion.h1>
        </div>
        <div className=" flex flex-wrap justify-center items-center md:gap-4 gap-3 lg:py-5 md:py-4 py-2  ">
          {memberList.map((member, _) => {
            return (
              <motion.span
                key={_}
                variants={textVariant(0.3)}
                viewport={{ once: true }}
                style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 60px 40px -7px" }}
                className=" bg-white lg:rounded-2xl md:rounded-2xl rounded-xl flex flex-col justify-center items-center lg:pt-8 md:pt-8 pt-4  lg:px-5 md:px-5 px-3 border-2 border-green-300 hover:border-[#8082fa] duration-500 cursor-pointer lg:w-64 md:w-52 w-40"
              >
                <div className=" rounded-full overflow-hidden border-2 border-[#00CC76] ">
                  <Image
                    src={member.image}
                    width={200}
                    height={200}
                    priority={true}
                    alt={member.name}
                    draggable={false}
                    className=" lg:w-[90px] md:w-[90px] w-[70px] rounded-full p-1"
                  />
                </div>
                <p
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  className=" font-bold text-[#6088d9] leading-8 text-center w-[180px] lg:text-base md:text-base text-sm  lg:pt-5 md:pt-5 pt-1  tracking-normal "
                >
                  {member.name}
                </p>

                <div className="w-full h-[1px] bg-[#2D70F3] lg:m-3 md:m-3 m-1 "></div>
                <div className="flex flex-row lg:gap-2 md:gap-2 gap-1 lg:pb-5 md:pb-5 pb-1 justify-center items-center">
                  <Link href={member.email}>
                    <button className=" rounded-full hover:bg-blue-900 duration-300 text-[#244d9d] hover:text-white">
                      <HiMailOpen className=" lg:text-xl md:text-xl text-lg m-2 " />
                    </button>
                  </Link>
                  <Link href={member.linkedin} target="_blank">
                    <button className=" rounded-full hover:bg-blue-900 duration-300 text-[#244d9d] hover:text-white">
                      <FaLinkedinIn className=" lg:text-xl md:text-xl text-lg m-2" />
                    </button>
                  </Link>
                </div>
              </motion.span>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectMembersComp;
