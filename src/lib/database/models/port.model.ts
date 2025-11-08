import { Document, Schema, model, models } from "mongoose";

export interface IPort extends Document {
  _id: string;
  name: string;
  lat: number;
  lng: number;
  is_active: boolean;
}
const PortSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  lat: {
    type: String,
    required: true,
  },
  lng: {
    type: String,
    required: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
});
PortSchema.virtual("fishPorts", {
  ref: "Fish_port",
  localField: "_id",
  foreignField: "port",
});
export const Port = models.Port || model("Port", PortSchema);
