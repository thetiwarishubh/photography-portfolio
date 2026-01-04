import { useNavigate } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";
import "../styles/portfolio.css"

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#0F0F0F] text-white py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl text-center mb-16 font-light">
          Portfolio
          <div className="w-24 h-[1px] bg-gray-600 mx-auto mt-6"></div>
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((item, index) => (
            <div
              key={item.slug}
              onClick={() => navigate(`/portfolio/${item.slug}`)}
              className="portfolio-card relative cursor-pointer rounded-xl overflow-hidden bg-[#1C1C1C]
                         hover:scale-[1.02] transition duration-500"
            >
              <img
                src={item.cover}
                alt={item.title}
                className="w-full h-64 object-cover"
              />

              <div
                className="absolute inset-0 bg-black/50 opacity-100 hover:opacity-0
                              flex flex-col items-center justify-center transition"
              >
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <span className="mt-2 px-4 py-1 bg-[#C89B3C] text-black text-sm rounded-full">
                  {item.type.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
