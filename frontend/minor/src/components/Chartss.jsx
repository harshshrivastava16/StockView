import React, { useState } from "react";
import Footer from "./Footer";

function Chartss() {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const companies = [
    { name: "AAPL", logo: "https://logo.clearbit.com/apple.com" },
    { name: "AMZN", logo: "https://logo.clearbit.com/amazon.com" },
    { name: "GOOGL", logo: "https://logo.clearbit.com/abc.xyz" },
    { name: "JPM", logo: "https://logo.clearbit.com/jpmorganchase.com" },
    { name: "META", logo: "https://logo.clearbit.com/meta.com" },
    { name: "MSFT", logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "NVDA", logo: "https://logo.clearbit.com/nvidia.com" },
    { name: "TSLA", logo: "https://logo.clearbit.com/tesla.com" },
    { name: "V", logo: "https://logo.clearbit.com/visa.com" },
    { name: "WMT", logo: "https://logo.clearbit.com/walmart.com" },
  ];

  const handleViewReport = () => {
    if (selectedCompany) {
      window.open(`/charts/${selectedCompany}_chart.html`, "_blank");
    } else {
      alert("Please select a company first.");
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-black font-sans overflow-hidden">
      {/* Hide Scrollbar Globally */}
      <style>
        {`
          /* Hide scrollbar for Chrome, Safari, and Edge */
          ::-webkit-scrollbar {
            display: none;
          }

          /* Hide scrollbar for Firefox */
          html {
            scrollbar-width: none;
          }

          /* Hide scrollbar for Internet Explorer and Edge */
          body {
            -ms-overflow-style: none;
          }
        `}
      </style>

      {/* Header */}
      <header className="flex items-center justify-between border-b border-[#333] px-10 py-4">
        <div className="flex items-center gap-3 text-white">
          <div className="size-5">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-white text-lg font-bold tracking-tight">
            StockView
          </h2>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-40 py-5 overflow-auto h-screen">
        <h2 className="text-white text-3xl font-bold">Your Investment Portfolio</h2>
        <p className="text-gray-400 text-md mt-2 mb-6">
          Select a company to view your investment details and performance report.
        </p>

        <div className="grid grid-cols-2 gap-4 p-4">
          {companies.map((company) => (
            <label
              key={company.name}
              className="flex items-center gap-4 border border-[#434343] p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-[#222] hover:scale-105"
            >
              <input
                type="radio"
                name="companySelection"
                className="accent-white"
                onChange={() => setSelectedCompany(company.name)}
              />
              <img
                src={company.logo}
                alt={company.name}
                className="w-10 h-10 rounded-full shadow-md"
              />
              <span className="text-white text-lg font-medium">{company.name}</span>
            </label>
          ))}
        </div>

        {/* View Report Button */}
        <button
          className="px-8 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:opacity-80 transition-all text-lg font-semibold shadow-md"
          onClick={handleViewReport}
        >
          View Investment Report
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Chartss;
