const Advantages = () => {
  return (
    <div className="md:h-[456px] relative flex flex-col justify-center items-center gap-2 md:gap-10 p-2 my-3 md:my-0 3xl:max-w-7xl mx-auto">
      <h3 className="font-bold text-4xl text-center  bg-clip-text bg-gradient-to-b from-[#0847AD] to-[#4C1165] text-transparent z-10 uppercase">
        Servicio contable en línea
      </h3>

      <p className="text-center max-w-4xl mx-auto z-10 text-2xl">
        Disponemos de un Sistema Contable Online y automatizado diseñado
        exclusivamente para nuestros clientes, ofreciéndote una experiencia
        caracterizada por rapidez, practicidad y eficacia en la gestión
        financiera de tu empresa
      </p>
      <img
        className="max-w-[252px] md:absolute md:-bottom-10 lg:-bottom-3 xl:bottom-0 md:right-0"
        src="/image/icons-left.svg"
      />
    </div>
  );
};

export default Advantages;
