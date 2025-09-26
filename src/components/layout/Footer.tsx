// src/components/layout/Footer.tsx
"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 lg:px-24 xl:px-32 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Exclusive / Subscribe */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Exclusive</h2>
          <p className="mb-2 font-medium">Subscribe</p>
          <p className="mb-4 text-sm text-gray-400">
            Get 10% off your first order
          </p>
          <div className="flex items-center bg-transparent border border-gray-500 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm text-gray-200 bg-transparent outline-none"
            />
            <button className="px-4 py-2 bg-white text-black text-sm font-semibold">
              ➤
            </button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Support</h2>
          <p className="text-sm text-gray-400">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="mt-2 text-sm">exclusive@gmail.com</p>
          <p className="mt-2 text-sm">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Account</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">My Account</Link></li>
            <li><Link href="#">Login / Register</Link></li>
            <li><Link href="#">Cart</Link></li>
            <li><Link href="#">Wishlist</Link></li>
            <li><Link href="#">Shop</Link></li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Quick Link</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms Of Use</Link></li>
            <li><Link href="#">FAQ</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Download App</h2>
          <p className="text-sm text-gray-400 mb-4">
            Save $3 with App New User Only
          </p>
          <div className="flex gap-3 mb-4">
            {/* QR Code */}
            <div className="w-20 h-20 bg-gray-700 flex items-center justify-center">
              QR
            </div>
            <div className="flex flex-col gap-2">
              <img
                src="/google-play.png"
                alt="Google Play"
                className="w-28"
              />
              <img
                src="/app-store.png"
                alt="App Store"
                className="w-28"
              />
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-lg">
            <Link href="#"><FaFacebookF /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaInstagram /></Link>
            <Link href="#"><FaLinkedinIn /></Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-6">
        © Copyright Rimel 2022. All right reserved
      </p>
    </footer>
  );
}
