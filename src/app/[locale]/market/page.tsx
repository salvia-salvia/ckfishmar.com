 
import MarketContent from "@/components/MarketContent";
import { getAllFish } from "@/lib/actions/fish.actions";
import { getAllFishPort } from "@/lib/actions/fishPort.actions";
import { getAllPorts } from "@/lib/actions/port.actions";
import { getLocale, getTranslations } from "next-intl/server";
export async function generateMetadata() {
  const t = await getTranslations("market_seo_content");
  const locale = await getLocale();

  const title = t("title");
  const description = t("description");
  const keywords = t("keywords");
  const image = "https://ckfishmar.com/rounded_logo.svg";
  const url = `https://ckfishmar.com/${locale}/market`;

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


export default async function page() {
  const allFishPort = await getAllFishPort({});
  const species = await getAllFish();
  const ports = await getAllPorts();
  // const portsWithFish = await getAllPortsWithFish();
 

  return (
    <div>
      <MarketContent
        allFishPort={allFishPort}
        totalSpecies={species?.length ?? 0}
        totalPorts={ports?.length ?? 0}
        ports={ports}
      />
    </div>
  );
}
