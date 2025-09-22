import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function AnnouncementBar() {
  return (
    <aside
      className="relative flex items-center bg-black text-white px-4 sm:px-8 py-2"
      aria-label="Announcement Bar"
    >
      {/* Centered Text + CTA */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center">
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">
         Summer Sale For All Swim Suits And Free Express Delivery -
          <strong>50% OFF!</strong>
        </p>
        <a
          href="/sale"
          className="font-bold text-xs sm:text-sm md:text-base underline underline-offset-2 hover:text-gray-300"
        >
          Shop Now
        </a>
      </div>

      {/* Right Section: Language Selector */}
      <div className="ml-auto">
        <Select defaultValue="en">
          <SelectTrigger
            className="w-[120px] sm:w-[150px] md:w-[180px] 
               border-0 shadow-none bg-transparent 
               py-1 px-2 
               flex gap-x-1 justify-center font-bold text-xs sm:text-sm md:text-base text-white
               focus:outline-none focus:ring-0 focus:ring-offset-0
               data-[state=open]:outline-none data-[state=open]:ring-0 data-[state=open]:border-0
               focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <SelectValue placeholder="English" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="ur">Urdu</SelectItem>
            <SelectItem value="ar">Arabic</SelectItem>
            <SelectItem value="fr">French</SelectItem>
            <SelectItem value="de">German</SelectItem>
            <SelectItem value="es">Spanish</SelectItem>
            <SelectItem value="zh">Chinese</SelectItem>
            <SelectItem value="ja">Japanese</SelectItem>
            <SelectItem value="hi">Hindi</SelectItem>
            <SelectItem value="tr">Turkish</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </aside>
  );
}

export default AnnouncementBar;
