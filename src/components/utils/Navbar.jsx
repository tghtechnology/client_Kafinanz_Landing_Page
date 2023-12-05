import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 bg-white z-50">
      <div className="3xl:max-w-7xl 3xl:mx-auto px-3 py-2 md:flex md:flex-row justify-between">
        <div className="flex justify-between md:justify-start">
          <img src="/image/K-Logo.svg" alt="Logo" className="w-[100px]" />
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <nav
          className={`flex flex-col md:flex-row md:gap-4 md:translate-x-0 md:h-auto items-center gap-2 relative md:static transition-all ${
            isOpen ? "translate-x-0" : "-translate-x-[800px] h-0"
          }`}
        >
          <a href="#" className="text-base font-semibold text-purple-black">
            ¿Porque elegirnos?
          </a>
          <a href="#" className="text-base font-semibold text-purple-black">
            Nuestro Servicio
          </a>
          <a
            className="bg-blue-dark rounded-lg py-2 px-3 text-white font-semibold"
            href="hola"
          >
            Presupuesto
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
