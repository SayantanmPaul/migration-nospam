import React from "react";
import Home from "@/public/vectors/homeimage.png";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="lg:p-12 p-4 flex flex-col h-screen lg:gap-5 overflow-hidden">
      <h1
        style={{ fontFamily: "Poppins, sans-serif" }}
        className="lg:text-3xl text-2xl font-semibold  text-[#256D85] tracking-normal"
      >
        Home Page
      </h1>
      <div className="greenbox relative flex-1 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 rounded-lg bg-[#80FFDB]">
        <div className=" flex flex-col justify-center items-center gap-2">
          <Image src={Home} alt="homeimage" width={450} />
          <h1
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="lg:text-2xl text-md font-semibold  text-[#256D85] tracking-normal"
          >
            You have been successfully Logged In
          </h1>
          <p
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="lg:text-sm text-xs font-semibold  text-[#256D85] tracking-normal"
          >
            Check out our current projects
          </p>
          <Link href="/space/spam-detection">
            <button className="py-2">
              <span className=" font-semibold inline-flex items-center justify-center lg:px-5 px-3 py-1 text-base text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">
                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
                <span className="relative lg:text-md text-sm">Explore Now</span>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
