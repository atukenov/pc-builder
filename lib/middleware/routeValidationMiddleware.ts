const validTypes = [
  "cpu",
  "cpucooler",
  "motherboard",
  "memory",
  "storage",
  "videocard",
  "case",
  "powersupply",
  "operatingsystem",
  "monitor",
];

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function routeValidationMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const type = pathname.split("/")[2];

  if (!validTypes.includes(type)) {
    return NextResponse.redirect(new URL("/404", request.url));
  }

  return NextResponse.next();
}
