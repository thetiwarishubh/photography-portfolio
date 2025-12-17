const FullProServicesPage = () => {
  const services = [
    {
      title: "Wedding Photography",
      description:
        "Capture every special moment of the wedding day — from the vows to candid celebrations.",
      icon: "📸",
    },
    {
      title: "Wedding Videography",
      description:
        "Cinematic full wedding coverage, creating a story you'll cherish forever.",
      icon: "🎥",
    },
    {
      title: "Pre-Wedding Shoot",
      description:
        "Creative pre-wedding photoshoots at stunning locations to capture your love story.",
      icon: "🌅",
    },
    {
      title: "Engagement Photography",
      description:
        "Professional engagement photos that perfectly capture your excitement and bond.",
      icon: "💍",
    },
    {
      title: "Candid Photography",
      description:
        "Documentary-style candid photography to preserve natural emotions and interactions.",
      icon: "🎊",
    },
    {
      title: "Highlight Films",
      description:
        "Short cinematic highlight videos showcasing the best moments of your wedding or event.",
      icon: "✨",
    },
    {
      title: "Event Photography",
      description:
        "Capture corporate events, parties, or social gatherings with professionalism and style.",
      icon: "🏢",
    },
    {
      title: "Event Videography",
      description:
        "Full video coverage of events, ensuring every important moment is recorded beautifully.",
      icon: "🎬",
    },
    {
      title: "Portrait Sessions",
      description:
        "Creative individual, couple, or family portraits with professional lighting and composition.",
      icon: "👤",
    },
    {
      title: "Outdoor & Destination Shoots",
      description:
        "Travel and outdoor photography capturing landscapes, nature, and lifestyle moments.",
      icon: "🌄",
    },
    {
      title: "Drone Photography & Videography",
      description:
        "Aerial shots for weddings, events, and cinematic projects for a breathtaking perspective.",
      icon: "🚁",
    },
    {
      title: "Commercial & Product Shoots",
      description:
        "Professional shoots for brands, products, and marketing campaigns.",
      icon: "🏷️",
    },
  ];

  return (
    <section className="bg-[#0F0F0F] text-white py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-[#C89B3C] text-center">
          Our Services
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, description, icon }) => (
            <div
              key={title}
              className="bg-[#1C1C1C] p-6 rounded-lg shadow-lg hover:shadow-[#C89B3C]/50 transition transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullProServicesPage;
