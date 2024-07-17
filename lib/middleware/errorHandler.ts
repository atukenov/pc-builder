import { ApiError } from "next/dist/server/api-utils";
import { NextResponse, NextRequest } from "next/server";

export const Error2 =
  (...handlers: Function[]) =>
  async (req: NextRequest, res: NextResponse) => {
    try {
      for (const handler of handlers) {
        await handler(req, res);
      }
    } catch (error) {
      if (error instanceof ApiError) {
        return NextResponse.json(
          { message: error.message },
          { status: error.statusCode }
        );
      } else {
        console.log(error);
        return NextResponse.json(
          { message: "Server died for some reason ❌" },
          { status: 500 }
        );
      }
    }
  };

export const Error = (
  message: string,
  arg2: any = 500,
  status: number = 500
) => {
  if (typeof arg2 == "number")
    return NextResponse.json(message, { status: arg2 });
  if (typeof arg2 != "number")
    return NextResponse.json(message + " " + arg2.message, { status: status });
  return NextResponse.json(message, { status: 500 });
};
