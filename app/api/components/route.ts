import { ComponentModel, IComponent } from "@/app/models/Component";
import { connectToDatabase } from "@/lib/db";
import { Error } from "@/lib/middleware/errorHandler";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDatabase();
    const components = await ComponentModel.find();
    return NextResponse.json({ components }, { status: 200 });
  } catch (error: any) {
    Error("Error in fetching components", error);
  }
};

export const POST = async (req: NextApiRequest) => {
  const { name, type, brand, modelName, price, specifications, compatability } =
    req.body as IComponent;
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
    Error("Error in creating component", error);
  }
};
