/* eslint-disable react/no-unescaped-entities */
import AltNavbar from "../../components/Navbar/AltNavbar";
import profile1 from "../../assets/images/profile1.jpg";
import Skillset from "../../components/Skillset/Skillset";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub, FaInstagram } from "react-icons/fa";

const About = () => {
    return(
        <div>
            {/* navbar */}
            <AltNavbar/>
            {/* banner */}
            <div className="relative h-screen object-cover w-full bg-no-repeat bg-about-image">
                {/* overlay */}
                <div className="h-screen bg-blend-overlay bg-gradient-to-l from-[#111b3c]/30 to-[#006e7b]/30 w-full"></div>
                {/* main container */}
                <div className="absolute top-14 md:top-32 lg:top-1/4 flex flex-col-reverse md:flex-row items-center gap-4 lg:gap-7  justify-center w-full px-4 md:items-start">
                {/* text content */}
                <div data-aos="fade-down" data-aos-duration="1500" className=" text-white  lg:w-1/2">
                    {/* title */}
                    <h1 className="text-2xl lg:text-4xl text-center">Know <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#617bce] to-[#43aeba]">Who</span> I'M</h1>
                    {/* desc */}
                    <div className="bg-gradient-to-r from-[#08153e]/70 to-[#0e1248]/30 p-4 text-sm lg:text-lg space-y-4 rounded-md text-gray-300 mt-4">
                    <p> 👋 Hi, I'm Faysal Hosen, a frontend developer. I'm dedicated to creating seamless user experiences using JavaScript and React.</p>
                    /<p className="hidden md:block"> 💡 What I bring to the table: Responsive Design: Crafted to look amazing on any device, ensuring a consistent and enjoyable user experience.</p>
                    <p className="hidden md:flex items-center gap-2"> <MdEmail size={25}/> faysalhosen7025@gmail.com</p>
                  <div className="hidden md:flex items-center gap-3">
                  <a target="_blank" href="https://www.linkedin.com/in/faysal-hosen/" rel="noreferrer"> <FaLinkedin size={25}/></a>
                   <a target="_blank" href="https://github.com/faysalhosen" rel="noreferrer"> <FaGithub size={25}/></a>
                   <a target="_blank" href="https://www.instagram.com/faysalhosen7025/" rel="noreferrer"> <FaInstagram size={25}/></a>
                  </div>
                    </div>
                </div>

                {/* profile image */}
                <div data-aos="fade-up" data-aos-duration="1500">

                    <img  className="w-72 lg:w-96 rounded-md opacity-75" src={profile1} alt="profile" />
                </div>

                </div>
            </div>
            <Skillset/>
            {/* The days I code */}
            {/* title */}
            <div className="pt-8 bg-[#050b1f]">
          
        </div>
          
        </div>
    )}
export default About;