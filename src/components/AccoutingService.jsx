
const AccoutingService = () => {
  return (
    <div className="bg-[url(/image/fondo-fz-1.png)] bg-no-repeat bg-cover md:h-[400px]">
      <div className="sm:h-96 relative sm:max-h-96 grid place-content-center py-10 sm:py-0 px-2 3xl:max-w-7xl mx-auto">
        <div className="flex flex-col items-center  justify-center">
          <img
            className="hidden sm:block absolute left-0 -bottom-1 sm:-bottom-8 z-0 max-w-[100px] md:max-w-[150px lg:max-w-max"
            src="/image/contable-left.png"
            alt="iconos"
          />
          <div className="mt-12 max-w-3xl text-center space-y-4 text-white z-10">
            <h3 className="text-3xl border-b-2 sm:w-max p-1 mx-auto font-bold">
              Nuestro Servicio Contable
            </h3>
            <p className="">
              Enfocados en brindar un servicio contable de calidad, nos
              destacamos por nuestra modalidad virtual, respaldada por visitas
              programadas a su empresa según sus requerimientos. Garantizamos
              una atención integral que se adapta a sus necesidades financieras.
            </p>
          </div>
          <img
            className="hidden sm:block  absolute right-0 z-0 max-w-[100px] md:max-w-[150px] lg:max-w-max"
            src="/image/contable-rigth.png"
            alt="iconos"
          />
        </div>
      </div>
    </div>
  );
}

export default AccoutingService