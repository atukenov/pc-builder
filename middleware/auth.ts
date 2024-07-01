import { authMiddleware } from "@/lib/middleware/authMiddleware";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return authMiddleware(request);
}

export const config = {
  matcher: ["/build-your-own-pc/:path*", "/admin/:path*"],
};
