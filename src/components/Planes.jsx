const Planes = () => {
  return (
    <>
      <div className="container mx-auto my-14">
        <h1 className="text-center text-pink-gray font-bold font-poppins text-2xl mb-8">
          ¿Ya conocias nuestros planes?
        </h1>
        <div className="flex flex-col sm:flex-row p-4  justify-between items-start gap-5">
          {/* Primera */}
          <div className="w-full md:w-1/2 max-h-full">
            <h3 className="uppercase border-b-4 border-pink-gray w-max text-pink-gray font-bold mx-auto text-center">
              Mensual
            </h3>
            <ul className="list-disc max-w-sm text-lg mx-auto ml-4 lg:mx-auto">
              <li>Cálculo de impuestos</li>
              <li>Asesoría Tributaria</li>
              <li>Elaboración y cálculo de Planilla</li>
              <li>Registro Contable</li>
            </ul>
          </div>

          <div className="hidden">
            <div className="w-1 h-[15vh] bg-pink-gray opacity-60 "></div>
          </div>

          {/* Segunda */}
          <div className="w-full md:w-1/2 max-h-full">
            <h3 className="uppercase border-b-4 border-pink-gray w-max text-pink-gray font-bold mx-auto text-center">
              Anual
            </h3>
            <ul className="list-disc max-w-sm text-lg mx-auto ml-4 lg:mx-auto">
              <li>
                Elaboración y cálculo de Declaración Jurada Anual de impuestos.
              </li>
              <li>
                Elaboración y declaración de operaciones con terceros - DAOT
              </li>
            </ul>
          </div>
        </div>
        <img src="/image/planes.svg" alt="" className="mx-auto" />
      </div>
    </>
  );
}

export default Planes