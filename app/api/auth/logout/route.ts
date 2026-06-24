// app/api/auth/logout/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  
  // Clear the auth cookie (match the name you used in LoginPage)
  cookieStore.delete("auth");

  // Redirect to the login page after clearing the cookie
  return NextResponse.redirect(new URL("/login", process.env.NEXT_PUBLIC_BASE_URL || "https://reusable-ui-zeta.vercel.app/"));
}