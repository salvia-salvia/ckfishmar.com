import { navbarRoutes } from "@/constants";
import { X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function MobileNavbar({
  showMobileNavbar,
  setShowMobileNavbar,
}: {
  showMobileNavbar: boolean;

  setShowMobileNavbar: (b: boolean) => void;
}) {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = useLocale();
  return (
    <div
      className={`fixed z-20 top-0 ${
        showMobileNavbar ? "block" : "hidden"
      } md:hidden bg-white text-black w-full h-screen`}
    >
      <div className="flex mr-2 justify-end w-full p-6 absolute">
        <X
          onClick={() => setShowMobileNavbar(false)}
          className="w-[30px] h-[30px] cursor-pointer"
        />
      </div>
      <nav className="flex flex-col capitalize  h-screen items-center justify-center  gap-8  text-3xl  ">
        {navbarRoutes.map((route, i) => {
          const fullPath = `/${locale}${route.link}`;
          const cleanFullPath = fullPath.endsWith("/")
            ? fullPath.slice(0, -1)
            : fullPath;
          const isActive = pathname === cleanFullPath;
          return (
            <Link
              key={i}
              href={fullPath}
              className={`relative group ${
                isActive ? "font-bold text-[#34699a]" : " "
              }`}
            >
              {t(route.name)}
              <span
                className={`absolute left-1/2 bottom-0 w-0 h-[4px] bg-[#34699a] transition-all duration-300 group-hover:left-0 group-hover:w-full`}
              ></span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
