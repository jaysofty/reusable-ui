// @/lib/utils.ts

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper to determine status color based on text
export function getStatusColor(status: string) {
  switch (status.toLowerCase()) {
    case 'active': return 'text-success-foreground bg-success'; // Need success colors in tailwind.config
    case 'enrolled': return 'text-info-foreground bg-info'; // Need info colors in tailwind.config
    default: return 'text-muted-foreground bg-muted';
  }
}