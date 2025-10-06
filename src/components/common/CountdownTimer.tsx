"use client";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  // 🎯 Set your target date here (future date)
  const targetDate = new Date("2025-12-31T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 mt-4 text-center">
      {/* Days */}
      <div className="flex flex-col items-center bg-gray-50 p-3 rounded-xl shadow-sm w-20">
        <span className="text-sm text-gray-600 font-medium">Days</span>
        <span className="text-2xl font-bold text-black">
          {String(timeLeft.days).padStart(2, "0")}
        </span>
      </div>

      <span className="text-[#DB4444] text-2xl font-bold">:</span>

      {/* Hours */}
      <div className="flex flex-col items-center bg-gray-50 p-3 rounded-xl shadow-sm w-20">
        <span className="text-sm text-gray-600 font-medium">Hours</span>
        <span className="text-2xl font-bold text-black">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
      </div>

      <span className="text-[#DB4444] text-2xl font-bold">:</span>

      {/* Minutes */}
      <div className="flex flex-col items-center bg-gray-50 p-3 rounded-xl shadow-sm w-20">
        <span className="text-sm text-gray-600 font-medium">Minutes</span>
        <span className="text-2xl font-bold text-black">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
      </div>

      <span className="text-[#DB4444] text-2xl font-bold">:</span>

      {/* Seconds */}
      <div className="flex flex-col items-center bg-gray-50 p-3 rounded-xl shadow-sm w-20">
        <span className="text-sm text-gray-600 font-medium">Seconds</span>
        <span className="text-2xl font-bold text-black">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
