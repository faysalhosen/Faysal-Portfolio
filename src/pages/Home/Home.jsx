import { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/Projects/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../../utils/ScrollToTop";
import Contact from "../../components/Contact/Contact";
import BannerMarquee from "../../components/Banner/BannerMarquee";
import About from "../About/About";
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar/>
      <Banner />
      <BannerMarquee/>
      <About/>
      <div className="bg-[#050b1f]">
        <Projects/>
        <ScrollToTop/>
        <Contact />
      </div>
    </div>
  );
};
export default Home;
