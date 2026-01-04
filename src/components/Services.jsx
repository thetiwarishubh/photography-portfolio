import { Link } from "react-router-dom";

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
    <div className="bg-[#1C1C1C]">
      <section className="bg-[#1C1C1C] text-white py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-normal tracking-wide mb-10 text-center">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(({ title, description }) => (
            <div
              key={title}
              className="bg-[#0F0F0F] p-6 md:p-10 rounded-lg shadow-lg hover:shadow-[#C89B3C]/50 transition"
            >
              <h3 className="text-lg font-medium mb-3">{title}</h3>
              <p className="text-gray-300 text-[15px]">{description}</p>
            </div>
          ))}
        </div>
        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            to="/services"
            className="bg-[#C89B3C] text-[#000] px-8 py-3 rounded-md font-semibold hover:scale-104 transition duration-400 cursor-pointer"
          >
            View All Services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
