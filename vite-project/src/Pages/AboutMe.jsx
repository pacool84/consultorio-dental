import aboutMePicture from "../assets/AboutMeProfile.jpeg";

const AboutMe = () => {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-20">
      <div className="container mx-auto px-6">
        {/* Sección superior: imagen y "Mi Pasión" */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          {/* Tarjeta de imagen con efecto hover */}
          <div className="group relative w-72 h-96 rounded-2xl overflow-hidden shadow-2xl transform transition duration-700 hover:scale-105">
            <img
              src={aboutMePicture}
              alt="Foto de la dentista"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-cyan-500 mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
          </div>
          {/* Tarjeta de "Mi Pasión" */}
          <article className="relative md:w-2/3 bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-2xl shadow-lg overflow-hidden">
            <h2 className="text-3xl font-bold text-cyan-600 mb-4 relative z-10">
              Mi Pasión
            </h2>
            <p className="text-gray-700 leading-relaxed relative z-10">
              Soy odontóloga por vocación, con más de 22 años de entrega y
              compromiso en devolver la confianza a cada sonrisa. Especialista
              en ortodoncia, con un diplomado en endodoncia por la UNAM y
              formación en armonización facial y estética dental, mi misión es
              fusionar la salud bucal con la belleza, creando sonrisas que no
              solo luzcan increíbles, sino que reflejen bienestar y seguridad.
            </p>
            {/* Detalle decorativo */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-200 rounded-full blur-2xl"></div>
          </article>
        </div>

        {/* Sección "Misión" */}
        <article className="relative bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-2xl shadow-lg mb-16 text-left overflow-hidden">
          <h2 className="text-3xl font-bold text-cyan-600 mb-4 relative z-10">
            Misión
          </h2>
          <p className="text-gray-700 leading-relaxed relative z-10">
            Mi propósito es transformar vidas a través de la odontología,
            brindando a cada paciente una experiencia de atención personalizada,
            cálida y de calidad. Mi compromiso es fusionar ciencia, arte y
            tecnología para ofrecer tratamientos que no solo restauren la
            funcionalidad dental, sino que también realcen la belleza natural de
            cada sonrisa. Con una visión integral de la salud bucodental,
            trabajo para generar confianza, bienestar y felicidad en cada
            persona que confía en mis manos.
          </p>
          {/* Detalle decorativo */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-200 rounded-full blur-2xl"></div>
        </article>

        {/*Seccion "Vision"*/}
        <article className="relative bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-2xl shadow-lg mb-16 text-right overflow-hidden ">
          <h2 className="text-3xl font-bold text-cyan-600 mb-4 relative z-10">
            Visión
          </h2>
          <p className="text-gray-700 leading-relaxed relative z-10">
            Ser un referente en el cuidado integral de la salud bucodental,
            promoviendo la prevención como pilar fundamental para una vida plena
            y saludable. Trabajamos con pasión y compromiso para ofrecer
            tratamientos de excelencia que no solo previenen enfermedades, sino
            que también mejoran la estética y funcionalidad de cada sonrisa.
            Nuestra meta es que cada paciente experimente la confianza y
            felicidad que brinda una sonrisa sana, armónica y radiante.
          </p>
          <div className="absolute -top-6 -right-4  w-32 h-32 bg-cyan-200 rounded-full blur-2xl"></div>
        </article>

        {/* Sección "¿Qué me hace diferente?" */}
        <article className="relative bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-left overflow-hidden">
          <h2 className="text-3xl font-bold text-cyan-600 mb-4 relative z-10">
            ¿Qué me hace diferente?
          </h2>
          <p className="text-gray-700 leading-relaxed relative z-10 mb-4">
            ✨ Atención personalizada Cada sonrisa es única, y cada paciente
            merece un tratamiento hecho a su medida. Mi compromiso es brindarte
            una experiencia cercana, donde tu salud bucodental sea mi prioridad.
            A través de un seguimiento detallado, diseñamos el mejor plan para
            recuperar y potenciar tu sonrisa.
          </p>
          <p className="text-gray-700 leading-relaxed relative z-10">
            🔍 Diagnóstico integral y tecnología de vanguardia Voy más allá de
            lo visible. Mediante un análisis exhaustivo con cámaras intraorales
            y radiografías, detecto problemas ocultos y posibles riesgos
            futuros. La prevención y precisión en el diagnóstico me permiten
            ofrecerte tratamientos efectivos y soluciones a largo plazo. Más que
            un tratamiento, te ofrezco confianza, bienestar y la seguridad de
            que estás en las mejores manos.
          </p>
          {/* Detalle decorativo */}
          <div className="absolute -top-6 -left-6 w-28 h-28 bg-cyan-200 rounded-full blur-2xl"></div>
        </article>
      </div>
    </section>
  );
};

export default AboutMe;
