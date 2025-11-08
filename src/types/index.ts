import {
  fishFormSchema,
  fishPortFormSchema,
  portFormSchema,
} from "@/lib/validator";
import z from "zod";

export interface Category {
  id: string;
  title: MultiLanguageField;
  description: MultiLanguageField;
  created_at: Date;
}
export type FishItem = {
  species: string;
  price: number; // price per kg in MAD
  qty?: number; // quantity in kg
  unit?: string; // e.g., kg, box
  currency?: string; // e.g., MAD
};
export type Port = {
  id: string;
  name: string;
  city?: string;
  lat: number;
  lng: number;
  fish?: FishItem[];
};
export interface Product {
  id: string;
  title: MultiLanguageField;
  description: MultiLanguageField;
  categoryId: string;
  price: number;
  image?: string;
  created_at: Date;
}
export interface MultiLanguageField {
  en: string;
  fr: string;
  es: string;
  de: string;
  it: string;
  pt: string;
  ru: string;
}

export type Language = "en" | "fr" | "es" | "de" | "it" | "pt" | "ru";

// export const LANGUAGES = {
//   en: "English",
//   fr: "Français",
//   es: "Español",
//   de: "Deutsch",
//   it: "Italiano",
//   pt: "Português",
//   ru: "Русский",
// } as const;
export const MultiLanguageDefualt = {
  en: "",
  fr: "",
  es: "",
  de: "",
  it: "",
  pt: "",
  ru: "",
};
export const LANGUAGES: { code: Language; name: string; flag: string }[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
];
export const LANGUAGE_FLAGS = {
  en: "🇺🇸",
  fr: "🇫🇷",
  es: "🇪🇸",
  de: "🇩🇪",
  it: "🇮🇹",
  pt: "🇵🇹",
  ru: "🇷🇺",
} as const;

export type MultiLangText = {
  en: string;
  fr: string;
  es: string;
  de: string;
  it: string;
  pt: string;
  ru: string;
};
export type Categories = "cephalopod" | "pelagic" | "demersal";

export interface FishPrice {
  id: string;
  species: string;
  price: number;
  quantity: number;
  portId: string;
  change: number;
  lastUpdated: Date | null;
}
export type FishPriceWithPort = FishPrice & { port: Port };

export type FishPortParams = z.infer<typeof fishPortFormSchema>;

export type PortParams = z.infer<typeof portFormSchema>;

export type FishParams = z.infer<typeof fishFormSchema>;


export type CaptchaDate =
  | {
      success: true;
      challenge_ts: string;
      hostname: string;
      score: number;
      action: string;
    }
  | {
      success: false;
      "error-codes": ErrorCodes[];
    };

export type ErrorCodes =
  | "missing-input-secret"
  | "invalid-input-secret"
  | "missing-input-response"
  | "invalid-input-response"
  | "bad-request"
  | "timeout-or-duplicate";