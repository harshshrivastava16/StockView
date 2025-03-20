import React from 'react'
const stockData = [
  { symbol: "SPY", name: "SPDR S&P 500 ETF Trust", price: "$432.60", logo: "https://logo.clearbit.com/spdrs.com" },
  { symbol: "TSLA", name: "Tesla, Inc.", price: "$646.22", logo: "https://logo.clearbit.com/tesla.com" },
  { symbol: "AMZN", name: "Amazon.com, Inc.", price: "$3,585.20", logo: "https://logo.clearbit.com/amazon.com" },
  { symbol: "AAPL", name: "Apple Inc.", price: "$148.12", logo: "https://logo.clearbit.com/apple.com" }
];


const Market = () => {
  return (
        <div className='p-9 mt-[-10px] bg-black'>
          <h2 className="text-white text-[32px]  font-extrabold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Live Market Data
          </h2>
          {stockData.map((stock, index) => (
            <div key={index} className="flex items-center gap-4 bg-[#080808] px-4 min-h-[72px] py-2 justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="bg-center bg-no-repeat aspect-video bg-contain h-6 w-10 shrink-0"
                  style={{ backgroundImage: `url(${stock.logo})` }}
                ></div>
                <div className="flex flex-col justify-center">
                  <p className="text-white text-base font-medium leading-normal line-clamp-1">{stock.symbol}</p>
                  <p className="text-[#95b0c6] text-sm font-normal leading-normal line-clamp-2">{stock.name}</p>
                </div>
              </div>
              <div className="shrink-0">
                <p className="text-white text-base font-normal leading-normal">{stock.price}</p>
              </div>
            </div>
          ))}
        </div>
      );
    };
    

export default Market;