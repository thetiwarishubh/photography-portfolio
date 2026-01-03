import {
  FaCameraRetro,
  FaVideo,
  FaHeart,
  FaSmile,
  FaBaby,
  FaCalendarCheck,
  FaFilm,
  FaBookOpen,
  FaCut,
  FaBroadcastTower,
  FaUserTie,
} from "react-icons/fa";
import { TbDrone } from "react-icons/tb";

const FullProServicesPage = () => {
  const services = [
    {
      title: "Wedding Photography",
      description:
        "Capturing the timeless beauty and traditions of your special day with elegance and emotion.",
      icon: <FaCameraRetro />,
    },
    {
      title: "Wedding Videography",
      description:
        "Complete cinematic coverage of your wedding celebrations with storytelling visuals.",
      icon: <FaVideo />,
    },
    {
      title: "Cinematography",
      description:
        "High-end storytelling using professional film techniques, grading, and cinematic frames.",
      icon: <FaFilm />,
    },
    {
      title: "Pre-Wedding & Engagement",
      description:
        "Creative and romantic sessions celebrating your journey before the the Big Day.",
      icon: <FaHeart />,
    },
    {
      title: "Candid Photography",
      description:
        "Capturing authentic, unscripted emotions and moments in between, naturally and beautifully.",
      icon: <FaSmile />,
    },
    {
      title: "Maternity & Newborn",
      description:
        "Preserving the tender first moments of your growing family with warmth and care.",
      icon: <FaBaby />,
    },
    {
      title: "Event Photography",
      description:
        "Professional coverage for corporate events, and celebrations.",
      icon: <FaCalendarCheck />,
    },
    {
      title: "Drone Photography & Videography",
      description:
        "Breathtaking 4K aerial views that give your events a grand cinematic perspective.",
      icon: <TbDrone />,
    },
    {
      title: "Portrait & Headshots",
      description:
        "High-end imagery for personal branding, performers, and corporate profiles.",
      icon: <FaUserTie />,
    },
    {
      title: "LED Wall & Crane",
      description:
        "Full-scale event production with live displays and dynamic camera angles.",
      icon: <FaBroadcastTower />,
    },
    {
      title: "Video Editing",
      description:
        "Expert post-production turning raw footage into a polished cinematic masterpiece.",
      icon: <FaCut />,
    },
    {
      title: "Photo Album Design & Printing",
      description:
        "Premium handcrafted albums designed to preserve your memories for generations.",
      icon: <FaBookOpen />,
    },
  ];

  return (
    <section className="bg-[#0F0F0F] text-white py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-light tracking-wide mb-14 text-center">
          Our Services
          <div className="w-24 h-[1px] bg-gray-600 mx-auto mt-6"></div>
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
                className="text-3xl mb-5 text-[#C89B3C]
                           transform transition duration-300 
                           group-hover:scale-125 group-hover:rotate-6"
              >
                {icon}
              </div>

              {/* TEXT */}
              <h2 className="text-lg font-semibold mb-3">{title}</h2>
              <p className="text-[15px] text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullProServicesPage;
