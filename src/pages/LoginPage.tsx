"use client";
import AuthWrapper from "@/components/common/Auth/AuthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <AuthWrapper title="Log in to Exclusive" subtitle="Enter your details below">
      <form className="space-y-6 sm:space-y-8">
        {/* Email / Phone */}
        <Input
          type="email"
          placeholder="Email or Phone Number"
          className="w-full px-2 py-3 
                     border-2 border-r-0 border-l-0 border-t-0 
                     shadow-none rounded-none 
                     placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg 
                     focus:outline-none"
        />

        {/* Password */}
        <Input
          type="password"
          placeholder="Password"
          className="w-full px-2 py-3 
                     border-2 border-r-0 border-l-0 border-t-0 
                     shadow-none rounded-none 
                     placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg 
                     focus:outline-none"
        />

        {/* Buttons */}
        <div className="space-y-4">
          <Button
            type="submit"
            className="w-full bg-[#DB4444] text-white 
                       py-2 sm:py-3 md:py-4 lg:py-5 
                       text-xs sm:text-sm md:text-base lg:text-lg 
                       hover:bg-red-600 break-words text-center"
          >
            Login
          </Button>
          <Button
            type="button"
            className="w-full border border-gray-400 bg-transparent text-black 
                       py-2 sm:py-3 md:py-4 lg:py-5 
                       text-xs sm:text-sm md:text-base lg:text-lg 
                       break-words text-center"
          >
            Login with Google
          </Button>
        </div>
      </form>

      {/* Footer */}
      <p className="text-xs sm:text-sm md:text-base text-center">
        Don’t have an account?{" "}
        <Link href="/signup" className="text-[#DB4444] font-medium hover:underline">
          Sign Up
        </Link>
      </p>
    </AuthWrapper>
  );
};

export default LoginPage;
