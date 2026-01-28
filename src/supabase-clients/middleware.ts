import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

// Route constants
const PROTECTED_ROUTES = ["/dashboard"];
const AUTH_ROUTES = ["/login"];
const ONBOARDING_ROUTES = ["/onboarding"];

// Locale helpers
function extractLocale(pathname: string): string {
  return pathname.match(/^\/([a-z]{2})(\/|$)/)?.[1] || "en";
}

function removeLocaleFromPath(pathname: string): string {
  return pathname.replace(/^\/[a-z]{2}(\/|$)/, "/");
}

function checkRouteType(pathname: string, routes: string[]): boolean {
  return routes.some((route) => pathname.startsWith(route));
}

// Redirect helpers
function redirectToLogin(
  locale: string,
  pathname: string,
  request: NextRequest,
) {
  const loginUrl = new URL(`/${locale}/login`, request.url);
  loginUrl.searchParams.set("redirect", pathname);
  return NextResponse.redirect(loginUrl);
}

function redirectToOnboarding(locale: string, request: NextRequest) {
  return NextResponse.redirect(new URL(`/${locale}/onboarding`, request.url));
}

function redirectToDashboard(locale: string, request: NextRequest) {
  return NextResponse.redirect(new URL(`/${locale}/dashboard`, request.url));
}

export async function updateSession(
  request: NextRequest,
  response: NextResponse,
) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error(
      "Missing Supabase environment variables in middleware. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
    );
    return response;
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
      },
    },
  });


  const pathname = request.nextUrl.pathname;
  const locale = extractLocale(pathname);
  const pathnameWithoutLocale = removeLocaleFromPath(pathname);

  // Skip middleware for API routes (check after removing locale)
  if (pathnameWithoutLocale.startsWith("/api/")) {
    return response;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isProtectedRoute = checkRouteType(
    pathnameWithoutLocale,
    PROTECTED_ROUTES,
  );
  const isAuthRoute = checkRouteType(pathnameWithoutLocale, AUTH_ROUTES);
  const isOnboardingRoute = checkRouteType(
    pathnameWithoutLocale,
    ONBOARDING_ROUTES,
  );
  const isHomePage = pathnameWithoutLocale === "/";

  // Not authenticated - redirect to login
  if ((isProtectedRoute || isOnboardingRoute) && !user) {
    return redirectToLogin(locale, pathname, request);
  }

  // User authenticated - handle route logic
  if (
    user &&
    (isProtectedRoute || isOnboardingRoute || isAuthRoute || isHomePage)
  ) {
    try {
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("onboarding_completed", { count: "exact" })
        .eq("id", user.id)
        .single();

      // Profile should always exist due to trigger, but handle error gracefully
      if (error) {
        console.error("Profile fetch error:", error);
        // If profile doesn't exist (shouldn't happen), redirect to onboarding
        if (error.code === "PGRST116" && !isOnboardingRoute) {
          return redirectToOnboarding(locale, request);
        }
        return response;
      }

      const onboardingCompleted = profile?.onboarding_completed === true;

      // Redirect flow:
      // 1. Protected route (dashboard, etc.) → check onboarding
      if (isProtectedRoute && !onboardingCompleted) {
        return redirectToOnboarding(locale, request);
      }

      // 2. Onboarding page → if completed, go to dashboard
      if (isOnboardingRoute && onboardingCompleted) {
        return redirectToDashboard(locale, request);
      }

      // 3. Login page → if completed, go to dashboard; if not, go to onboarding
      if (isAuthRoute) {
        if (onboardingCompleted) {
          return redirectToDashboard(locale, request);
        } else {
          return redirectToOnboarding(locale, request);
        }
      }

      // 4. Home page → if not completed, go to onboarding; if completed, go to dashboard
      if (isHomePage) {
        if (!onboardingCompleted) {
          return redirectToOnboarding(locale, request);
        } else {
          return redirectToDashboard(locale, request);
        }
      }
    } catch (err) {
      console.error("Middleware error:", err);
    }
  }

  return response;
}
