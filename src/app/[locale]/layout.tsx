import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { metadataByLocale } from "@/constants";
import CookiesConsents from "@/components/CookiesConsents";
import ContactPopup from "@/components/ContactPopup";
import { Toaster } from "sonner";
import ContactPopupButton from "@/components/ContactPopupButton";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  return metadataByLocale[locale] || metadataByLocale["en"];
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <NextIntlClientProvider>
      {children} <CookiesConsents />
      <ContactPopup />
      <ContactPopupButton />
      <Toaster
        toastOptions={{
          classNames: {
            error: "!bg-red-600 !text-white",
            success: "!bg-green-600 !text-white",
            warning: "!bg-yellow-500 !text-black",
          },
        }}
      />
    </NextIntlClientProvider>
  );
}
