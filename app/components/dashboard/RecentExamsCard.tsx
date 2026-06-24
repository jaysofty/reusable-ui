// @/components/dashboard/RecentExamsCard.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PencilRuler } from "lucide-react";

export function RecentExamsCard() {
  const exams = []; // Set to an empty array for the "No recent exams" state

  return (
    <Card className="border-none bg-card p-6 shadow-xl">
      <CardHeader className="flex flex-row items-center gap-x-3.5 p-0 pb-6">
        <div className="rounded-lg border border-border p-2 text-[#D84242]">
          <PencilRuler className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl font-bold text-card-foreground">
          Recent Exam
        </CardTitle>
      </CardHeader>
      <CardContent className="flex min-h-[160px] items-center justify-center rounded-xl border border-border bg-muted/40 p-0 text-center text-muted-foreground">
        {exams.length > 0 ? (
          <div>{/* Render exam list if you have exams */}</div>
        ) : (
          <p>No recent exams taken.</p>
        )}
      </CardContent>
    </Card>
  );
}