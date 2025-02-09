import { NextRequest, NextResponse } from "next/server";

/**
 * Redirect unauthenticated users to login page
 */
export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const requestUrl = new URL(req.url)

  if (!token && requestUrl.pathname.startsWith('/api/v2')) {
    return new NextResponse(
      JSON.stringify({ success: false, message: 'Unauthorized' }),
      { status: 401, headers: { 'content-type': 'application/json' } }
    );
  }
  
  if (requestUrl.pathname === '/login' && token) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!token && requestUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Apply middleware only to protected routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
export default middleware

