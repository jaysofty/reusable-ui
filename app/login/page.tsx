"use client";

import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { LoadingButton } from "@/components/ui/loading-button";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin() {
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      document.cookie = "auth=true; path=/";

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
    } catch (error) {
      // 3. Trigger Error Toast if something goes wrong
      toast.error("Login Failed", {
        description: "Please check your credentials and try again.",
      });
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-rose-100
      to-rose-300
      px-4
    "
    >
      <div
        className="
        w-full
        max-w-md
        rounded-2xl
        bg-white
        p-10
        shadow-xl
      "
      >
        {/* LOGO */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png"
            alt="TechCrush"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>

        <h1
          className="
          text-center
          text-2xl
          font-bold
          text-slate-900
        "
        >
          Welcome!
        </h1>

        <p
          className="
          mt-3
          text-center
          text-sm
          text-slate-500
        "
        >
          Log in to TechCrush and explore your valid tech dreams.
        </p>

        {/* EMAIL */}

        <div className="mt-8">
          <label
            className="
            text-sm
            font-semibold
            text-slate-800
          "
          >
            Email address
          </label>

          <input
            type="email"
            placeholder="example@gmail.com"
            className="
              mt-2
              w-full
              rounded-lg
              bg-slate-300
              px-4
              py-3
              text-sm
              outline-none
              focus:ring-2
              focus:ring-rose-500
            "
          />
        </div>

        {/* PASSWORD */}

        <div className="mt-5">
          <label
            className="
            text-sm
            font-semibold
            text-slate-800
          "
          >
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••••"
              className="
                mt-2
                w-full
                rounded-lg
                bg-slate-300
                px-4
                py-3
                text-sm
                outline-none
                focus:ring-2
                focus:ring-rose-500
              "
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
                absolute
                right-4
                top-5
                text-slate-600
              "
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* FORGOT */}

        <div className="mt-5 text-right">
          <button
            className="
              text-sm
              font-medium
              text-rose-500
            "
          >
            Forgot Password?
          </button>
        </div>

        {/* BUTTON */}

        {/* <button
          onClick={handleLogin}
          className="
            mt-10
            w-full
            rounded-lg
            bg-rose-500
            py-3
            text-sm
            font-semibold
            text-white
            hover:bg-rose-600
            transition
          "
        >

          Sign in

        </button> */}
        <LoadingButton
          isLoading={isLoading}
          onClick={handleLogin}
          variant="default" // Now type-safe!
          size="lg" // Now type-safe!
          className="w-full bg-rose-500"
        >
          Sign in
        </LoadingButton>
      </div>
    </main>
  );
}
