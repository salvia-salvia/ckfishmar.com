import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ReasonContent() {
  const t = useTranslations("reasonsWhy");
  const reasons = [{ id: "01" }, { id: "02" }, { id: "03" }];
  return (
    <div className="max-w-[1500px] mx-auto font-open-sans md:pl-7 px-8">
      <h1 className="text-xl max-w-3xl  font-semibold tracking-widest md:leading-20 sm:text-3xl 2xl:text-5xl  mb-6  lg:mb-12  text-gray-800">
        {t("title")}
      </h1>
      <div className="flex  gap-5 ">
        <ul className="flex flex-col gap-16 max-w-xl mt-10 text-black md:text-xl leading-relaxed">
          {reasons.map(({ id }) => (
            <li key={id} className="flex items-start">
              <span className="text-3xl font-semibold text-[#34699a] w-12 flex-shrink-0">
                {id}
              </span>
              <p className="text-gray-600 md:text-lg leading-relaxed">
                {t(`reasons.${id}`)}
              </p>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex justify-center">
          {" "}
          <Image
            className="w-[700px] h-[400px] z-[-1]"
            src={"/img/reasonImg.png"}
            alt="Illustration representing the reasons why our company is the best choice"
            width={800}
            height={600}
          />
        </div>
      </div>
      <div className="flex flex-col gap-16 ">
        <div className="flex items-start mt-16">
          <span className="text-3xl font-semibold text-[#34699a] w-12 flex-shrink-0">
            04
          </span>
          <p className="text-gray-600 md:text-lg leading-relaxed">
            {t(`reasons.04`)}
          </p>
        </div>
        <div className="flex items-start">
          <span className="text-3xl font-semibold text-[#34699a] w-12 flex-shrink-0">
            05
          </span>
          <p className="text-gray-600 md:text-lg leading-relaxed">
            {t(`reasons.05`)}
          </p>
        </div>
      </div>
    </div>
  );
}
