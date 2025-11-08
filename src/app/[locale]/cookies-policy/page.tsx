"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function CookiesPolicyPage() {
  const t = useTranslations("cookies_policy");

  return (
    <div>
      <Header isProductPage={true} />
      <main className="max-w-4xl mt-42 mx-auto px-6 py-12 bg-white dark:bg-gray-900  ">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
          {t("title")}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-10">
          {t("lastUpdated", { date: "August 11, 2025" })}
        </p>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              {t("whatAreCookiesTitle")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("whatAreCookiesText")}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              {t("howWeUseCookiesTitle")}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>{t("essential")}</li>
              <li>{t("performance")}</li>
              <li>{t("functional")}</li>
              <li>{t("advertising")}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              {t("thirdPartyTitle")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("thirdPartyText")}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              {t("yourChoicesTitle")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("yourChoicesText")}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              {t("contactTitle")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("contactText")}{" "}
              <Link
                href="mailto:contact@ckfishmar.com"
                className="text-blue-500 hover:underline"
              >
                contact@ckfishmar.com
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
