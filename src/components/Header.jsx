import "./css/header.css";
const Header = () => {
  return (
    <section className="container mx-auto max-w-full relative w-full h-auto pb-36 overflow-hidden">
      <div className="lg:flex lg:pl-20 lg:justify-start z-20 relative">
        <div className="flex flex-col text-center justify-start pt-14">
          {/* TEXTOS */}
          <div className="max-w-5xl max-h-[199px]">
            <p className="text-yellow-dark text-3xl font-poppins font-semibold px-1 lg:text-start lg:text-4xl">
              Transformamos su visión financiera:
            </p>
            <h1 className="text-white font-normal px-1 mt-5 lg:text-start">
              Somos una compañía experta en Contabilidad Digital, le brindaremos
              un mañana más rentable.
            </h1>
            <p className="text-white text-center text-[1.2rem] mt-6 px-1 lg:text-start">
              Descubra soluciones innovadoras, eficiencia operativa y
              asesoramiento experto en nuestra plataforma líder en servicios
              contables digitales. Su éxito financiero comienza aquí
            </p>
          </div>

          {/* BOTÓN DE CONTACTO */}
          <div className="container flex justify-center items-center mt-40 ml:0 md:mt-32 md:ml-7  lg:justify-start">
            <a
              href="#"
              className="text-white bg-blue-dark text-lg font-extrabold px-8 py-4 rounded-[30px] uppercase"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0 hidden md:block z-10">
        <img src="/image/flor-home.png" alt="hero-bg" className="top-0" />
      </div>

      <div className="wave wabe1 absolute bottom-0 left-0 w-full h-[1000px]"></div>
    </section>
  );
};

export default Header;
