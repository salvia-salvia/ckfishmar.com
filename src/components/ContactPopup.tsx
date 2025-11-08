"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { sendEmailOrNumber } from "@/lib/actions/visitorInfo.actions";
import { toast } from "sonner";
import { getCaptchaToken } from "@/lib/utils";
import { InfoIcon } from "lucide-react";

export default function ContactPopup({
  openByBtn,
  onClose,
}: {
  openByBtn?: boolean;
  onClose?: () => void;
}) {
  const t = useTranslations("contactPopup");

  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (openByBtn) {
      localStorage.setItem("contactPopupStatus", "closed");
      setOpen(true);
    }
    const popupStatus = localStorage.getItem("contactPopupStatus");
    if (popupStatus !== "closed" && popupStatus !== "submitted" && !openByBtn) {
      const timer = setTimeout(() => {
        setOpen(true);
        inputRef.current?.focus();
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [openByBtn]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
    }
  }, [open]);

  const validate = (v: string) => {
    const trimmed = v.trim();
    if (!trimmed) return { ok: false, reason: t("errorRequired") };
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    const isPhone = /^[0-9+\s\-()]{6,20}$/.test(trimmed);
    if (isEmail) return { ok: true, type: "email" as const };
    if (isPhone) return { ok: true, type: "phone" as const };
    return { ok: false, reason: t("errorInvalid") };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = validate(value);
    if (!res.ok) {
      setError(res?.reason ?? "");
      return;
    }

    try {
      const token = await getCaptchaToken();

      const result = await sendEmailOrNumber({
        contact: value.trim(),
        name,
        source: "website-popup",
        token,
      });

      if (result.success) {
        toast.success(t("successMessage"));
        setValue("");
        setName("");
        setSubmitted(true);
        setTimeout(() => {
          setOpen(false);
        }, 2000);

        localStorage.setItem("contactPopupStatus", "submitted");
      } else {
        toast.error(t("errorMessage"));
      }
    } catch (error) {
      toast.error("An error occurred, try again.");
    }
  };

  const handleClose = () => {
    setOpen(false);
    onClose ? onClose() : null;
    localStorage.setItem("contactPopupStatus", "closed");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="max-w-3xl flex justify-around items-center  w-full bg-white  shadow-[0_6px_15px_rgba(0,0,0,0.20)]  p-6 relative">
        <div className="flex items-start gap-3 max-w-[340px] bg-[url('/img/small-contact-us.png')]  object-cover bg-center">
          <div className="flex-1 ">
            <div className="">
              <p className="uppercase font-poppins   text-xs font-semibold">
                {t("subTitle")}
              </p>
              <h3 className="text-2xl text-[#34699a] font-semibold">
                {t("title")}
              </h3>
            </div>
            <p className="text-sm  py-5">{t("description")}</p>
            <form onSubmit={handleSubmit} className="  flex flex-col gap-2">
              <input
                ref={inputRef}
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                aria-label="name"
                placeholder={t("inputNamePlaceholder")}
                className="flex-1 border bg-white px-3 py-2 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#34699a]"
              />
              <input
                ref={inputRef}
                value={value}
                required
                onChange={(e) => setValue(e.target.value)}
                aria-label="phone or email"
                placeholder={t("inputPlaceholder")}
                className="flex-1 border bg-white px-3 py-2 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#34699a]"
              />

              <button
                type="submit"
                className="px-4 py-2 bg-[#34699a] text-white font-medium hover:bg-[#2c5270]"
                disabled={submitted}
              >
                {t("submitButton")}
              </button>
            </form>

            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

            <p className="text-xs text-gray-500 mt-4 flex gap-2">
              <InfoIcon />
              {t("privacyNote")}
            </p>
          </div>

          <button
            onClick={handleClose}
            aria-label={t("closeButtonAria")}
            className="bg-black/20 hover:bg-black/10 duration-300 rounded-full p-2 inline-flex items-center justify-center text-white  hover:text-gray-400 ml-2 cursor-pointer absolute top-4 right-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="w-fit hidden sm:block">
          <Image src="/img/contactUs.png" alt="icon" width={200} height={400} />
        </div>
      </div>
    </div>
  );
}
