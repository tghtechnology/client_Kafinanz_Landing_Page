const Header = () => {
    return (
        <section className="bg-[url(/image/bg-header.webp)] bg-no-repeat bg-cover 1xl:bg-contain h-[800px] 1xl:h-[700px] mb-[10rem] 1xl:mb-[0rem]">
            <div className="grid grid-rows-2 items-center 1xl:grid-rows-none 1xl:grid-cols-3">
                <div className="row-[1/2] 1xl:col-[1/3] 1xl:mr-56 px-4">
                    <div className="container flex flex-col gap-3 text-center 1xl:text-start 1xl:ml-40 1xl:justify-start 1xl:pt-30 pt-24">
                        <h2 className="text-yellow-dark text-3xl 1xl:text-4xl font-poppins font-semibold">
                            Transformamos su visión financiera:
                        </h2>
                        <h1 className="text-white text-xl 1xl:text-3xl font-semibold 1xl:mt-4">
                            Somos una compañia experta en Contabilidad Digital,
                            le brindaremos un mañana más rentable.
                        </h1>
                        <p className="text-white text-xl 1xl:text-[1.3rem] 1xl:mt-6">
                            Descubra soluciones innovadoras, eficiencia
                            operativa y asesoramiento experto en nuestra
                            plataforma líder en servicios contables digitales.
                            Su éxito financiero comienza aquí
                        </p>
                    </div>

                    <div className="flex items-center 1xl:pl-48 1xl:mt-20 mt-6">
                        <a
                            href="#"
                            className="text-white font-poppins bg-orange-ligth text-[1.2rem] ml-24 px-10 py-3 rounded-3xl font-semibold"
                        >
                            CONTÁCTANOS
                        </a>
                    </div>
                </div>
                <div className="row-[2/3] flex justify-center 1xl:row-[1/2] 1xl:col-[3/4]">
                    <img
                        src="/image/image-header.svg"
                        alt="imagen de header"
                        className=" w-auto 1xl:pt-[100px]"
                        width={300}
                    />
                </div>
                {/* <div className="w-[40rem] flex items-end justify-center">
            <img src="/image/image-header.svg" alt="imagen de header" className="w-[23rem]"/>
          </div> */}
            </div>
        </section>
    );
};

export default Header;
