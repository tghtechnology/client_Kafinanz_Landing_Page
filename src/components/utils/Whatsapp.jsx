import { useState } from "react";

const Whatsapp = () => {
  const messageDefault = "Hola, Necesito tu servicio de consultoría digital 📱📡📊";
  const [showMessage, setShowMessage] = useState(true);

  // const handleWhatsAppClick = () => {
  //   const mensajePredeterminado = encodeURIComponent(
  //     "Hola, Necesito tu servicio de consultoría digital 📱📡📊"
  //   );
  //   const url = `https://api.whatsapp.com/send?phone=965441168&text=${mensajePredeterminado}`;
  //   window.open(url, "_blank");
  // };

  return (
    <>
      {/* <button className="fixed  transition-transform transform hover:scale-110 animate-bounce animate-duration-2000 animate-iteration-3 animate__animated animate__infinite z-50"
        style={{ bottom: "4rem", right: "2rem", animationName: "scaleIn" }}
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setShowMessage(true)}
        onMouseLeave={() => setShowMessage(false)}
        aria-label="whatsapp"
      >
        <img className="max-w-[40px] md:max-w-[60px] text-green-500 bg-green-500 rounded-full p-3"
          src="/image/whatsapp.svg"
          alt="logo whatsapp"
        />
      </button>

      {showMessage && (
        <div className="fixed bottom-[4.5rem] right-24 bg-green-500 py-1.5 px-9 font-normal rounded-bl-full rounded-tr-full text-sm md:text-lg- shadow-lg z-50">
          Chatea con nosotros
        </div>
      )} */}

      <a
        href={`https://api.whatsapp.com/send?phone=965441168&text=${messageDefault}`}
        className="fixed w-16 h-16 bg-green-500 bottom-16 right-4 rounded-full flex items-center justify-center transition-transform transform hover:scale-110 animate-bounce"
        style={{ animationName: "scaleIn" }}
      >
        <img
          className=" w-11 h-11"
          src="/image/whatsapp.svg"
          alt="logo whatsapp"
        />
      </a>
      {showMessage && 
        <div className="hidden fixed bottom-20 right-24 bg-green-500 py-1 px-3 rounded-bl-full rounded-tr-full shadow-lg lg:block">
          <p>Chatea con nosotros</p>
        </div>}
    </>
  );
};

export default Whatsapp;
