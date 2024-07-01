import { ComponentModel } from "@/app/models/Component";
import { connectToDatabase } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDatabase();
    const components = await ComponentModel.find();
    return NextResponse.json({ components }, { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error in fetching users" + error.message, {
      status: 500,
    });
  }
};
