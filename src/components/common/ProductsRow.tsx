"use client";
import { Button } from "../ui/button";
import CountdownTimer from "./CountdownTimer";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { useRef } from "react";

interface ProductsRowProps {
  title?: string;
  heading?: string;
  showCountdown?: boolean;
  children: React.ReactNode;
  showViewAll?: boolean; // 👈 bottom center button
  rightControl?: "arrows" | "viewAll" | "none"; // 👈 heading ke right side controls
}

export default function ProductsRow({
  title,
  heading,
  showCountdown = false,
  children,
  showViewAll = false,
  rightControl = "arrows", // default arrows
}: ProductsRowProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (distance: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Title */}
      {title && (
        <div className="flex flex-row gap-4 items-center mt-4">
          <div className="bg-[#DB4444] h-12 w-5 rounded-sm"></div>
          <p className="text-[#DB4444] text-2xl font-medium">{title}</p>
        </div>
      )}

      {/* Heading + Controls */}
      <div className="flex flex-row justify-between items-center py-5">
        <div className="flex items-center gap-10 sm:gap-20">
          {heading && (
            <h1 className="text-2xl sm:text-3xl font-bold tracking-widest">
              {heading}
            </h1>
          )}
          {showCountdown && <CountdownTimer />}
        </div>

        {/* Right Controls */}
        {rightControl === "arrows" && (
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollBy(-320)}
              aria-label="previous"
              className="bg-gray-200 rounded-full p-1 hover:bg-gray-300 shadow"
            >
              <IoMdArrowRoundBack size={30} />
            </button>
            <button
              onClick={() => scrollBy(320)}
              aria-label="next"
              className="bg-gray-200 rounded-full p-1 hover:bg-gray-300 shadow"
            >
              <IoMdArrowRoundForward size={30} />
            </button>
          </div>
        )}

        {rightControl === "viewAll" && (
          <Button className="bg-[#DB4444] text-sm py-6 px-10 rounded-sm">
            View All
          </Button>
        )}
      </div>

      {/* Scrollable Row (mouse scroll disabled, only arrows work) */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden snap-x snap-mandatory scroll-smooth py-2"
      >
        {children}
      </div>

      {/* Bottom center View All */}
      {showViewAll && (
        <div className="flex justify-center my-6">
          <Button className="bg-[#DB4444] text-sm py-6 px-10 rounded-md">
            View All Product
          </Button>
        </div>
      )}
    </div>
  );
}
