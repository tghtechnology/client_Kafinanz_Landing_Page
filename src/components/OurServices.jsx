
const OurServices = () => {
  return (
    <div className="mb-6">
      <div className="max-w-7xl mx-auto my-5 px-2">
        <h3 className="text-2xl text-pink-gray font-semibold text-center sm:text-start sm:w-max border-b-4 border-pink-gray">
          Ventajas de nuestros servicios
        </h3>
      </div>
      <div className="grid grid-cols-services-movil md:grid-cols-services-desktop place-content-center gap-4 font-semibold md:font-bold text-sm md:text-2xl leading-4">
        <article className="h-40 md:h-[336px] rounded-full md:rounded-[80px] p-2 flex flex-col justify-center text-center bg-gradient-to-b from-[#4C1165] to-[#0847AD]">
          <p className="text-white">
            Copia de seguridad en la nube.
          </p>
        </article>
        <article className="h-40 md:h-[336px] rounded-full md:rounded-[80px] p-2 flex flex-col justify-center text-center bg-gradient-to-b from-[#4C1165] to-[#CC0E34]">
          <p className="text-white">
            Acceso a documentos originales en todo momento.
          </p>
        </article>
        <article className="h-40 md:h-[336px] rounded-full md:rounded-[80px] p-2 flex flex-col justify-center text-center bg-gradient-to-b from-[#4C1165] via-[#8E077D] to-[#FFA401]">
          <p className="text-white">
            Ahorro en costos al no contratar personal contable fijo.
          </p>
        </article>
        <article className="h-40 md:h-[336px] rounded-full md:rounded-[80px] p-2 flex flex-col justify-center text-center bg-gradient-to-b from-[#0847AD]  to-[#4C1165]">
          <p className="text-white">
            Enfoque en tus actividades comerciales mientras nosotros manejamos
            la contabilidad.
          </p>
        </article>
      </div>
    </div>
  );
}


export default OurServices