import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    //Considerar cambiar propiedad relative por fixed para que el NavBar se mantenga fijo en la parte superior de la pantalla y ocupe todo el ancho de la misma.
    <nav className="bg-gradient-to-r from-teal-500 to-cyan-600 p-4 shadow-lg relative border-b-2 border-white w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center w-full">
        {/* Logo */}
        <NavLink to="/">
          <span className="text-white text-2xl font-semibold tracking-wide uppercase">
            Paulina Lopez
          </span>
        </NavLink>

        {/* Menu Button (Mobile) */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Menu Items */}
        <ul
          className={`md:flex md:space-x-6 absolute md:static top-16 right-0 w-full md:w-auto bg-white md:bg-transparent p-5 md:p-0 shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <NavLink
              to="/aboutme"
              className={({ isActive }) =>
                `flex items-center text-lg font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-400 hover:text-white ${
                  isActive
                    ? "text-white bg-cyan-500"
                    : "text-gray-800 md:text-white"
                }`
              }
            >
              👩🏻‍⚕️ Quién Soy
            </NavLink>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-800 md:text-white text-lg font-medium px-4 py-2 hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-400 hover:text-white transition-all duration-300 rounded-lg"
            >
              🦷 Servicios
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-800 md:text-white text-lg font-medium px-4 py-2 hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-400 hover:text-white transition-all duration-300 rounded-lg"
            >
              🎁 Promociones
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-800 md:text-white text-lg font-medium px-4 py-2 hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-400 hover:text-white transition-all duration-300 rounded-lg"
            >
              📅 Citas en Línea
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
