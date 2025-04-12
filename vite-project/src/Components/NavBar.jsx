import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUserMd, FaTooth, FaGift, FaCalendarAlt } from "react-icons/fa";
import logo from "../assets/Logo Paulina Lopez.png"; // Importar la imagen del logo

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-teal-500 to-cyan-600 p-4 shadow-lg fixed border-b-2 border-white w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center w-full">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <div className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={logo} alt="Logo Paulina Lopez" className="h-12 md:h-14" />
          </div>
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
              <FaUserMd className="mr-2" /> Quién Soy
            </NavLink>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-800 md:text-white text-lg font-medium px-4 py-2 hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-400 hover:text-white transition-all duration-300 rounded-lg"
            >
              <FaTooth className="mr-2" /> Servicios
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-800 md:text-white text-lg font-medium px-4 py-2 hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-400 hover:text-white transition-all duration-300 rounded-lg"
            >
              <FaGift className="mr-2" /> Promociones
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-800 md:text-white text-lg font-medium px-4 py-2 hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-400 hover:text-white transition-all duration-300 rounded-lg"
            >
              <FaCalendarAlt className="mr-2" /> Citas en Línea
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
