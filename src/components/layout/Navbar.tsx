"use client";
import { useState } from "react";
import { PiShoppingCartThin } from "react-icons/pi";
import { TfiHeart } from "react-icons/tfi";
import { FiSearch } from "react-icons/fi";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Burger from "@/icons/Burger";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      {/* Logo / Brand */}
      <Link
        href="/"
        className="
    font-bold
    text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
  "
      >
        Exclusive
      </Link>

      {/* Desktop Menu (centered links) */}
      <div className="hidden sm:flex flex-1 items-center justify-center gap-8">
        <Link href="/" className="hover:text-[#DB4444] transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-[#DB4444] transition">
          About
        </Link>
        <Link href="/contact" className="hover:text-[#DB4444] transition">
          Contact
        </Link>
        <Link href="/signup" className="hover:text-[#DB4444] transition">
          Sign Up
        </Link>
      </div>

      {/* Right side icons */}
      <div className="hidden sm:flex items-center gap-6">
        {/* Search Box with icon inside */}
        <div className="hidden lg:flex items-center relative">
          <Input
            type="text"
            placeholder="What are you looking for?"
            className="w-64 pl-4 py-2 bg-gray-100 border border-gray-300 placeholder-gray-300 placeholder:font-medium"
          />
          <FiSearch
            size={20}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>

        {/* Wishlist */}
        <div className="cursor-pointer">
          <TfiHeart size={24} />
        </div>

        {/* Cart */}
        <div className="relative cursor-pointer">
          <PiShoppingCartThin size={26} />
          <span className="absolute -top-3 -right-2 flex items-center justify-center text-md font-bold text-[#DB4444] w-[18px] h-[18px] rounded-full">
            3
          </span>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <Button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="sm:hidden"
        variant="ghost"
        size="icon"
      >
        <Burger />
      </Button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <a href="#" className="block">
          Home
        </a>
        <a href="#" className="block">
          About
        </a>
        <a href="#" className="block">
          Contact
        </a>
        <a href="#" className="block">
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
