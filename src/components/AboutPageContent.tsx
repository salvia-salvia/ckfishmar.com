import React from "react";
import ContactContent from "./ContactContent";
import Footer from "./Footer";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutPageContent() {
  const t = useTranslations("aboutPage");
  return (
    <div className="font-open-sans">
      <div className="  mx-auto px-8 lg:px-0  lg:max-w-5xl xl:max-w-[1300px]  2xl:max-w-[1500px]">
        <section className="flex flex-col justify-center w-full  min-h-screen mx-auto">
          <div className="flex justify-end py-22">
            <p className="lg:text-xl max-w-[430px] leading-relaxed text-gray-600 ">
              {" "}
              {t("introduction.part1")}
            </p>
          </div>

          <div>
            <Image
              src={`/img/ckFish.png`}
              alt="about"
              width={1300}
              height={200}
              priority
              className="w-[310px] sm:w-[750px] lg:w-[1000px]  xl:w-[1300px] md:h-[100px] lg:h-[150px] xl:h-[200px] mx-auto"
            />
          </div>
          <div>
            <p className="lg:text-xl  max-w-[560px] py-22 leading-relaxed text-gray-600 ">
              {t("introduction.part2")}
            </p>
          </div>
        </section>

        <section className="flex flex-col  bg-[url('/img/bgAbout2.png')] bg-cover bg-center  justify-center w-full min-h-screen mx-auto">
          <h1 className="text-xl max-w-3xl  font-semibold tracking-widest md:leading-20 sm:text-3xl 2xl:text-5xl  mb-16">
            {t("whyWeAreBetter.title")}
          </h1>
          <main className="flex flex-wrap xl:flex-nowrap justify-center gap-4 2xl:gap-22">
            <div className="max-w-sm flex items-end pb-6">
              <p className="text-base 2xl:text-xl leading-relaxed text-gray-600">
                {t("whyWeAreBetter.text1")}
              </p>
            </div>
            <div className="w-[400px] h-[600px]   bg-[url('/img/doctor.jpg')] bg-cover bg-center"></div>
            <div className="max-w-lg">
              <h1 className="text-xl max-w-3xl  font-semibold tracking-widest md:leading-20 sm:text-3xl 2xl:text-5xl  mb-6">
                {t("whyWeAreBetter.subTitle")}
              </h1>
              <ul className="text-base 2xl:text-xl leading-relaxed text-gray-600 flex flex-col gap-6">
                <li>{t("whyWeAreBetter.text2.part1")}</li>
                <li>{t("whyWeAreBetter.text2.part2")}</li>
                <li>{t("whyWeAreBetter.text2.part3")}</li>
              </ul>
            </div>
          </main>
        </section>

        <section className="flex flex-col justify-center w-full min-h-screen mx-auto mt-[120px]">
          <h1 className="text-xl max-w-3xl  font-semibold tracking-widest md:leading-20 sm:text-3xl 2xl:text-5xl  mb-6">
            {t("services.title")}
          </h1>
          <main className="flex items-center flex-wrap lg:flex-nowrap justify-around">
            <ul className="max-w-xl text-base 2xl:text-xl leading-relaxed text-gray-600 lg:h-[500px] py-6 lg:py-0 flex flex-col gap-8">
              <li>{t("services.part1")}</li>
              <li>{t("services.part2")}</li>
              <li>{t("services.part3")}</li>
            </ul>
            <div className=" w-[400px] xl:w-[600px] h-[500px] xl:h-[600px] bg-[url('/img/aboutServices.png')] bg-cover bg-center"></div>
          </main>
        </section>

        <section className="flex flex-col justify-center w-full min-h-screen mx-auto">
          <main className="flex items-center flex-wrap-reverse justify-around">
            {" "}
            <div className="w-[400px] xl:w-[600px] h-[500px] xl:h-[600px] bg-[url('/img/aboutPrice.png')] bg-cover bg-center"></div>
            <ul className="max-w-lg lg:text-xl  lg:h-[600px] py-6 lg:py-0 flex flex-col gap-10">
              <li>
                <h2 className="text-xl max-w-3xl  font-semibold tracking-widest md:leading-20 sm:text-3xl 2xl:text-5xl  mb-6">
                  {t("price.title")}
                </h2>
              </li>

              <li className="leading-relaxed text-base 2xl:text-xl text-gray-600">
                {t("price.part1")}
              </li>

              <li className="leading-relaxed text-base 2xl:text-xl text-gray-600">
                {t("price.part2")}
              </li>

              <li className="leading-relaxed text-base 2xl:text-xl text-gray-600">
                {t("price.part3")}
              </li>
            </ul>
          </main>
        </section>

        <section>
          <ContactContent />
        </section>
      </div>

      <Footer />
    </div>
  );
}
