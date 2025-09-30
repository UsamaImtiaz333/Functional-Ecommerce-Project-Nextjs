import React from "react";
import Image from "next/image";

function AboutPage() {
  return (
    <section className="w-full px-6 md:px-12 py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">
            Our Story
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a wide
            range of tailored marketing, data, and service solutions, Exclusive has
            10,500 sellers and 300 brands, and serves 3 million customers across
            the region.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Exclusive has more than 1 Million products to offer, growing at a very
            fast pace. Exclusive offers a diverse assortment in categories ranging
            from consumer goods to lifestyle.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md h-[400px] md:h-[500px] overflow-hidden">
            <Image
              src="/AboutSideImage.jpg"
              alt="About side image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
