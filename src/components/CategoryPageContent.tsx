"use client";
import { countriesToSelect, fishCategories } from "@/constants";
import { IFish } from "@/lib/database/models/fish.model";
import { Categories, MultiLangText } from "@/types";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useQuery } from "@tanstack/react-query";
import { getAllFish, getAllFishByCategory } from "@/lib/actions/fish.actions";
import SreachBoxFish from "./SreachBoxFish";
import { useSearchParams } from "next/navigation";
export default function CategoryPageContent({
  category,
  allFish,
}: {
  category: Categories;
  allFish?: IFish[];
}) {
  const t = useTranslations("category");
  const tLinkTitle = useTranslations("linkTitle");
  const localeRaw = useLocale();
  const [selectedCountryCode, setSelectedCountryCode] = useState("es");
  const [fishData, setFishData] = useState<IFish[] | undefined | null>();
  const searchParams = useSearchParams();
  const fishQuery = searchParams.get("fish");

  const locale = localeRaw as keyof MultiLangText;
  const categoryInfo = fishCategories.find((cat) => cat.id == category);

  const { data: fish } = useQuery({
    queryKey: ["fish", category],
    queryFn: async () => await getAllFishByCategory(category),
    initialData: !fishQuery ? allFish : [],
  });
  useEffect(() => {
    setFishData(fish);
    if (fishQuery) {
      getAllFish(fishQuery).then((res) => setFishData(res));
    }
  }, [fishQuery]);

  const onSearch = async (query: string) => {
    const result = await getAllFish(query);
    setFishData(result);
  };
  return (
    <section className="mt-50 font-open-sans flex flex-col max-w-[1500px] min-h-screen mx-auto">
      <div className="w-full flex justify-between  items-center flex-wrap px-5">
        <section>
          <div className="uppercase  text-gray-400 text-sm p-3">
            <Link className="hover:underline" href={`/${locale}/products`}>
              {t("title")}
            </Link>
            /
            <span className="font-semibold text-gray-500">
              {categoryInfo?.name[locale]}
            </span>
          </div>
          <h2 className="text-xl sm:text-3xl 2xl:text-4xl capitalize  font-semibold tracking-widest md:leading-20 px-8 block lg:px-0 mb-6  text-gray-800">
            {categoryInfo?.name[locale]}
          </h2>
        </section>
        <section className="flex justify-center flex-col gap-4 lg:flex-row  xl:gap-16">
          <SreachBoxFish onSearch={onSearch} fishQuery={fishQuery} />
          <div className="mb-4 lg:m-0">
            <Select
              value={selectedCountryCode}
              onValueChange={setSelectedCountryCode}
            >
              <SelectTrigger
                className="w-full lg:w-46 cursor-pointer rounded-none text-base font-semibold text-gray-700"
                data-testid="select-country"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="rounded-none">
                {countriesToSelect.map((country) => (
                  <SelectItem
                    className="rounded-md cursor-pointer"
                    key={country.code}
                    value={country.code}
                  >
                    <div className="flex items-center space-x-6">
                      <Image
                        width={20}
                        height={20}
                        alt={`${country.code} flag`}
                        src={`/icons/squareFlags/${country.code}.svg`}
                      />
                      <span>{country.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-sm  text-gray-600 py-2">
              Select country to display commercial name.
            </p>
          </div>
        </section>
      </div>
      <div>
        <ul className=" flex  justify-center  gap-6 flex-wrap">
          {fishData?.map((pro, idx) => {
            const selectedCountry = countriesToSelect.find(
              (c) => c.code === selectedCountryCode
            );
             
            
            const slugLower = pro.scientifcName
              .replace(/\s+/g, "-")
              .toLowerCase();
            return (
              <li key={idx}>
                <Link
                  className=" max-w-[350px] h-fit flex flex-col justify-between items-center py-8 px-3 gap-6 text-center hover:bg-zinc-100 duration-200 "
                  href={`/${locale}/products/${category}/${slugLower}`}
                  title={`${tLinkTitle("viewProduct")} ${
                    pro?.scientifcName
                  } - ${categoryInfo?.name[locale]}`}
                  aria-label={`${tLinkTitle("viewProduct")} ${
                    pro?.scientifcName
                  } - ${categoryInfo?.name[locale]}`}
                >
                  <Image
                    src={pro?.image || ""}
                    width={300}
                    height={300}
                    alt="fish"
                  />
                  <div className="flex flex-col gap-6 justify-between">
                    <h3 className="text-2xl  font-semibold tracking-widest">
                      {pro?.scientifcName.toString()}
                    </h3>

                    <ul className="flex  w-full justify-center flex-wrap items-center gap-3 mx-auto">
                      {pro?.commercialNames?.[selectedCountry?.name ?? ""]?.map(
                        (item, idx) => {
                           
                          
                          return (
                            item.commercialName !== pro?.scientifcName && (
                              <li key={idx}>
                                <span className="bg-[#34699a]/30 capitalize px-1 py-0.5 rounded text-sm">
                                  {item.slug}
                                </span>
                                <span className="px-2 py-1 whitespace-normal  text-gray-700">
                                  {item.commercialName}
                                </span>
                              </li>
                            )
                          );
                        }
                      )}
                    </ul>
                  </div>
                  <button className="relative  inline-block px-6 py-2 cursor-pointer border border-[#34699a] text-[#34699a] font-medium overflow-hidden group">
                    <span className="absolute left-0 top-1/2 w-full h-0 bg-[#34699a] z-0 transition-all duration-300 ease-out group-hover:h-full transform -translate-y-1/2"></span>
                    <span className="relative uppercase z-10 group-hover:text-white transition-colors duration-300">
                      {t("details")}
                    </span>
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
