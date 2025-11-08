"use server";

import { Fish } from "../database/models/fish.model";
import { handleError } from "../utils";

export default async function getCategories() {
  try {
    const categories = await Fish.distinct("category");
 
    
    return categories;
  } catch (error) {
    handleError(error);
  }
}
