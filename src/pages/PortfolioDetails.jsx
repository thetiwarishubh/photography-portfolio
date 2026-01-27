import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolioData";
import { Link } from "react-router-dom";

const PortfolioDetails = () => {
  const { slug } = useParams();
  const [activeIndex, setActiveIndex] = useState(null);
  const [animationDirection, setAnimationDirection] = useState("");

  const portfolio = portfolioData.find((item) => item.slug === slug);

  if (!portfolio) {
    return <p className="text-white text-center mt-32">Portfolio not found</p>;
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIndex === null) return;

      if (e.key === "Escape") {
        setActiveIndex(null);
      }

      if (e.key === "ArrowRight") {
        handleNextImage();
      }

      if (e.key === "ArrowLeft") {
        handlePrevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  const handleNextImage = () => {
    setAnimationDirection("slide-out-left");
    setTimeout(() => {
      setActiveIndex((prev) =>
        prev === portfolio.images.length - 1 ? 0 : prev + 1,
      );
      setAnimationDirection("slide-in-right");
    }, 200);
  };

  const handlePrevImage = () => {
    setAnimationDirection("slide-out-right");
    setTimeout(() => {
      setActiveIndex((prev) =>
        prev === 0 ? portfolio.images.length - 1 : prev - 1,
      );
      setAnimationDirection("slide-in-left");
    }, 200);
  };

  return (
    <section className="bg-[#0F0F0F] text-white min-h-screen py-24 px-6">
      {/* 📌 ANIMATION STYLES - Yahi add karna */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOutRight {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(40px);
          }
        }

        @keyframes slideOutLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-40px);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-zoom-in {
          animation: zoomIn 0.4s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.4s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.4s ease-out forwards;
        }

        .animate-slide-out-right {
          animation: slideOutRight 0.3s ease-in forwards;
        }

        .animate-slide-out-left {
          animation: slideOutLeft 0.3s ease-in forwards;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="flex md:absolute justify-start mb-8">
          <Link to="/portfolio">
            <button
              className="bg-[#C89B3C] px-6 py-2 rounded-md font-semibold 
                       transition duration-300 cursor-pointer text-[#000]
                       hover:bg-yellow-500"
            >
              ← Back to Portfolio
            </button>
          </Link>
        </div>
        <h1 className="text-4xl text-center mb-12 transition-all duration-700 ease-out">
          {portfolio.title}
        </h1>

        {/* GRID */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              onClick={() => {
                setActiveIndex(index);
                setAnimationDirection("zoom-in");
              }}
              className="w-full h-72 object-cover rounded-xl cursor-pointer
                         hover:scale-105 transition duration-500"
            />
          ))}
        </div>
      </div>

      {/* 🔥 LIGHTBOX */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setActiveIndex(null);
            }
          }}
        >
          {/* CLOSE */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl cursor-pointer z-50
                      hover:scale-110 transition-transform duration-200"
          >
            ✕
          </button>

          {/* PREV */}
          <button
            onClick={handlePrevImage}
            className="absolute left-6 text-white text-4xl cursor-pointer z-50
                      w-12 h-12 rounded-full 
                      flex items-center justify-center
                      bg-black/50 backdrop-blur-sm
                      border border-white/30 hover:border-[#C89B3C]
                      hover:bg-black/70
                      transition-all duration-300 hover:scale-110 pb-2.5"
          >
            ‹
          </button>

          {/* IMAGE */}
          <img
            src={portfolio.images[activeIndex]}
            alt=""
            className={`max-h-[85vh] max-w-[90vw] rounded-xl 
                       border border-white/20 shadow-2xl 
                       hover:border-[#C89B3C] hover:shadow-[#C89B3C]/25 
                       transition-all duration-300
                       ${
                         animationDirection === "zoom-in"
                           ? "animate-zoom-in"
                           : animationDirection === "slide-in-right"
                             ? "animate-slide-in-right"
                             : animationDirection === "slide-in-left"
                               ? "animate-slide-in-left"
                               : animationDirection === "slide-out-right"
                                 ? "animate-slide-out-right"
                                 : animationDirection === "slide-out-left"
                                   ? "animate-slide-out-left"
                                   : "animate-fade-in"
                       }`}
          />

          {/* NEXT */}
          <button
            onClick={handleNextImage}
            className="absolute right-6 text-white text-4xl cursor-pointer z-50
                      w-12 h-12 rounded-full 
                      flex items-center justify-center
                      bg-black/50 backdrop-blur-sm
                      border border-white/30 hover:border-[#C89B3C]
                      hover:bg-black/70
                      transition-all duration-300 hover:scale-110 pb-2.5"
          >
            ›
          </button>

          {/* IMAGE COUNTER */}
          <div
            className="absolute bottom-6 text-white/90 bg-black/60 
                        backdrop-blur-sm px-4 py-2 rounded-full text-sm"
          >
            {activeIndex + 1} / {portfolio.images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioDetails;
