const Planes = () => {
  return (
    <>
      <div className="container mx-auto mt-14 p-2">
        <h1 className="text-center uppercase font-bold text-4xl text-purple-black mb-8">
          ¿Ya conocias nuestros planes?
        </h1>
        <div className="relative grid gap-4 text-white md:grid-cols-planes-desktop place-content-center md:gap-14">
          <div className="bg-[url('image/plan-mensual.jpg')] bg-no-repeat bg-cover rounded-[70px] h-[334px] max-h-[334px] min-h-[220px] lg:h-[667px] lg:max-h-[600px] flex flex-col justify-end lg:justify-start py-8 px-4 lg:px-5 gap-3 lg:py-20">
            <h2 className="text-lg lg:text-3xl font-black uppercase w-max after:content-[' '] after:block after:w-full after:h-1 after:bg-white after:rounded-md">
              MENSUAL
            </h2>
            <ul className="list-disc space-y-2 text-sm ml-6 lg:text-xl">
              <li>Cálculo de impuestos</li>
              <li>Asesoría tributaria</li>
              <li>Elaboración y cálculo de planilla</li>
              <li>Registro contable</li>
            </ul>
          </div>
          <div className="bg-[url('image/plan-anual.jpg')] bg-no-repeat bg-cover rounded-[70px] h-[334px] max-h-[334px] min-h-[220px] lg:h-[667px] lg:max-h-[600px] flex flex-col justify-end lg:justify-start py-8 px-4 lg:px-5 gap-3 lg:py-20">
            <h2 className="text-lg lg:text-3xl font-black uppercase w-max after:content-[' '] after:block after:w-full after:h-1 after:bg-white after:rounded-md">
              ANUAL
            </h2>
            <ul className="list-disc space-y-2 text-sm ml-6 lg:text-xl">
              <li>Elaboración y cálculo de declaración</li>
              <li>Jurada anual de impuestos</li>
              <li>
                Elaboración y declaración de operaciones con terceros - DAOT
              </li>
            </ul>
          </div>
          <div className="bg-[url('image/plan-cotizacion.jpg')] bg-no-repeat bg-cover rounded-[70px] h-[334px] max-h-[334px] min-h-[220px] lg:h-[667px] lg:max-h-[600px] flex flex-col justify-end lg:justify-start py-8 px-4 lg:px-5 gap-3 lg:py-20">
            <h2 className="text-lg lg:text-3xl font-black uppercase after:content-[' '] after:block after:w-full after:h-1 after:bg-white after:rounded-md">
              COTIZACIÓN DE SERVICIO CONTABLE
            </h2>
            <p className=" text-sm lg:text-xl">
              Ofrecemos servicios contables personalizados. Ejemplo de
              servicios:
            </p>
            <ul className="list-disc space-y-2 text-sm ml-6 lg:text-xl">
              <li>Contabilidad en línea, revisión de documentación. </li>
              <li>Declaración de impuestos, planilla de empresa. </li>
              <li>
                Libros contables electrónicos, asesoría personalizada, y más.
              </li>
            </ul>
          </div>
          <div className="bg-[url('image/plan-auditoria.jpg')] bg-no-repeat bg-cover rounded-[70px] h-[334px] max-h-[334px] min-h-[220px] lg:h-[667px] lg:max-h-[600px] flex flex-col justify-end lg:justify-start py-8 px-4 lg:px-5 gap-3 lg:py-20">
            <h2 className="text-lg lg:text-3xl font-black uppercase after:content-[' '] after:block after:w-full after:h-1 after:bg-white after:rounded-md">
              AUDITORIA TRIBUTARIA PREVENTIVA
            </h2>
            <p className="font-bold text-sm lg:text-xl">Propósitos del servicio:</p>
            <ul className="list-disc space-y-2 text-sm ml-6 lg:text-xl">
              <li>Revisión de Cumplimiento Normativo</li>
              <li>Identificación de Riesgos Tributarios</li>
              <li>Revisión de Declaraciones Tributarias</li>
              <li>Revisión de Procedimientos Internos</li>
              <li>Evaluación de Contingencias Fiscales</li>
              <li>Documentación de Auditoría</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planes;
