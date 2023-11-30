
const AccoutingService = () => {
  return (
    <div className=" bg-blue-dark">
      <div className="sm:h-96 relative sm:max-h-96 grid place-content-center py-10 sm:py-0 px-2 3xl:max-w-7xl mx-auto">
        <img
          className="absolute left-0 -bottom-1 sm:-bottom-8 z-0 max-w-[100px] md:max-w-[150px] lg:max-w-max"
          src="/image/contable-left.png"
          alt=""
        />
        <div className="max-w-3xl text-center space-y-4 text-white z-10">
          <h3 className="text-3xl border-b-2 sm:w-max p-1 mx-auto font-bold">
            Nuestro Servicio Contable
          </h3>
          <p className="">
            Enfocados en brindar un servicio contable de calidad, nos destacamos
            por nuestra modalidad virtual, respaldada por visitas programadas a
            su empresa según sus requerimientos. Garantizamos una atención
            integral que se adapta a sus necesidades financieras.
          </p>
        </div>
        <img
          className="absolute right-0 -top-2 z-0 max-w-[100px] md:max-w-[150px] lg:max-w-max"
          src="/image/contable-rigth.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default AccoutingService