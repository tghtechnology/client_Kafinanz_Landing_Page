const Info = () => {
    return (
        <section className="my-8">
            <div className="bg-[url('/image/fondo-info.png')] 1xl:h-[1200px] bg-no-repeat 1xl:bg-contain relative">
                <div className="sobre-nosotros absolute bottom-[400px]">
                    <div className="contenedor sobre-nosotros-grid relative ">
                        <img
                            src="/image/Group-47.png"
                            alt="imagen-group"
                            width={750}
                            height={750}
                            className="ima absolute bottom-[-10px]"
                        />
                        <div className="texto-nosotros">
                            <div className="my-6">
                                <h2 className=" font-bold text-2xl">
                                    RECOPILACIÓN Y ENTREGA DE INFORMACIÓN
                                </h2>
                                <div className="border-4 rounded-full mr-40"></div>
                            </div>

                            <ul
                                role="list"
                                className="flex flex-col gap-8 list-disc marker:text-yellow-dark marker:text-2xl ml-6 mt-8"
                            >
                                <li>
                                    <h3 className="font-semibold">Contable:</h3>
                                    <p className="">
                                        Recopilación digital, visitas, y
                                        comunicación constante.
                                    </p>
                                </li>
                                <li>
                                    <h3 className="font-semibold">
                                        Tributaria:
                                    </h3>
                                    <p className="">
                                        Fechas de cierre, reportes mensuales de
                                        liquidaciones de impuestos.
                                    </p>
                                </li>
                                <li>
                                    <h3 className="font-semibold">Laboral:</h3>
                                    <p className="">
                                        Cálculo y cierre mensual de planilla.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <img
                    src="/image/Group-48.png"
                    alt="image-group-48"
                    width={100}
                    height={"auto"}
                    className="absolute right-[100px] top-[900px]"
                />
            </div>
        </section>
    );
};

export default Info;
