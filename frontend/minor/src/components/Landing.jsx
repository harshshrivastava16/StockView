import React from "react";
import { Link } from "react-router-dom";
import Security from "./Security";
import Market from "./Market";
import News from "./News";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#0b0b0b] overflow-x-hidden font-[Manrope,Noto Sans,sans-serif]">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-solid border-b-[#253746] px-6 md:px-10 py-3">
          {/* Logo */}
          <div className="flex items-center gap-3 text-white">
            <div className="size-5">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold tracking-[-0.015em]">StockView</h2>
          </div>

          {/* Navbar Links */}
          <div className="flex flex-1 justify-end gap-6">
          <Link
  to="/chart"
  className="text-white text-sm pt-2 font-medium transition-all duration-300 hover:text-red-600 focus:outline-none "
>
  View Chart 
</Link>


            <div className="flex gap-2">
              <button className="min-w-[84px] rounded-xl h-10 px-4 bg-[#1c7cca] text-white text-sm font-bold">
                Sign up
              </button>
              <button className="min-w-[84px] rounded-xl h-10 px-4 bg-[#575555] text-white text-sm font-bold">
                Log in
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className="px-6 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-4 pb-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://cdn.usegalileo.ai/sdxl10/37788fd8-0563-4da9-bade-8afb17e04b85.png')",
              }}
            >
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] text-center">
                Real-time stock data and insights
              </h1>
              <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px]">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <input
                    placeholder="Search for a stock symbol"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#364f63] bg-[#1b2732] focus:border-[#364f63] h-full placeholder:text-[#95b0c6] px-[15px] rounded-r-none border-r-0 pr-2"
                  />
                  <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#364f63] bg-[#1b2732] pr-[7px]">
                    <button className="min-w-[84px] rounded-xl h-10 px-4 bg-[#1c7cca] text-white text-sm font-bold">
                      Get started
                    </button>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <Security/>
      <Market/>
      <News/>
      <Footer/>
    </div>
  );
};

export default Landing;
