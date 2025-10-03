"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import CountdownTimer from "./common/CountdownTimer";

function CategoryBanner() {
  return (
    <div className="py-6 sm:py-8 md:py-12">
      <div className="relative">
        {/* ✅ Image */}
        <Image
          src="/Banner.jpg"
          alt="Banner"
          width={1920}
          height={1080}
          className="
            w-full 
            h-[220px] sm:h-[300px] md:h-[500px] lg:h-[600px] xl:h-[700px]
            object-cover
          "
          priority
        />

        {/* ✅ Text Content */}
        <div
          className="
            absolute 
            top-1/2 
            left-4 sm:left-8 md:left-20 lg:left-28 
            -translate-y-1/2 
            max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-lg
          "
        >
          {/* Small Title */}
          <h1
            className="
              text-xs sm:text-sm md:text-lg lg:text-xl 
              font-bold 
              mb-2 md:mb-4 
              text-[#00FF66]
            "
          >
            Categories
          </h1>

          {/* Main Heading */}
          <p
            className="
              text-lg sm:text-2xl md:text-5xl lg:text-6xl 
              font-semibold 
              mb-2 
              text-white 
              leading-snug
            "
          >
            Enhance Your Music Experience
          </p>

          {/* Countdown */}
          <div
            className="
              mb-3 md:mb-4 
              text-xs sm:text-sm md:text-base 
              text-white
            "
          >
            <CountdownTimer />
          </div>

          {/* Button */}
          <Button
            className="
              bg-[#00FF66] hover:bg-green-600 text-white 
              px-4 sm:px-6 md:px-10 
              py-1 sm:py-2 md:py-3 lg:py-4 
              rounded-sm 
              text-xs sm:text-sm md:text-lg 
              my-1 sm:my-2
            "
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CategoryBanner;
