import { apiFetch } from "@/lib/api";
import { Course } from "../types";

export const getCourses = async () => {
  return apiFetch<Course[]>("/api/courses");
};