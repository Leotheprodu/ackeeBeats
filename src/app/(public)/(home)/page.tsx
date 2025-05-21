import { ContactUsForm } from "./components/ContactUsForm";
import { BeatsSection } from "./components/BeatsSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <section className="text-center py-20 px-6">
        <h1 className="md:text-5xl text-3xl font-bold mb-4 md:w-1/2 w-full mx-auto">
          Beats frescos, estilo exótico, sonido Ackee
        </h1>
        <p className="text-gray-600 mb-6">
          Trap, Reggaeton, Dancehall, Afrobeat y más. Escucha, compra y sigue
          creando.
        </p>

        <ul className="text-left text-gray-600 max-w-2xl mx-auto mt-20">
          <li className="flex items-center gap-2 mb-2">
            <span className="text-secundario">•</span> Licencias desde los 10
            mil colones ( aprox. $20)
          </li>
          <li className="flex items-center gap-2 mb-2">
            <span className="text-secundario">•</span> Podemos ajustar el beat a
            tus necesidades
          </li>
          <li className="flex items-center gap-2 mb-2">
            <span className="text-secundario">•</span> Puedes comprar la
            licencia de uso exclusivo
          </li>
          <li className="flex items-center gap-2 mb-2">
            <span className="text-secundario">•</span> Ofrecemos mp3, wav, stems
          </li>
          <li className="flex items-center gap-2 mb-2">
            <span className="text-secundario">•</span> Flexibilidad, atención
            personalizada y seguridad en cada compra
          </li>
        </ul>
      </section>
      <Suspense>
        <BeatsSection />
      </Suspense>
      <div className="flex flex-col md:flex-row items-center gap-5 bg-secundario/10 p-6">
        <section
          id="about"
          className="md:w-1/2 w-full text-white pt-6 pl-6 flex flex-col items-center"
          style={{
            backgroundImage: "url('/leo_estudio_dibujo.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "50vh",
          }}
        >
          <div className="bg-black/60 p-6 rounded-l-lg">
            <h2 className="text-2xl font-bold mb-6">Sobre mí</h2>
            <p className="max-w-2xl">
              Soy Leo, un productor musical costarricense apasionado por crear
              beats únicos con sabor tropical, urbano y experimental. Ackee
              Beats es mi espacio para compartir ritmos frescos para artistas y
              creadores.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 px-6 w-1/2 flex flex-col items-center"
        >
          <ContactUsForm />
        </section>
      </div>
    </>
  );
}
