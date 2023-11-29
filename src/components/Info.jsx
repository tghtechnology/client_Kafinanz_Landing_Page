const Info = () => {
    return (
        <section className="my-8">
            <div className="bg-[url('/image/fondo-info.png')] 1xl:h-[1000px] bg-no-repeat 1xl:bg-contain">
                <div></div>
                <div className="inline-block bg-gradient-to-r from-[#0008] via-[#0008] via-70% to-70% mt-40">
                    <div className="sobre-nosotros-grid">
                        <img
                            src="/image/Group-47.png"
                            alt="imagen-group"
                            width={750}
                            height={750}
                        />
                        <div className="texto-nosotros">
                            <div className="my-6">
                                <h2 className=" font-bold text-2xl">
                                    RECOPILACIÓN Y ENTREGA DE INFORMACIÓN
                                </h2>
                                <div className="border-4 rounded-full mr-30"></div>
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
                    className="mt-10 ml-[1500px]"
                />
            </div>
        </section>
    );
};

export default Info;
