import { Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import "../styles/hero.css";

import Hero1 from "../assets/hero1.jpg";
import Hero2 from "../assets/hero2.png";
import Hero3 from "../assets/hero3.png";
import Hero4 from "../assets/hero4.JPG";
import Hero5 from "../assets/hero5.JPG";

const images = [Hero1, Hero2, Hero3, Hero4, Hero5];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stars = useMemo(() => {
    return [...Array(80)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 8,
      size: 1 + Math.random() * 2,
    }));
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden hero-wrapper">
      {/* IMAGE SLIDER */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className={`absolute inset-0 w-full h-full object-cover hero-zoom transition-opacity duration-1000
            ${index === current ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}

      <div className="absolute inset-0 star-layer pointer-events-none">
        {stars.map((star) => (
          <span
            key={star.id}
            className="star"
            style={{
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          />
        ))}
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="hero-heading text-4xl md:text-6xl font-bold text-[#C89B3C] mb-4">
          We Capture Happiness
        </h1>

        <p className="text-gray-300 max-w-xl mb-8 text-sm md:text-base tracking-[0.2em] fade-up delay-2">
          Professional photography & videography services
        </p>

        <Link to="/contact" className="fade-up delay-3">
          <button className="bg-[#C89B3C] px-8 py-3 rounded-md font-semibold hover:scale-104 transition duration-400 cursor-pointer">
            Book a Session
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
