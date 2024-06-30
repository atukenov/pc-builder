export interface IComponent {
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
  model: string;
  price: string;
  specifications: string;
  compatability: number[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ICPUDetails {
  component_id: number;
  coreCount: number;
  coreClock: number;
  coreClockBoost: number;
  tdp: number;
  graphics: string;
  smt: boolean;
}

export interface ICPUCoolerDetails {
  component_id: number;
  fanRPMLow: number;
  fanRPMHigh: number;
  noiseLevel: number;
  color: string;
  radiatorSize: number;
  cpuSocket: string;
}

export interface IMotherboardDetails {
  component_id: number;
  cpuSocket: string;
  formFactor: string;
  memory: number;
  memorySlots: number;
  memoryType: string;
  color: string;
  chipset: string;
}

export interface IMemoryDetails {
  component_id: number;
  speed: string;
  moduleCount: number;
  moduleMemory: number;
  color: string;
  fwl: number;
  casLatency: number;
  type: string;
}

export interface IStorageDetails {
  component_id: number;
  capacity: number;
  capacityName: "TB" | "GB" | "MB";
  type: "SSD" | "HDD";
  cache: number;
  formFactor: string;
  interface: string;
}

export interface IVideoCardDetails {
  component_id: number;
  chipset: string;
  memory: number;
  memoryType: string;
  coreClock: number;
  boostClock: number;
  color: string;
  length: number;
  tdp: number;
}

export interface ICaseDetails {
  component_id: number;
  type: string;
  color: string;
  powerSupply: string;
  externalVolume: number;
}

export interface IOperatingSystemDetails {
  component_id: number;
  bit: 32 | 64 | "32/64";
  maximumSupportedMemory: number;
}
