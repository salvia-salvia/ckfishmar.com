"use client";

import { useState } from "react";

import Image from "next/image";
import ContactPopup from "./ContactPopup";

export default function ContactPopupButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 right-6 z-30 rounded-full cursor-pointer bg-[#34699a] text-white p-4 shadow-lg hover:bg-[#34699a]"
      >
        <Image
          src="/icons/conatct.svg"
          alt="conatct icon"
          width={30}
          height={30}
        />
      </button>

      <ContactPopup openByBtn={open} onClose={() => setOpen(false)} />
    </>
  );
}
