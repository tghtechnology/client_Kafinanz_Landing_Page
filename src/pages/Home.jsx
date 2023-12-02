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
  // const [showMessage, setShowMessage] = React.useState(false);

  // const handleWhatsAppClick = () => {
  //   // Mensaje predeterminado que se enviará por WhatsApp
  //   const mensajePredeterminado = encodeURIComponent(
  //     "Hola, Necesito tu servicio de consultoria digital 📱📡📊"
  //   );

  //   // Formar la URL con el mensaje predeterminado
  //   const url = `https://api.whatsapp.com/send?phone=952482488&text=${mensajePredeterminado}`;

  //   // Abrir la URL en una nueva ventana o pestaña
  //   window.open(url, "_blank");
  // };


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

      {/* <div className="relative">
        <button
          className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg animate-bounce animate-duration-2000 animate-iteration-3"
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setShowMessage(true)}
          onMouseLeave={() => setShowMessage(false)}
        >
          <img src="/image/wtps.svg" alt="" className="text-5xl"/>
        </button>

        {showMessage && (
          <div className="absolute right-28 bottom-10 bg-green-500 py-3 px-8 text-white font-semibold rounded-bl-full rounded-tr-full text-2xl shadow-lg animate-bounce">
            Chatea con nosotros
          </div>
        )}
      </div> */}
    </>
  );
};

export default Home;
