"use client";
import { fishCategories } from "@/constants";
import { IFish } from "@/lib/database/models/fish.model";
import { nameToSlug, slugToName } from "@/lib/utils";
import { Categories, MultiLangText } from "@/types";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import OrderForm from "./OrderForm";
import { usePathname } from "next/navigation";

export default function FishContent({
  category,
  fish,
  name,
  commercialName,
}: {
  category: Categories;
  fish: IFish | null;
  name: "scientifc" | "commercial";
  commercialName?: string;
}) {
  const localeRaw = useLocale();

  const tProd = useTranslations("category");
  const tFishprod = useTranslations("fish_product");
  const tLinkTitle = useTranslations("linkTitle");
  const locale = localeRaw as keyof MultiLangText;
  const categoryInfo = fishCategories.find((cat) => cat.id == category);
  const pathname = usePathname();
  const productLink = new URL(`https://www.ckfishmar.com${pathname}`);

  return (
    <div className="flex font-open-sans  flex-col xl:flex-row items-center justify-around mt-52">
      <div>
        <Image
          className="xl:fixed top-44 left-0 lg:left-6 2xl:left-32 w-[320px] md:w-[500px]"
          src={fish?.image || ""}
          width={500}
          height={500}
          alt={fish?.name || "fish"}
        />
      </div>
      <main className=" z-10 xl:ml-74 max-w-3xl 2xl:max-w-5xl bg-gray-50 p-4  ">
        <div className="uppercase p-2  text-gray-400 text-sm">
          <Link className="hover:underline" href={`/${locale}/products`}>
            {tProd("title")}
          </Link>
          <span>/</span>
          <Link
            href={`/${locale}/products/${categoryInfo?.id}`}
            title={`${tLinkTitle("viewProductscategory")} ${
              categoryInfo?.name[locale]
            }`}
            aria-label={`${tLinkTitle("viewProductscategory")} ${
              categoryInfo?.name[locale]
            }`}
            className=" hover:underline"
          >
            {categoryInfo?.name[locale]}
          </Link>
          {name == "commercial" && (
            <>
              <span>/</span>
              <Link
                href={`/${locale}/products/${categoryInfo?.id}/${nameToSlug(
                  fish?.scientifcName ?? ""
                )}`}
                title={`${tLinkTitle("viewProductscategory")} ${
                  fish?.scientifcName
                }`}
                aria-label={`${tLinkTitle("viewProductscategory")} ${
                  fish?.scientifcName
                }`}
                className=" hover:underline"
              >
                {fish?.scientifcName}
              </Link>
            </>
          )}
          /
          <span className="font-semibold text-gray-500">
            {name == "scientifc"
              ? fish?.scientifcName
              : slugToName(decodeURIComponent(commercialName ?? ""))}
          </span>
        </div>
        <div className=" px-2">
          <div className="flex lg:items-center gap-3 pt-3">
            <Image
              src={"/icons/exportIcon.svg"}
              width={30}
              height={30}
              alt={"icon"}
              className="mt-5 lg:m-0 w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]"
            />
            <h1 className="text-gray-800 text-[17px]  lg:text-xl py-4">
              {tFishprod("title.part_1")} {" "}
              <span className="capitalize text-[#34699a] font-mono text-xl">
                {name == "scientifc"
                  ? fish?.scientifcName
                  : slugToName(decodeURIComponent(commercialName ?? ""))}{" "}
              </span>
              {tFishprod("title.part_2")}{" "}
            </h1>
          </div>
          <h2 className="text-xl  sm:text-3xl 2xl:text-2xl capitalize  font-semibold tracking-widest md:leading-20 lg:px-0 mb-2  text-gray-800">
            {name == "scientifc"
              ? fish?.scientifcName
              : slugToName(decodeURIComponent(commercialName ?? ""))}
          </h2>
        </div>
        <div className="flex flex-col gap-8 p-3 justify-between ">
          <div>
            <h3 className="uppercase text-gray-400">
              {tFishprod("commercialNames")} :
            </h3>
            <ul className="grid grid-cols-2 2xl:grid-cols-3 gap-2 mt-3">
              {fish?.commercialNames &&
                Object.entries(fish.commercialNames).map(
                  ([country, designations]) =>
                    designations
                      .filter((item) => item.slug === locale)
                      .map((item, idx) => (
                        <li key={`${country}-${idx}`}>
                          <Link
                            className="hover:underline"
                            href={`/products/${category}/${nameToSlug(
                              fish.scientifcName
                            )}/${nameToSlug(item.commercialName)}`}
                          >
                            <span className="bg-[#34699a]/30 capitalize px-1 py-0.5 rounded text-xs md:text-sm">
                              {item.slug}
                            </span>
                            <span className="px-1 py-1 text-xs md:text-sm text-gray-700">
                              {item.commercialName}
                            </span>
                            <span className="ml-1 md:ml-2 text-xs text-gray-500 italic">
                              ({country})
                            </span>
                          </Link>
                        </li>
                      ))
                )}
            </ul>
          </div>
          <hr />
          <div>
            <h3 className="uppercase text-gray-400">
              {tFishprod("description")} :
            </h3>
            <p className="lg:text-xl font-light">{fish?.desc[locale]}</p>
          </div>
          <hr />
          <div>
            <h3 className="uppercase text-gray-400">
              {tFishprod("specification.title")} :
            </h3>
            <ul className="lg:text-xl font-light">
              <li>{tFishprod("specification.part1")}</li>
              <li>{tFishprod("specification.part2")}</li>
              <li>{tFishprod("specification.part3")}</li>
            </ul>
          </div>
          <hr />
          <div>
            <h3 className="uppercase text-gray-400">
              {tFishprod("scientific_name")}:
            </h3>
            <p className="lg:text-xl font-light">{fish?.scientifcName}</p>
          </div>

          <hr />
          <div>
            <h3 className="uppercase text-gray-400">
              {tFishprod("fishing_zone")}:
            </h3>
            <p className="lg:text-xl font-light uppercase">
              {tFishprod("fao")} 34
            </p>
          </div>
          <hr />
          <div>
            <h3 className="uppercase text-gray-400">
              {tFishprod("shelf_life")}:
            </h3>
            <p className="lg:text-xl font-light">18 {tFishprod("month")}</p>
          </div>
        </div>
        <OrderForm
          product={
            name == "scientifc"
              ? fish?.scientifcName || ""
              : slugToName(decodeURIComponent(commercialName ?? ""))
          }
          productLink={productLink.href}
        />
      </main>
    </div>
  );
}
