import Image from "next/image";
import Logo from "@/public/icons/nospamlogo.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" flex justify-center">
      <div className="flex flex-row justify-between  w-screen  lg:max-w-[1140px]  md:max-w-[720px] max-w-[320px] object-contain overflow-hidden items-center">
        <Link href={"/"}>
          <Image src={Logo} alt="Nospam" width={100} />
        </Link>
        <h4 className=" lg:block hidden text-[10px] leading-4 font-medium text-[#00AA95] ">
          ©2022 NoSpam. | All rights reserved{" "}
        </h4>
        <div className=" flex gap-3 items-center ">
          <Link href={"/"}>
            <p className="text-[10px] font-semibold text-[#256D85] hover:text-green-700">
              Home
            </p>
          </Link>
          <a
            className="text-[10px] lg:block hidden font-medium text-[#256D85] hover:text-green-700"
            href="https://github.com/SayantanmPaul/nospam-web"
          >
            Source Code
          </a>
          <a
            className="text-[10px] font-medium text-[#256D85] hover:text-green-700"
            href="#"
          >
            Help Desk
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
