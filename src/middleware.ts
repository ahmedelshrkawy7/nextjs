import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("first");
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }
  response.headers.set("custom-header", "custom-value");
  return response;
  // return NextResponse.rewrite(new URL("/ffff", request.url));
}

export const config = {
  matcher: "/products",
};
