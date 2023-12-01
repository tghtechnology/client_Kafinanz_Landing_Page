const Planes = () => {
  return (
    <>
      <div className="container mx-auto mt-14">
        <h1 className="text-center text-purple-black font-bold text-4xl mb-8">
          ¿Ya conocias nuestros planes?
        </h1>
        <div className="">
          <div className="flex divide-x divide-x-reverse divide-y divide-y-reverse flex-wrap justify-evenly">
            <div className="my-4 relative">
              <img src="/image/pexels-nataliya-vaitkevich-6120205 1.png" alt="" className="w-full" />
              <div className="absolute transform text-white  top-0 left-0 p-4">
                <h2 className="underline text-2xl font-bold">MENSUAL</h2>
                <ul className="list-disc list-inside font-normal text-xl mt-5">
                  <li>Cálculo de impuestos</li>
                  <li>Asesoría tributaria</li>
                  <li>Elaboración y cálculo de planilla</li>
                  <li>Registro contable</li>
                </ul>
              </div>
            </div>
            <div className="my-4 relative">
              <img src="/image/pexels-rdne-stock-project-7948055 1.png" alt="" className="w-full" />
              <div className="absolute transform text-white top-0 left-0 p-4">
                <h2 className="underline text-2xl font-bold">ANUAL</h2>
                <ul className="list-disc list-inside font-normal text-xl mt-5">
                  <li>Elaboración y cálculo de declaración</li>
                  <li>Jurada anual de impuestos</li>
                  <li>Elaboración y declaración de operaciones con terceros - DAOT</li>
                </ul>
              </div>
            </div>
            <div className="my-4 relative">
              <img src="/image/pexels-tiger-lily-7109274 1.png" alt="" className="w-full" />
              <div className="absolute transform text-white top-0 left-0 p-4">
                <h2 className="underline text-2xl font-bold">COTIZACIÓN DE SERVICIO CONTABLE</h2>
                <h3 className="font-semibold"> Ofrecemos servicios contables personalizados.</h3>
                <h3 className="font-semibold">Ejemplo de servicios</h3>
                <ul className="list-disc list-inside font-normal text-xl mt-5">
                  <li>Contabilidad en línea, revisión de documentación</li>
                  <li>Declaración de impuestos, planilla de empresa</li>
                  <li>Libros contables electrónicos, asesoría personalizada y más</li>
                </ul>
              </div>
              <div className="absolute transform text-white top-0 left-0 p-4">
                Costos sujetos a negociación
              </div>
            </div>
            <div className="my-4 relative">
              <img src="/image/pexels-yan-krukau-7693252 1.png" alt="" className="w-full" />
              <div className="absolute transform text-white top-0 left-0 p-4">
                <h2 className="underline text-2xl font-bold">AUDITORÍA TRIBUTARIA PREVENTIVA</h2>
                <h3 className="font-semibold"> Ofrecemos servicios contables personalizados.</h3>
                <ul className="list-disc list-inside font-normal text-xl mt-5">
                  <li>Revisión de cumplimiento normativo</li>
                  <li>Identificación de riesgos tributarios</li>
                  <li>Revisión de declaraciones tributarias</li>
                  <li>Revisión de procedimientos internos</li>
                  <li>Evaluación de contingencias fiscales</li>
                  <li>Documentación de auditoría</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Planes