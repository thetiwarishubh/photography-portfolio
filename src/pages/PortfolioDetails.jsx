import { useParams } from "react-router-dom";
import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { Link } from "react-router-dom";

const PortfolioDetails = () => {
  const { slug } = useParams();
  const [activeIndex, setActiveIndex] = useState(null);

  const portfolio = portfolioData.find((item) => item.slug === slug);

  if (!portfolio) {
    return <p className="text-white text-center mt-32">Portfolio not found</p>;
  }

  const nextImage = () => {
    setActiveIndex((prev) =>
      prev === portfolio.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? portfolio.images.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-[#0F0F0F] text-white min-h-screen py-24 px-6">
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
        <h1 className="text-4xl text-center mb-12 transition-all duration-700 ease-out">{portfolio.title}</h1>

        {/* GRID */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              onClick={() => setActiveIndex(index)}
              className="w-full h-72 object-cover rounded-xl cursor-pointer
                         hover:scale-105 transition duration-500"
            />
          ))}
        </div>
      </div>

      {/* 🔥 LIGHTBOX */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          {/* CLOSE */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
          >
            ✕
          </button>

          {/* PREV */}
          <button
            onClick={prevImage}
            className="absolute left-6 pb-2 text-white text-4xl cursor-pointer 
           w-12 h-12 rounded-full 
           flex items-center justify-center
           border border-transparent hover:border-white
           transition duration-200"
          >
            ‹
          </button>

          {/* IMAGE */}
          <img
            src={portfolio.images[activeIndex]}
            alt=""
            className="max-h-[85vh] max-w-[90vw] rounded-lg shadow-2xl border border-white/70"
          />

          {/* NEXT */}
          <button
            onClick={nextImage}
            className="absolute right-6 pb-2 text-white text-4xl cursor-pointer 
           w-12 h-12 rounded-full 
           flex items-center justify-center
           border border-transparent hover:border-white
           transition duration-200"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default PortfolioDetails;
