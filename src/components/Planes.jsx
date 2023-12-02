const Planes = () => {
    return (
      <>
        <div className="container mx-auto mt-14">
          <h1 className="text-center uppercase font-bold text-4xl text-purple-black mb-8">
            ¿Ya conocias nuestros planes?
          </h1>
          <div className="relative grid text-white md:grid-cols-1 gap-8 xl:grid-cols-2  md:gap-24 xl:gap-y-0 1xl:gap-y-16 2xl:gap-y-24">
            <div className="border-[4px] rounded w-[80%] xl:w-[40%] 1xl:w-[40%] absolute border-gray-300 top-[23%] md:top-[24%] mx-10 md:mx-20 xl:mx-0 xl:top-[50%] xl:right-[3%]"></div>

            <div className="flex flex-col cel:mx-8 md:pl-[8rem] md:pb-[4rem] xl:pl-[5rem] xl:pb-[7rem] 2xl:pb-[5rem] justify-center items-center md:items-start md:justify-end bg-[url('image/plan-mensual.png')] bg-contain md:bg-center xl:bg-right bg-center bg-no-repeat h-[400px] md:h-[700px] ">
              <h2 className="text-3xl font-black">MENSUAL</h2>
              <div className="border-[4px] rounded w-[80%] md:w-[40%] xl:w-[55%] 1xl:w-[40%] 2xl:w-[40%]"></div>
              <ul className="list-disc mx-14 md:mx-0 1xl:mx-5 list-outside text-xl mt-5">
                <li>Cálculo de impuestos</li>
                <li>Asesoría tributaria</li>
                <li>Elaboración y cálculo de planilla</li>
                <li>Registro contable</li>
              </ul>
            </div>

            <div className="border-[4px] rounded w-[80%] xl:w-[40%] 1xl:w-[40%] absolute border-gray-300 top-[47%] md:top-[49.8%] mx-10 md:mx-20 xl:mx-0 xl:top-[50%] xl:right-[57%]"></div>

            <div className="flex flex-col cel:mx-8 md:pl-[8rem] md:pb-[4rem] xl:pl-[5rem] xl:pb-[7rem] 2xl:pb-[5rem] justify-center items-center md:items-start md:justify-end bg-[url('image/plan-anual.png')] bg-contain md:bg-center xl:bg-right bg-center bg-no-repeat h-[400px] md:h-[700px]">
              <h2 className="text-3xl font-black">ANUAL</h2>
              <div className="border-[4px] rounded w-[80%] md:w-[40%] xl:w-[55%] 1xl:w-[35%] 2xl:w-[35%]"></div>
              <ul className="list-disc mx-14 md:mx-5 list-outside text-xl mt-5">
                <li>Elaboración y cálculo de declaración</li>
                <li>Jurada anual de impuestos</li>
                <li>
                  Elaboración y declaración de operaciones con terceros - DAOT
                </li>
              </ul>
            </div>

            <div className="border-[4px] rounded w-[80%] xl:w-[40%] 1xl:w-[40%] absolute border-gray-300 top-[71%] md:top-[75.6%] mx-10 md:mx-20 xl:mx-0 xl:right-[30%] xl:top-[23%] xl:rotate-90"></div>

            <div className="flex flex-col cel:mx-8 md:pr-24 md:pl-[8rem] md:pb-[4rem] xl:pl-[4rem] xl:pb-[7rem] 2xl:pb-[5rem] justify-center items-center md:items-start md:justify-end bg-[url('image/plan-cotizacion.png')] bg-contain md:bg-center xl:bg-right bg-center bg-no-repeat h-[400px] md:h-[700px]">
              <h2 className="text-2xl font-black  text-center 1xl:text-start 2xl:mx-0">
                COTIZACIÓN DE SERVICIO CONTABLE
              </h2>
              <div className="border-[4px] rounded w-[80%] md:w-[100%] xl:w-[100%] 1xl:w-[100%] 2xl:w-[100%]"></div>
              <p className="font-bold mt-10 mb-5">
                Ofrecemos servicios contables personalizados. Ejemplo de
                servicios:
              </p>
              <ul className="list-disc mx-12 cel:mx-14 md:mx-0 1xl:mx-5 list-outside text-xl mt-5">
                <li>Contabilidad en línea, revisión de documentación. </li>
                <li>Declaración de impuestos, planilla de empresa. </li>
                <li>
                  Libros contables electrónicos, asesoría personalizada, y más.
                </li>
              </ul>
            </div>

            <div className="border-[4px] rounded xl:w-[40%] 1xl:w-[40%] absolute border-gray-300 mx-10 md:mx-20 xl:mx-0 xl:right-[30%] xl:top-[77%] xl:rotate-90"></div>

            <div className="flex flex-col cel:mx-8 md:pl-[8rem] md:px-10 md:pb-[4rem] xl:pl-[5rem] xl:pb-[7rem] 2xl:pb-[5rem] justify-center items-center md:items-start md:justify-end bg-[url('image/plan-auditoria.png')] bg-cover rounded-[3rem] md:rounded-none md:bg-contain md:bg-center xl:bg-right bg-center bg-no-repeat h-[500px] md:h-[700px]">
              <h2 className="text-2xl font-black text-center 1xl:text-start 2xl:mx-0">
                AUDITORIA TRIBUTARIA PREVENTIVA
              </h2>
              <div className="border-[4px] rounded w-[80%] md:w-[90%] xl:w-[100%] 1xl:w-[95%] 2xl:w-[90%]"></div>
              <p className="font-bold mt-10 mb-5">Propósitos del servicio:</p>
              <ul className="list-disc mx-12 cel:mx-14 md:mx-0 1xl:mx-5 list-outside text-xl mt-5">
                <li>Revisión de Cumplimiento Normativo</li>
                <li>Identificación de Riesgos Tributarios</li>
                <li>Revisión de Declaraciones Tributarias</li>
                <li>Revisión de Procedimientos Internos</li>
                <li>Evaluación de Contingencias Fiscales</li>
                <li>Documentación de Auditoría</li>
              </ul>
            </div>
          </div>

          {/* <div className="flex divide-x divide-x-reverse divide-y divide-y-reverse flex-wrap justify-evenly">
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
          </div> */}
        </div>
      </>
    );
};

export default Planes;
