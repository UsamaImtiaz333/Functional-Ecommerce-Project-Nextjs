"use client";
import { useState } from "react";
import Image from "next/image";
import { Heart, Eye } from "lucide-react";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="w-56"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative border border-gray-200 rounded-md bg-gray-50 p-3 flex items-center justify-center">
        {product.discount > 0 && (
          <span className="absolute top-2 left-2 bg-[#DB4444] text-white text-xs px-2 py-1 rounded">
            -{product.discount}%
          </span>
        )}

        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button className="bg-white w-8 h-8 flex items-center justify-center rounded-full shadow hover:bg-gray-100">
            <Heart size={16} className="text-gray-600" />
          </button>
          <button className="bg-white w-8 h-8 flex items-center justify-center rounded-full shadow hover:bg-gray-100">
            <Eye size={16} className="text-gray-600" />
          </button>
        </div>

        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          sizes="(max-width: 768px) 100vw, 200px"
          className="transition-transform duration-300 group-hover:scale-105"
        />

        {hovered && (
          <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2 rounded-b-md">
            Add To Cart
          </button>
        )}
      </div>

      <div className="mt-2 px-1">
        <h3 className="text-gray-800 font-medium text-sm truncate">{product.name}</h3>
        <p className="text-[#DB4444] font-semibold text-sm">
          <data value={product.offerPrice}>${product.offerPrice}</data>
          <del className="text-gray-400 text-xs ml-1">${product.price}</del>
        </p>
        <div className="flex items-center gap-1 mt-1">
          {Array(5)
            .fill("") 
            .map((_, i) =>
              i < product.rating ? (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ) : (
                <span key={i} className="text-gray-300 text-sm">★</span>
              )
            )}
          <span className="text-gray-500 text-xs">({product.reviews})</span>
        </div>
      </div>
    </article>
  );
}
