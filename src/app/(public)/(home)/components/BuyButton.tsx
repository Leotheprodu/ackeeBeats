"use client";

import { WhatsappIcon } from "@/icons/WhatsappIcon";
import { beats } from "@global/beats";
import { whatsappNumber } from "@global/constants";

export const BuyButton = ({ id, color = 1 }: { id: number; color?: 1 | 2 }) => {
  const beat = beats.find((beat) => beat.id === id);
  const buyHandle = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hola, estoy interesado en el beat ${id}-${beat?.name}`;
    window.open(url, "_blank");
  };
  return (
    <button
      onClick={buyHandle}
      className={`relative group overflow-hidden ${
        color === 1
          ? "bg-secundario text-white shadow-[0_4px_14px_0_rgba(225,103,55,0.39)] hover:shadow-[0_6px_20px_rgba(225,103,55,0.23)]"
          : "bg-white text-gray-900 border-2 border-gray-100"
      } px-6 py-2.5 rounded-full font-bold text-sm tracking-tight transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 w-full md:w-auto min-w-[120px] cursor-pointer`}
    >
      <span className="relative z-10 flex items-center gap-2">
        Adquirir
        <WhatsappIcon className="w-5 h-5" />
      </span>
      {color === 1 && (
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      )}
    </button>
  );
};
