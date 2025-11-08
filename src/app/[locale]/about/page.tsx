import AboutPageContent from "@/components/AboutPageContent";
import Header from "@/components/Header";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("about_us_seo_content");

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://ckfishmar.com",
      images: [
        {
          url: "https://ckfishmar.com/img/ckFish.png",
          width: 1200,
          height: 630,
          alt: "CkFish - Moroccan Seafood Exporter",
        },
      ],
      type: "website",
    },
    twitter: {
      title: t("title"),
      description: t("description"),
      images: ["https://ckfishmar.com/img/ckFish.png"],
      card: "summary_large_image",
    },
  };
}

export default function Page() {
  return (
    <>
      <Header isProductPage={true} />
      <AboutPageContent />
    </>
  );
}
