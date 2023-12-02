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
        className="fixed bg-green-500 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 animate-bounce animate-duration-2000 animate-iteration-3 animate__animated animate__infinite"
        style={{ bottom: "4rem", right: "2rem", animationName: "scaleIn" }}
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setShowMessage(true)}
        onMouseLeave={() => setShowMessage(false)}
      >
        <img src="/image/wt.svg" alt="" className="text-5xl max-w-[50px] text-green-500" />
      </button>

      {showMessage && (
        <div
          className="fixed bg-green-500 py-3 px-8 text-white font-semibold rounded-full text-2xl shadow-lg "
          style={{ bottom: "5rem", right: "8rem" }}
        >
          Chatea con nosotros
        </div>
      )}
    </>
  );
};

export default Whatsapp;
