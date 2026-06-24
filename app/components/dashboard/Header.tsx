// @/components/dashboard/Header.tsx

import { ProfileHeader } from "./ProfileHeader";
import { TopNavigation } from "./TopNavigation";

export function Header() {
  return (
    <header className="flex flex-col gap-y-8 py-8">
      <div className="flex items-start justify-between">
        <ProfileHeader />
        <TopNavigation />
      </div>
    </header>
  );
}