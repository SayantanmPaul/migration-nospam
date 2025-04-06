"use client";

import Image from "next/image";
import Logo from "@/public/icons/nospamlogo.svg";
// import backgroundvillage from "../public/background2.jpg";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        id="contactus"
        className="flex flex-col lg:items-center md:items-center z-10"
      >
        <div className="flex lg:flex-row flex-col lg:items-center  justify-between w-full max-w-[1240px] lg:pt-12 pt-4  pb-8">
          <div className=" flex flex-col gap-1 py-6 lg:px-0 md:px-[10%] px-0">
            <Image src={Logo} alt="nospam" width={130} />
            <p
              style={{ fontFamily: "Barlow, sans-serif", fontStyle: "inherit" }}
              className="text-white font-display font-normal text-sm leading-4 tracking-normal capitalize"
            >
              a tool that verifies whether <br></br> YouTube comments are spam!
            </p>
            <p className="text-[#00AA95] leading-4 text-[10px] tracking-tight">
              ©2022 NoSpam. | All rights reserved{" "}
            </p>
          </div>

          <div className=" lg:flex-row md:flex-row flex-col flex justify-evenly lg:gap-10 gap-4   ">
            <div>
              <p
                className=" text-base font-display text-[#00CC76] tracking-normal leading-5"
                style={{ fontFamily: "Barlow, sans-serif" }}
              >
                NoSpam.
              </p>
              <ScrollLink
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
              >
                <p
                  style={{ fontFamily: "Sarabun, sans-serif" }}
                  className="text-white font-secondary text-sm leading-7 tracking-normal cursor-pointer"
                >
                  Home
                </p>
              </ScrollLink>
              <Link rel="preload" href={"/documentation"} as="About">
                <p
                  style={{ fontFamily: "Sarabun, sans-serif" }}
                  className="text-white font-secondary text-sm leading-7 tracking-normal cursor-pointer"
                >
                  About us
                </p>
              </Link>
              <a
                href="https://github.com/SayantanmPaul/nospam-web"
                style={{ fontFamily: "Sarabun, sans-serif" }}
                className="text-white font-secondary text-sm leading-7 tracking-normal cursor-pointer"
              >
                Source Code
              </a>
              <Link rel="preload" href={"/documentation"} as="About">
                <p
                  style={{ fontFamily: "Sarabun, sans-serif" }}
                  className="text-white font-secondary text-sm leading-7 tracking-normal cursor-pointer"
                >
                  FAQs
                </p>
              </Link>
            </div>
            <div className="flex flex-row  lg:gap-10 md:gap-16 gap-10">
              <div>
                <a
                  href="https://www.linkedin.com/in/avani-sethia-84b64621b"
                  className=" text-base font-display text-[#00CC76] tracking-normal leading-5"
                  style={{ fontFamily: "Barlow, sans-serif" }}
                >
                  team
                </a>
                <Link href="https://www.linkedin.com/in/avani-sethia-84b64621b">
                  <p
                    style={{ fontFamily: "Sarabun, sans-serif" }}
                    className="text-white font-secondary text-sm leading-7 tracking-normal cursor-pointer uppercase hover:underline hover:text-[#00AA95] duration-500 "
                  >
                    Avani Sethia
                  </p>
                </Link>
                <Link href="https://www.linkedin.com/in/deblina-banerjee-231290206">
                  <p
                    style={{ fontFamily: "Sarabun, sans-serif" }}
                    className="text-white font-secondary text-sm leading-7 tracking-normal cursor-pointer uppercase hover:underline hover:text-[#00AA95] duration-500"
                  >
                    Deblina Banerjee
                  </p>
                </Link>
                <Link href="https://www.linkedin.com/in/durgesh-gupta-66017811a/">
                  <p
                    style={{ fontFamily: "Sarabun, sans-serif" }}
                    className="text-white font-secondary text-sm leading-7 tracking-normal cursor-pointer uppercase hover:underline hover:text-[#00AA95] duration-500 "
                  >
                    Durgesh Gupta
                  </p>
                </Link>
              </div>
              <div>
                <p
                  className=" text-base text-[#122D42] font-display tracking-normal leading-5"
                  style={{ fontFamily: "Barlow, sans-serif" }}
                >
                  .
                </p>
                <Link href="https://www.linkedin.com/in/tanisha-gupta-a81158210">
                  <p
                    style={{ fontFamily: "Sarabun, sans-serif" }}
                    className="text-white font-secondary text-sm leading-7 tracking-normal cursor-pointer uppercase hover:underline hover:text-[#00AA95] duration-500"
                  >
                    Tanisha Gupta
                  </p>
                </Link>
                <Link href="https://www.linkedin.com/in/shreya-dubey-a03b2a232/">
                  <p
                    style={{ fontFamily: "Sarabun, sans-serif" }}
                    className="text-white font-secondary text-sm leading-7 tracking-normal cursor-pointer uppercase hover:underline hover:text-[#00AA95] duration-500"
                  >
                    Shreya Dubey
                  </p>
                </Link>
                <Link href="https://www.linkedin.com/in/imsayantanpaul/">
                  <p
                    style={{ fontFamily: "Sarabun, sans-serif" }}
                    className="text-white font-secondary text-sm leading-7 tracking-normal cursor-pointer uppercase hover:underline hover:text-[#00AA95] duration-500"
                  >
                    Sayantan Paul
                  </p>
                </Link>
              </div>
            </div>
            <div>
              <p
                className=" text-base text-[#00CC76] font-display tracking-normal leading-5 "
                style={{ fontFamily: "Barlow, sans-serif" }}
              >
                Contact us
              </p>
              <p
                style={{ fontFamily: "Sarabun, sans-serif" }}
                className="text-white font-secondary text-sm leading-7 tracking-normal cursor-pointer "
              >
                Email
              </p>
              <p
                style={{ fontFamily: "Sarabun, sans-serif" }}
                className="text-white font-secondary text-sm leading-7 tracking-normal cursor-pointer "
              >
                LinkedIn
              </p>
              <p
                style={{ fontFamily: "Sarabun, sans-serif" }}
                className="text-white font-secondary text-sm leading-7 tracking-normal cursor-pointer "
              >
                Instagram
              </p>
              <p
                style={{ fontFamily: "Sarabun, sans-serif" }}
                className="text-white font-secondary text-sm leading-7 tracking-normal cursor-pointer "
              >
                Twitter
              </p>
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-[#00AA95]"></div>

        {/* team name */}
        <p
          style={{ fontFamily: "Sarabun, sans-serif" }}
          className="text-[#00AA95] text-center font-secondary text-xs py-4 tracking-normal"
        >
          Made with love by Team Infinity | This project is currently in the
          development stage{" "}
        </p>
      </footer>
    </>
  );
};
export default Footer;
