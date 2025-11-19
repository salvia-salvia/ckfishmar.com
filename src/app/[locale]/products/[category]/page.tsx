import CategoryPageContent from "@/components/CategoryPageContent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { fishCategories } from "@/constants";
import { getAllFishByCategory } from "@/lib/actions/fish.actions";
import { Categories, MultiLangText } from "@/types";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ category: Categories }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const localeRaw = await getLocale();
  const locale = localeRaw as keyof MultiLangText;

  const t = await getTranslations("category_seo");
  const categoryData = fishCategories.find((c) => c.id === category);
  const name = categoryData?.name[locale] || t("default_name");
  const image = categoryData?.image || "https://ckfishmar.com/rounded_logo.svg";
  const url = `https://ckfishmar.com/${locale}/category/${category}`;

  const title = t("title_template", { name });
  const description = t("description_template", { name: name.toLowerCase() });
  const keywords = t("keywords_template", { name });

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [image],
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function page({ params }: Props) {
  const { category } = await params;
  
  const allFish = await getAllFishByCategory(category);
 
  
  return (
    <div className="w-full">
      <Header isProductPage={true} />
      <CategoryPageContent category={category} allFish={allFish} />
      <Footer />
    </div>
  );
}
