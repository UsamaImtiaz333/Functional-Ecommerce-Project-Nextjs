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
    <div className="w-full flex-1 flex justify-center items-start py-8 overflow-hidden relative">
      {/* Slider Container */}
      <div className="w-full h-[400px] relative">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out w-full h-full"
        >
          {slides.map((src, i) => (
            <div
              key={i}
              className="w-full h-full flex-shrink-0 flex justify-center items-center bg-gray-100"
            >
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentSlide === i ? "bg-[#DB4444]" : "bg-black/20"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
