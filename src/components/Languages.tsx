"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export const languages = [
  { code: "en", name: "English", flag: "/icons/en.svg" },
  { code: "fr", name: "Français", flag: "/icons/fr.svg" },
  { code: "es", name: "Español", flag: "/icons/es.svg" },
  { code: "de", name: "Deutsch", flag: "/icons/de.svg" },
  { code: "it", name: "Italiano", flag: "/icons/it.svg" },
  { code: "pt", name: "Português", flag: "/icons/pt.svg" },
  { code: "ru", name: "Русский", flag: "/icons/ru.svg" },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const changeLanguage = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`relative`} ref={dropdownRef}>
      {/* Button */}
      <button
        className="flex  items-center justify-between cursor-pointer gap-2 rounded-lg md:w-28 text-sm md:text-base py-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <Image
            src={`/icons/${locale}.svg`}
            alt={locale}
            width={24}
            height={24}
          />
          <span className=" font-medium">
            {languages?.find((res) => res?.code === locale)?.name}
          </span>
        </div>
        <svg
          className={`w-4 h-4 text-gray-600 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul className="absolute w-44 text-gray-800 bg-white border border-gray-200 rounded-lg mt-2 shadow-lg z-10">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className="flex items-center gap-3 px-4 py-2 cursor-pointer rounded hover:bg-gray-100 hover:text-primary"
              onClick={() => {
                changeLanguage(lang.code);
                setIsOpen(false);
              }}
            >
              <Image src={lang.flag} alt={lang.name} width={20} height={20} />
              <span>{lang.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
