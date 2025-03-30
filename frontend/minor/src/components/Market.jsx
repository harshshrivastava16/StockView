import React from "react";

const stockData = [
  {
    symbol: "SPY",
    name: "SPDR S&P 500 ETF Trust",
    price: "$432.60",
    logo: "https://logo.clearbit.com/spdrs.com",
    url: "https://www.google.com/finance/quote/SPY:NYSEARCA",
  },
  {
    symbol: "TSLA",
    name: "Tesla, Inc.",
    price: "$646.22",
    logo: "https://logo.clearbit.com/tesla.com",
    url: "https://www.google.com/finance/quote/TSLA:NASDAQ",
  },
  {
    symbol: "AMZN",
    name: "Amazon.com, Inc.",
    price: "$3,585.20",
    logo: "https://logo.clearbit.com/amazon.com",
    url: "https://www.google.com/finance/quote/AMZN:NASDAQ",
  },
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: "$148.12",
    logo: "https://logo.clearbit.com/apple.com",
    url: "https://www.google.com/finance/quote/AAPL:NASDAQ",
  },
];

const Market = () => {
  return (
    <div className="p-8 bg-black rounded-xl">
      <h2 className="text-white text-[28px] md:text-[32px] font-extrabold tracking-tight px-4 pb-3">
        Live Market Data
      </h2>
      <div className="space-y-3">
        {stockData.map((stock, index) => (
          <a
            key={index}
            href={stock.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[#121212] p-4 rounded-xl transition-all duration-200 hover:bg-[#1a1a1a] cursor-pointer"
          >
            <div
              className="h-8 w-14 bg-center bg-no-repeat bg-contain rounded-md"
              style={{ backgroundImage: `url(${stock.logo})` }}
            />
            <div className="flex flex-col flex-1">
              <p className="text-white text-sm md:text-base font-medium leading-tight">
                {stock.symbol}
              </p>
              <p className="text-[#95b0c6] text-xs md:text-sm leading-tight">
                {stock.name}
              </p>
            </div>
            <p className="text-white text-base font-medium bg-[#1e1e1e] px-3 py-1 rounded-lg">
              {stock.price}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Market;
