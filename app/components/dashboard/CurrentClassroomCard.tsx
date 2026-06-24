// @/components/dashboard/CurrentClassroomCard.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Users, User, ArrowRightLeft, UserCheck, Badge } from "lucide-react";

export function CurrentClassroomCard() {
  const currentClass = {
    name: "Class A",
    course: "Cloud Computing",
    tutor: "temiloluwa@techcrush.pro",
    status: "ASSIGNED DISCUSSION LEAD",
    whatsapp: "https://chat.whatsapp.com/YOUR_GROUP_INVITE_CODE",
  };

  return (
    <Card className="border-none bg-card p-6 shadow-xl">
      <CardHeader className="flex flex-row items-center gap-x-3.5 p-0 pb-6">
        <div className="rounded-lg border border-border p-2 text-[#D84242]">
          <Users className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl font-bold text-card-foreground">
          Your Classrooms
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="rounded-xl border border-[#F43F3F]/30 bg-muted/40 p-6">
          <div className="flex items-start gap-x-4">
            <div className="rounded-lg bg-[#D84242] p-2 text-white">
              <User className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{currentClass.name}</h3>
              <p className="text-sm text-muted-foreground">
                {currentClass.course}
              </p>
            </div>
          </div>
          <Separator className="my-6 bg-border/50" />
          <div className="flex flex-col gap-y-3.5 text-sm text-muted-foreground/80">
            <div className="flex items-center gap-x-2">
              <UserCheck className="h-4 w-4" />
              Your Assigned Tutor
            </div>
            <div className="flex gap-x-4">
              <Input
                value={currentClass.tutor}
                readOnly
                className="h-12 w-80 rounded-lg border-[#F43F3F]/30 bg-muted/20 text-[#D84242]"
              />

              <a
                href="https://chat.whatsapp.com/YOUR_GROUP_INVITE_CODE"
                target="_blank"
                rel="noopener noreferrer"
                className="grow"
              >
                <Button
                  size="lg"
                  className="h-12 w-full gap-x-2.5 rounded-lg border border-[#F43F3F] bg-[#F43F3F]/10 text-base font-semibold text-[#F43F3F] hover:bg-[#F43F3F]/20"
                >
                  Join Group
                </Button>
              </a>
            </div>
            <Badge className="absolute right-2 top-2 rounded-sm border-none bg-[#F43F3F]/10 px-1.5 py-0.5 text-[#F43F3F]">
              {currentClass.status}
            </Badge>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href={currentClass.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[400px]"
          >
            <Button
              size="lg"
              className="h-12 w-full gap-x-2.5 rounded-lg border border-border bg-card text-base font-semibold text-foreground hover:bg-muted"
            >
              <Users className="h-6 w-6" />
              Join Class Group
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
