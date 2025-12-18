import {
  FaCameraRetro,
  FaVideo,
  FaHeart,
  FaRing,
  FaSmile,
  FaStar,
  FaBuilding,
  FaFilm,
  FaUser,
  FaMountain,
  // FaDrone,
  FaBoxOpen,
} from "react-icons/fa";
import { TbDrone } from "react-icons/tb";

const FullProServicesPage = () => {
  const services = [
    {
      title: "Wedding Photography",
      description:
        "Elegant and timeless photography capturing every emotion of your special day.",
      icon: <FaCameraRetro />,
    },
    {
      title: "Wedding Videography",
      description:
        "Cinematic wedding films that beautifully narrate your love story.",
      icon: <FaVideo />,
    },
    {
      title: "Pre-Wedding Shoot",
      description:
        "Creative pre-wedding shoots at stunning locations with cinematic aesthetics.",
      icon: <FaHeart />,
    },
    {
      title: "Candid Photography",
      description:
        "Natural, unposed moments captured with an artistic documentary approach.",
      icon: <FaSmile />,
    },
    {
      title: "Highlight Films",
      description:
        "Short cinematic highlight videos showcasing the best moments of your wedding.",
      icon: <FaStar />,
    },
    {
      title: "Event Photography",
      description:
        "Professional coverage for weddings, corporate events, and celebrations.",
      icon: <FaBuilding />,
    },
    {
      title: "Drone Photography & Videography",
      description:
        "Aerial shots that add grandeur and cinematic depth to your events.",
      icon: <TbDrone />,
    },
  ];

  return (
    <section className="bg-[#0F0F0F] text-white py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-14 text-[#C89B3C] text-center">
          Our Professional Services
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, description, icon }) => (
            <div
              key={title}
              className="group bg-[#1C1C1C] p-7 rounded-xl shadow-lg 
                         hover:shadow-[#C89B3C]/40 transition-all duration-300 
                         transform hover:-translate-y-2"
            >
              {/* ICON */}
              <div
                className="text-4xl mb-5 text-[#C89B3C]
                           transform transition duration-300 
                           group-hover:scale-125 group-hover:rotate-6"
              >
                {icon}
              </div>

              {/* TEXT */}
              <h2 className="text-xl font-semibold mb-3">{title}</h2>
              <p className="text-gray-300 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullProServicesPage;
