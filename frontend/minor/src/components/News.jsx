import { ArrowRight } from "lucide-react";

const newsItems = [
  {
    image: "https://cdn.usegalileo.ai/sdxl10/ab1d5af7-4e03-4262-b165-3d72c636d159.png",
    headline: "Apple Unveils New AI Features in iOS 18 Update",
    description: "Apple's latest iOS update brings powerful AI-driven features, enhancing user experience across devices.",
  },
  {
    image: "https://cdn.usegalileo.ai/sdxl10/a8bb1850-754d-4508-8f88-092e25e065ba.png",
    headline: "Tesla Reports Record Sales in Q1 2025",
    description: "Tesla's electric vehicle sales surge in the first quarter, setting a new record despite market challenges.",
  },
  {
    image: "https://cdn.usegalileo.ai/sdxl10/fe77aea0-ab31-4c8e-b0b8-280ea030aefe.png",
    headline: "Microsoft Invests $10B in AI Research",
    description: "Microsoft doubles down on AI with a massive investment in next-gen research and cloud computing.",
  },
  {
    image: "https://cdn.usegalileo.ai/sdxl10/f4923b99-a19c-4236-b203-8a93cde8600d.png",
    headline: "Google Launches New Search Algorithm Update",
    description: "Google's latest algorithm update aims to improve search result accuracy and fight misinformation.",
  },
];

const News = () => {
  return (
    <div className="bg-black p-6 rounded-lg">
      <h2 className="text-white text-[32px] font-extrabold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Market News
      </h2>
      {newsItems.map((news, index) => (
        <div key={index} className="flex items-center gap-4 bg-[#0b0b0b] px-4 min-h-[72px] py-2 justify-between rounded-lg mb-2">
          <div className="flex items-center gap-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
              style={{ backgroundImage: `url(${news.image})` }}
            ></div>
            <div className="flex flex-col justify-center">
              <p className="text-white text-base font-medium leading-normal line-clamp-1">
                {news.headline}
              </p>
              <p className="text-[#95b0c6] text-sm font-normal leading-normal line-clamp-2">
                {news.description}
              </p>
            </div>
          </div>
          <div className="shrink-0 text-white flex size-7 items-center justify-center">
            <ArrowRight size={24} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
