"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { MenuIcon } from "@/icons/MenuIcon";
import { CloseIcon } from "@/icons/CloseIcon";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking a link
  const handleLinkClick = () => setIsOpen(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-700 hover:text-secundario transition-all active:scale-95 focus:outline-none flex items-center justify-center relative z-50"
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <CloseIcon className="w-8 h-8" />
        ) : (
          <MenuIcon className="w-8 h-8" />
        )}
      </button>

      {/* Mobile Menu Overlay - Rendered via Portal to escape header context */}
      {createPortal(
        <div
          className={`fixed inset-0 z-[100] transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Backdrop Blur */}
          <div
            className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
            onClick={toggleMenu}
          />

          {/* Menu Content */}
          <div
            className={`absolute top-0 right-0 h-[70vh] w-full bg-white shadow-2xl rounded-b-[2rem] p-8 flex flex-col items-center justify-center transform transition-transform duration-500 ease-out border-b border-gray-100 ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            {/* Close Button Inside Menu */}
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-8 p-2 text-gray-400 hover:text-secundario transition-colors"
            >
              <CloseIcon className="w-9 h-9" />
            </button>

            <nav className="flex flex-col items-center space-y-8 w-full">
              <Link
                href="#beats"
                onClick={handleLinkClick}
                className="text-2xl font-black uppercase tracking-tighter text-gray-900 hover:text-secundario transition-all hover:scale-105 active:scale-95"
              >
                Beats
              </Link>
              <Link
                href="#about"
                onClick={handleLinkClick}
                className="text-2xl font-black uppercase tracking-tighter text-gray-900 hover:text-secundario transition-all hover:scale-105 active:scale-95"
              >
                Sobre mí
              </Link>
              <Link
                href="#contact"
                onClick={handleLinkClick}
                className="text-2xl font-black uppercase tracking-tighter text-gray-900 hover:text-secundario transition-all hover:scale-105 active:scale-95"
              >
                Contacto
              </Link>

              <div className="pt-4 w-full flex justify-center">
                <Link
                  href="https://www.flproductionscr.com/"
                  target="_blank"
                  onClick={handleLinkClick}
                  className="w-full max-w-[250px] py-4 bg-gray-950 text-white rounded-2xl font-black uppercase tracking-widest text-center shadow-lg shadow-gray-200 hover:bg-secundario transition-all active:scale-95 text-lg"
                >
                  Estudio
                </Link>
              </div>
            </nav>

            <div className="absolute bottom-8 left-0 right-0 text-center">
              <p className="text-gray-300 text-xs font-bold uppercase tracking-widest">
                Ackee Beats Caribbean Soul
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};
