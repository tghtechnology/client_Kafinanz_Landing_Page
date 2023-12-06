import { useState } from "react";

const Whatsapp = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleWhatsAppClick = () => {
    const mensajePredeterminado = encodeURIComponent(
      "Hola, Necesito tu servicio de consultoría digital 📱📡📊"
    );
    const url = `https://api.whatsapp.com/send?phone=987735564&text=${mensajePredeterminado}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <button className="fixed  transition-transform transform hover:scale-110 animate-bounce animate-duration-2000 animate-iteration-3 animate__animated animate__infinite z-50"
        style={{ bottom: "4rem", right: "2rem", animationName: "scaleIn" }}
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setShowMessage(true)}
        onMouseLeave={() => setShowMessage(false)}
        aria-label="whatsapp"
      >
        <img className=" max-w-[60px] md:max-w-[70px] text-green-500 bg-green-500 rounded-full p-3"
          src="/image/whatsapp.svg"
          alt="logo whatsapp"
        />
      </button>

      {showMessage && (
        <div className="fixed bottom-16 right-28 bg-green-500 py-3 px-9 text-white font-semibold rounded-bl-full rounded-tr-full text-sm md:text-2xl shadow-lg z-50">
          Chatea con nosotros
        </div>
      )}
    </>
  );
};

export default Whatsapp;
