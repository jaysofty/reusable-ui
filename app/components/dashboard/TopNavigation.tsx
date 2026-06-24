// @/components/dashboard/TopNavigation.tsx

"use client";

import { useState } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TopNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center gap-x-6">

      {/* Notification Bell */}
      <Button
        variant="ghost"
        onClick={() => setOpen(!open)}
        className="relative h-10 w-10 rounded-full border border-border bg-card p-0 text-foreground hover:bg-muted"
      >
        <span className="sr-only">Announcements</span>

        <Bell className="h-5 w-5" />

        {/* Notification dot */}
        <span className="absolute right-3 top-3 block h-1.5 w-1.5 rounded-full bg-[#E57676]" />
      </Button>


      {/* Notification Popup */}
      {open && (
        <div className="absolute right-0 top-14 z-50 w-80 rounded-xl border border-border bg-card p-4 shadow-lg">

          <h3 className="mb-3 text-sm font-semibold">
            Notifications
          </h3>

          <div className="rounded-lg bg-muted p-3 text-sm">
            🎉 Welcome to TechCrush Scholarship Dashboard
          </div>

          <div className="mt-2 rounded-lg bg-muted p-3 text-sm">
            Your application status has been updated.
          </div>

        </div>
      )}


      {/* User Badge */}
      <div className="flex items-center gap-x-2.5 rounded-full border border-border bg-card px-4 py-2.5 text-foreground">
        <div className="text-sm font-medium">
          TechCrush Scholarship
        </div>
      </div>

    </div>
  );
}