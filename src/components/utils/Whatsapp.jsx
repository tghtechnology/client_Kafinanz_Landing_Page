import { useState } from "react";

const Whatsapp = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleWhatsAppClick = () => {
    const mensajePredeterminado = encodeURIComponent(
      "Hola, Necesito tu servicio de consultoría digital 📱📡📊"
    );
    const url = `https://api.whatsapp.com/send?phone=952482488&text=${mensajePredeterminado}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <button
        className="fixed  transition-transform transform hover:scale-110 animate-bounce animate-duration-2000 animate-iteration-3 animate__animated animate__infinite"
        style={{ bottom: "4rem", right: "2rem", animationName: "scaleIn" }}
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setShowMessage(true)}
        onMouseLeave={() => setShowMessage(false)}
        aria-label="whatsapp"
      >
        <img
          src="/image/whatsapp.svg"
          // src="/image/whatsapp.png"
          alt="logo whatsapp"
          className="text-5xl max-w-[70px] text-green-500 bg-green-500 rounded-full p-3"
        />
      </button>

      {showMessage && (
        <div
          className="fixed bg-green-500 py-3 px-9 text-white font-semibold rounded-bl-full rounded-tr-full text-2xl shadow-lg "
          style={{ bottom: "4rem", right: "8rem" }}
        >
          Chatea con nosotros
        </div>
      )}
    </>
  );
};

export default Whatsapp;
