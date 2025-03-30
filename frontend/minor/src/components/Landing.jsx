import React from "react";
import { Link } from "react-router-dom";
import Security from "./Security";
import Market from "./Market";
import News from "./News";
import Footer from "./Footer";

const Landing = () => {
  return (
    <>
      <div
        className="relative flex flex-col min-h-screen bg-[#0b0b0b] overflow-auto scrollbar-hide font-[Manrope,Noto Sans,sans-serif]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <header className="flex items-center justify-between border-b border-[#253746] px-6 md:px-10 py-4 bg-black">
          <div className="flex items-center gap-3 text-white">
            <div className="size-6">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold tracking-tight">StockView</h2>
          </div>

          <nav className="flex items-center gap-6">
            <Link to="/chart" className="text-white text-bold font-bold hover:text-blue-500 transition-all">
              Profile
            </Link>
            <div className="flex gap-3">
              <button className="rounded-lg h-10 px-5 bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-all">
                Sign Up
              </button>
              <button className="rounded-lg h-10 px-5 bg-gray-700 text-white text-sm font-bold hover:bg-gray-800 transition-all">
                Log In
              </button>
            </div>
          </nav>
        </header>

        <section className="flex flex-1 justify-center py-10 px-6 md:px-40">
          <div className="flex flex-col max-w-[960px] w-full text-center">
            <div
              className="flex flex-col items-center justify-end min-h-[480px] bg-cover bg-center rounded-lg px-6 py-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url('https://cdn.usegalileo.ai/sdxl10/37788fd8-0563-4da9-bade-8afb17e04b85.png')",
              }}
            >
              <h1 className="text-white text-4xl font-black leading-tight max-w-2xl">
                Real-time stock data and insights
              </h1>
              <div className="mt-6 w-full max-w-lg">
                <div className="flex rounded-lg overflow-hidden border border-[#364f63] bg-[#1b2732]">
                  <input
                    type="text"
                    placeholder="Search for a stock symbol"
                    className="flex-1 px-4 py-3 bg-transparent text-white placeholder-[#95b0c6] outline-none"
                  />
                  <button className="bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition-all">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Security />
        <Market />
        <News />
        <Footer />
      </div>

      {/* Hide scrollbar for WebKit Browsers (Chrome, Safari) */}
      <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </>
  );
};

export default Landing;
