"use server";

import { cookies } from "next/headers";

export async function setAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.set("auth", "true", {
    path: "/",
    httpOnly: true, // Prevents XSS attacks
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
}