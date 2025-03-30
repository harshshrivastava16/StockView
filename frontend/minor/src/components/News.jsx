import { ArrowRight } from "lucide-react";

const newsItems = [
  {
    image: "https://cdn.usegalileo.ai/sdxl10/ab1d5af7-4e03-4262-b165-3d72c636d159.png",
    headline: "Apple Unveils New AI Features in iOS 18 Update",
    description: "Apple's latest iOS update brings powerful AI-driven features, enhancing user experience across devices.",
    link: "https://www.apple.com/newsroom/2024/06/introducing-apple-intelligence-for-iphone-ipad-and-mac/"
  },
  {
    image: "https://cdn.usegalileo.ai/sdxl10/a8bb1850-754d-4508-8f88-092e25e065ba.png",
    headline: "Tesla Reports Record Sales in Q1 2025",
    description: "Tesla's electric vehicle sales surge in the first quarter, setting a new record despite market challenges.",
    link: "https://electrek.co/2025/03/28/tesla-tsla-q1-delivery-consensus-377000-evs-worst-performance-in-2-years/"
  },
  {
    image: "https://cdn.usegalileo.ai/sdxl10/fe77aea0-ab31-4c8e-b0b8-280ea030aefe.png",
    headline: "Microsoft Invests $10B in AI Research",
    description: "Microsoft doubles down on AI with a massive investment in next-gen research and cloud computing.",
    link: "https://www.bloomberg.com/news/articles/2023-01-23/microsoft-makes-multibillion-dollar-investment-in-openai"
  },
  {
    image: "https://cdn.usegalileo.ai/sdxl10/f4923b99-a19c-4236-b203-8a93cde8600d.png",
    headline: "Google Launches New Search Algorithm Update",
    description: "Google's latest algorithm update aims to improve search result accuracy and fight misinformation.",
    link: "https://developers.google.com/search/updates/core-updates"
  },
];

const News = () => {
  return (
    <div className="bg-[#0b0b0b] p-6 rounded-xl">
      <h2 className="text-white text-[28px] md:text-[32px] font-extrabold tracking-tight px-4 pb-3">
        Market News
      </h2>
      <div className="space-y-3">
        {newsItems.map((news, index) => (
          <a
            key={index}
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="flex items-center gap-4 bg-[#121212] p-3 md:p-4 rounded-xl transition-all duration-200 hover:bg-[#1a1a1a] cursor-pointer">
              <div
                className="aspect-square bg-cover bg-center rounded-lg size-16 md:size-20"
                style={{ backgroundImage: `url(${news.image})` }}
              />
              <div className="flex flex-col flex-1">
                <p className="text-white text-sm md:text-base font-medium leading-snug line-clamp-1">
                  {news.headline}
                </p>
                <p className="text-[#95b0c6] text-xs md:text-sm leading-snug line-clamp-2">
                  {news.description}
                </p>
              </div>
              <div className="shrink-0 text-white flex size-8 md:size-9 items-center justify-center rounded-full bg-[#1e1e1e] hover:bg-[#2a2a2a] transition-all">
                <ArrowRight size={20} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default News;
