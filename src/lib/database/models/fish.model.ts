import { MultiLanguageField } from "@/types";
import mongoose, { models } from "mongoose";
interface ICommercialDesignation {
  slug: string;
  commercialName: string;
}
interface ICommercialNames {
  [countryName: string]: ICommercialDesignation[];
}
export interface IFish {
  id: string;
  _id: string;
  image: string;
  name: string;
  desc: MultiLanguageField;
  scientifcName: string;
  category: string;
  commercialNames?: ICommercialNames;
}

const MultiLangStringSchema = new mongoose.Schema(
  {
    en: { type: String, required: true },
    fr: { type: String, required: true },
    es: { type: String, required: true },
    de: { type: String, required: true },
    it: { type: String, required: true },
    pt: { type: String, required: true },
    ru: { type: String, required: true },
  },
  { _id: false }
);

const CommercialNamesSchema = new mongoose.Schema(
  {},
  { strict: false, _id: false }
);

const FishSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  name: { type: String, required: true },
  desc: { type: MultiLangStringSchema, required: true },
  scientifcName: { type: String, required: true },
  category: { type: String, required: true },
  commercialNames: { type: CommercialNamesSchema, default: {} },
});

export const Fish = models.Fish || mongoose.model("Fish", FishSchema);
