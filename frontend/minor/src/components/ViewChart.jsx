import React from "react";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Footer from "./Footer";

const data = [
  { month: "Jan", income: 3000, expense: 1500 },
  { month: "Feb", income: 4000, expense: 1800 },
  { month: "Mar", income: 5000, expense: 2200 },
  { month: "Apr", income: 4200, expense: 1700 },
  { month: "May", income: 4500, expense: 2500 },
  { month: "Jun", income: 4800, expense: 2100 },
  { month: "Jul", income: 5200, expense: 2300 },
  { month: "Aug", income: 5500, expense: 2600 },
  { month: "Sep", income: 5300, expense: 2400 },
  { month: "Oct", income: 6000, expense: 2800 },
  { month: "Nov", income: 6200, expense: 3000 },
  { month: "Dec", income: 6500, expense: 3200 },
];

const ViewChart = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-black p-6 overflow-x-hidden overflow-y-auto scrollbar-hide font-inter">
      <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }
          html {
            scrollbar-width: none;
          }
          body {
            -ms-overflow-style: none;
          }
        `}
      </style>
      {/* Header */}
      <header className="flex items-center justify-between border-b border-gray-700 px-10 py-2 text-white">
        <div className="flex items-center gap-3">
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
            <h2 className="text-white text-lg font-bold tracking-tight">StockView</h2>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-20 py-8">
        <h2 className="text-4xl font-black text-white mb-6">Stock Portfolio Overview</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Total Portfolio Value", value: "$27,219.50", change: "+8%", color: "text-green-400" },
            { title: "Monthly Gain/Loss", value: "+$2,325.18", change: "+12%", color: "text-green-400" },
            { title: "Invested Capital", value: "$14,283.77", change: "+13%", color: "text-green-400" },
            { title: "Market Liabilities", value: "$11,847.92", change: "-5%", color: "text-red-500" },
          ].map(({ title, value, change, color }, idx) => (
            <div key={idx} className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl text-white shadow-lg">
              <p className="text-base text-gray-400">{title}</p>
              <p className="text-3xl font-bold mt-1">{value}</p>
              <p className={`${color} mt-1 text-sm font-semibold`}>{change}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-[#1a1a1a] p-8 rounded-xl shadow-xl">
          <h3 className="text-white text-lg font-medium mb-4">Stock Performance: Income vs Expense</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
              <XAxis dataKey="month" stroke="#bbb" />
              <YAxis stroke="#bbb" />
              <Tooltip
                contentStyle={{ backgroundColor: "#222", color: "#fff", borderRadius: "8px" }}
                itemStyle={{ color: "#fff" }}
              />
              <Line type="monotone" dataKey="income" stroke="#00e676" strokeWidth={3} />
              <Line type="monotone" dataKey="expense" stroke="#ff5252" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Button */}
        <div className="mt-8 flex justify-end">
          <Link
            to="/chartss"
            className="px-8 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:opacity-80 transition-all text-lg font-semibold shadow-md"
          >
            Track Investments
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewChart;
