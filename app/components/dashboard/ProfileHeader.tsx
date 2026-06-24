// @/components/dashboard/ProfileHeader.tsx


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserCheck } from "lucide-react";
import { IconBadge } from "@/components/ui/icon-badge";

export function ProfileHeader() {
  const user = {
    firstName: "Adekunle",
    id: "CLC/2026/TC-7/0072",
    profilePic: "/path/to/profile.jpg", // Replace with actual path or API call
  };

  return (
    <div className="flex items-start gap-x-4">
      <Avatar className="h-16 w-16">
        <AvatarImage src={user.profilePic} alt={user.firstName} />
        <AvatarFallback>AD</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-y-1">
        <div className="flex items-center gap-x-3">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Hello, {user.firstName}! 👋
          </h1>
          <IconBadge
            icon={UserCheck}
            label={user.id}
            className="border-[#D84242] bg-[#D84242]/10 px-2.5 py-0.5 text-[#D84242]"
            iconClassName="h-3.5 w-3.5"
          />
        </div>
        <p className="text-lg text-muted-foreground">
          Welcome back to your learning dashboard.
        </p>
      </div>
    </div>
  );
}