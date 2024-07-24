import mongoose, { Document, Schema } from "mongoose";

export interface IComponent extends Document {
  id: number;
  name: string;
  type:
    | "CPU"
    | "CPU Cooler"
    | "Motherboard"
    | "Memory"
    | "Storage"
    | "Video Card"
    | "Case"
    | "Power Supply"
    | "Operating System"
    | "Monitor";
  brand: string;
  modelName: string;
  price: string;
  specifications: string;
  compatability: number[];
  createdAt: Date;
  updatedAt: Date;
}

const ComponentSchema: Schema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  type: {
    type: String,
    required: true,
    enum: [
      "CPU",
      "CPU Cooler",
      "Motherboard",
      "Memory",
      "Storage",
      "Video Card",
      "Case",
      "Power Supply",
      "Operating System",
      "Monitor",
    ],
  },
  brand: { type: String, required: true },
  modelName: { type: String, required: true },
  price: { type: String, required: true },
  specifications: { type: String, required: true },
  compatibility: { type: [Number], required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const ComponentModel =
  mongoose.models.Component ||
  mongoose.model<IComponent>("Component", ComponentSchema);

//---------------------------------------------------------------------------

export interface ICPUDetails extends Document {
  component_id: mongoose.Types.ObjectId;
  coreCount: number;
  coreClock: number;
  coreClockBoost: number;
  tdp: number;
  graphics: string;
  smt: boolean;
}

const CPUDetailsSchema: Schema = new Schema({
  component_id: {
    type: Schema.Types.ObjectId,
    ref: "Component",
    required: true,
  },
  coreCount: { type: Number, required: true },
  coreClock: { type: Number, required: true },
  coreClockBoost: { type: Number, required: true },
  tdp: { type: Number, required: true },
  graphics: { type: String, required: true },
  smt: { type: Boolean, required: true },
});

export const CPUDetailsModel =
  mongoose.models.CPUDetail ||
  mongoose.model<ICPUDetails>("CPUDetail", CPUDetailsSchema);

//---------------------------------------------------------------------------

export interface ICPUCoolerDetails extends Document {
  component_id: mongoose.Types.ObjectId;
  fanRPMLow: number;
  fanRPMHigh: number;
  noiseLevel: number;
  color: string;
  radiatorSize: number;
  cpuSocket: string;
}

const CPUCoolerDetailsSchema: Schema = new Schema({
  component_id: {
    type: Schema.Types.ObjectId,
    ref: "Component",
    required: true,
  }, // Reference to ComponentSchema id
  fanRPMLow: { type: Number, required: true },
  fanRPMHigh: { type: Number, required: true },
  noiseLevel: { type: Number, required: true },
  color: { type: String, required: true },
  radiatorSize: { type: Number, required: true },
  cpuSocket: { type: String, required: true },
});

export const CPUCoolerDetailsModel =
  mongoose.models.CPUCoolerDetail ||
  mongoose.model<ICPUDetails>("CPUCoolerDetail", CPUCoolerDetailsSchema);
//---------------------------------------------------------------------------

export interface IMotherboardDetails extends Document {
  component_id: mongoose.Types.ObjectId;
  cpuSocket: string;
  formFactor: string;
  memory: number;
  memorySlots: number;
  memoryType: string;
  color: string;
  chipset: string;
}

const MotherboardDetailsSchema: Schema = new Schema({
  component_id: {
    type: Schema.Types.ObjectId,
    ref: "Component",
    required: true,
  }, // Reference to ComponentSchema id
  cpuSocket: { type: String, required: true },
  formFactor: { type: String, required: true },
  memory: { type: Number, required: true },
  memorySlots: { type: Number, required: true },
  memoryType: { type: String, required: true },
  color: { type: String, required: true },
  chipset: { type: String, required: true },
});

export const MotherboardDetailsModel =
  mongoose.models.MotherboardDetail ||
  mongoose.model<IMotherboardDetails>(
    "MotherboardDetail",
    MotherboardDetailsSchema
  );
//---------------------------------------------------------------------------

export interface IMemoryDetails extends Document {
  component_id: mongoose.Types.ObjectId;
  speed: string;
  moduleCount: number;
  moduleMemory: number;
  color: string;
  fwl: number;
  casLatency: number;
  type: string;
}

const MemoryDetailsSchema: Schema = new Schema({
  component_id: {
    type: Schema.Types.ObjectId,
    ref: "Component",
    required: true,
  }, // Reference to ComponentSchema id
  speed: { type: String, required: true },
  moduleCount: { type: Number, required: true },
  moduleMemory: { type: Number, required: true },
  color: { type: String, required: true },
  fwl: { type: Number, required: true },
  casLatency: { type: Number, required: true },
  type: { type: String, required: true },
});

export const MemoryDetailsModel =
  mongoose.models.MemoryDetail ||
  mongoose.model<IMemoryDetails>("MemoryDetail", MemoryDetailsSchema);
//---------------------------------------------------------------------------

export interface IStorageDetails extends Document {
  component_id: mongoose.Types.ObjectId;
  capacity: number;
  capacityName: "TB" | "GB" | "MB";
  type: "SSD" | "HDD";
  cache: number;
  formFactor: string;
  interface: string;
}

const StorageDetailsSchema: Schema = new Schema({
  component_id: {
    type: Schema.Types.ObjectId,
    ref: "Component",
    required: true,
  }, // Reference to ComponentSchema id
  capacity: { type: Number, required: true },
  capacityName: { type: String, enum: ["TB", "GB", "MB"], required: true },
  type: { type: String, enum: ["SSD", "HDD"], required: true },
  cache: { type: Number, required: true },
  formFactor: { type: String, required: true },
  interface: { type: String, required: true },
});

export const StorageDetailsModel =
  mongoose.models.StorageDetail ||
  mongoose.model<IStorageDetails>("StorageDetail", StorageDetailsSchema);

//---------------------------------------------------------------------------

export interface IVideoCardDetails extends Document {
  component_id: mongoose.Types.ObjectId;
  chipset: string;
  memory: number;
  memoryType: string;
  coreClock: number;
  boostClock: number;
  color: string;
  length: number;
  tdp: number;
}

const VideoCardDetailsSchema: Schema = new Schema({
  component_id: {
    type: Schema.Types.ObjectId,
    ref: "Component",
    required: true,
  }, // Reference to ComponentSchema id
  chipset: { type: String, required: true },
  memory: { type: Number, required: true },
  memoryType: { type: String, required: true },
  coreClock: { type: Number, required: true },
  boostClock: { type: Number, required: true },
  color: { type: String, required: true },
  length: { type: Number, required: true },
  tdp: { type: Number, required: true },
});

export const VideoCardDetailsModel =
  mongoose.models.VideoCardDetail ||
  mongoose.model<IVideoCardDetails>("VideoCardDetail", VideoCardDetailsSchema);

//---------------------------------------------------------------------------

export interface ICaseDetails extends Document {
  component_id: mongoose.Types.ObjectId;
  type: string;
  color: string;
  powerSupply: string;
  externalVolume: number;
}

const CaseDetailsSchema: Schema = new Schema({
  component_id: {
    type: Schema.Types.ObjectId,
    ref: "Component",
    required: true,
  }, // Reference to ComponentSchema id
  type: { type: String, required: true },
  color: { type: String, required: true },
  powerSupply: { type: String, required: true },
  externalVolume: { type: Number, required: true },
});

export const CaseDetailsModel =
  mongoose.models.CaseDetail ||
  mongoose.model<ICaseDetails>("CaseDetail", CaseDetailsSchema);

//---------------------------------------------------------------------------

export interface IOperatingSystemDetails extends Document {
  component_id: mongoose.Types.ObjectId;
  bit: 32 | 64 | "32/64";
  maximumSupportedMemory: number;
}

const OperatingSystemDetailsSchema: Schema = new Schema({
  component_id: {
    type: mongoose.Types.ObjectId,
    ref: "Component",
    required: true,
  }, // Reference to ComponentSchema id
  bit: { type: String, enum: ["32", "64", "32/64"], required: true },
  maximumSupportedMemory: { type: Number, required: true },
});

export const OperatingSystemDetailsModel =
  mongoose.models.OperatingSystemDetail ||
  mongoose.model<ICaseDetails>(
    "OperatingSystemDetail",
    OperatingSystemDetailsSchema
  );
