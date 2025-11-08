"use server";

import { FishPortParams } from "@/types";
import { connectToDatabase } from "../database";
import { handleError } from "../utils";
import { fishPortFormSchema } from "../validator";
import {
  FishPort,
  IFishPortPopulated,
} from "../database/models/FishPort.model";
import { Types } from "mongoose";
 

export const createFishPort = async (data: FishPortParams) => {
  try {
    const validatedData = fishPortFormSchema.safeParse(data);

    if (!validatedData.success) return;

    await connectToDatabase();

    const { fish, port, price } = validatedData.data;

    const yesterdayRecord = await FishPort.findOne({
      fish,
      port,
    }).sort({ createdAt: -1 });

    let change = 0;
    if (yesterdayRecord) {
      change = ((price - yesterdayRecord.price) / yesterdayRecord.price) * 100;
    }

    const newFishPort = await FishPort.create({
      ...validatedData.data,
      change,
    });

    return JSON.parse(JSON.stringify(newFishPort));
  } catch (error) {
    handleError(error);
  }
};

export const getAllFishPort = async ({
  fishId,
  portId,
  page = 1,
  limit = 10,
  sortBy = "createdAt",
  sortOrder = -1,
}: {
  fishId?: string;
  portId?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 1 | -1;
}) => {
  try {
    const query: {
      fish?: Types.ObjectId;
      port?: Types.ObjectId;
    } = {};
    if (fishId && Types.ObjectId.isValid(fishId)) {
      query.fish = new Types.ObjectId(fishId);
    }

    if (portId && Types.ObjectId.isValid(portId)) {
      query.port = new Types.ObjectId(portId);
    }

    await connectToDatabase();
    const skip = (page - 1) * limit;

    const fish = await FishPort.find(query)
      .sort({ [sortBy]: sortOrder })
      .populate("fish")
      .populate("port")
      .skip(skip)
      .limit(limit);

    const total = await FishPort.countDocuments(query);
    const totalPages = Math.ceil(total / limit);
    return {
      data: JSON.parse(JSON.stringify(fish)) as IFishPortPopulated[],
      total,
      totalPages,
    };
  } catch (error) {
    handleError(error);
  }
};

export const deleteFishPort = async (id: string) => {
  try {
    const validatedId = Types.ObjectId.isValid(id);

    if (validatedId) {
      await connectToDatabase();
      await FishPort.findByIdAndDelete(id);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    handleError(error);
  }
};
export const updateFishPort = async (fishPort: FishPortParams) => {
  try {
    const validatedData = fishPortFormSchema.partial().safeParse(fishPort);

    if (!validatedData.success) return false;

    await connectToDatabase();

    const { _id, fish, port, price, ...updateData } = validatedData.data;

    let change: number | undefined = undefined;

    if (price !== undefined && fish && port) {
      const previousRecord = await FishPort.findOne({
        fish,
        port,
        _id: { $ne: _id },
      }).sort({ createdAt: -1 });

      if (previousRecord) {
        change = ((price - previousRecord.price) / previousRecord.price) * 100;
      } else {
        change = 0;
      }
    }

    const updatePayload = {
      ...updateData,
      ...(price !== undefined ? { price } : {}),
      ...(change !== undefined ? { change } : {}),
    };

    return await FishPort.updateOne({ _id }, { $set: updatePayload });
  } catch (error) {
    handleError(error);
  }
};
