import ProductsRow from "@/components/common/ProductsRow";
import HeroSection from "@/components/HeroSection";
import SideBar from "@/components/SideBar";
import ProductCard from "@/components/common/ProductCard";
import { productsData } from "@/data/products";

export default function Home() {
  return (
    <div className="max-w-[1900px] mx-auto px-6 md:px-16 lg:px-24 xl:px-32">

      {/* Hero + Sidebar Section */}
      <div className="flex flex-row justify-center items-start">
        <SideBar />

        <div className="w-px bg-gray-300 mx-6 h-[440px]"></div>

        <div className="flex-1">
          <HeroSection />
        </div>
      </div>

      {/* Flash Sales Row */}
      <div className="flex flex-col gap-10">
        <ProductsRow title="Flash Sales" showCountdown>
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
