import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/hero.css";

import Hero1 from "../assets/hero1.jpg";
import Hero2 from "../assets/hero2.png";
import Hero3 from "../assets/hero3.png";
import Hero4 from "../assets/hero4.jpg";
import Hero5 from "../assets/hero5.JPG";

const images = [Hero1, Hero2, Hero3, Hero4, Hero5];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // 5 sec per slide

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden text-center">
      {/* SLIDER BACKGROUND */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Hero"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 hero-zoom
            ${index === current ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <h1 className="hero-heading hero-float text-5xl md:text-6xl font-bold text-[#C89B3C] mb-4">
          We Capture Happiness
        </h1>

        <p className="text-gray-300 max-w-xl mb-8 text-lg md:text-xl fade-up delay-2">
          Professional photography & videography services to create timeless
          wedding, event & cinematic stories.
        </p>

        <Link to="/contact" className="fade-up delay-3">
          <button
            className="bg-[#C89B3C] text-[#0F0F0F] px-8 py-3 rounded-md font-semibold 
          hover:scale-105 hover:shadow-xl transition duration-300"
          >
            Book a Session
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
