"use client";
import { FacebookIcon } from "@/icons/FacebookIcon";
import { WhatsappIcon } from "@/icons/WhatsappIcon";
import { YoutubeIcon } from "@/icons/YoutubeIcon";
import { whatsappNumber } from "@global/constants";
import { useState } from "react";

export const ContactUsForm = () => {
  const [sentForm, setSentForm] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSentForm(true);
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const message = formData.get("message");
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Soy ${name}, te contacto de Ackee Beats.%0A%0A${message}`;
    window.open(url, "_blank");
  };
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="text-sm font-bold text-gray-700 ml-1">
            Tu Nombre
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Ej. Juan Pérez"
            className="w-full border-2 border-gray-100 p-4 rounded-2xl focus:border-secundario outline-none transition-all bg-white shadow-sm"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-bold text-gray-700 ml-1">
            Tu Mensaje
          </label>
          <textarea
            name="message"
            required
            placeholder="¿En qué puedo ayudarte?"
            className="w-full border-2 border-gray-100 p-4 rounded-2xl focus:border-secundario outline-none transition-all bg-white shadow-sm resize-none"
            rows={4}
          ></textarea>
        </div>

        <div className="flex flex-col gap-6 pt-2">
          <button
            disabled={sentForm}
            type="submit"
            className="w-full bg-secundario text-white py-4 px-6 rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-lg shadow-secundario/20 active:scale-[0.98] disabled:bg-gray-300 disabled:shadow-none flex items-center justify-center gap-3 cursor-pointer"
          >
            Enviar por WhatsApp
            <WhatsappIcon className="w-6 h-6" />
          </button>

          <div className="flex items-center justify-center gap-8 pt-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
            <a
              href="https://www.youtube.com/channel/UCAVKw7wP-yKPGSbCd1BJ7mw"
              target="_blank"
              title="YouTube"
            >
              <YoutubeIcon className="w-8 h-8 hover:text-[#FF0000] transition-colors" />
            </a>
            <a
              href="https://www.facebook.com/FLProductionscr"
              target="_blank"
              title="Facebook"
            >
              <FacebookIcon className="w-8 h-8 hover:text-[#1877F2] transition-colors" />
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};
