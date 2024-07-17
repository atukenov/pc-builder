import { ComponentModel, IComponent } from "@/app/models/Component";
import { connectToDatabase } from "@/lib/db";
import { Error } from "@/lib/middleware/errorHandler";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await connectToDatabase();
    const components = await ComponentModel.find();
    return NextResponse.json({ components }, { status: 200 });
  } catch (error: any) {
    return Error("Error in fetching components", error);
  }
};

export const POST = async (req: NextRequest) => {
  const { name, type, brand, modelName, price, specifications, compatability } =
    await req.json();
  try {
    await connectToDatabase();
    const newComponent = new ComponentModel({
      name,
      type,
      brand,
      modelName,
      price,
      specifications,
      compatability,
    });
    const savedComponent = await newComponent.save();

    return NextResponse.json({ savedComponent }, { status: 200 });
  } catch (error) {
    return Error("Error in creating component", error);
  }
};
