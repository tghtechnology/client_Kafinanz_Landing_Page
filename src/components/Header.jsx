
const Header = () => {
  return (
    <div className="bg-[url(/image/bg-header.webp)] bg-no-repeat bg-cover h-auto md:h-[404px] ">
      <div className="container mx-auto flex h-full">
        <div className="h-full ">
          <div className="flex flex-col text-center justify-start pt-16">
            <p className="text-yellow-dark text-4xl font-poppins font-semibold">
              Transformamos su visión financiera:
            </p>
            <h1 className="text-white font-bold px-48 mt-4">
              Somos una compañia experta en Contabilidad Digital, le brindaremos
              un mañana más rentable.
            </h1>
            <p className="text-white text-start text-[1.2rem] mt-6 px-10">
              Descubra soluciones innovadoras, eficiencia operativa y
              asesoramiento experto en nuestra plataforma líder en servicios
              contables digitales. Su éxito financiero comienza aquí
            </p>
          </div>

          <div className="flex items-center pl-48 mt-20">
            <a
              href="#"
              className="text-white font-poppins bg-orange-ligth text-[1.2rem] px-10 py-2 rounded-3xl"
            >
              CONTÁCTANOS
            </a>
          </div>
        </div>

        <div className="w-[40rem] flex items-end justify-center">
          <img
            src="/image/image-header.svg"
            alt="imagen de header"
            className="w-[23rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default Header