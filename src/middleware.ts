import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Check if the maintenance mode environment variable is set to true
    if (process.env.MAINTENANCE_MODE === 'true') {
        // If we're already on the maintenance page, don't rewrite to avoid infinite loops
        if (request.nextUrl.pathname === '/maintenance') {
            return NextResponse.next();
        }

        // Rewrite all other requests to the maintenance page
        return NextResponse.rewrite(new URL('/maintenance', request.url));
    }

    // If maintenance mode is off, but someone tries to access /maintenance, redirect them to home
    if (request.nextUrl.pathname === '/maintenance' && process.env.MAINTENANCE_MODE !== 'true') {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

// only run middleware on pages, not api routes or static files
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         * - images/ (public images)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|images/|icons/).*)',
    ],
};
