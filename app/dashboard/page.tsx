
import { Header } from "@/app/components/dashboard/Header";
import { CourseEnrollmentCard } from "@/app/components/dashboard/CourseEnrollmentCard";
import { RecentExamsCard } from "@/app/components/dashboard/RecentExamsCard";
import { QuizAttemptList } from "@/app/components/dashboard/QuizAttemptList";
import AttendanceWidget from "@/app/components/dashboard/AttendanceWidget";
import { SSECard } from "@/app/components/dashboard/SSECard";
import { CurrentClassroomCard } from "@/app/components/dashboard/CurrentClassroomCard";
import { BookMarked, ListChecks } from "lucide-react";

export default function DashboardPage() {
  return (
    
    <div className="mx-auto w-full max-w-7xl px-8 pb-12">
      
      <Header />

      <div className="grid grid-cols-1 gap-8 pt-6 lg:grid-cols-3">
        <div className="col-span-2 flex flex-col gap-y-12">
          <Section title="Your Learning Path" icon={BookMarked}>
            <CourseEnrollmentCard />
          </Section>

          <Section title="Recent Exam" icon={ListChecks}>
            <RecentExamsCard />
          </Section>

          <Section title="Recent Quiz Attempts" icon={ListChecks}>
            <QuizAttemptList />
          </Section>
        </div>

        <div className="col-span-1 flex flex-col gap-y-12">
          <CurrentClassroomCard />
          <AttendanceWidget />
          <SSECard />
        </div>
      </div>
    </div>
  );
}

// SECTION COMPONENT
function Section({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-center gap-x-3 pb-8">
        <Icon className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
      </div>

      {children}
    </section>
  );
}