"use client";

import { fishCategories } from "@/constants";

import { MultiLangText } from "@/types";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function CategoriesContent() {
  const t = useTranslations("category");
  const tLinkTitle = useTranslations("linkTitle");
  const localeRaw = useLocale();

  const locale = localeRaw as keyof MultiLangText;

  return (
    <div className="w-full min-h-screen font-open-sans flex flex-col items-center">
      <div className="w-full max-w-7xl  pb-20 pl-3 mx-auto">
        <h1 className="text-xl max-w-3xl  font-semibold tracking-widest md:leading-20 sm:text-3xl 2xl:text-5xl  mb-2">
          {t("title")}
        </h1>
        <p className="text-gray-800 text-sm md:text-lg leading-relaxed ">
          {t("subTitle")}
        </p>
      </div>
      <ul className="lg:mt-12 flex  justify-center gap-3 flex-wrap">
        {fishCategories.map((cat, idx) => {
          return (
            <li key={idx}>
              <Link
                title={`${tLinkTitle("viewProductscategory")} ${
                  cat.name[locale]
                }`}
                aria-label={`${tLinkTitle("viewProductscategory")} ${
                  cat.name[locale]
                }`}
                href={`/${localeRaw}/products/${cat.id}`}
                className=" lg:max-w-[400px] lg:h-[500px] flex flex-col items-center p-8 gap-6 w-fit text-center hover:bg-zinc-100 duration-200 cursor-pointer"
              >
                <Image
                  src={cat.image}
                  width={300}
                  height={300}
                  alt={cat.name[locale] || "Fish category image"}
                />
                <h3 className=" text-xl lg:text-3xl  font-semibold tracking-widest">
                  {cat.name[locale]}
                </h3>
                <div>
                  <button className="relative text-sm lg:text-base inline-block cursor-pointer px-6 py-2 border border-[#34699a] text-[#34699a] font-medium overflow-hidden group">
                    <span className="absolute left-0 top-1/2 w-full h-0 bg-[#34699a] z-0 transition-all duration-300 ease-out group-hover:h-full transform -translate-y-1/2"></span>
                    <span className="relative uppercase z-10 group-hover:text-white transition-colors duration-300">
                      {t("details")}
                    </span>
                  </button>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
