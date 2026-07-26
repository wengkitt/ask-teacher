import { NextResponse, type NextRequest } from "next/server";

const publicRoutes = ["/login", "/signup"];

export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const { origin } = request.nextUrl;
  const response = await fetch(`${origin}/api/auth/get-session`, {
    headers: {
      cookie: request.headers.get("cookie") || "",
    },
  });

  const session = response.ok ? await response.json() : null;

  if (!session && !publicRoutes.includes(pathname) && pathname !== "/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (session && (publicRoutes.includes(pathname) || pathname === "/")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
