import { CaptchaDate } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleError = (error: unknown) => {
  console.error(error);
  throw new Error(typeof error === "string" ? error : JSON.stringify(error));
};
export function formatDate(date: Date | string): string {
  if (!date) return "";

  const d = new Date(date);
  return d.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function slugToName(slug: string) {
  return slug.replace(/-/g, " ");
}

export function nameToSlug(name: string) {
  return name.replace(/\s+/g, "-").toLowerCase();
}

export async function getCaptchaToken() {
  return new Promise<string | null>((resolve) => {
    grecaptcha.ready(async () => {
      const siteKey = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY;
      if (!siteKey) {
        resolve(null);
        return;
      }

      const token = await grecaptcha.execute(siteKey, {
        action: "contact",
      });

      resolve(token);
    });
  });
}

export async function verifyCaptchaToken(token: string) {
  const secretkey = process.env.CAPTCHA_SECRET_KEY;
  if (!secretkey) {
    throw new Error("No secret key captcha found!");
  }
  const url = new URL("https://www.google.com/recaptcha/api/siteverify");
  url.searchParams.append("secret", secretkey);
  url.searchParams.append("response", token);

  const res = await fetch(url, { method: "POST" });
  const captchaData: CaptchaDate = await res.json();

  if (!res.ok) return null;

  return captchaData;
}


