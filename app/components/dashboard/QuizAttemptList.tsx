// @/components/dashboard/QuizAttemptList.tsx

import { IconBadge } from "@/components/ui/icon-badge";
import { ProgressCircle } from "@/components/ui/PeogressCircle";
import { Layers3, ClipboardList, FileText, ChevronRight } from "lucide-react";

import Link from "next/link";


interface QuizAttempt {
  id: string;
  quizTitle: string;
  course: string;
  attemptDate: string;
  attemptNumber: number;
  scorePercent: number;
  scoreText: string;
  quizLabel: {
    label: string;
    icon: React.ComponentType;
  };
}

export function QuizAttemptList() {
  // Use mock or real data
  const attempts: QuizAttempt[] = [
    {
      id: "qa1",
      quizTitle: "Cloud Computing Quiz 2",
      course: "Cloud Computing",
      attemptDate: "6/6/2026",
      attemptNumber: 1,
      scorePercent: 95,
      scoreText: "19 / 20 pts",
      quizLabel: { label: "Quiz Two", icon: FileText },
    },
    {
      id: "qa2",
      quizTitle: "Cloud Computing Quiz 1",
      course: "Cloud Computing",
      attemptDate: "5/25/2026",
      attemptNumber: 1,
      scorePercent: 70,
      scoreText: "14 / 20 pts",
      quizLabel: { label: "Quiz One", icon: ClipboardList },
    },
  ];

  return (
    <div className="space-y-4">
      {attempts.map((attempt) => (
        <div key={attempt.id} className="flex items-center justify-between rounded-xl border border-border bg-card p-6 shadow-lg">
          <div className="flex items-center gap-x-6">
            <ProgressCircle percent={attempt.scorePercent} size={70} strokeWidth={8} color="#27B459" /> {/* Adjust color as needed */}
            <div>
              <div className="flex items-center gap-x-3.5">
                <h3 className="text-xl font-semibold">{attempt.quizTitle}</h3>
                <IconBadge
                  icon={attempt.quizLabel.icon}
                  label={attempt.quizLabel.label}
                  className="bg-[#D1BAF5]/10 px-2 py-0.5 text-xs text-[#D1BAF5]"
                  iconClassName="h-3.5 w-3.5"
                />
              </div>
              <p className="mt-1 text-base text-muted-foreground">{attempt.course}</p>
              <div className="mt-1 flex gap-x-4 text-xs text-muted-foreground/60">
                <div className="flex gap-x-2 items-center"> <FileText className="h-3.5 w-3.5" /> <span>{attempt.attemptDate}</span> </div>
                <span>•</span>
                <span>Attempt {attempt.attemptNumber}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-8 text-right">
            <div>
              <div className="text-2xl font-semibold tracking-tight text-[#27B459]">
                {attempt.scoreText}
              </div>
              <p className="mt-1 text-sm text-muted-foreground/80">View Details</p>
            </div>
            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-muted-foreground/30 text-muted-foreground/60 hover:bg-muted">
              <ChevronRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      ))}
      <div className="flex justify-end pt-4">
        <Link href="#" className="flex gap-x-2 items-center text-base font-semibold text-[#E57676] hover:text-[#E57676]/80">
          View All Quizzes <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}