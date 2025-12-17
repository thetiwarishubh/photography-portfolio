import { outdoor } from "../assets/assets";

import { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "Wedding Shoot",
    type: "photo",
    imageUrl: outdoor,
  },
  {
    id: 2,
    title: "Cinematic Film",
    type: "video",
    imageUrl: outdoor,
  },
  {
    id: 3,
    title: "Engagement Shoot",
    type: "photo",
    imageUrl: outdoor,
  },
  {
    id: 4,
    title: "Pre-Wedding Session",
    type: "photo",
    imageUrl: outdoor,
  },
  {
    id: 5,
    title: "Event Coverage",
    type: "video",
    imageUrl: outdoor,
  },
  {
    id: 6,
    title: "Portraits",
    type: "photo",
    imageUrl: outdoor,
  },
];

const PortfolioPage = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-[#0F0F0F] text-white py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-[#C89B3C] text-center">
          Portfolio
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map(({ id, title, type, imageUrl }) => (
            <div
              key={id}
              className="relative rounded-lg overflow-hidden cursor-pointer shadow-lg bg-[#1C1C1C] hover:shadow-[#C89B3C]/50 transition transform hover:-translate-y-1"
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-64 object-cover"
              />

              {/* Overlay */}
              {hovered === id && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center transition">
                  <h2 className="text-xl font-semibold mb-2">{title}</h2>
                  <span className="px-3 py-1 rounded bg-[#C89B3C] text-black font-medium">
                    {type.toUpperCase()}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
