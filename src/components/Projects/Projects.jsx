/* eslint-disable react/no-unescaped-entities */
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import projectImg1 from "../../assets/images/project1.png";
import projectImg2 from "../../assets/images/project2.png";
import projectImg3 from "../../assets/images/project3.png";
import Container from "../Shared/Container";

const Projects = () => {
  return (
    <div id="projects" className="  text-white text-center">
      <Container>
        {/* Title */}
          <div>
            <h2 className="animate-pulse text-center text-4xl font-medium pt-20">
              My Recent{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#617bce] to-[#43aeba]">
                Works
              </span>
            </h2>
            <p className="text-lg my-2">
              Here are a few projects I've worked on recently
            </p>
          </div>

        {/* project container */}
        <div className="flex flex-col gap-6 pt-10">
          {/* project one */}
          <div
            data-aos="fade-up"
            className="flex flex-col lg:flex-row item glass rounded-lg p-4"
          >
            <a
              target="_blank"
              href="https://news-wave-af65c.web.app/"
              rel="noreferrer"
            >
              <img
                className="w-[2000px] h-96 opacity-75 duration-200 hover:opacity-100 hover:cursor-pointer"
                src={projectImg1}
                alt="project one"
              />
            </a>

            <div className="p-4">
              <h2 className="text-lg font-semibold border-b w-1/3 pb-1 mx-auto">
                News Wave
              </h2>
              <div className="md:px-4 my-4 text-gray-400">
                <p className="text-start">
                News Wave, a dynamic web application, seamlessly delivers curated news content. Crafted with ReactJS and Tailwind, its responsive design ensures an optimal viewing experience across devices. The backend, powered by Express.js and MongoDB, provides a robust foundation for efficient data management. User authentication is fortified by Firebase, fostering a secure environment for role-based access.
                </p>
                <p className="text-start mt-2 text-slate-100">
                  <span className="font-bold">Developed with:</span> ReactJS,
                  TailwindCSS, Firebase, Mongoose, Express, Node, JWT web token.
                </p>
              </div>

              {/* <div className="flex justify-end gap-4">
                <a
                  target="_blank"
                  href="https://news-wave-af65c.web.app/"
                  className="btn border-none text-black duration-300 bg-gradient-to-r from-[#617bce] to-[#43aeba] hover:scale-105"
                  rel="noreferrer"
                >
                  LIVE SITE
                </a>
                <a
                  target="_blank"
                  href="https://github.com/faysalhosen/news-wave-client"
                  className="btn btn-outline text-[#617bce] hover:bg-[#2d7e87]"
                  rel="noreferrer"
                >
                  GITHUB
                </a>
              </div> */}
              <div className="flex gap-5 justify-center items-center">

            <a className="hover:text-[#006e7b]" target="_blank" href="https://github.com/faysalhosen" rel="noreferrer"> <FaGithub size={35}/></a>
            <a className="hover:text-[#006e7b]"  target="_blank" href="https://www.linkedin.com/in/faysal-hosen/" rel="noreferrer"> <FaLinkedin size={35}/></a>
            <a className="hover:text-[#006e7b]" target="_blank" href="https://www.instagram.com/faysalhosen7025/" rel="noreferrer"> <FaInstagram size={35}/></a>
            </div>
            </div>
          </div>
          {/* project two */}
          <div
            data-aos="fade-up"
            className="flex flex-col lg:flex-row item glass rounded-lg p-4"
          >
            <div className="p-4">
              <h2 className="text-lg font-semibold border-b w-1/3 pb-1 mx-auto">
                Home service
              </h2>
              <div className="md:px-4 my-4 text-gray-300">
                <p className="text-start">
                Home service is a user-friendly web application crafted with React.js and Tailwind CSS, offering a seamless experience for home service providers. The backend, powered by Express.js and MongoDB, ensures efficient data handling and storage. Secure access is guaranteed through Firebase authentication, providing a reliable and modern platform for connecting home service seekers with skilled professionals.



                </p>
                <p className="text-start mt-2 text-slate-100">
                  <span className="font-bold text-slate-200">Developed with:</span> ReactJS,
                  Firebase, Express, TailwindCSS, NodeJS, MongoDB
                </p>
              </div>

              {/* <div className="flex justify-start gap-4">
                <a
                  target="_blank"
                  href="https://home-page-exchange-c76d3.web.app/"
                  className="btn border-none text-black duration-300 bg-gradient-to-r from-[#617bce] to-[#43aeba] hover:scale-105"
                  rel="noreferrer"
                >
                  LIVE SITE
                </a>
                <a
                  target="_blank"
                  href="https://github.com/faysalhosen/Home-page-exchange-client"
                  className="btn btn-outline text-[#9bb2ff] hover:bg-[#2d7e87]"
                  rel="noreferrer"
                >
                  GITHUB
                </a>
              </div> */}
              <div className="flex gap-5 justify-center items-center">

            <a className="hover:text-[#006e7b]" target="_blank" href="https://github.com/faysalhosen" rel="noreferrer"> <FaGithub size={35}/></a>
            <a className="hover:text-[#006e7b]"  target="_blank" href="https://www.linkedin.com/in/faysal-hosen/" rel="noreferrer"> <FaLinkedin size={35}/></a>
            <a className="hover:text-[#006e7b]" target="_blank" href="https://www.instagram.com/faysalhosen7025/" rel="noreferrer"> <FaInstagram size={35}/></a>
            </div>
            </div>
            <a
              target="_blank"
              href="https://home-page-exchange-c76d3.web.app/"
              rel="noreferrer"
            >
              <img
                className="w-[2000px] h-96 opacity-75 duration-200 hover:opacity-100 hover:cursor-pointer"
                src={projectImg2}
                alt="project one"
              />
            </a>
          </div>
          {/* project three */}
          <div
            data-aos="fade-up"
            className="flex flex-col lg:flex-row item glass rounded-lg p-4"
          >
            <a
              target="_blank"
              href="https://brand-shop-6bcb5.web.app/"
              rel="noreferrer"
            >
              <img
                className="w-[2000px] h-96 opacity-75 duration-200 hover:opacity-100 hover:cursor-pointer"
                src={projectImg3}
                alt="project one"
              />
            </a>

            <div className="p-4">
              <h2 className="text-lg font-semibold border-b w-1/3 pb-1 mx-auto">
                Brand Shop
              </h2>
              <div className="md:px-4 my-4 text-gray-400">
                <p className="text-start">
                Brand Shop, a robust web application tailored for all your shopping needs. Built with React.js and styled with Tailwind CSS, the frontend offers a sleek and intuitive shopping experience. The backend, driven by Express.js and MongoDB, ensures seamless data management. With Firebase authentication, Brand Shop guarantees a secure environment, providing users access to a diverse range of shop-related services in a modern and user-friendly interface."
                </p>
                <p className="text-start mt-2 text-slate-100">
                  <span className="font-bold text-slate-200">Developed with:</span> ReactJS,
                  Firebase, Express, TailwindCSS, NodeJS, MongoDB
                </p>
              </div>

              {/* <div className="flex justify-end gap-4">
                <a
                  target="_blank"
                  href="https://brand-shop-6bcb5.web.app/"
                  className="btn border-none text-black duration-300 bg-gradient-to-r from-[#617bce] to-[#43aeba] hover:scale-105"
                  rel="noreferrer"
                >
                  LIVE SITE
                </a>
                <a
                  target="_blank"
                  href="https://github.com/faysalhosen/brand-shop-client"
                  className="btn btn-outline text-[#617bce] hover:bg-[#2d7e87]"
                  rel="noreferrer"
                >
                  GITHUB
                </a>
              </div> */}
              <div className="flex gap-5 justify-center items-center">

            <a className="hover:text-[#006e7b]" target="_blank" href="https://github.com/faysalhosen" rel="noreferrer"> <FaGithub size={35}/></a>
            <a className="hover:text-[#006e7b]"  target="_blank" href="https://www.linkedin.com/in/faysal-hosen/" rel="noreferrer"> <FaLinkedin size={35}/></a>
            <a className="hover:text-[#006e7b]" target="_blank" href="https://www.instagram.com/faysalhosen7025/" rel="noreferrer"> <FaInstagram size={35}/></a>
            </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Projects;
