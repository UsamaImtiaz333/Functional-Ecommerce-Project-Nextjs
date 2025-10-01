"use client";
import Image from "next/image";

function CategoryShop() {
  return (
    <section className="w-full flex gap-3">
      {/* Playstation */}
      <figure className="relative w-1/2 h-[500px]">
        <Image
          src="/playstation.jpg"
          alt="PlayStation 5"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
        <figcaption className="absolute bottom-4 left-4 text-white m-5">
          <h2 className="text-3xl font-bold py-2">PlayStation 5</h2>
          <p className="text-sm leading-snug min-h-[40px] max-w-[250px] pb-2">
            Black and White version of the PS5 coming out on sale.
          </p>
          <a
            href="#"
            className="inline-block text-white relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:mt-[2px] mt-2"
          >
            Shop Now
          </a>
        </figcaption>
      </figure>

      {/* Right side items */}
      <div className="flex flex-col gap-6 w-1/2">
        {/* Women */}
        <figure className="relative h-[240px]">
          <Image
            src="/women.jpg"
            alt="Women’s Collections"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
          <figcaption className="absolute bottom-4 left-4 text-white m-5">
            <h2 className="text-3xl font-bold py-2">Women’s Collections</h2>
            <p className="text-sm leading-snug min-h-[40px] max-w-[250px] pb-2">
              Featured woman collections that give you another vibe.
            </p>
            <a
              href="#"
              className="inline-block text-white relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:mt-[2px] mt-2"
            >
              Shop Now
            </a>
          </figcaption>
        </figure>

        {/* Speakers + Perfume */}
        <div className="flex gap-5 h-[240px]">
          {/* Speakers */}
          <figure className="relative w-1/2">
            <Image
              src="/speaker.jpg"
              alt="Speakers"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <figcaption className="absolute bottom-4 left-4 text-white m-5">
              <h2 className="text-3xl font-bold pb-2">Speakers</h2>
              <p className="text-sm leading-snug">Amazon wireless speakers</p>
              <a
                href="#"
                className="inline-block text-white relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:mt-[2px] mt-2"
              >
                Shop Now
              </a>
            </figcaption>
          </figure>

          {/* Perfume */}
          <figure className="relative w-1/2">
            <Image
              src="/perfume.jpg"
              alt="Perfume"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <figcaption className="absolute bottom-4 left-4 text-white m-5">
              <h2 className="text-3xl font-bold py-2">Perfume</h2>
              <p className="text-sm leading-snug pb-2">GUCCI INTENSE OUD EDP</p>
              <a
                href="#"
                className="inline-block text-white relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:mt-[2px] mt-2"
              >
                Shop Now
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default CategoryShop;
