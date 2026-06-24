import { AppSidebar } from "@/app/components/sidebar/AppSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden">
      <AppSidebar />

      <main className="flex-1 h-full overflow-y-auto">
        {children}
      </main>
    </div>
  );
}