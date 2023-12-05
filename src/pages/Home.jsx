import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import React from "react";

import AccoutingService from "../components/AccoutingService";
import Advantages from "../components/Advantages";
import ChooseUs from "../components/ChooseUs";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Info from "../components/Info";
import OurServices from "../components/OurServices";
import Planes from "../components/Planes";
import Footer from "../components/utils/Footer";
import Navbar from "../components/utils/Navbar";
import Whatsapp from "../components/utils/Whatsapp";

const Home = () => {

  return (
    <>
      <Navbar />
      <Header />
      <main>
        <ChooseUs />
        <AccoutingService />
        <Planes />
        {/* <ServiceDetails/> */}
        <Advantages />
        <OurServices />
        <Info />
        <Contact />
      </main>
      <Footer />
      <ToastContainer />

      <Whatsapp/>

    </>
  );
};

export default Home;
