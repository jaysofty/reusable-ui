// @/components/sidebar/NavItem.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  item: {
    title: string;
    href: string;
    icon: LucideIcon;
  };
}

export function NavItem({ item }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-x-3 rounded-lg px-4 py-2.5 text-sm transition-colors",
        isActive
          ? "bg-muted text-foreground"
          : "text-sidebar-muted-foreground hover:bg-sidebar-muted/50 hover:text-sidebar-foreground"
      )}
    >
      <item.icon className="h-5 w-5" />
      <span>{item.title}</span>
    </Link>
  );
}