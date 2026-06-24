// @/components/dashboard/SSECard.tsx

import { Card, CardContent } from "@/components/ui/card";
import { MessageSquareText } from "lucide-react"; // Alternative icon

export function SSECard() {
  return (
    <Card className="relative overflow-hidden rounded-2xl border-none bg-gradient-to-br from-[#2D50F1] to-[#3B8EF2] p-8 text-white shadow-xl">
      <CardContent className="p-0">
        <h3 className="text-2xl font-semibold">Talk to your SSE</h3>
        <p className="mt-2 text-base text-white/80">
          Your SSE is here to help you with any questions or issues you may have.
        </p>
      </CardContent>
      {/* Optional icon or graphic */}
      <div className="absolute -bottom-8 -right-8 flex h-40 w-40 items-center justify-center rounded-full bg-white/10 p-12 text-white/30">
        <MessageSquareText className="h-full w-full" />
      </div>
    </Card>
  );
}