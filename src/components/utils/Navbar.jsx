import { useState } from "react";
import { scrollToSection } from "../../helpers/naviSection";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 bg-white z-50">
      <div className="3xl:max-w-7xl 3xl:mx-auto px-3 py-2 md:flex md:flex-row justify-between">
        <div className="flex justify-between md:justify-start">
          <Link to="/">
            <img src="/image/K-Logo.svg" alt="Logo" className="w-[100px]" />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="menu">
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
          <button
            className="text-base font-semibold text-purple-black"
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
              scrollToSection("elect");
            }}
          >
            ¿Porque elegirnos?
          </button>
          <button
            className="text-base font-semibold text-purple-black"
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
              scrollToSection("services");
            }}
          >
            Nuestro Servicio
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
