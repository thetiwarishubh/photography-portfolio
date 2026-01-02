import { cinematic } from "../assets/assets";
import { useState } from "react";

const portfolioItems = [
  { id: 1, title: "Wedding Shoot", type: "photo", imageUrl: cinematic },
  { id: 2, title: "Cinematic Film", type: "video", imageUrl: cinematic },
  { id: 3, title: "Engagement Shoot", type: "photo", imageUrl: cinematic },
  { id: 4, title: "Pre-Wedding Session", type: "photo", imageUrl: cinematic },
  { id: 5, title: "Event Coverage", type: "video", imageUrl: cinematic },
  { id: 6, title: "Portraits", type: "photo", imageUrl: cinematic },
];

const PortfolioPage = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-[#0F0F0F] text-white py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-light tracking-wide text-center mb-16">
          Portfolio
          <div className="w-24 h-[1px] bg-gray-600 mx-auto mt-6"></div>
        </h1>

        {/* Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map(({ id, title, type, imageUrl }, index) => (
            <div
              key={id}
              style={{ animationDelay: `${index * 120}ms` }}
              className="relative rounded-xl overflow-hidden cursor-pointer
                         bg-[#1C1C1C] shadow-lg
                         animate-fadeInUp
                         hover:shadow-[#C89B3C]/40
                         transition-all duration-500"
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-64 object-cover
                           scale-105 animate-slowZoom"
              />

              {/* Overlay */}
              <div
                className={`
                  absolute inset-0 flex flex-col items-center justify-center text-center
                  bg-black/60
                  transition-all duration-500
                  ${
                    hovered === id
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }
                `}
              >
                <h2 className="text-xl font-semibold mb-3 animate-fadeIn">
                  {title}
                </h2>

                <span className="px-4 py-1 rounded-full bg-[#C89B3C] text-black font-medium text-sm animate-fadeIn delay-150">
                  {type.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.9s ease forwards;
          }

          @keyframes fadeIn {
            from { opacity: 0 }
            to { opacity: 1 }
          }

          .animate-fadeIn {
            animation: fadeIn 0.6s ease forwards;
          }

          @keyframes slowZoom {
            0% { transform: scale(1) }
            100% { transform: scale(1.08) }
          }

          .animate-slowZoom {
            animation: slowZoom 12s ease-in-out infinite alternate;
          }
        `}
      </style>
    </section>
  );
};

export default PortfolioPage;
