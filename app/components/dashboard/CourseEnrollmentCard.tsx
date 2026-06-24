"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookMarked,
  Layers3,
  Users,
  ChevronDown,
  ListChecks,
  FileText,
  ClipboardList,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";


export function CourseEnrollmentCard() {

  const [openCourse, setOpenCourse] = useState(false);

  const [course, setCourse] = useState({
    name: "Cloud Computing",
    cohort: "TechCrush Cohort 7",
    code: "TC-7",
    status: "Active",
  });


  const courses = [
    {
      name: "Cloud Computing",
      cohort: "TechCrush Cohort 7",
      code: "TC-7",
    },
    {
      name: "Frontend Engineering",
      cohort: "TechCrush Cohort 7",
      code: "FE-7",
    },
    {
      name: "DevOps Engineering",
      cohort: "TechCrush Cohort 7",
      code: "DO-7",
    },
  ];


  const actionButtons = [
    { label: "Quizzes", icon: ListChecks },
    { label: "Exams", icon: FileText },
    { label: "Assignments", icon: ClipboardList },
    { label: "Leaderboard", icon: TrendingUp },
  ];


  return (
    <Card className="rounded-2xl border-none bg-card p-6 shadow-xl">

      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 pb-6">
        <div className="flex items-center gap-x-3.5">
          <div className="rounded-lg border border-border p-2 text-[#F28268]">
            <Layers3 className="h-6 w-6" />
          </div>

          <CardTitle className="text-xl font-bold">
            Course Enrollments
          </CardTitle>
        </div>

        <p className="text-sm text-muted-foreground">
          Manage your active courses and assessments
        </p>
      </CardHeader>


      <CardContent className="p-0">


        <div className="flex gap-x-6 rounded-xl border border-border bg-muted/40 p-6">


          <div className="relative flex aspect-video w-36 items-center justify-center rounded-lg border border-dashed border-border">

            <BookMarked className="h-10 w-10" />

            <Badge className="absolute right-2 top-2 bg-red-100 text-red-500">
              {course.status}
            </Badge>

          </div>



          <div className="flex grow flex-col justify-between py-1">


            <div>

              <h3 className="text-2xl font-semibold">
                {course.name}
              </h3>


              <div className="mt-2 flex items-center gap-x-2 text-sm text-muted-foreground">

                <Users className="h-4 w-4" />

                <span>
                  {course.cohort} • {course.code}
                </span>

              </div>

            </div>



            {/* Dropdown wrapper */}
            <div className="relative mt-5">


              <Button
                onClick={() => setOpenCourse(!openCourse)}
                size="lg"
                className="h-10 w-full gap-x-2 rounded-lg border border-[#F43F3F] bg-[#F43F3F]/10 text-[#F43F3F]"
              >

                Change Course

                <ChevronDown className="h-4 w-4" />

              </Button>



              {openCourse && (

                <div className="absolute bottom-full mb-2 w-full overflow-hidden rounded-xl border bg-card shadow-lg z-50">


                  {courses.map((item) => (

                    <button
                      key={item.code}
                      onClick={() => {

                        setCourse({
                          ...item,
                          status: "Active"
                        });

                        setOpenCourse(false);

                      }}

                      className="flex w-full flex-col px-4 py-3 text-left hover:bg-muted"
                    >

                      <span className="font-semibold">
                        {item.name}
                      </span>


                      <span className="text-sm text-muted-foreground">
                        {item.cohort} • {item.code}
                      </span>

                    </button>

                  ))}


                </div>

              )}



            </div>


          </div>


        </div>



        <div className="mt-6 flex flex-wrap gap-4">


          {actionButtons.map((btn) => (

            <Button
              key={btn.label}
              variant="outline"
              className="h-11 grow gap-x-2.5 rounded-lg"
            >

              <btn.icon className="h-5 w-5"/>

              {btn.label}

            </Button>

          ))}


        </div>


      </CardContent>


    </Card>
  );
}