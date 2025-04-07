"use client";

import { useState } from "react";

const ReadMoreFn = ({ children }: { children: string }) => {
  const [isReadMoreShow, setReadMoreShow] = useState(false);
  const toggleBtn = () => {
    setReadMoreShow((prevState) => !prevState);
  };

  const text = children.toString();

  return (
    <div className="">
      <p
        style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.5" }}
        className=" hidden md:block lg:block lg:text-2xl md:text-xl text-lg  text-[#003049] antialiased text-justify "
      >
        {isReadMoreShow ? text : text.substr(0, 167)}
        <button
          onClick={toggleBtn}
          style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
          className="text-[#256D85] lg:text-2xl md:text-xl text-lg px-1 "
        >
          {isReadMoreShow ? "read less" : "read more..."}
        </button>
      </p>
      <p
        style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.5" }}
        className=" lg:hidden md:hidden block lg:text-2xl md:text-xl text-base text-[#003049] antialiased text-justify "
      >
        {isReadMoreShow ? text : text.substr(0, 55)}
        <button
          onClick={toggleBtn}
          style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
          className="text-[#256D85] lg:text-2xl md:text-xl text-base px-1 "
        >
          {isReadMoreShow ? "read less" : "read more..."}
        </button>
      </p>
    </div>
  );
};
export default ReadMoreFn;
