import {
  ICPUDetails,
  IComponent,
  IMotherboardDetails,
} from "@/app/models/Component";
import { BASE_API } from "../constants/const";

export const getTypeData = async (type: string): Promise<any> => {
  const res = await fetch(`${BASE_API}/api/components/type/` + type);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
