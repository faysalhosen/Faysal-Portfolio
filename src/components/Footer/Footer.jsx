import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return(
        <div className="flex items-center text-gray-400 bg-[#0a1025] py-4 px-8 justify-between ">
            <div>

            <p>Designed and Developed by Faysal Hosen</p>
            <p>Copyright &copy; 2023 </p>
            </div>
            <div className="flex items-center gap-4">
            <a target="_blank" href="https://github.com/faysalhosen" rel="noreferrer"> <FaGithub size={25}/></a>
            <a target="_blank" href="https://www.linkedin.com/in/faysal-hosen/" rel="noreferrer"> <FaLinkedin size={25}/></a>
            <a target="_blank" href="https://www.instagram.com/faysalhosen7025/" rel="noreferrer"> <FaInstagram size={25}/></a>
            </div>
        </div>
    )}
export default Footer;