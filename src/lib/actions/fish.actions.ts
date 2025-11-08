"use server";

import { FishParams } from "@/types";
import { connectToDatabase } from "../database";
import { Fish, IFish } from "../database/models/fish.model";
import { handleError } from "../utils";
import { fishFormSchema } from "../validator";
import { Types } from "mongoose";

export const createFish = async (data: FishParams) => {
  try {
    const validatedData = fishFormSchema.safeParse(data);

    if (validatedData.success) {
      await connectToDatabase();
      const newFish = await Fish.create(validatedData.data);
      return JSON.parse(JSON.stringify(newFish));
    }
  } catch (error) {
    handleError(error);
  }
};
export const updateFish = async (id: string, data: FishParams) => {
  try {
    const validatedData = fishFormSchema.partial().safeParse(data);

    if (validatedData.success) {
      await connectToDatabase();

      const updatedFish = await Fish.findByIdAndUpdate(
        id,
        { $set: validatedData.data },
        { new: true, runValidators: true }
      );

      return JSON.parse(JSON.stringify(updatedFish));
    }
  } catch (error) {
    handleError(error);
  }
};
export const deleteFish = async (id: string) => {
  try {
    const validatedId = Types.ObjectId.isValid(id);

    if (validatedId) {
      await connectToDatabase();
      await Fish.findByIdAndDelete(id);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    handleError(error);
  }
};
export const getAllFish = async (search?: string): Promise<IFish[]> => {
  try {
    await connectToDatabase();

    let query = {};

    if (search && search.trim() !== "") {
      const regex = new RegExp(search, "i");
      query = {
        $or: [
          { name: regex },
          { scientifcName: regex },

          {
            $expr: {
              $gt: [
                {
                  $size: {
                    $filter: {
                      input: {
                        $reduce: {
                          input: { $objectToArray: "$commercialNames" },
                          initialValue: [],
                          in: { $concatArrays: ["$$value", "$$this.v"] },
                        },
                      },
                      as: "item",
                      cond: {
                        $regexMatch: {
                          input: "$$item.commercialName",
                          regex: regex,
                        },
                      },
                    },
                  },
                },
                0,
              ],
            },
          },
        ],
      };
    }

    const fish = await Fish.find(query);

    return JSON.parse(JSON.stringify(fish)) as IFish[];
  } catch (error) {
    handleError(error);
    return [];
  }
};

export const getAllFishByCategory = async (category: string) => {
  try {
    await connectToDatabase();

    const fish = await Fish.find({ category });

    return JSON.parse(JSON.stringify(fish)) as IFish[];
  } catch (error) {
    handleError(error);
  }
};
export const getFish = async (search: string): Promise<IFish | null> => {
  try {
    await connectToDatabase();

    const regex = new RegExp(search, "i");

    const fish = await Fish.findOne({
      $or: [
        { name: regex },
        { scientifcName: regex },

        {
          $expr: {
            $gt: [
              {
                $size: {
                  $filter: {
                    input: {
                      $reduce: {
                        input: { $objectToArray: "$commercialNames" },
                        initialValue: [],
                        in: { $concatArrays: ["$$value", "$$this.v"] },
                      },
                    },
                    as: "item",
                    cond: {
                      $regexMatch: {
                        input: "$$item.commercialName",
                        regex: regex,
                      },
                    },
                  },
                },
              },
              0,
            ],
          },
        },
      ],
    });

    return fish ? (JSON.parse(JSON.stringify(fish)) as IFish) : null;
  } catch (error) {
    handleError(error);
    return null;
  }
};
