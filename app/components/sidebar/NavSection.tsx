// @/components/sidebar/NavSection.tsx

interface NavSectionProps {
  title: string;
  children: React.ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <nav className="flex flex-col gap-y-1">
      <h3 className="mb-2.5 text-xs font-bold uppercase tracking-wider text-sidebar-muted-foreground">
        {title}
      </h3>
      {children}
    </nav>
  );
}