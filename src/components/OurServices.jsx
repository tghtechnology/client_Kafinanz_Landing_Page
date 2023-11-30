
const OurServices = () => {
  return (
    <div className="mb-6">
      <div className="max-w-7xl mx-auto my-5 px-2">
        <h3 className="text-2xl text-pink-gray font-semibold text-center sm:text-start sm:w-max border-b-4 border-pink-gray">
          Ventajas de nuestros servicios
        </h3>
      </div>
      <section className="grid sm:grid-cols-2 md:grid-cols-4 text-2xl text-center font-semibold text-white md:h-72 md:max-h-72 3xl:max-w-7xl 3xl:mx-auto">
        <article className="bg-pink-gray grid place-content-center px-3 py-4 md:p-0 h-52 md:h-auto">
          <p className="md:max-w-[280px]">Copia de seguridad en la nube.</p>
        </article>
        <article className="bg-purple-black grid place-content-center px-3 py-4 md:p-0 h-52 md:h-auto">
          <p className="md:max-w-[280px]">
            Acceso a documentos originales en todo momento.
          </p>
        </article>
        <article className="bg-blue-dark grid place-content-center px-3 py-4 md:p-0 h-52 md:h-auto">
          <p className="md:max-w-[280px]">
            Ahorro en costos al no contratar personal contable fijo.
          </p>
        </article>
        <article className="bg-orange-ligth grid place-content-center px-3 py-4 md:p-0 h-52 md:h-auto">
          <p className="md:max-w-[280px]">
            Enfoque en tus actividades comerciales mientras nosotros manejamos
            la contabilidad.
          </p>
        </article>
      </section>
      {/* <div className="max-w-full h-6 bg-[#DFC2D6]"></div> */}
    </div>
  );
}


export default OurServices