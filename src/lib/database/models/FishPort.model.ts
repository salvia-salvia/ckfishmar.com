import { Document, Schema, Types, model, models } from "mongoose";
import { IFish } from "./fish.model";
import { IPort } from "./port.model";

export interface IFishPort extends Document {
  _id: Types.ObjectId;
  fish: Types.ObjectId | IFish;
  port: Types.ObjectId | IPort;
  price: number;
  change: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface IFishPortPopulated extends Document {
  _id: Types.ObjectId;
  fish: IFish;
  port: IPort;
  price: number;
  change: number;
  createdAt: Date;
  updatedAt: Date;
}
const FishPortSchema = new Schema(
  {
    fish: { type: Schema.Types.ObjectId, ref: "Fish", required: true },
    port: { type: Schema.Types.ObjectId, ref: "Port", required: true },
    price: { type: Number, required: true },
    change: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const FishPort = models.Fish_port || model("Fish_port", FishPortSchema);
