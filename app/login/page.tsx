"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { LoadingButton } from "@/components/ui/loading-button";
import { toast } from "sonner";
import { setAuthCookie } from "@/app/actions/auth";

// 1. Define the validation schema
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters long."),
});
type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

async function handleLogin(data: LoginFormData) {
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      await setAuthCookie();

      // 2. Trigger the Success Toast
      toast.success("Login Successful", {
        // description: "Welcome back to TechCrush!",
        style: {
          background: "#f0fdf4", // A very light green background (optional, looks great)
          border: "1px solid #16a34a", // Matching green border
          color: "#16a34a", // This makes BOTH the title and description green
        },
      });

      router.push("/dashboard");
      router.refresh()
      console.log("Email:", data.email);
    } catch (error) {
      // 3. Trigger Error Toast if something goes wrong
      toast.error("Login Failed", {
        description: "Please check your credentials and try again.",
        style: {
    background: "#fef2f2",      // Very light red/rose background
    border: "1px solid #e11d48", // Rose-600 border
    color: "#e11d48",           // Rose-600 text
  },
      });
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

return (
  <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 to-rose-300 px-4">
    {/* The form acts as the card container itself */}
    <form 
      onSubmit={handleSubmit(handleLogin)} 
      className="w-full max-w-md rounded-2xl bg-white p-10 shadow-xl flex flex-col"
    >
      {/* LOGO */}
      <div className="flex justify-center mb-8">
        <Image src="/logo.png" alt="TechCrush" width={120} height={40} className="object-contain" />
      </div>

      <h1 className="text-center text-2xl font-bold text-slate-900">Welcome!</h1>
      <p className="mt-3 text-center text-sm text-slate-500">
        Log in to TechCrush and explore your valid tech dreams.
      </p>

      {/* EMAIL */}
      <div className="mt-8">
        <label className="text-sm font-semibold text-slate-800">Email address</label>
        <input
          {...register("email")}
          type="email"
          placeholder="example@gmail.com"
          className="mt-2 w-full rounded-lg bg-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-rose-500"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      {/* PASSWORD */}
      <div className="mt-5">
        <label className="text-sm font-semibold text-slate-800">Password</label>
        <div className="relative">
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="••••••••••••"
            className="mt-2 w-full rounded-lg bg-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-rose-500"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-5 text-slate-600">
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
      </div>

      {/* FORGOT PASSWORD */}
      <div className="mt-5 text-right">
        <button type="button" className="text-sm font-medium text-rose-500">
          Forgot Password?
        </button>
      </div>

      {/* SIGN IN BUTTON */}
      <LoadingButton
        isLoading={isLoading}
        type="submit"
        size="lg"
        className="mt-10 w-full bg-rose-500"
      >
        Sign in
      </LoadingButton>
    </form>
  </main>
);
}
