import { ComponentModel, IComponent } from "@/app/models/Component";
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
    const components = await ComponentModel.find({ type: typeLow });
    console.log(components);
    return NextResponse.json({ components }, { status: 200 });
  } catch (error: any) {
    return Error("Error in fetching components of type: " + type, error);
  }
};
