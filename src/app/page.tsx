import HeroSection from "@/components/HeroSection";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div className="flex flex-row justify-center items-start">
      {/* Sidebar */}
      <SideBar />

      {/* Vertical Divider */}
      <div className="w-px bg-gray-300 mx-6 self-stretch"></div>

      {/* Hero Section */}
      <HeroSection />
    </div>
  );
}
