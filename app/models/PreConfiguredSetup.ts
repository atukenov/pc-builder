import mongoose, { Document, Schema } from "mongoose";
import { IComponent } from "./Component";

export interface IPreConfiguredSetup extends Document {
  id: number;
  name: string;
  description: string;
  price: number;
  components: mongoose.Types.ObjectId[] | IComponent[];
  createdAt: Date;
  updatedAt: Date;
}

const PreConfiguredSetupSchema: Schema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  components: [{ type: mongoose.Types.ObjectId, ref: "Component" }], // Array of Component references
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const PreConfiguredSetupModel =
  mongoose.models.PreConfiguredSetup ||
  mongoose.model<IPreConfiguredSetup>(
    "PreConfiguredSetup",
    PreConfiguredSetupSchema
  );
