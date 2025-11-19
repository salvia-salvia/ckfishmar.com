import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Trusted() {
  const t = useTranslations("trusted");
  const imgs = [
    "/img/trusted/ocp.png",
    "/img/trusted/aquaphor.png",
    "/img/trusted/baysu.png",
    "/img/trusted/bf.png",
    "/img/trusted/bwt.png",
    "/img/trusted/hualvtech.png",
    "/img/trusted/hynamo.png",
    "/img/trusted/inabensa.png",
    "/img/trusted/polycera.png",
    "/img/trusted/rarlon.png",
    "/img/trusted/toray.png",
  ];
  return (
    <div className="max-w-7xl mx-auto font-open-sans p-3">
      <h1 className="text-xl  font-semibold tracking-widest md:leading-20 sm:text-3xl 2xl:text-5xl  mb-2">
        {t("title")}
      </h1>
      <span className="text-gray-800 text-sm md:text-lg leading-relaxed ">
        {t("subtitle")}
      </span>
      <div className="flex justify-center flex-wrap gap-4">
        {imgs.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt="Trusted companies logos"
            width={120}
            height={200}
          />
        ))}
      </div>
    </div>
  );
}
