import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Columna 1: Logotipo e información de contacto */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/path/to/logo.png" // Reemplaza con la ruta del logotipo
              alt="Logotipo del consultorio"
              className="w-20 h-20 mb-2"
            />
            <p className="text-center md:text-left text-sm">
              Consultorio Dental Paulina López
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contáctanos</h3>
            <p className="flex items-center space-x-2">
              <FaPhoneAlt size={16} />
              <span>+52 123 456 7890</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaEnvelope size={16} />
              <span>contacto@consultoriodental.com</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaMapMarkerAlt size={16} />
              <span>Calle Salud #123, Ciudad, País</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Columna 2: Mapa */}
        <div>
          <h3 className="text-lg font-bold mb-4">Ubicación</h3>
          <div className="w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.291192456295!2d-99.2514325243928!3d19.53124398683664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8c6b5e6b6b7%3A0x4d9f9b9f9f9f9f9f!2sConcorde%2017%2C%20Lomas%20Boulevares%2C%2053100%20Naucalpan%20de%20Ju%C3%A1rez%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1681234567890!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación en Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-sm border-t border-teal-400 pt-4">
        © 2025 Consultorio Dental Paulina López. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
