import { useState, useEffect } from "react";

const defaultImages = [
  "https://doctorweb.agency/assets/img/blog/marketing-dentistas.jpg", // Imagen de consultorio dental
  "https://metricads.marketing/wp-content/uploads/2022/09/publicidad-consultorio-dental.webp", // Imagen de un dentista
  "https://www.debrown.com.ar/wp-content/uploads/2019/11/Odontologia-Claypole-Caps-2019.jpg", // Imagen enfocada en dientes
];

const Carrousel = ({ images = defaultImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <button
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 sm:p-2 rounded-full z-10"
        onClick={prevSlide}
      >
        ‹
      </button>
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0 transition-transform duration-1000 ease-in-out"
            style={{ minWidth: "100%" }}
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 sm:p-2 rounded-full z-10"
        onClick={nextSlide}
      >
        ›
      </button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-1 sm:space-x-2 md:space-x-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`rounded-full ${
              index === currentIndex ? "bg-sky-500" : "bg-slate-300"
            } h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
