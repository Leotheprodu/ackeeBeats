import { Toaster } from "react-hot-toast";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { MusicPlayer } from "./(public)/(home)/components/musicPlayer/MusicPlayer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="es">
      <body>
        <Toaster />
        <main className="bg-primario container mx-auto px-8 py-2">
          <header className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo_ackee.png"
                alt="Ackee Beats Logo"
                className=""
                width={100}
                height={100}
              />
            </Link>
            <nav className="space-x-4 text-sm font-medium">
              <Link href="#beats">Beats</Link>
              <Link href="#about">Sobre mí</Link>
              <Link href="#contact">Contacto</Link>
            </nav>
          </header>
          {children}
          <MusicPlayer />
          {/* Footer */}
          <footer className="text-right text-sm mt-2">
            © {currentYear} Ackee Beats
          </footer>
        </main>
      </body>
    </html>
  );
}
