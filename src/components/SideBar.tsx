import React from "react";
import { ChevronRight } from "lucide-react"; // sirf arrow icon ke liye

function SideBar() {
  const items = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <aside className="w-64 bg-white">
      <ul className="flex flex-col">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center mt-1 justify-between px-3 py-2 cursor-pointer text-gray-700 hover:text-black hover:bg-gray-50 transition"
          >
            <span>{item}</span>
            {/* 👇 Sirf pehle 2 items par arrow */}
            {index < 2 && <ChevronRight className="w-4 h-4 text-gray-400" />}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;
