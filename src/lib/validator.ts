import { z } from "zod";
import { Types } from "mongoose";
const multiLangString = z.object({
  en: z.string().trim().min(1, "English is required"),
  fr: z.string().trim().min(1, "French is required"),
  de: z.string().trim().min(1, "German is required"),
  es: z.string().trim().min(1, "Spanish is required"),
  it: z.string().trim().min(1, "Italian is required"),
  pt: z.string().trim().min(1, "Portuguese is required"),
  ru: z.string().trim().min(1, "Russian is required"),
});
export const fishPortFormSchema = z.object({
  _id: z
    .string()
    .refine((val) => Types.ObjectId.isValid(val), {
      message: "Invalid ObjectId",
    })
    .optional(),
  fish: z.string().refine((val) => Types.ObjectId.isValid(val), {
    message: "Invalid fish ObjectId",
  }),
  port: z.string().refine((val) => Types.ObjectId.isValid(val), {
    message: "Invalid fish ObjectId",
  }),
  price: z.number().min(1, "Price is required"),
  change: z.number().default(0).optional(),
});

const CommercialDesignationSchema = z.object({
  slug: z.string().min(1, "Slug is required"),
  commercialName: z.string().min(1, "Commercial name is required"),
});

const CommercialNameSchema = z.object({
  countryName: z.string().min(1, "Country name is required"),
  commercialDesignations: z
    .array(CommercialDesignationSchema)
    .min(1, "At least one commercial designation is required"),
});

export const fishFormSchema = z.object({
  commercialNames: z
    .array(CommercialNameSchema)
    .min(1, "At least one country commercial name is required"),
  desc: multiLangString,
  imagePath: z.string().min(1, "Image path is required"),
  scientificName: z.string().min(1, "Scientific name is required"),
});

export const portFormSchema = z.object({
  _id: z
    .string()
    .refine((val) => Types.ObjectId.isValid(val), {
      message: "Invalid ObjectId",
    })
    .optional(),
  name: z.string().min(3, "Name is required"),
  lat: z.number().min(3, "lat is required"),
  lng: z.number(),
  is_active: z.boolean().default(true),
});
