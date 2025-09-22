"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide1.png",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide2.png",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide3.png",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide4.png",
  "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide5.png",
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Slide change effect
  useEffect(() => {
    const slideWidth = sliderRef.current?.clientWidth || 0;
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${
        currentSlide * slideWidth
      }px)`;
    }
  }, [currentSlide]);

  return (
    <div className="flex flex-col items-center mt-2">
      {/* Slider Container */}
      <div className="w-full max-w-5xl overflow-hidden relative bg-gray-100">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
        >
          {slides.map((src, i) => (
            <div
              key={i}
              className="w-full h-64 md:h-80 lg:h-96 flex items-center justify-center bg-white flex-shrink-0"
            >
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* 👇 Dots andar, bottom-center */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentSlide === i ? "bg-red-700" : "bg-black/20"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
