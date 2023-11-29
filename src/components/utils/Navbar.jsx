

const Navbar = () => {
  return (
    <div className="bg-[#A63884] max-w-[1800px] mx-auto z-50">
      <nav className="flex flex-row justify-between items-center p-8">
        <img src="/image/K-Logo.svg" alt="Logo" className="max-w-full" />
        <div>
          <a href="#home" className="px-4">
            ¿Por qué elegirnos? 
          </a>
          <a href="#contact" className=" px-4">
            Nuestros Servicios
          </a>
          <button href="#about" className="px-4 p-4 text-white bg-orange-ligth rounded-sm">
            Presupuesto
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar