import "./css/header.css";

const ChooseUs = () => {
  return (
    <article className="h-auto p-4 md:h-[452px] grid place-content-center relative 3xl:max-w-7xl 3xl:mx-auto">
      <div className="container mx-auto px-2 py-6 text-center ">
        <img
          src="/image/icons-left.svg"
          alt=""
          className="absolute top-0 left-0"
        />
        <img
          src="/image/derecha.svg"
          alt=""
          className="absolute top-5 right-0"
        />
        <p className="text-5xl font-extrabold bg-clip-text bg-gradient-to-b from-[#4F0F64] to-[#CB0D35] text-transparent">
          ¿POR QUÉ ELEGIRNOS?
        </p>
        <p className="mt-10 p-4 max-w-6xl mx-auto text-center text-xl leading-9">
          Utilizamos el concepto de “Estandarización personalizada” el cual se
          ofrece una amplia lista de opciones para que usted elija aquellas
          actividades, tareas y entregables que mejor se adapten a sus
          necesidades, conforme los requerimientos de tu empresa vayan
          cambiando. Así mismo, trabajamos con un sistema contable totalmente
          digital y automatizado lo que significa, una optimización y entrega
          periódica de la información financiera y así la gerencia pueda tomar
          decisiones oportunamente.
        </p>
      </div>

    </article>
  );
};

export default ChooseUs;
