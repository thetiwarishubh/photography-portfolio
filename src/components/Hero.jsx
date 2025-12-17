import { Link } from "react-router-dom";
import HeroImage from "../assets/heroimages.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden text-center">

      {/* Background Image */}
      <img
        src={HeroImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover hero-zoom"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">

        <h1 className="text-5xl md:text-6xl font-bold text-[#C89B3C] mb-4 fade-up delay-1">
          Capturing Your Precious Moments
        </h1>

        <p className="text-gray-300 max-w-xl mb-8 text-lg md:text-xl fade-up delay-2">
          Professional photography & videography services to create timeless
          wedding, event & cinematic stories.
        </p>

        <Link to="/contact" className="fade-up delay-3">
          <button className="bg-[#C89B3C] cursor-pointer text-[#0F0F0F] px-8 py-3 rounded-md font-semibold 
          hover:scale-102 hover:shadow-xl transition duration-300">
            Book a Session
          </button>
        </Link>

      </div>
    </section>
  );
};

export default Hero;
