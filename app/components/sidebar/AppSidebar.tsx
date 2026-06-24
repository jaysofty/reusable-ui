"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { LogOut, NotebookPen, Menu } from "lucide-react"; 
import { mainNav, PREFERENCES_NAV, siteConfig } from "@/config/site-config";
import { NavItem } from "./NavItem";
import { NavSection } from "./NavSection";
import { LogoutButton } from "@/components/ui/logout-button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const PreferenceSwitch = dynamic(
  () => import("./PreferenceSwitch").then((mod) => mod.PreferenceSwitch),
  { ssr: false }
);

// Extract the content so it can be reused in Desktop and Mobile views
const SidebarContent = () => (
  <div className="flex h-full w-full flex-col border-r border-border bg-sidebar px-4 py-8 text-sidebar-foreground">
    <div className="flex flex-col gap-y-12">
      <div className="flex items-center gap-x-2.5">
        <Image src={siteConfig.logoUrl} alt="Logo" width={120} height={40} className="h-10 w-auto" />
      </div>

      {mainNav.map((section) => (
        <NavSection key={section.title} title={section.title}>
          {section.items.map((item) => <NavItem key={item.href} item={item} />)}
        </NavSection>
      ))}
    </div>

    <div className="mt-auto flex flex-col gap-y-12">
      <NavSection title={PREFERENCES_NAV.title}>
        <PreferenceSwitch title="Preference" icon={NotebookPen} /> 
        {PREFERENCES_NAV.items
          .filter((item) => item.title !== "Log out")
          .map((item) => <NavItem key={item.href} item={item} />)}
        <LogoutButton onLogout={async () => { window.location.href = "/api/auth/logout"; }} icon={LogOut} />
      </NavSection>
    </div>
  </div>
);

export function AppSidebar() {
  return (
    <>
      {/* DESKTOP: Always visible, hidden on mobile */}
      <aside className="hidden md:flex h-screen w-64 flex-col">
        <SidebarContent />
      </aside>

      {/* MOBILE: Visible only on mobile, toggleable drawer */}
      <div className="md:hidden p-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}