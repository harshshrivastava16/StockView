import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold">About Us</h2>
          <p className="text-[#95b0c6] text-sm mt-2">
            Your trusted source for the latest market news and insights.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-2 text-[#95b0c6] space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Market News</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-[#1da1f2]"><Twitter size={20} /></a>
            <a href="#" className="hover:text-[#1877f2]"><Facebook size={20} /></a>
            <a href="#" className="hover:text-[#e1306c]"><Instagram size={20} /></a>
            <a href="#" className="hover:text-[#0077b5]"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-semibold">Newsletter</h2>
          <p className="text-[#95b0c6] text-sm mt-2">
            Subscribe to get the latest updates.
          </p>
          <div className="mt-3 flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-3 py-2 w-full text-black rounded-l-lg outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 text-white rounded-r-lg hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-[#95b0c6] text-sm">
        © {new Date().getFullYear()} StockView. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
