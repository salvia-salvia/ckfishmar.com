import { fishCategories } from "@/constants";
import { MultiLangText } from "@/types";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function ProductsContent() {
  const localeRaw = useLocale();
  const t = useTranslations("category");
  const tLinkTitle = useTranslations("linkTitle");

  const locale = localeRaw as keyof MultiLangText;
  return (
    <section className="mt-32  lg:mt-10 flex flex-col justify-center max-w-[1500px] min-h-screen mx-auto">
      <h2 className="text-xl ml-12 sm:text-3xl 2xl:text-6xl  font-semibold tracking-widest md:leading-20 px-8 lg:px-0 mb-6  text-gray-800">
        {t("title")}
      </h2>
      <div>
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
                  <Image src={cat.image} width={300} height={300} alt="fish" />
                  <h3 className=" text-xl lg:text-3xl  font-semibold tracking-widest">
                    {cat.name[locale]}
                  </h3>

                  <button className="relative text-sm lg:text-base inline-block cursor-pointer px-6 py-2 border border-[#34699a] text-[#34699a] font-medium overflow-hidden group">
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
