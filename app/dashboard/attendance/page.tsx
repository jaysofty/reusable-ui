"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Clock, Info } from "lucide-react";
import { useRouter } from "next/navigation";

// Mock Data
const attendanceHistory = [
  { session: "Attendance 4 Week 5 Class 2", description: "No description", course: "Cloud Computing", date: "Jun 11, 2026", status: "PRESENT", time: "20:51" },
  { session: "Attendance 3 Week 4 Class 1", description: "No description", course: "Cloud Computing", date: "Jun 02, 2026", status: "PRESENT", time: "20:45" },
  { session: "Attendance 1 Week 3 Class 3", description: "No description", course: "Cloud Computing", date: "May 30, 2026", status: "PRESENT", time: "19:16" },
  { session: "Attendance 1 Week 2 Class 2", description: "Attendance 1", course: "Cloud Computing", date: "May 21, 2026", status: "PRESENT", time: "20:32" },
];

export default function AttendancePage() {
  const router = useRouter();

  return (
    <div className="p-8 space-y-8 bg-background min-h-screen text-foreground">
      {/* Header Section */}
      <div className="space-y-4">
        <Button variant="outline" size="sm" onClick={() => router.back()} className="w-fit gap-2">
          <ArrowLeft className="h-4 w-4" /> Go Back
        </Button>
        <div>
          <h1 className="text-3xl font-bold">My Attendance</h1>
          <p className="text-muted-foreground">View your attendance records and history for all enrolled courses.</p>
        </div>
      </div>

      {/* Open Sessions Card */}
      <Card className="border border-border bg-card">
        <CardHeader>
          <div className="flex items-center gap-2 text-rose-500">
            <Clock className="h-5 w-5" />
            <CardTitle className="text-lg">Open Attendance Sessions</CardTitle>
          </div>
          <CardDescription>Mark your attendance for ongoing classes.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-12 border-t border-dashed border-border mx-6 mb-6">
          <Info className="h-8 w-8 text-muted-foreground mb-3" />
          <p className="text-muted-foreground italic">No open attendance sessions at the moment.</p>
        </CardContent>
      </Card>

      {/* History Table Card */}
      <Card className="border border-border bg-card">
        <CardHeader>
          <div className="flex items-center gap-2 text-emerald-500">
            <Clock className="h-5 w-5" />
            <CardTitle className="text-lg">Attendance History</CardTitle>
          </div>
          <CardDescription>Track your past class attendance records.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-border">
                <TableHead>SESSION</TableHead>
                <TableHead>COURSE</TableHead>
                <TableHead>DATE</TableHead>
                <TableHead>STATUS</TableHead>
                <TableHead className="text-right">MARKED AT</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceHistory.map((row, i) => (
                <TableRow key={i} className="border-border">
                  <TableCell>
                    <div className="font-medium">{row.session}</div>
                    <div className="text-xs text-muted-foreground">{row.description}</div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{row.course}</TableCell>
                  <TableCell className="text-muted-foreground">{row.date}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-emerald-500 border-emerald-500/20 bg-emerald-500/10">
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground">{row.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}