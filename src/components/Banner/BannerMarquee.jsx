import Marquee from "react-fast-marquee";
import { FaCss3, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiFirebase, SiGithub, SiMongodb, SiTailwindcss } from "react-icons/si";

const BannerMarquee = () => {
  return (
    <div className=" flex items-center px-4 text-[#4ecbd9] bg-[#111b3c]">
      <h1 className=" text-lg md:text-xl lg:text-3xl px-4 w-2/5 md:w-1/5 font-bold text-white ">
        Tech Stack :
      </h1>
      <Marquee pauseOnHover={true} className=" text-5xl  ">
        <FaHtml5 className=" m-10" />
        <FaCss3 className=" m-10" />
        <SiTailwindcss className=" m-10" />
        <IoLogoJavascript className=" m-10" />
        <FaReact className=" m-10" />
        <FaNode className=" m-10" />
        <SiMongodb className=" m-10" />
        <SiFirebase className=" m-10" />
        <SiGithub className=" m-10" />
      </Marquee>
    </div>
  );
};

export default BannerMarquee;