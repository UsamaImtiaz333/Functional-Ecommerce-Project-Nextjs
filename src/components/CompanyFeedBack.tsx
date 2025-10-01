import { Truck, Headphones, ShieldCheck } from "lucide-react";

const CompanyFeedBack = () => {
  return (
    <section className="w-full py-40">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 text-center">
        
        {/* Free Delivery */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white">
              <Truck size={28} />
            </div>
          </div>
          <h3 className="font-bold text-lg">FREE AND FAST DELIVERY</h3>
          <p className="text-sm text-gray-600">
            Free delivery for all orders over $140
          </p>
        </div>

        {/* 24/7 Support */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white">
              <Headphones size={28} />
            </div>
          </div>
          <h3 className="font-bold text-lg">24/7 CUSTOMER SERVICE</h3>
          <p className="text-sm text-gray-600">
            Friendly 24/7 customer support
          </p>
        </div>

        {/* Money Back */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white">
              <ShieldCheck size={28} />
            </div>
          </div>
          <h3 className="font-bold text-lg">MONEY BACK GUARANTEE</h3>
          <p className="text-sm text-gray-600">
            We return money within 30 days
          </p>
        </div>

      </div>
    </section>
  );
};

export default CompanyFeedBack;
