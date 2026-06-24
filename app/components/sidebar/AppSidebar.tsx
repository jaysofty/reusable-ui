"use client";

import Image from "next/image";
import dynamic from "next/dynamic"; // 1. Import dynamic from Next.js
import { LogOut, NotebookPen } from "lucide-react"; 
import { mainNav, PREFERENCES_NAV, siteConfig } from "@/config/site-config";
import { NavItem } from "./NavItem";
import { NavSection } from "./NavSection";
import { useRouter } from "next/navigation";
import { LogoutButton } from "@/components/ui/logout-button";

// 2. Dynamically load PreferenceSwitch and disable SSR for it
const PreferenceSwitch = dynamic(
  () => import("./PreferenceSwitch").then((mod) => mod.PreferenceSwitch),
  { ssr: false }
);

export function AppSidebar() {
const router = useRouter();

 const handleLogoutAction = async () => {
    // This logic runs only after the modal confirms the logout
    // Using the API route we created:
    router.push("/api/auth/logout");
  };

  return (
<aside className="flex h-screen w-64 flex-col border-r border-border bg-sidebar px-4 py-8 text-sidebar-foreground">

      <div className="flex flex-col gap-y-12">
        <div className="flex items-center gap-x-2.5">
          <Image
            src={siteConfig.logoUrl} 
            alt={`${siteConfig.name} logo`}
            width={120} 
            height={40} 
            className="h-10 w-auto"
          />
        </div>

        {mainNav.map((section) => (
          <NavSection key={section.title} title={section.title}>
            {section.items.map((item) => (
              <NavItem key={item.href} item={item} />
            ))}
          </NavSection>
        ))}
      </div>

      <div className="mt-auto flex flex-col gap-y-12">
        <NavSection title={PREFERENCES_NAV.title}>
          {/* 3. This will now safely skip rendering during SSR and boot cleanly on the client */}
          <PreferenceSwitch title="Preference" icon={NotebookPen} /> 
         {/* Map only the regular navigation items (exclude logout) */}
          {PREFERENCES_NAV.items
            .filter((item) => item.title !== "Log out")
            .map((item) => (
              <NavItem key={item.href} item={item} />
            ))}
          
          {/* Add the LogoutButton here separately */}
          <LogoutButton onLogout={handleLogoutAction} icon={LogOut} />
        </NavSection>
      </div>
    </aside>
  );
}
