import { routeValidationMiddleware } from "@/lib/middleware/routeValidationMiddleware";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return routeValidationMiddleware(request);
}

export const config = {
  matcher: ["/products/:type"],
};
