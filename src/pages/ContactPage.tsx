import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FiPhoneCall, FiMail } from "react-icons/fi";

const ContactPage: React.FC = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-stretch">
        {/* Left Side - Contact Info */}
        <div className="bg-white shadow-sm rounded-lg p-8 space-y-10 flex flex-col justify-between h-full md:w-[25%]">
          {/* Call Us */}
          <div className="flex flex-col items-start space-y-4">
            <div className="bg-[#DB4444] text-white p-3 rounded-full">
              <FiPhoneCall size={20} />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Call To Us</h3>
              <p className=" text-black font-sm">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-black font-sm">Phone: +880161112222</p>
            </div>
          </div>

          <hr />

          {/* Write To Us */}
          <div className="flex flex-col items-start space-y-4">
            <div className="bg-[#DB4444] text-white p-3 rounded-full">
              <FiMail size={20} />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Write To Us</h3>
              <p className="text-black font-sm">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-gray-800 font-sm">
                Emails: customer@exclusive.com
              </p>
              <p className="text-gray-800 font-sm">
                Emails: support@exclusive.com
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white shadow-sm rounded-lg p-8 flex flex-col justify-between h-full md:flex-1 ">
          <form className="space-y-8 h-full flex flex-col">
            {/* Top Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input
                type="text"
                placeholder="Your Name *"
                className="border-none rounded-none bg-gray-100 py-5"
              />
              <Input
                type="email"
                placeholder="Your Email *"
                className="border-none rounded-none bg-gray-100 py-5"
              />
              <Input
                type="tel"
                placeholder="Your Phone *"
                className="border-none rounded-none bg-gray-100 py-5"
              />
            </div>

            {/* Message */}
            <Textarea
              placeholder="Your Message"
              className="flex-grow h-80 bg-gray-100 rounded-sm"
            />
  
            {/* Button */}
            <button
              type="submit"
              className="bg-[#DB4444] hover:bg-[#DB4444] text-white font-semibold text-lg px-8 py-3 rounded-md transition self-end"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
