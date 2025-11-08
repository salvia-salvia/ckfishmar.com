import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function AboutContent() {
  const t = useTranslations("smallAbout");
  const locale = useLocale();
  return (
    <section
      id="about"
      className=" flex gap-20  font-open-sans items-center min-h-screen py-20 px-6"
    >
      <Image
        src={`/img/map.png`}
        className="hidden lg:block w-[400px] xl:w-[600px]"
        alt="Map showing our company location"
        width={600}
        height={400}
      />
      <div className="max-w-2xl md:pl-7">
        <h1 className="text-xl max-w-3xl  font-semibold tracking-widest md:leading-20 sm:text-3xl 2xl:text-5xl  mb-6">
          {t("title")}
        </h1>
        <p className="text-gray-600 md:text-lg leading-relaxed">
          {t("part1")}
          <br />
          <br />
          {t("part2")}
          <br />
          <br />
          {t("part3")}
        </p>
        <Link
          href={`/${locale}/about`}
          aria-label="Learn more about our company"
        >
          <button className="relative mt-8 inline-block cursor-pointer px-6 py-2 border border-[#34699a] text-[#34699a] font-medium overflow-hidden group">
            <span className="absolute left-0 top-1/2 w-full h-0 bg-[#34699a] z-0 transition-all duration-300 ease-out group-hover:h-full transform -translate-y-1/2"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              {t("LearnMore")}
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
}
