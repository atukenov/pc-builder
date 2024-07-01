import { routeValidationMiddleware } from "@/lib/middleware/routeValidationMiddleware";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("here");
  return routeValidationMiddleware(request);
}

export const config = {
  matcher: ["/products/:type"],
};
