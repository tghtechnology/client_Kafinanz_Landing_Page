import { useState } from "react";

const Whatsapp = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleWhatsAppClick = () => {
    const mensajePredeterminado = encodeURIComponent(
      "Hola, Necesito su servicio de consultoría digital 📱📡📊"
    );
    const url = `https://api.whatsapp.com/send?phone=965441168&text=${mensajePredeterminado}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <button className="fixed  transition-transform transform hover:scale-110 animate-bounce animate-duration-3000 animate-iteration-3 animate__animated animate__infinite z-50"
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
      )}
    </>
  );
};

export default Whatsapp;
