import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/layout.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ backgroundImage: "url(/coverimages/background-blue.jpg)" }}
      className="flex h-screen bg-cover bg-center"
    >
      <div className="m-auto bg-slate-50 rounded-2xl lg:w-3/6 md:w-3/5 w-[85%] min-h-[64vh] grid lg:grid-cols-2 ">
        <div className=" p-4 h-full overflow-hidden rounded-l-2xl min-h-[20vh]">
          <div className="relative h-full w-full overflow-hidden rounded-md">
            <Image
              src={"/signin-carousel/ghibliimg4.jpg"}
              alt="img1"
              fill
              draggable={false}
              priority={true}
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="right flex flex-col justify-evenly relative">
          <div className="lg:p-7 p-5 text-center">{children}</div>
        </div>
      </div>
    </motion.div>
  );
}
