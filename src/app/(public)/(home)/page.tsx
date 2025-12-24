import { ArrowUpRightIcon } from "@/icons/ArrowUpRightIcon";
import { FireIcon } from "@/icons/FireIcon";
import { MusicIcon } from "@/icons/MusicIcon";
import { ShieldCheckIcon } from "@/icons/ShieldCheckIcon";
import { CheckIcon } from "@/icons/CheckIcon";
import { ContactUsForm } from "./components/ContactUsForm";
import { BeatsSection } from "./components/BeatsSection";
import { Suspense } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primario/30">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secundario/10 via-transparent to-transparent opacity-50" />
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto space-y-8 py-20">
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white bg-secundario rounded-full">
            Producción de Élite
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
            Tienda de Beats: Estilo exótico, <br />
            <span className="text-secundario">Sonido Ackee</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
            Tus próximos hits de Trap, Reggaeton, Afrobeat, Pop y Dancehall
            están aquí. Beats exclusivos,{" "}
            <strong>grabación, mezcla y masterización</strong> profesionales.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <a
              href="#beats"
              className="px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-all hover:scale-105 shadow-xl"
            >
              Explorar Beats
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-bold rounded-full hover:bg-gray-900 hover:text-white transition-all shadow-lg"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>

      {/* Trust/Beats Section */}
      <Suspense>
        <BeatsSection />
      </Suspense>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 tracking-tight">
              ¿Por qué elegir Ackee Beats?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Impulsamos tu creatividad con herramientas de nivel profesional y
              un trato humano excepcional.
            </p>
            <div className="w-24 h-1.5 bg-secundario mx-auto rounded-full mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Calidad de Élite",
                description:
                  "Beats mezclados y masterizados con precisión quirúrgica. Formatos MP3, WAV y Stems disponibles.",
                image:
                  "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800",
                tag: "Estudio",
              },
              {
                title: "Soporte Directo",
                description:
                  "Hablemos de tu visión. Ajustamos arreglos, estructuras o mezclas para que el beat sea tuyo al 100%.",
                image:
                  "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80&w=800",
                tag: "Creatividad",
              },
              {
                title: "Licencias Seguras",
                description:
                  "Contratos claros y transparentes. Desde uso básico hasta derechos exclusivos para tus hits.",
                image:
                  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
                tag: "Legal",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 hover:border-secundario/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={`Ackee Beats - ${
                      feature.title
                    } - ${feature.description.substring(0, 50)}...`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-gray-900 shadow-sm">
                      {feature.tag}
                    </span>
                  </div>
                </div>

                <div className="p-10 relative">
                  <div className="absolute -top-12 right-10 w-20 h-20 bg-secundario rounded-3xl flex items-center justify-center text-white shadow-xl shadow-secundario/20 transform rotate-6 group-hover:rotate-12 transition-transform">
                    {idx === 0 ? (
                      <FireIcon className="w-10 h-10" />
                    ) : idx === 1 ? (
                      <MusicIcon className="w-10 h-10" />
                    ) : (
                      <ShieldCheckIcon className="w-10 h-10" />
                    )}
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-gray-900 leading-tight group-hover:text-secundario transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Services Section */}
      <section className="py-24 bg-gray-50 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secundario bg-secundario/10 rounded-full">
              Más que una tienda de beats
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              ¿Listo para grabar <br /> tu próximo hit?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              En <span className="text-gray-900 font-bold">FLProductions</span>,
              nuestro estudio físico, ofrecemos servicios de grabación, mezcla y
              masterización con equipos de gama alta y estándares
              internacionales.
            </p>
            <ul className="space-y-4">
              {[
                "Grabación de voces e instrumentos",
                "Mezcla profesional (Stems)",
                "Masterización analógica y digital",
                "Producción ejecutiva de proyectos",
              ].map((service, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-700 font-bold"
                >
                  <span className="w-6 h-6 bg-secundario text-white rounded-full flex items-center justify-center">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </span>
                  {service}
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <a
                href="https://www.flproductionscr.com/"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secundario text-white font-black rounded-full hover:bg-secundario/90 transition-all hover:scale-105 shadow-xl shadow-secundario/20"
              >
                Visitar FLProductions
                <ArrowUpRightIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 hover:scale-[1.02] transition-all duration-700 ease-in-out">
              <Image
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200"
                alt="FLProductions Recording Studio"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block -rotate-6">
              <div className="text-secundario font-black text-4xl mb-1">
                15+
              </div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Años Elevando
                <br />
                el sonido
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Contact Wrapper */}
      <div className="flex flex-col lg:flex-row items-stretch bg-white">
        {/* About Section */}
        <section
          id="about"
          className="lg:w-1/2 w-full min-h-[600px] relative flex flex-col justify-end p-12 overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
            style={{ backgroundImage: "url('/leo_estudio_dibujo.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="relative z-10 text-white max-w-xl">
            <h2 className="text-4xl font-bold mb-6">Sobre mí</h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-8">
              Soy Leo, un productor costarricense enfocado en fusionar ritmos
              caribeños con la fuerza del sonido urbano moderno.
              <strong> Ackee Beats</strong> es una extensión digital de mi
              estudio físico{" "}
              <a
                href="https://www.flproductionscr.com/"
                target="_blank"
                className="text-secundario hover:underline"
              >
                FLProductions
              </a>
              , el laboratorio donde nacen texturas únicas para artistas que
              buscan sonar diferente.
            </p>
            <div className="flex items-center gap-4 border-l-4 border-secundario pl-6 py-2">
              <span className="text-secundario font-black text-2xl">15+</span>
              <span className="text-sm font-medium tracking-wide uppercase">
                Años de experiencia <br />
                en producción musical
              </span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="lg:w-1/2 w-full py-24 px-12 bg-gray-50 flex flex-col items-center justify-center"
        >
          <div className="w-full max-w-md">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">
                Hablemos de tu proyecto
              </h2>
              <p className="text-gray-500">
                ¿Buscas un beat personalizado o una licencia exclusiva?
                Escríbeme.
              </p>
            </div>
            <ContactUsForm />
          </div>
        </section>
      </div>
    </>
  );
}
