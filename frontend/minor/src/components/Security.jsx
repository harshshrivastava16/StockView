import React from "react";
import { Lock, ShieldCheck, Users } from "lucide-react";

const Security = () => {
  const features = [
    { title: "Robust Encryption", icon: <Lock size={24} />, desc: "We use AES-256 encryption to protect your data at all times." },
    { title: "Two-Factor Authentication", icon: <ShieldCheck size={24} />, desc: "Enhance security with 2FA to prevent unauthorized access." },
    { title: "Secure Trading Practices", icon: <ShieldCheck size={24} />, desc: "All transactions go through multiple security layers." },
    { title: "Trusted by Millions", icon: <Users size={24} />, desc: "StockView is used by millions of investors worldwide." },
  ];

  return (
    <div className="flex flex-col gap-12 px-6 py-12 max-w-6xl mx-auto bg-black">
      {/* Heading Section */}
      <div className="text-center">
        <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
          Why StockView is Secure ?
        </h1>
        <p className="text-gray-300 text-lg mt-3 max-w-2xl mx-auto">
          Your security is our top priority. We implement industry-leading security measures to protect your data and ensure safe transactions.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-[#1b2732] rounded-xl border border-gray-700 shadow-md"
          >
            <div className="text-blue-500 bg-blue-900/30 p-3 rounded-full">
              {feature.icon}
            </div>
            <h2 className="text-white text-lg font-semibold mt-4">{feature.title}</h2>
            <p className="text-gray-400 text-sm mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Security Images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          "https://cdn.usegalileo.ai/sdxl10/43679d2b-54d0-4e16-ab47-03ec7f110fa9.png",
          "https://cdn.usegalileo.ai/sdxl10/d812d789-9700-4a9c-9d1b-efeb0699787b.png",
          "https://cdn.usegalileo.ai/sdxl10/946ddccb-fd05-4616-9b3c-18c3eae12b80.png",
        ].map((src, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-lg">
            <img src={src} alt="Security Feature" className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Security;
