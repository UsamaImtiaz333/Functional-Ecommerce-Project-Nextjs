import ProductsRow from "@/components/common/ProductsRow";
import HeroSection from "@/components/HeroSection";
import SideBar from "@/components/SideBar";
import ProductCard from "@/components/common/ProductCard";
import { productsData } from "@/data/products";
import CategoriesCard from "@/components/common/CategoriesCard";
import CategoryBanner from "@/components/CategoryBanner";

export default function Home() {
  return (
    <div className="max-w-[1900px] mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-row justify-center items-start">
        <SideBar />
        <div className="w-px bg-gray-300 mx-6 h-[440px]"></div>
        <div className="flex-1">
          <HeroSection />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <ProductsRow
          title="Today's"
          heading="Flash Sale"
          showCountdown
          showViewAll
          rightControl="arrows"
        >
          {productsData.map((product, index) => (
            <div key={index} className="snap-start flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </ProductsRow>
      </div>

      <hr className="my-10" />
      <div className="mt-10">
        <ProductsRow
          title="Categories"
          heading="Browse By Category"
          rightControl="arrows"
        >
          <CategoriesCard />
        </ProductsRow>
      </div>
      <div className="flex flex-col gap-10">
        <ProductsRow
          title="This Month"
          heading="Best Selling Products"
          rightControl="viewAll"
        >
          {productsData.map((product, index) => (
            <div key={index} className="snap-start flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </ProductsRow>
      </div>
      <div>
        <CategoryBanner />
      </div>
      <div className="flex flex-col gap-10">
        <ProductsRow
          title="Our Products"
          heading="Explore Our Products"
          rightControl="arrows"
          showViewAll
        >
          {productsData.map((product, index) => (
            <div key={index} className="snap-start flex-shrink-0">
              <ProductCard product={product} />
              <ProductCard product={product} />
            </div>
          ))}
        </ProductsRow>
      </div>
      <div className="flex flex-col gap-10">
        <ProductsRow title="featured" heading="New Arrival" rightControl="none">
          this is a project
        </ProductsRow>
      </div>
    </div>
  );
}
