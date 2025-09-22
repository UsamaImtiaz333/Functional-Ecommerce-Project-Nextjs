import ProductCard from "@/components/common/ProductCard";
import HeroSection from "@/components/HeroSection";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div className="max-w-[1900px] mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
      {/* Hero + Sidebar Section */}
      <div className="flex flex-row justify-center items-start">
        <SideBar />

        {/* Vertical Divider */}
        <div className="w-px bg-gray-300 mx-6 h-[440px]"></div>

        <div className="flex-1">
          <HeroSection />
        </div>
      </div>

      {/* Product Cards */}
      <div className="mt-8">
        <ProductCard />
      </div>
    </div>
  );
}


