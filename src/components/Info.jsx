const Info = () => {
  return (
    <section className="bg-[url('/image/info.png')] bg-no-repeat bg-cover lg:h-[704px] relative  bg-right py-8 md:py-3 px-4 md:pl-7">
      <div className="bg-gradient-to-r z-0 from-purple-950 to-red-900 absolute top-0 left-0 bottom-0 right-0 opacity-60"></div>
      <article className="z-10 relative 3xl:max-w-7xl 3xl:mx-auto">
        <h4 className="font-bold my-8 md:py-14 text-white text-xl md:text-2xl max-w-md md:max-w-max before:content-[''] after:block after:bg-white after:h-1 after:rounded-md">
          RECOPILACIÓN Y ENTREGA DE INFORMACIÓN
        </h4>
        <ul className="space-y-4 text-white text-lg md:text-2xl list-disc ml-4 md:ml-8 mb-24 md:mb-0 max-w-[208px] md:max-w-xl md:space-y-8">
          <li>
            <h5 className="font-semibold ">Contable:</h5>
            <p>Recopilación digital, visitas, y comunicación constante.</p>
          </li>
          <li>
            <h5 className="font-semibold text-white">Tributaria:</h5>
            <p>
              Fechas de cierre, reportes mensuales de liquidaciones de
              impuestos.
            </p>
          </li>
          <li>
            <h5 className="font-semibold text-white">Laboral:</h5>
            <p>Cálculo y cierre mensual de planilla.</p>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Info;
