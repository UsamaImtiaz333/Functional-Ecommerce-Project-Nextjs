import React from "react";

function CategoryShop() {
  return (
    <section className="w-full flex gap-3">
      {/* Playstation */}
      <figure className="relative">
        <img src="/playstation.jpg" alt="PlayStation 5" />
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
      <div className="flex flex-col gap-6">
        {/* Women */}
        <figure className="relative">
          <img src="/women.jpg" alt="Women’s Collections" />
          <figcaption className="absolute bottom-4 left-4 text-white m-5">
            <h2 className="text-3xl font-bold py-2 ">Women’s Collections</h2>
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
        <div className="flex gap-5">
          {/* Speakers */}
          <figure className="relative">
            <img src="/speaker.jpg" alt="Speakers" />
            <figcaption className="absolute bottom-4 left-4 text-white m-5">
              <h2 className="text-3xl font-bold pb-2">Speakers</h2>
              <p className="text-sm leading-snug">
                Amazon wireless speakers
              </p>
              <a
                href="#"
                className="inline-block text-white relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:mt-[2px] mt-2"
              >
                Shop Now
              </a>
            </figcaption>
          </figure>

          {/* Perfume */}
          <figure className="relative">
            <img src="/perfume.jpg" alt="Perfume" />
            <figcaption className="absolute bottom-4 left-4 text-white m-5">
              <h2 className="text-3xl font-bold py-2">Perfume</h2>
              <p className="text-sm leading-snug pb-2">
                GUCCI INTENSE OUD EDP
              </p>
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
