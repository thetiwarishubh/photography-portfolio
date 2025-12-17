const Services = () => {
  const services = [
    {
      title: "Wedding Photography",
      description:
        "Capturing every beautiful moment of your special day with elegance and style.",
    },
    {
      title: "Event Coverage",
      description:
        "Professional photography for corporate events, parties, and more.",
    },
    {
      title: "Cinematic Films",
      description:
        "High-quality cinematic storytelling to bring your memories alive.",
    },
  ];

  return (
    <section className="bg-[#1C1C1C] text-white py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-[#C89B3C] mb-10 text-center">
        Our Services
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map(({ title, description }) => (
          <div
            key={title}
            className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg hover:shadow-[#C89B3C]/50 transition"
          >
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
