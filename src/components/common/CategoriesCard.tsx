"use client";
import Cemra from "@/icons/Cemra";
import Computer from "@/icons/Computer";
import Game from "@/icons/Game";
import HeadPhone from "@/icons/HeadPhone";
import Phone from "@/icons/Phone";
import SmartWatch from "@/icons/SmartWatch";
import { Camera } from "lucide-react";

export default function CategoriesCard() {
  const categories = [
    { id: 1, icon: <Phone />, title: "Phones" },
    { id: 2, icon: <Computer />, title: "Computers" },
    { id: 3, icon: <SmartWatch />, title: "SmartWatches" },
    { id: 4, icon: <Camera size={48} />, title: "Camera" },
    { id: 5, icon: <HeadPhone />, title: "HeadPhones" },
    { id: 6, icon: <Game />, title: "Gaming" },
  ];

  return (
    <>
      {categories.map((cat) => (
        <article
          key={cat.id}
          className="snap-start flex-shrink-0 w-54 py-6 group cursor-pointer mx-auto"
        >
          {/* Full card (icon + title inside) */}
          <div className="relative border border-gray-200 rounded-md bg-gray-50 flex flex-col items-center justify-center h-40 hover:bg-[#DB4444] transition">
            {/* Icon */}
            <div className="text-4xl text-gray-800 group-hover:text-white">
              {cat.icon}
            </div>
            {/* Title */}
            <h3 className="mt-3 text-gray-800 font-medium text-sm group-hover:text-white">
              {cat.title}
            </h3>
          </div>
        </article>
      ))}
    </>
  );
}
