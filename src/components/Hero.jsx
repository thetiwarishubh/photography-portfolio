import { Link } from "react-router-dom";
import HeroImage from '../assets/heroimages.jpg'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center">
      
      {/* Background Image */}
      <img
        src={HeroImage}
        alt="Hero"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-[#C89B3C] mb-4">
          Capturing Your Precious Moments
        </h1>
        <p className="text-gray-300 max-w-xl mb-8 text-lg md:text-xl">
          Professional photography services to create timeless memories.  
          Wedding, events, and cinematic storytelling.
        </p>

        {/* Button as Link */}
        <Link to="/contact">
          <button className="bg-[#C89B3C] text-[#0F0F0F] px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 transition">
            Book a Session
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
