"use client";
import AuthWrapper from "@/components/common/Auth/AuthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const SignupPage = () => {
  return (
    <AuthWrapper title="Create an Account" subtitle="Enter your details below">
      <form className="space-y-6 sm:space-y-8">
        {/* Name Input */}
        <Input
          type="text"
          placeholder="Name"
          className="w-full px-2 py-3 border-2 border-r-0 border-l-0 border-t-0 shadow-none rounded-none 
                     placeholder:text-sm sm:placeholder:text-base md:placeholder:text-lg lg:placeholder:text-xl 
                     focus:outline-none"
        />

        {/* Email Input */}
        <Input
          type="email"
          placeholder="Email or Phone Number"
          className="w-full px-2 py-3 border-2 border-r-0 border-l-0 border-t-0 shadow-none rounded-none 
                     placeholder:text-sm sm:placeholder:text-base md:placeholder:text-lg lg:placeholder:text-xl 
                     focus:outline-none"
        />

        {/* Password Input */}
        <Input
          type="password"
          placeholder="Password"
          className="w-full px-2 py-3 border-2 border-r-0 border-l-0 border-t-0 shadow-none rounded-none 
                     placeholder:text-sm sm:placeholder:text-base md:placeholder:text-lg lg:placeholder:text-xl 
                     focus:outline-none"
        />

        {/* Buttons */}
        <div className="space-y-4">
          {/* Create Account Button */}
          <Button
            type="submit"
            className="w-full bg-[#DB4444] text-white 
                       py-3 sm:py-4 lg:py-5 
                       text-xs sm:text-sm md:text-base lg:text-lg 
                       hover:bg-red-600 
                       whitespace-normal break-words text-center leading-snug"
          >
            Create Account
          </Button>

          {/* Google Signup Button */}
          <Button
            type="button"
            className="w-full border border-gray-400 bg-transparent text-black 
                       py-3 sm:py-4 lg:py-5 
                       text-xs sm:text-sm md:text-base lg:text-lg 
                       whitespace-normal break-words text-center leading-snug"
          >
            Sign Up with Google
          </Button>
        </div>
      </form>

      {/* Footer Text */}
      <p className="text-xs sm:text-sm md:text-base text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-[#DB4444] font-medium hover:underline">
          Login
        </Link>
      </p>
    </AuthWrapper>
  );
};

export default SignupPage;
