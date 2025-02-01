const NavBar = () => {
  return (
    <nav className="bg-[#008c95] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-white text-xl font-bold">LOGO Paulina Lopez</span>
        <ul className="flex space-x-4">
          <li>
            <span className="text-white hover:underline cursor-pointer">
              Quien Soy
            </span>
          </li>
          <li>
            <span className="text-white hover:underline cursor-pointer">
              Servicios
            </span>
          </li>
          <li>
            <span className="text-white hover:underline cursor-pointer">
              Promociones
            </span>
          </li>
          <li>
            <span className="text-white hover:underline cursor-pointer">
              Citas en Línea
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
