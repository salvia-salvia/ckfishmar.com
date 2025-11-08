"use server";

import { PortParams } from "@/types";
import { connectToDatabase } from "../database";
import { IPort, Port } from "../database/models/port.model";

import { handleError } from "../utils";
import { portFormSchema } from "../validator";
import { Types } from "mongoose";

export const createPort = async (data: PortParams) => {
  const validatedData = portFormSchema.parse(data);

  try {
    await connectToDatabase();

    const newPort = await Port.create(validatedData);
    return JSON.parse(JSON.stringify(newPort));
  } catch (error) {
    handleError(error);
  }
};
export const updatedPort = async (data: PortParams) => {
  const validatedData = portFormSchema.partial().safeParse(data);

  try {
    if (validatedData.success) {
      await connectToDatabase();
      const { _id, ...updateData } = validatedData.data;
      const updatedPort = await Port.updateOne({ _id }, { $set: updateData });
      return JSON.parse(JSON.stringify(updatedPort));
    }
  } catch (error) {
    handleError(error);
  }
};
export const deletePort = async (id: string) => {
  try {
    const validatedId = Types.ObjectId.isValid(id);

    if (validatedId) {
      await connectToDatabase();
      await Port.findByIdAndDelete(id);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    handleError(error);
  }
};
export const getAllPorts = async () => {
  try {
    await connectToDatabase();
    const ports = await Port.find();
 

    return JSON.parse(JSON.stringify(ports)) as IPort[];
  } catch (error) {
    handleError(error);
  }
};

export const getAllPortsWithFish = async () => {
  try {
    await connectToDatabase();

    const ports = await Port.aggregate([
      {
        $lookup: {
          from: "fishports",
          localField: "_id",
          foreignField: "port",
          as: "fishPorts",
        },
      },
      {
        $unwind: {
          path: "$fishPorts",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: "fish",
          localField: "fishPorts.fish",
          foreignField: "_id",
          as: "fishPorts.fish",
        },
      },
      {
        $unwind: {
          path: "$fishPorts.fish",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $group: {
          _id: "$_id",
          name: { $first: "$name" },
          location: { $first: "$location" },
          fish: {
            $push: {
              _id: "$fishPorts.fish._id",
              scientificName: "$fishPorts.fish.scientificName",
              commercialNames: "$fishPorts.fish.commercialNames",
              price: "$fishPorts.price",
            },
          },
        },
      },
    ]);

    return JSON.parse(JSON.stringify(ports));
  } catch (error) {
    handleError(error);
  }
};
