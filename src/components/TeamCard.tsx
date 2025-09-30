import React from "react";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function TeamCard() {
  return (
    <section className="w-full px-6 md:px-12 pt-12 md:pt-20 bg-white">

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Member 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full h-[350px] bg-gray-100 rounded-md overflow-hidden">
            <Image
              src="/persone1.png"
              alt="Tom Cruise"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="mt-4 text-xl font-bold text-gray-900">Tom Cruise</h3>
          <p className="text-gray-600 text-sm">Founder & Chairman</p>
          <div className="flex items-center justify-center gap-4 mt-3 text-gray-700">
            <FaTwitter className="cursor-pointer hover:text-red-500" />
            <FaInstagram className="cursor-pointer hover:text-red-500" />
            <FaLinkedin className="cursor-pointer hover:text-red-500" />
          </div>
        </div>

        {/* Member 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full h-[350px] bg-gray-100 rounded-md overflow-hidden">
            <Image
              src="/person2.png"
              alt="Emma Watson"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="mt-4 text-xl font-bold text-gray-900">Emma Watson</h3>
          <p className="text-gray-600 text-sm">Managing Director</p>
          <div className="flex items-center justify-center gap-4 mt-3 text-gray-700">
            <FaTwitter className="cursor-pointer hover:text-red-500" />
            <FaInstagram className="cursor-pointer hover:text-red-500" />
            <FaLinkedin className="cursor-pointer hover:text-red-500" />
          </div>
        </div>

        {/* Member 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full h-[350px] bg-gray-100 rounded-md overflow-hidden">
            <Image
              src="/person3.png"
              alt="Will Smith"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="mt-4 text-xl font-bold text-gray-900">Will Smith</h3>
          <p className="text-gray-600 text-sm">Product Designer</p>
          <div className="flex items-center justify-center gap-4 mt-3 text-gray-700">
            <FaTwitter className="cursor-pointer hover:text-red-500" />
            <FaInstagram className="cursor-pointer hover:text-red-500" />
            <FaLinkedin className="cursor-pointer hover:text-red-500" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default TeamCard;
