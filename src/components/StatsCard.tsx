import MoneyBeg from "@/icons/MoneyBeg";
import Sale from "@/icons/Sale";
import Shop from "@/icons/Shop";
import ShoppingBeg from "@/icons/ShoppingBeg";

const StatsCard = () => {
  return (
    <section className="w-full px-6 md:px-12 py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        {/* Card 1 */}
        <div className="group flex flex-col items-center justify-center text-center rounded-md border border-gray-200 shadow-sm p-6 cursor-pointer transition-all duration-300 hover:bg-[#DB4444] hover:text-white">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-white text-black group-hover:text-[#DB4444] mb-4 transition-colors duration-300">
            <Shop />
          </div>
          <h3 className="text-2xl font-bold">10.5k</h3>
          <p className="text-sm mt-1">Sellers active in our site</p>
        </div>

        {/* Card 2 */}
        <div className="group flex flex-col items-center justify-center text-center rounded-md border border-gray-200 shadow-sm p-6 cursor-pointer transition-all duration-300 hover:bg-[#DB4444] hover:text-white">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-white text-black group-hover:text-[#DB4444] mb-4 transition-colors duration-300">
            <Sale />
          </div>
          <h3 className="text-2xl font-bold">33k</h3>
          <p className="text-sm mt-1">Monthly Product Sale</p>
        </div>

        {/* Card 3 */}
        <div className="group flex flex-col items-center justify-center text-center rounded-md border border-gray-200 shadow-sm p-6 cursor-pointer transition-all duration-300 hover:bg-[#DB4444] hover:text-white">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-white text-black group-hover:text-[#DB4444] mb-4 transition-colors duration-300">
            <MoneyBeg />
          </div>
          <h3 className="text-2xl font-bold">45.5k</h3>
          <p className="text-sm mt-1">Customer active in our site</p>
        </div>

        {/* Card 4 */}
        <div className="group flex flex-col items-center justify-center text-center rounded-md border border-gray-200 shadow-sm p-6 cursor-pointer transition-all duration-300 hover:bg-[#DB4444] hover:text-white">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-white text-black group-hover:text-[#DB4444] mb-4 transition-colors duration-300">
            <ShoppingBeg />
          </div>
          <h3 className="text-2xl font-bold">25k</h3>
          <p className="text-sm mt-1">Annual gross sale in our site</p>
        </div>
      </div>
    </section>
  );
};

export default StatsCard;
