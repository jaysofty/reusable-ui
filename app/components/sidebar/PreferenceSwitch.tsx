"use client";

import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { type LucideIcon } from "lucide-react";

interface PreferenceSwitchProps {
  title: string;
  icon: LucideIcon;
}

export function PreferenceSwitch({ title, icon: Icon }: PreferenceSwitchProps) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center justify-between rounded-lg px-4 py-2.5 text-sidebar-foreground transition-colors hover:bg-sidebar/50">
      <div className="flex items-center gap-x-3 text-sm">
        <Icon className={`h-5 w-5 transition-colors ${isDark ? "text-white" : "text-gray-700"}`} />
        <span className="text-sidebar-foreground">{title}</span>
      </div>
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-muted"
      />
    </div>
  );
}
