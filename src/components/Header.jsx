import './css/header.css'
const Header = () => {
  return (
    <section className="container mx-auto max-w-full relative w-full h-auto pb-36 overflow-hidden">
      <div className="lg:flex lg:pl-20 lg:justify-center">
        <div className="flex flex-col text-center justify-start pt-14">
          {/* TEXTOS */}
          <p className="text-yellow-dark text-3xl font-poppins font-semibold px-1 lg:text-start lg:text-4xl">
            Transformamos su visión financiera:
          </p>
          <h1 className="text-white font-normal px-1 mt-5 lg:text-start">
            Somos una compañia experta en Contabilidad Digital, le brindaremos
            un mañana más rentable.
          </h1>
          <p className="text-white text-center text-[1.2rem] mt-6 px-1 lg:text-start">
            Descubra soluciones innovadoras, eficiencia operativa y
            asesoramiento experto en nuestra plataforma líder en servicios
            contables digitales. Su éxito financiero comienza aquí
          </p>

          {/* BOTON DE CONTACTO */}
          <div className="container flex justify-center mt-20 lg:justify-start">
            <a
              href="#"
              className="text-white font-poppins bg-blue-dark text-lg font-extrabold px-8 py-4 rounded-[30px]"
            >
              CONTÁCTANOS
            </a>
          </div>
        </div>
      </div>

      <div className="wave wabe1 absolute bottom-0 left-0 w-full h-[1000px]"></div>
    </section>
  );
}

export default Header;
