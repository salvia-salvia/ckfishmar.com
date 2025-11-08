import { Metadata } from "next";
import "./globals.css";

import { Open_Sans, Poppins } from "next/font/google";
import { Providers } from "@/lib/providers";
import Script from "next/script";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});
// todo new font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  icons: [
    { url: "/rounded_logo.svg", type: "image/svg+xml" },
    { url: "/rounded_logo.ico" },
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${poppins.variable}`}>
      <head>
        {/* Google Analytics tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M0G2QZKVVX"
          strategy="afterInteractive"
        />

        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M0G2QZKVVX');
          `}
        </Script>
      </head>
      <body className={`antialiased `}>
        {/* Google reCAPTCHA */}
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`}
          strategy="beforeInteractive"
        />

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
