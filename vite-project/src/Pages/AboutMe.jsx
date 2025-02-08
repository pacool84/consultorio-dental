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
        <article className=" relative md:w-2/3 md:text-right">
          <h2 className="text-2xl font-semibold mb-4">Mi Pasión</h2>
          <div className="absolute top-0 -right-4 w-full h-full bg-cyan-600  mix-blend-multiply filter blur-3xl opacity-35 "></div>
          <p className="text-gray-700 leading-relaxed">
            Soy odontóloga por vocación, con más de 22 años de entrega y
            compromiso en devolver la confianza a cada sonrisa. Especialista en
            ortodoncia, con un diplomado en endodoncia por la UNAM y formación
            en armonización facial y estética dental, mi misión es fusionar la
            salud bucal con la belleza, creando sonrisas que no solo luzcan
            increíbles, sino que reflejen bienestar y seguridad.
          </p>
        </article>
      </div>

      {/* Sección Misión */}
      <article className=" relative mb-12 text-left">
        <h2 className="text-2xl font-semibold mb-4">Misión</h2>
        <div className="absolute top-0 -right-4 w-full h-full bg-cyan-600  mix-blend-multiply filter blur-3xl opacity-35 "></div>
        <p className="text-gray-700 leading-relaxed">
          Mi propósito es transformar vidas a través de la odontología,
          brindando a cada paciente una experiencia de atención personalizada,
          cálida y de calidad. Mi compromiso es fusionar ciencia, arte y
          tecnología para ofrecer tratamientos que no solo restauren la
          funcionalidad dental, sino que también realcen la belleza natural de
          cada sonrisa. Con una visión integral de la salud bucodental, trabajo
          para generar confianza, bienestar y felicidad en cada persona que
          confía en mis manos.
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
