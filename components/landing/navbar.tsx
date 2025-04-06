"use client";

import { Disclosure } from "@headlessui/react";
import { BiHomeAlt, BiGitBranch, BiLogIn } from "react-icons/bi";
import { AiOutlineCoffee } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";
import Logo from "@/public/icons/nospamlogo.svg";
import BoyCarsoul from "@/public/user-image/boyimage.png";
import GirlCarsoul from "@/public/user-image/girlimage.png";
import Image from "next/image";
import { motion } from "framer-motion";
import FontStyles from "@/styles/navbar.module.css";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { navVariants } from "@/utils/motions";

const Navbar = () => {
  return (
    <>
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className=" flex flex-row justify-between  items-center mx-auto 2xl:max-w-[1240px] z-20 "
      >
        <button className=" object-contain h-auto w-40 ">
          <Image src={Logo} alt="Logo" width={149} />
        </button>

        {/* desktop view */}
        <div className="lg:flex hidden gap-6 ml-auto ">
          <Link href={"/"}>
            <p
              className={`${FontStyles.text} text-[#00AA95] text-[20px] leading-5 font-normal hover:text-[#2D7D90] tracking-normal  duration-300`}
            >
              Home
            </p>
          </Link>
          <Link rel="preload" href={"/documentation"} as="About">
            <p
              className={`${FontStyles.text} text-[#00AA95] text-[20px] leading-5 font-normal hover:text-[#2D7D90] tracking-normal duration-300`}
            >
              About
            </p>
          </Link>
          <a
            href="https://github.com/SayantanmPaul/nospam-web"
            className={`${FontStyles.text} text-[#00AA95] text-[20px] leading-5 font-normal hover:text-[#2D7D90] tracking-normal duration-300`}
          >
            Source Code
          </a>
          <ScrollLink
            activeClass="active"
            to="contactus"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1500}
          >
            <p
              className={`${FontStyles.text} text-[#00AA95] text-[20px] leading-5 font-normal hover:text-[#2D7D90] tracking-normal duration-300`}
            >
              Contact Us
            </p>
          </ScrollLink>
          <Link rel="preload" href={"/login"} as="login">
            <button>
              <p
                className={`${FontStyles.logintext} bg-[#256D85] text-[20px] leading-5 font-normal text-white tracking-tight hover:bg-[#003049] py-2 pt-1 px-6 rounded-3xl duration-300 `}
              >
                Login/SignUp
              </p>
            </button>
          </Link>
        </div>
        <Disclosure as="nav">
          <Disclosure.Button className=" pt-2 inline-flex items-center peer justify-center text-[#2D7D90] focus:text-[#00AA95] focus:outline-none group ">
            <CgMenuRight className=" block lg:hidden" size={32} />
          </Disclosure.Button>
          <div className=" lg:hidden block  p-6 w-3/5 md:w-[40%] h-screen bg-gradient-to-b from-[#80FFDB] to-[#2D7D90]  fixed top-0 -left-96 peer-focus:left-0 peer:transition ease-in-out delay-150 duration-500">
            <div className="flex flex-col justify-start items-center">
              <button className=" object-contain h-auto w-40 ">
                <Image src={Logo} alt="Logo" width={149} />
              </button>
            </div>
            <div className="flex justify-center my-5 ">
              <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper "
              >
                <SwiperSlide>
                  <div className="flex justify-center">
                    <Image
                      src={GirlCarsoul}
                      alt="img1"
                      width={150}
                      className=" rounded-md object-contain h-auto"
                      priority={true}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center">
                    <Image
                      src={BoyCarsoul}
                      alt="img1"
                      width={150}
                      className="rounded-md object-contain h-auto"
                      priority={true}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="text-center ">
              <a
                style={{ fontFamily: "Caveat, cursive" }}
                className="text-2xl font-medium text-[#003049] "
              >
                &quot;Hi, Let&#39;s get started&quot;
              </a>
            </div>
            <div className="flex justify-center">
              <div className=" my-10 ">
                <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group hover:shadow-lg m-auto duration-200 cursor-pointer ">
                  <BiHomeAlt className=" text-2xl text-gray-600 group-hover:text-white" />
                  <h3
                    style={{ fontFamily: "Sarabun, sans-serif" }}
                    className="text-base font-secondary text-gray-800 group-hover:text-white font-bold"
                  >
                    Home
                  </h3>
                </div>
                <Link rel="preload" href={"./documentation"} as="About">
                  <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group hover:shadow-lg m-aut duration-200 cursor-pointer">
                    <AiOutlineCoffee className=" text-2xl text-gray-600 group-hover:text-white" />
                    <h3
                      style={{ fontFamily: "Sarabun, sans-serif" }}
                      className="text-base font-secondary text-gray-800 group-hover:text-white font-bold"
                    >
                      About
                    </h3>
                  </div>
                </Link>
                <Link
                  rel="preload"
                  href="https://github.com/SayantanmPaul/nospam-web"
                >
                  <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group hover:shadow-lg m-auto duration-200 cursor-pointer">
                    <BiGitBranch className=" text-2xl text-gray-600 group-hover:text-white" />
                    <h3
                      style={{ fontFamily: "Sarabun, sans-serif" }}
                      className="text-base font-secondary text-gray-800 group-hover:text-white font-bold"
                    >
                      Source Code
                    </h3>
                  </div>
                </Link>
                <ScrollLink
                  activeClass="active"
                  to="contactus"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1500}
                >
                  <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group hover:shadow-lg m-auto duration-200 cursor-pointer">
                    <FiHelpCircle className=" text-2xl text-gray-600 group-hover:text-white" />
                    <h3
                      style={{ fontFamily: "Sarabun, sans-serif" }}
                      className="text-base font-secondary text-gray-800 group-hover:text-white font-bold"
                    >
                      Contact us
                    </h3>
                  </div>
                </ScrollLink>
              </div>

              <div className=" fixed  bottom-0 pb-5">
                <Link rel="preload" href={"./login"} as="login">
                  <div className="flex mb-2 justify-start items-center gap-4 px-5 border border-gray-800  hover:bg-gray-900 p-2 rounded-md group hover:shadow-lg m-auto duration-200 cursor-pointer ">
                    <BiLogIn className=" text-2xl text-gray-800 group-hover:text-green-600" />
                    <h3
                      style={{ fontFamily: "Sarabun, sans-serif" }}
                      className="text-base font-secondary text-gray-900 group-hover:text-white font-black"
                    >
                      Login/SignUp
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Disclosure>
      </motion.div>
    </>
  );
};
export default Navbar;
