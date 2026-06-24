// @/components/dashboard/AttendanceWidget.tsx

import { Card, CardContent } from "@/components/ui/card";
import { UserCheck } from "lucide-react";

export default function AttendanceWidget() {
  return (
    <Card className="flex items-center gap-x-3.5 border-none bg-card p-6 shadow-xl">
      <div className="rounded-lg border border-border p-2 text-[#D84242]">
        <UserCheck className="h-6 w-6" />
      </div>
      <div className="text-xl font-bold text-card-foreground">
        Attendance
      </div>
    </Card>
  );
}