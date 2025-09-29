"use client";
import React, { ReactNode } from "react";

interface AuthWrapperProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side - Image (Hidden on mobile) */}
      <div className="hidden md:flex w-1/2 bg-gray-200">
        <img
          src="/SideImage.jpg"
          alt="Auth Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Content */}
      <div className="flex w-full md:w-1/2 items-center justify-center px-4 sm:px-6 lg:px-12 py-8">
        <div className="w-full max-w-md space-y-6">
          {title && (
            <h1
              className="
    font-bold
    text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
    text-center md:text-left
  "
            >
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-gray-500 text-sm sm:text-base text-center md:text-left">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
