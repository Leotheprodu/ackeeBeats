import { Toaster } from "react-hot-toast";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { MusicPlayer } from "./(public)/(home)/components/musicPlayer/MusicPlayer";
import { appName, domainUrl } from "@global/constants";
import { Metadata } from "next";
import { StructuredData } from "./components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${domainUrl}`),
  title: {
    template: `%s | ${appName}`,
    default: `${appName} | Tienda de Beats Online | Trap, Reggaeton, Afrobeat & Pop`,
  },
  description:
    "Comprar beats de alta calidad. Trap, Reggaeton, Afrobeat, Pop y Dancehall. Licencias de beats, producciones exclusivas y sonido profesional desde Costa Rica por LeoTheProdu.",
  keywords: [
    "comprar beats",
    "tienda de beats online",
    "beats para artistas",
    "trap beats",
    "reggaeton beats",
    "afrobeat type beats",
    "pop production",
    "dancehall riddims",
    "beatmaker costa rica",
    "licencias de beats",
    "instrumentales urbanas",
    "ackee beats",
    "leotheprodu",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${appName} | Tu Tienda de Beats de Confianza`,
    description:
      "Eleva tu música con beats profesionales de Trap, Reggaeton, Afrobeat y más. ¡Explora nuestro catálogo!",
    url: `https://${domainUrl}`,
    siteName: appName,
    images: [
      {
        url: "/logo_ackee.png",
        width: 1200,
        height: 630,
        alt: "Ackee Beats - Professional Beat Store",
      },
    ],
    locale: "es_CR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${appName} | Beats Profesionales`,
    description:
      "La mejor selección de beats urbanos, afrobeat y pop para tu próximo hit.",
    images: ["/logo_ackee.png"],
    creator: "@leotheprodu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="es">
      <body className="bg-white min-h-screen selection:bg-secundario selection:text-white">
        <StructuredData />
        <Toaster />
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/logo_ackee.png"
                  alt="Ackee Beats Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </Link>
              <nav className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-wider text-gray-600">
                <Link
                  className="hover:text-secundario transition-colors"
                  href="#beats"
                >
                  Beats
                </Link>
                <Link
                  className="hover:text-secundario transition-colors"
                  href="#about"
                >
                  Sobre mí
                </Link>
                <Link
                  className="hover:text-secundario transition-colors"
                  href="#contact"
                >
                  Contacto
                </Link>
                <Link
                  target="_blank"
                  className="px-4 py-2 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all"
                  href="https://www.flproductionscr.com/"
                >
                  Estudio
                </Link>
              </nav>
            </div>
          </header>

          <main className="flex-grow">{children}</main>

          <MusicPlayer />

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12 px-6">
            <div className="container mx-auto max-w-7xl">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start space-y-4">
                  <Image
                    src="/logo_ackee.png"
                    alt="Ackee Beats Logo"
                    width={150}
                    height={150}
                    className="opacity-70 contrast-125"
                  />
                  <p className="text-gray-400 text-sm max-w-xs text-center md:text-left font-medium">
                    Elevando el sonido urbano con la esencia del Caribe.
                    Producción musical de alta gama desde Costa Rica.
                  </p>
                </div>
                <div className="flex flex-col items-center md:items-end space-y-2">
                  <div className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">
                    Comunidad
                  </div>
                  <nav className="flex space-x-6">
                    <Link
                      href="#beats"
                      className="hover:text-secundario transition"
                    >
                      Beats
                    </Link>
                    <Link
                      href="#about"
                      className="hover:text-secundario transition"
                    >
                      Bio
                    </Link>
                    <Link
                      href="#contact"
                      className="hover:text-secundario transition"
                    >
                      Contacto
                    </Link>
                  </nav>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-xs">
                © {currentYear} Ackee Beats. Todos los derechos reservados.{" "}
                <br className="md:hidden" />
                Diseñado para artistas visionarios.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
