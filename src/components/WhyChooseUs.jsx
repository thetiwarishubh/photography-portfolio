const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Professional & Experienced Team",
      description:
        "Our skilled photographers and videographers bring creativity, passion, and years of experience to every project.",
    },
    {
      title: "High-Quality Equipment",
      description:
        "We use advanced cameras, lenses, and editing tools to deliver premium-quality photos and cinematic videos.",
    },
    {
      title: "Creative Editing & Storytelling",
      description:
        "Each project is carefully edited with a cinematic touch to tell your story in a timeless and artistic way.",
    },
    {
      title: "On-Time Delivery",
      description:
        "We respect your time and ensure that your photos and videos are delivered on schedule without compromise.",
    },
    {
      title: "Personalized Approach",
      description:
        "Every client is unique, and we customize our services to match your vision, style, and expectations.",
    },
    {
      title: "Trusted by Happy Clients",
      description:
        "Our commitment to quality and professionalism has earned us the trust of countless satisfied clients.",
    },
  ];

  return (
    <div className="bg-[#1C1C1C]">
    <section className="bg-[#1C1C1C] text-white py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-[#C89B3C] mb-10 text-center">
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {reasons.map(({ title, description }) => (
          <div
            key={title}
            className="bg-[#0F0F0F] p-6 md:p-10 rounded-lg shadow-lg hover:shadow-[#C89B3C]/50 transition"
          >
            <h3 className="text-lg font-semibold mb-3">{title}</h3>
            <p className="text-gray-300 text-[15px]">{description}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default WhyChooseUs;
