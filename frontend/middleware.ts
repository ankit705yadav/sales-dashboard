import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define routes you want to protect
const isProtectedRoute = createRouteMatcher([
  "/", // Example route
  "/dashboard(.*)", // Additional protected patterns
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    // Use `auth.protect()` instead of `auth().protect()`
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
