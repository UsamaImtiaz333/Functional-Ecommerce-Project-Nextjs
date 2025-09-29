"use client";
import React from "react";
import Image from "next/image"; // ✅ Next.js Image
import { Button } from "./ui/button";
import CountdownTimer from "./common/CountdownTimer";

function CategoryBanner() {
  return (
    <div className="py-8">
      <div className="relative">
        {/* ✅ Image (Next.js Image instead of img) */}
        <Image
          src="/Banner.jpg"
          alt="Banner"
          width={1920}   // approximate full width
          height={1080}  // approximate height
          className="w-full h-full object-cover"
          priority      // ✅ fast loading
        />

        {/* ✅ Text Content */}
        <div className="absolute top-1/2 left-20 -translate-y-1/2 max-w-sm">
          <h1 className="text-lg font-bold mb-4 text-[#00FF66]">Categories</h1>
          <p className="text-5xl mb-2 text-white">Enhance Your Music Experience</p>
          
          {/* ✅ Fixed: div instead of p */}
          <div className="mb-4 text-white">
            <CountdownTimer />
          </div>

          <Button className="bg-[#00FF66] hover:bg-blue-700 text-white px-10 rounded-sm my-2">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CategoryBanner;
