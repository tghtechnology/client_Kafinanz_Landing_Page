const Info = () => {
  return (
    <section className="lg:h-[790px] relative bg-[url('image/fondo-info.png')] bg-no-repeat bg-cover p-3">
      <article className="flex flex-col md:flex-row md:justify-around md:items-center md:h-full gap-3 text-gray-100 relative 3xl:max-w-7xl 3xl:mx-auto">
          <div className="bg-black bg-opacity-30 w-8/12 rounded-md my-auto h-3/5 left-0 top-0 bottom-0 absolute hidden z-0 lg:block" ></div>
        <div className="bg-black bg-opacity-40 lg:bg-transparent rounded-md p-3 z-10">
          <h4 className="font-bold text-white text-center border-b-2 border-white py-2 px-1 md:my-5">RECOPILACIÓN Y ENTREGA DE INFORMACIÓN</h4>
          <ul className="space-y-3">
            <li>
              <h5 className="font-semibold text-white">Contable:</h5>
              <p>Recopilación digital, visitas, y comunicación constante.</p>
            </li>
            <li>
              <h5 className="font-semibold text-white">Tributaria:</h5>
              <p>Fechas de cierre, reportes mensuales de liquidaciones de impuestos.</p>
            </li>
            <li>
              <h5 className="font-semibold text-white">Laboral:</h5>
              <p>Cálculo y cierre mensual de planilla.</p>
            </li>
          </ul>
        </div>
        <div className="z-10">
          <img src="/image/Group-47.png" alt="" />
        </div>
      </article>
    </section>
  );
};

export default Info;
