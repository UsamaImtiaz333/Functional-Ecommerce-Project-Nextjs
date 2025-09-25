import React from "react";
import { Button } from "./ui/button";
import CountdownTimer from "./common/CountdownTimer";

function CategoryBanner() {
  return (
    <div className="py-8">
      <div className="relative">
        {/* Image */}
        <img
          src="/Banner.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />

        {/* Text Content (right side inside image) */}
        <div className="absolute top-1/2 left-20 -translate-y-1/2  max-w-sm">
          <h1 className="text-lg font-bold mb-4 text-[#00FF66]">Categories</h1>
          <p className="text-5xl mb-2 text-white">Enhance Your Music Experience</p>
          <p className="mb-4 text-white">
            <CountdownTimer />
          </p>
          <Button className="bg-[#00FF66] hover:bg-blue-700 text-white px-10  rounded-sm my-2">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CategoryBanner;
