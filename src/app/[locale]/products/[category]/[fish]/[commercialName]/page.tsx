import FishContent from "@/components/FishContent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getFish } from "@/lib/actions/fish.actions";
import { slugToName } from "@/lib/utils";
import { Categories, MultiLangText } from "@/types";
import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import React from "react";
type Props = {
  params: Promise<{
    category: Categories;
    fish: string;
    commercialName: string;
  }>;
};
export async function generateMetadata({ params }: Props) {
  const awaitedParams = await params;

  const { category, fish, commercialName } = awaitedParams;

  const localeRaw = await getLocale();

  const locale = localeRaw as keyof MultiLangText;

  const t = await getTranslations("fish_seo_content");

  const fishName = slugToName(fish);
  const commercial_Name = slugToName(commercialName);
  const fishItem = await getFish(fishName);

  if (!fishItem) return notFound();

  const name = fishItem.name;
  const commercialKeywords = fishItem.commercialNames
    ? Object.values(fishItem.commercialNames)
        .flat()
        .map((item) => item.commercialName)
        .join(", ")
    : "";
  const scientific = fishItem.scientifcName;

  return {
    title: t("title_template", { name: commercial_Name, scientific }),

    description: t("description_template", {
      name: commercial_Name,
      scientific,
    }),

    keywords:
      t("keywords_template", { name, commercial_Name }) +
      ", " +
      commercialKeywords,

    openGraph: {
      title: t("title_template", { name: commercial_Name }),

      description: t("description_template", {
        name: commercial_Name,
        scientific,
      }),

      type: "article",

      url: `https://ckfishmar.com/${locale}/products/${category}/${fishName}/${commercialName}`,

      images: [
        {
          url: `https://ckfishmar.com/img/fish/${fishItem.image}`,
          alt: commercial_Name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: t("title_template", { name: commercial_Name }),

      description: t("description_template", {
        name: commercial_Name,
        scientific,
      }),

      images: [`https://ckfishmar.com/img/fish/${fishItem.image}`],
    },
  };
}

export default async function page({ params }: Props) {
  const { fish, category, commercialName } = await params;
  const fishName = slugToName(fish);
  const fishResult = await getFish(fishName);

  return (
    <section>
      <Header isProductPage={true} />
      <FishContent
        name="commercial"
        commercialName={commercialName}
        category={category}
        fish={fishResult}
      />
      <Footer />
    </section>
  );
}
