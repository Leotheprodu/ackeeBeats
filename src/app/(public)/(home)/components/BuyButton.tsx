"use client";

import { WhatsappIcon } from "@/icons/WhatsappIcon";
import { beats } from "@global/beats";
import { whatsappNumber } from "@global/constants";

export const BuyButton = ({ id }: { id: number }) => {
  const beat = beats.find((beat) => beat.id === id);
  const buyHandle = () => {
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hola, estoy interesado en el beat ${id}-${beat?.name}`;
    window.open(url, "_blank");
  };
  return (
    <button
      onClick={buyHandle}
      className="w-40 bg-secundario text-white py-2 rounded-sm hover:bg-orange-700 transition hover:cursor-pointer"
    >
      <div className="flex items-center justify-center gap-2">
        Consultar
        <WhatsappIcon className="w-6 h-6" />
      </div>
    </button>
  );
};
