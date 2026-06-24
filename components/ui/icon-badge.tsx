import * as React from "react";
import { cn } from "@/lib/utils";

type IconBadgeProps = {
  icon: React.ElementType;
  label: string;
  className?: string;
  iconClassName?: string;
};

export function IconBadge({
  icon: Icon,
  label,
  className,
  iconClassName,
}: IconBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm shadow-sm",
        className
      )}
    >
      <Icon className={cn("h-4 w-4", iconClassName)} />
      <span>{label}</span>
    </div>
  );
}