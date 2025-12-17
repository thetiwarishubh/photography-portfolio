const Portfolio = () => {
  // Sample portfolio items - replace with real photos URLs or components
  const portfolioItems = [
    { id: 1, title: "Wedding Shoot", imageUrl: "https://via.placeholder.com/400x300" },
    { id: 2, title: "Cinematic Film", imageUrl: "https://via.placeholder.com/400x300" },
    { id: 3, title: "Event Coverage", imageUrl: "https://via.placeholder.com/400x300" },
    { id: 4, title: "Portrait Session", imageUrl: "https://via.placeholder.com/400x300" },
    { id: 5, title: "Outdoor Shoot", imageUrl: "https://via.placeholder.com/400x300" },
    { id: 6, title: "Creative Shots", imageUrl: "https://via.placeholder.com/400x300" },
  ];

  return (
    <section className="bg-[#0F0F0F] py-16 px-6 max-w-7xl mx-auto text-white">
      <h2 className="text-3xl font-bold text-[#C89B3C] mb-10 text-center">
        Portfolio
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {portfolioItems.map(({ id, title, imageUrl }) => (
          <div
            key={id}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-[#C89B3C]/60 transition"
          >
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4 bg-[#1C1C1C]">
              <h3 className="font-semibold">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
