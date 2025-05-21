"use client";

import { WhatsappIcon } from "@/icons/WhatsappIcon";
import { beats } from "@global/beats";
import { whatsappNumber } from "@global/constants";

export const BuyButton = ({ id, color = 1 }: { id: number; color?: 1 | 2 }) => {
  const beat = beats.find((beat) => beat.id === id);
  const buyHandle = () => {
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hola, estoy interesado en el beat ${id}-${beat?.name}`;
    window.open(url, "_blank");
  };
  return (
    <button
      onClick={buyHandle}
      className={`md:w-40 w-10 h-10 ${
        color === 1
          ? "bg-secundario text-white hover:bg-orange-700"
          : "bg-primario text-black hover:bg-gray-200"
      }  py-2 rounded-sm  transition hover:cursor-pointer`}
    >
      <div className="flex items-center justify-center gap-2">
        <p className="hidden md:flex">Consultar</p>
        <WhatsappIcon className="w-6 h-6" />
      </div>
    </button>
  );
};
