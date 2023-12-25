import { useEffect } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";


const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />
      <Banner/>
    
    </div>
  );
};
export default Home;
