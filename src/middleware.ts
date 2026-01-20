import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isAdmin = req.auth?.user?.isAdmin;
  const isAuthPage = req.nextUrl.pathname.startsWith("/auth");
  const isAccountPage = req.nextUrl.pathname.startsWith("/account");
  const isAdminPage = req.nextUrl.pathname.startsWith("/admin");

  // Redirect logged-in users away from auth pages
  if (isAuthPage && isLoggedIn) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Protect account pages - redirect to signin if not logged in
  if (isAccountPage && !isLoggedIn) {
    const callbackUrl = encodeURIComponent(req.nextUrl.pathname);
    return NextResponse.redirect(
      new URL(`/auth/signin?callbackUrl=${callbackUrl}`, req.url)
    );
  }

  // Protect admin pages - redirect to home if not admin
  if (isAdminPage && !isAdmin) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/account/:path*", "/auth/:path*", "/admin/:path*"],
};
