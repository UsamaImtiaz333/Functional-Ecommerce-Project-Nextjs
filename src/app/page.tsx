import ProductsRow from "@/components/common/ProductsRow";
import HeroSection from "@/components/HeroSection";
import SideBar from "@/components/SideBar";
import ProductCard from "@/components/common/ProductCard";
import { productsData } from "@/data/products";
import CategoriesCard from "@/components/common/CategoriesCard";

export default function Home() {
  return (
    <div className="max-w-[1900px] mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
      {/* Hero + Sidebar */}
      <div className="flex flex-row justify-center items-start">
        <SideBar />
        <div className="w-px bg-gray-300 mx-6 h-[440px]"></div>
        <div className="flex-1">
          <HeroSection />
        </div>
      </div>

      {/* Flash Sale (Products) */}
      <div className="flex flex-col gap-10">
        <ProductsRow
          title="Today's"
          heading="Flash Sale"
          showCountdown
          showViewAll
          rightControl="arrows" // 👈 arrows heading ke right side
        >
          {productsData.map((product, index) => (
            <div key={index} className="snap-start flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </ProductsRow>
      </div>

      <hr className="my-10" />

      {/* Categories (arrows on right side) */}
      <div className="mt-10">
        <ProductsRow
          title="Categories"
          heading="Browse By Category"
          rightControl="arrows"
        >
          <CategoriesCard />
        </ProductsRow>
      </div>

      {/* Best Selling Products (View All on right side instead of arrows) */}
      <div className="flex flex-col gap-10">
        <ProductsRow
          title="This Month"
          heading="Best Selling Products"
          rightControl="viewAll" // 👈 arrows ki jagah View All button
        >
          {productsData.map((product, index) => (
            <div key={index} className="snap-start flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </ProductsRow>
      </div>
    </div>
  );
}
