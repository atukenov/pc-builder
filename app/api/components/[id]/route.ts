import { ComponentModel, IComponent } from "@/app/models/Component";
import { connectToDatabase } from "@/lib/db";
import { Error } from "@/lib/middleware/errorHandler";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const PUT = async (req: NextApiRequest) => {
  const { id } = req.query;
  try {
    await connectToDatabase();
    const updatedComponent = await ComponentModel.findByIdAndUpdate(
      id,
      { ...req.body, updatedAt: new Date() },
      { new: true }
    );

    if (!updatedComponent) {
      Error(`Component with id-${id} not found`, 404);
    }

    return NextResponse.json(
      { message: "Component updated successfully.", updatedComponent },
      { status: 200 }
    );
  } catch (error: any) {
    Error("Error in updating component", error);
  }
};

export const DELETE = async (req: NextApiRequest) => {
  const { id } = req.query;
  try {
    await connectToDatabase();
    const deletedComponent = await ComponentModel.findByIdAndDelete(id);

    if (!deletedComponent) {
      Error(`Component with id-${id} not found`, 404);
    }

    return NextResponse.json(
      { message: "Component deleted successfully." },
      { status: 200 }
    );
  } catch (error: any) {
    Error("Error in deleting component", error);
  }
};
