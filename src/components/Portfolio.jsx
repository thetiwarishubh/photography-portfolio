import { Link } from "react-router-dom";
import { hero1, eventThree, fashionThree } from "../assets/assets";

const FeaturedWork = () => {
  return (
    <div className="bg-[#0F0F0F]">
      <section className="py-16 px-6 max-w-7xl mx-auto text-white">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#C89B3C] mb-4">
          Portfolio
        </h2>

        <p className="text-center text-sm md:text-base text-gray-300 mb-12">
          A curated selection of our finest photography and cinematic projects,
          crafted with passion, emotion, and storytelling.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Wedding Films */}
          <Link to="/portfolio">
            <div className="group relative overflow-hidden rounded-xl cursor-pointer">
              <img
                src={hero1}
                alt="Wedding Films Portfolio"
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-100 group-hover:opacity-0 transition">
                <h3 className="text-xl font-semibold">Wedding Films</h3>
                <span className="text-sm text-gray-300 mt-1">1500+ Films</span>
              </div>
            </div>
          </Link>

          {/* Event Highlights */}
          <Link to="/portfolio">
            <div className="group relative overflow-hidden rounded-xl cursor-pointer">
              <img
                src={eventThree}
                alt="Event Highlights Portfolio"
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-100 group-hover:opacity-0 transition">
                <h3 className="text-xl font-semibold">Event Highlights</h3>
                <span className="text-sm text-gray-300 mt-1">400+ Events</span>
              </div>
            </div>
          </Link>

          {/* Creative Shoots */}
          <Link to="/portfolio">
            <div className="group relative overflow-hidden rounded-xl cursor-pointer">
              <img
                src={fashionThree}
                alt="Creative Shoots Portfolio"
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-100 group-hover:opacity-0 transition">
                <h3 className="text-xl font-semibold">Creative Shoots</h3>
                <span className="text-sm text-gray-300 mt-1">150+ Shoots</span>
              </div>
            </div>
          </Link>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            to="/portfolio"
            className="inline-block border border-[#C89B3C] text-[#C89B3C] px-8 py-3 rounded-full text-sm tracking-wide hover:bg-[#C89B3C] hover:text-black transition"
          >
            View Full Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FeaturedWork;
