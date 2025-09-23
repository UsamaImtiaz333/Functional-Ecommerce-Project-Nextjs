"use client";
import { Button } from "../ui/button";
import CountdownTimer from "./CountdownTimer";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

interface ProductsRowProps {
  title?: string;
  showCountdown?: boolean;
  showViewAll?: boolean;
  children: React.ReactNode;
}

export default function ProductsRow({
  title,
  showCountdown = false,
  showViewAll = true,
  children,
}: ProductsRowProps) {
  return (
    <div>
      {title && (
        <div className="flex flex-row gap-4 items-center mt-4">
          <div className="bg-[#DB4444] h-12 w-5 rounded-sm"></div>
          <p className="text-[#DB4444] text-2xl font-medium">{title}</p>
        </div>
      )}

      <div className="flex flex-row justify-between py-5">
        <div className="flex items-center gap-10 sm:gap-20">
          {title && <h1 className="text-2xl sm:text-3xl font-bold tracking-widest">{title}</h1>}
          {showCountdown && <CountdownTimer />}
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-gray-200 rounded-full p-1 hover:bg-gray-300">
            <IoMdArrowRoundBack size={30} />
          </button>
          <button className="bg-gray-200 rounded-full p-1 hover:bg-gray-300">
            <IoMdArrowRoundForward size={30} />
          </button>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent snap-x snap-mandatory">
        {children}
      </div>

      {showViewAll && (
        <div className="flex justify-center my-6">
          <Button className="bg-red-700 text-sm py-6 px-10 rounded-md">View All Product</Button>
        </div>
      )}
    </div>
  );
}
