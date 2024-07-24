import { CPUDetailsModel, MemoryDetailsModel } from "@/app/models/Component";
import { connectToDatabase } from "@/lib/db";
import { Error } from "@/lib/middleware/errorHandler";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

interface IDProps {
  params: {
    type: string;
  };
}

export const GET = async (req: NextRequest, { params }: IDProps) => {
  const { type } = params;

  try {
    await connectToDatabase();
    let typeLow = type.toLowerCase();
    let data;
    switch (typeLow) {
      case "cpu":
        data = await CPUDetailsModel.find().populate("component_id");
        break;
      case "memory":
        data = await MemoryDetailsModel.find().populate("component_id");
        break;
      default:
        throw Error("No such type: " + type);
    }
    // const components = await ComponentModel.find({ type: typeLow });
    // console.log(components);
    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    return Error("Error in fetching components of type: " + type, error);
  }
};
