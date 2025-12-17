const PackagesPage = () => {
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
        "Full-day wedding photography & videography",
        "200+ edited photos",
        "Highlight cinematic film (5-7 mins)",
        "Drone photography",
        "2 Photographers + 1 Videographer",
        "Online gallery & USB delivery",
      ],
    },
    {
      name: "Luxury Wedding Package",
      price: "₹1,50,000",
      features: [
        "Full wedding coverage (pre-wedding, engagement, wedding day)",
        "Cinematic films (Highlight + Full Film)",
        "Drone photography & videography",
        "Custom album design",
        "Unlimited edited photos",
        "3 Photographers + 2 Videographers",
        "Online gallery, USB & premium packaging",
      ],
    },
    {
      name: "Event / Corporate Package",
      price: "₹30,000+",
      features: [
        "Photography & videography coverage",
        "Edited photos & event highlights",
        "Custom requests available",
      ],
    },
    {
      name: "Portrait / Pre-Wedding Package",
      price: "₹15,000+",
      features: [
        "2-3 hour photoshoot",
        "Location of your choice",
        "20-30 edited photos",
        "Professional lighting & setup",
      ],
    },
  ];

  return (
    <section className="bg-[#0F0F0F] text-white py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-[#C89B3C] text-center">
          Our Packages
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map(({ name, price, features }) => (
            <div
              key={name}
              className="bg-[#1C1C1C] p-8 rounded-xl shadow-lg hover:shadow-[#C89B3C]/50 transition transform hover:-translate-y-2"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#C89B3C]">{name}</h2>
              <p className="text-xl font-semibold mb-6">{price}</p>
              <ul className="mb-6 space-y-2">
                {features.map((feature, i) => (
                  <li key={i} className="text-gray-300 before:content-['✔'] before:text-[#C89B3C] before:mr-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-[#C89B3C] text-black font-semibold py-2 px-6 rounded hover:bg-yellow-500 transition">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesPage;
