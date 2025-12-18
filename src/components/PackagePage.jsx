import { useNavigate } from "react-router-dom";

const PackagesPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  const packages = [
    {
      name: "Basic Wedding Package",
      price: "₹50,000",
      features: [
        "Full-day wedding photography",
        "100+ edited photos",
        "Online gallery access",
        "1 Photographer",
      ],
    },
    {
      name: "Premium Wedding Package",
      price: "₹90,000",
      features: [
        "Full-day photography & videography",
        "200+ edited photos",
        "Highlight cinematic film (5–7 mins)",
        "Drone photography",
        "2 Photographers + 1 Videographer",
        "Online gallery & USB delivery",
      ],
      featured: true,
    },
    {
      name: "Luxury Wedding Package",
      price: "₹1,50,000",
      features: [
        "Pre-wedding + engagement + wedding",
        "Cinematic highlight & full film",
        "Drone photo & video",
        "Custom album design",
        "Unlimited edited photos",
        "3 Photographers + 2 Videographers",
        "Premium delivery packaging",
      ],
    },
    {
      name: "Event / Corporate Package",
      price: "₹30,000+",
      features: [
        "Photography & videography",
        "Edited photos & highlights",
        "Custom requirements available",
      ],
    },
    {
      name: "Portrait / Pre-Wedding Package",
      price: "₹15,000+",
      features: [
        "2–3 hour photoshoot",
        "Location of your choice",
        "20–30 edited photos",
        "Professional lighting setup",
      ],
    },
  ];

  return (
    <section className="bg-[#0F0F0F] text-white py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-14 text-[#C89B3C] text-center animate-fadeInUp">
          Our Packages
        </h1>

        {/* Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map(({ name, price, features, featured }, index) => (
            <div
              key={name}
              style={{ animationDelay: `${index * 120}ms` }}
              className={`
                relative bg-[#1C1C1C] p-8 rounded-2xl shadow-lg
                transform transition-all duration-500
                hover:-translate-y-3 hover:scale-[1.02]
                animate-fadeInUp
                ${
                  featured
                    ? "border-2 border-[#C89B3C] shadow-[#C89B3C]/40"
                    : ""
                }
              `}
            >
              {/* Featured badge */}
              {featured && (
                <span className="absolute -top-3 right-6 bg-[#C89B3C] text-black text-sm font-semibold px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
              )}

              {/* Title */}
              <h2 className="text-2xl font-bold mb-3 text-[#C89B3C]">{name}</h2>

              {/* Price */}
              <p className="text-xl font-semibold mb-6 animate-pulseSlow">
                {price}
              </p>

              {/* Features */}
              <ul className="mb-8 space-y-2">
                {features.map((feature, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-2">
                    <span className="text-[#C89B3C]">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                onClick={handleClick}
                className="
                  w-full bg-[#C89B3C] cursor-pointer text-black font-semibold py-3 rounded-lg
                  transition-all duration-300
                  hover:bg-yellow-500 hover:shadow-lg hover:scale-105
                  active:scale-95
                "
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease forwards;
          }

          @keyframes pulseSlow {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.75;
            }
          }

          .animate-pulseSlow {
            animation: pulseSlow 2.5s infinite;
          }
        `}
      </style>
    </section>
  );
};

export default PackagesPage;
