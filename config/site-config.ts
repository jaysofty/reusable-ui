// @/config/site-config.ts

import { LayoutDashboard, Users, NotebookPen, Megaphone, Settings, LogOut } from "lucide-react";

export const siteConfig = {
  name: "TechCrush",
  logoUrl: "/path/to/logo.png", // Or a string for text logo
};

export const mainNav = [
  {
    title: "MAIN MENU",
    items: [
      { title: "Overview", href: "/dashboard", icon: LayoutDashboard },
      { title: "My Attendance", href: "/dashboard/attendance", icon: Users },
      { title: "Assignments", href: "/dashboard/assignments", icon: NotebookPen },
      { title: "Announcements", href: "/dashboard/announcements", icon: Megaphone },
    ],
  },
  {
    title: "SUPPORTS",
    items: [
      { title: "Settings", href: "/dashboard/settings", icon: Settings },
    ],
  },
];

// @/config/site-config.ts
export const PREFERENCES_NAV = {
  title: "PREFERENCES",
  items: [
    // We keep Log out here but know it will trigger a special route
    { title: "Log out", href: "/api/auth/logout", icon: LogOut }, 
  ],
};