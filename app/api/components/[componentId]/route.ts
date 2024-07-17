import { ComponentModel, IComponent } from "@/app/models/Component";
import { connectToDatabase } from "@/lib/db";
import { Error } from "@/lib/middleware/errorHandler";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

interface IDProps {
  params: {
    componentId: string;
  };
}

export const PUT = async (req: NextRequest, { params }: IDProps) => {
  const id = params.componentId;
  console.log(id);
  try {
    const body = await req.json();
    await connectToDatabase();
    const updatedComponent = await ComponentModel.findOneAndUpdate(
      { id },
      { ...body, updatedAt: new Date() },
      { new: true }
    );

    if (!updatedComponent) {
      return Error(`Component with id-${id} not found`, 404);
    }

    return NextResponse.json(
      { message: "Component updated successfully.", updatedComponent },
      { status: 200 }
    );
  } catch (error: any) {
    return Error("Error in updating component", error);
  }
};

export const DELETE = async (req: NextRequest, { params }: IDProps) => {
  const id = params.componentId;
  try {
    await connectToDatabase();
    const deletedComponent = await ComponentModel.findByIdAndDelete(id);

    if (!deletedComponent) {
      return Error(`Component with id-${id} not found`, 404);
    }

    return NextResponse.json(
      { message: "Component deleted successfully." },
      { status: 200 }
    );
  } catch (error: any) {
    return Error("Error in deleting component", error);
  }
};
