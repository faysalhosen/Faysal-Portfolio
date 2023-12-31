import {
    FaCalendarAlt,
   FaGraduationCap,
   // FaGraduationCap,
    FaHome,
    FaPhone,
    FaUser,
  } from "react-icons/fa";
  import { HiMail } from "react-icons/hi";
  
  const PersonalInfo = () => {
    return (
      <div
        data-aos="fade-left"
        data-aos-duration="600"
        data-aos-easing="ease-in-sine"
        className=" text-gray-200"
      >
        <h1 className=" text-xl md:text-2xl lg:text-4xl font-semibold mb-3">Front-End Developer</h1>
        <p className=" max-w-xl text-sm md:text-lg text-[#d5d3d3]">
        I'm dedicated to creating seamless user experiences using JavaScript and React.
        </p>
        <div className=" grid grid-cols-1 sm:grid-cols-2 text-[#D5D5D3] font-light text-sm md:text-lg gap-4 mt-4">
          <div className=" flex items-center gap-2">
            <FaUser className=" text-[#4ecbd9]" />
            <p>Faysal Hosen</p>
          </div>
          <div className=" flex items-center gap-2">
            <HiMail className=" text-[#4ecbd9]" />
            <p>faysalhosen7025@gmail.com</p>
          </div>
          <div className=" flex items-center gap-2">
             <FaGraduationCap className=" text-[#4ecbd9]" />
            <p>BSS in Social Work</p>
          </div> 
          <div className=" flex items-center gap-2">
            <FaPhone className=" text-[#4ecbd9]" />
            <p>+8801998415247</p>
          </div>
          <div className=" flex items-center gap-2">
            <FaCalendarAlt className=" text-[#4ecbd9]" />
            <p>Born on 19 Dec, 2002</p>
          </div>
          <div className=" flex items-center gap-2">
            <FaHome className=" text-[#4ecbd9]" />
            <p> Gazipur, Dhaka,Bangladesh</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default PersonalInfo;
  