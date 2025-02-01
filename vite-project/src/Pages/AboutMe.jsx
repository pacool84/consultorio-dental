import aboutMePicture from "../assets/AboutMeProfile.jpeg";

const AboutMe = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Contenedor de imagen y descripción */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        {/* Imagen como tarjeta con filtro de brillo */}
        <div className="relative w-64 h-84 rounded-lg shadow-xl overflow-hidden mb-8 md:mb-0">
          <img
            src={aboutMePicture}
            alt="Foto de la dentista"
            className="w-full h-full object-cover filter brightness-110 transition-all duration-700 ease-in-out"
          />
        </div>

        {/* Sección Descripción de mi pasión por la odontología (pegada a la derecha) */}
        <article className="md:w-2/3 md:text-right">
          <h2 className="text-2xl font-semibold mb-4">
            Descripción de mi pasión por la odontología
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            convallis nunc vitae est placerat, in cursus enim viverra. Donec
            fringilla nisl et orci vehicula, vel fermentum ligula facilisis.
            Suspendisse hendrerit mollis orci in faucibus. Nunc auctor metus ut
            risus iaculis elementum.
          </p>
        </article>
      </div>

      {/* Sección Misión */}
      <article className="mb-12 text-left">
        <h2 className="text-2xl font-semibold mb-4">Misión</h2>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          elementum tristique quam, eu posuere ex dapibus et. Aliquam erat
          volutpat. Sed feugiat vitae eros in finibus. Mauris non enim erat.
          Proin luctus quis magna nec lacinia. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Phasellus convallis nunc vitae est
          placerat, in cursus enim viverra. Donec fringilla nisl et orci
          vehicula, vel fermentum ligula facilisis. Suspendisse hendrerit mollis
          orci in faucibus. Nunc auctor metus ut risus iaculis elementum.
        </p>
      </article>

      {/* Sección ¿Qué me hace diferente? */}
      <article className="mb-12 text-right">
        <h2 className="text-2xl font-semibold mb-4">¿Qué me hace diferente?</h2>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          commodo ex in odio vulputate auctor. Mauris in nisi urna. Curabitur
          molestie nec dui in efficitur. Nam sagittis purus a velit fermentum,
          non molestie ligula facilisis.
        </p>
      </article>
    </section>
  );
};

export default AboutMe;
