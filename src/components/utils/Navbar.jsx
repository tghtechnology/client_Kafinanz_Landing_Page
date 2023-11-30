import { useState } from "react";
import "tailwindcss/tailwind.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#ffffff]">
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center p-8">
        <div className="flex justify-between w-full">
          <img src="/image/K-Logo.svg" alt="Logo" className="w-[100px]" />
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* className={`transition duration-500 ease-in-out transform flex w-full justify-between items-center  flex-col   ${
            isOpen ? "block" : "hidden"
            } md:block`} */}
    
        <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-auto">

          <a
            href="#home"
            className="text-pink-gray text-[16px] font-semibold w-max"
          >
            ¿Por qué elegirnos?
          </a>
          <a
            href="#contact"
            className="text-pink-gray text-[16px] font-semibold w-max"
          >
            Nuestros Servicios
          </a>
          <button
            href="#about"
            className="text-white bg-blue-dark rounded-lg text-[16px] font-semibold w-full max-w-[186px] py-2"
          >
            Presupuesto
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
