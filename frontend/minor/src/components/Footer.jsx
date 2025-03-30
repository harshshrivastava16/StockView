import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">About Us</h2>
          <p className="text-[#95b0c6] text-sm leading-relaxed">
            Your trusted source for the latest market news and insights. Stay ahead with real-time updates.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="text-[#95b0c6] space-y-3">
            {["Home", "Market News", "Contact", "Privacy Policy"].map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white transition-all duration-300 block">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
          <div className="flex gap-5">
            {[
              { icon: Twitter, color: "#1DA1F2" },
              { icon: Facebook, color: "#1877F2" },
              { icon: Instagram, color: "#E1306C" },
              { icon: Linkedin, color: "#0077B5" }
            ].map(({ icon: Icon, color }, index) => (
              <a
                key={index}
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-opacity-90 transition-all duration-300"
                style={{ color }}
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Newsletter</h2>
          <p className="text-[#95b0c6] text-sm mb-4">
            Subscribe for the latest updates and insights.
          </p>
          <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 w-full text-white bg-transparent outline-none placeholder-[#95b0c6]"
            />
            <button className="bg-blue-600 px-5 py-2 text-white font-medium hover:bg-blue-700 transition-all">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-[#95b0c6] text-sm">
        © {new Date().getFullYear()} <span className="text-white font-medium">StockView</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
