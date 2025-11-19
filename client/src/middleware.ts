import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isStudentRoute = createRouteMatcher(["/user/(.*)"]);
const isTeacherRoute = createRouteMatcher(["/teacher/(.*)"]);

// Add public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
    "/",
    "/search",
    "/checkout(.*)", // Allow all checkout routes
    "/signin(.*)",
    "/signup(.*)",
]);

export default clerkMiddleware(
    async (auth, req) => {
        const { sessionClaims } = await auth();
        console.log("Requested path:", req.nextUrl.pathname);
        console.log("Is public route:", isPublicRoute(req));

        // Allow public routes without authentication
        if (isPublicRoute(req)) {
            console.log("Allowing public route");
            return NextResponse.next();
        }

        // Only apply role-based redirects for authenticated users on protected routes
        if (sessionClaims && (isStudentRoute(req) || isTeacherRoute(req))) {
            const userRole = (sessionClaims?.metadata as { userType: "student" | "teacher" })?.userType || "student";

            if (isStudentRoute(req) && userRole !== "student") {
                return NextResponse.redirect(new URL("/teacher/courses", req.url));
            }

            if (isTeacherRoute(req) && userRole !== "teacher") {
                return NextResponse.redirect(new URL("/user/courses", req.url));
            }
        }

        return NextResponse.next();
    },
    {
        publicRoutes: [
            "/",
            "/search(.*)",
            "/checkout(.*)",  // Allow all checkout routes
            "/signin(.*)",
            "/signup(.*)",
        ],
    }
);

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};