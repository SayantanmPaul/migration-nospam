"use client";

import { Disclosure } from "@headlessui/react";
import { motion } from "framer-motion";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
// Icons
import { AiOutlineCoffee, AiOutlineThunderbolt } from "react-icons/ai";
import { BiGitBranch, BiHomeAlt, BiLogOut } from "react-icons/bi";
import { CgMenuRight } from "react-icons/cg";
import { FiHelpCircle } from "react-icons/fi";
import { MdSentimentVerySatisfied } from "react-icons/md";

import sidebarbg from "@/public/coverimages/background-blue.jpg";
import Logo from "@/public/icons/nospamlogo.svg";
import BoyCarsoul from "@/public/user-image/boyimage.png";
import { DefaultSession, Session } from "next-auth";
import { usePathname } from "next/navigation";

type ExtendedSession = Session & {
  user?: {
    id: string;
    role?: string;
    username?: string;
    someExoticUserProperty?: string;
  } & DefaultSession["user"];
};

const NavLink = ({
  href,
  icon: Icon,
  text,
  active = false,
  external = false,
}: {
  href: string;
  icon: React.ElementType;
  text: string;
  active?: boolean;
  external?: boolean;
}) => {
  const content = (
    <div
      className={`flex mb-2 justify-start items-center gap-4 ${
        active ? "bg-gray-800" : "hover:bg-gray-800"
      } p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200`}
    >
      <Icon
        size={23}
        className={`text-lg ${
          active ? "text-white" : "text-gray-900 group-hover:text-white"
        }`}
      />
      <p
        style={{ fontFamily: "Sarabun, sans-serif" }}
        className={`text-sm lg:text-base ${
          active
            ? "text-white font-semibold"
            : "text-gray-800 group-hover:text-white font-bold"
        }  tracking-normal`}
      >
        {text}
      </p>
    </div>
  );

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    <Link href={href}>{content}</Link>
  );
};

const UserProfile = ({ session }: { session: ExtendedSession }) => {
  return (
    <div className="my-4 border-b border-gray-100 pb-4">
      <div className=" flex justify-start flex-col items-center w-full ">
        <Image
          className="rounded-full border-2 p-1 border-[#8FAD8A]"
          src={session?.user?.image || BoyCarsoul}
          alt="user"
          width={82}
          height={82}
        />
        <p
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="text-xs py-2 text-[#142630] font-medium  "
        >
          Sign in as:
        </p>
        <p
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="text-sm py-1 text-[#142630] tracking-normal font-semibold   "
        >
          {session?.user?.name}
        </p>
        <p
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="text-xs py-1 text-[#142630] font-semibold   "
        >
          {session?.user?.email}
        </p>
      </div>
    </div>
  );
};

const Sidebar = ({
  session,
  mobile = false,
}: {
  session: ExtendedSession;
  mobile?: boolean;
}) => {
  const pathname = usePathname();
  return (
    <div
      className={`${
        mobile
          ? "p-6 w-3/5 md:w-1/3 h-full bg-gradient-to-r from-[#4CACBC] to-[#488FB1] z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-in-out delay-150 duration-500"
          : "py-6 h-screens top-0 -left-96 lg:left-0 w-fit peer-focus:left-0 peer:transition ease-in-out delay-150 duration-500 hidden lg:block z-10"
      }`}
      // style={ backgmobile ? {roundImage: sidebarbg } : {}}
      style={{
        backgroundImage: `url(${sidebarbg.src})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-start items-center">
        <Image src={Logo} alt="nospam" width={130} />
        <UserProfile session={session} />
        <div className={mobile ? "" : "p-5"}>
          <NavLink
            href="/space"
            icon={BiHomeAlt}
            text="Main Menu"
            active={pathname === "/space"}
          />
          <NavLink
            href="/space/spam-detection"
            icon={AiOutlineCoffee}
            text="Spam Detection"
            active={pathname === "/space/spam-detection"}
          />
          <NavLink
            href="/space/sentiment-detection"
            icon={MdSentimentVerySatisfied}
            text="Sentiment Analysis"
            active={pathname === "/space/sentiment-detection"}
          />
          <NavLink
            href="/space/speach-detection"
            icon={AiOutlineThunderbolt}
            text="Speech to Text Analysis"
            active={pathname === "/space/speach-detection"}
          />
          <NavLink
            href="https://github.com/SayantanmPaul/nospam-web"
            icon={BiGitBranch}
            text="Source Code"
            external
          />
          <NavLink href="" icon={FiHelpCircle} text="Help Desk" />
          <div className="fixed bottom-0 py-5">
            <div
              onClick={() => signOut()}
              style={{ fontFamily: "Poppins, sans-serif" }}
              className={`flex mb-2 justify-start items-center gap-4 ${
                mobile ? "px-9" : "lg:px-9 md:px-9 px-8"
              } hover:bg-gray-800 p-2 border-2 ${
                mobile ? "border-white" : "border-gray-600"
              } rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200 font-semibold hover:font-medium`}
            >
              <BiLogOut className="text-lg lg:text-xl text-gray-900 group-hover:text-green-500" />
              <p className="text-sm lg:text-base text-gray-800 group-hover:text-white pr-6 tracking-normal">
                Log out
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpaceLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      window.location.href = "/login";
    }
  }, [status]);

  if (!session) return null;

  if (status !== "authenticated") {
    return (
      <div className="bg-green-200 h-screen">
        <div className="flex justify-center">
          <h1
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="text-teal-600 text-lg items-center p-10"
          >
            443 error please signin again!
          </h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>NosSpam: Dashboard</title>
        <meta name="description" content="NosSpam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
      >
        {/* Mobile Navigation */}
        <Disclosure as="nav" className="block lg:hidden">
          <Disclosure.Button className="right-0 items-center peer justify-center rounded-md pl-4 pt-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white group">
            <div className="lg:hidden w-screen flex flex-row justify-between items-center">
              <Image src={Logo} alt="nospam" width={130} className="" />
              <CgMenuRight
                className="absolute right-4 lg:hidden h-6 w-6 text-[#256D85] focus:text-[#122D42]"
                aria-hidden="true"
              />
            </div>
          </Disclosure.Button>
          <Sidebar session={session} mobile />
        </Disclosure>

        {/* Desktop Layout */}
        <div className="flex flex-row w-screen overflow-hidden ">
          <Sidebar session={session} mobile={false} />
          <div className="w-full">{children}</div>
        </div>
      </motion.div>
    </>
  );
};

export default SpaceLayout;
