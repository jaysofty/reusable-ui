"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// This tells TypeScript: "Accept children, plus any props that next-themes normally accepts"
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}