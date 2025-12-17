const FeaturedWork = () => {
  return (
    <div className="bg-[#0F0F0F]">
    <section className="bg-[#0F0F0F] py-16 px-6 max-w-7xl mx-auto text-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#C89B3C] mb-6">
        Featured Work
      </h2>

      <p className="max-w-3xl mx-auto text-gray-300 mb-10">
        A curated selection of our finest photography and cinematic projects,
        highlighting our passion for storytelling and visual excellence.
      </p>

      {/* Slider / Grid placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-48 bg-gray-800 rounded-lg flex items-center justify-center">
          Wedding Films
        </div>
        <div className="h-48 bg-gray-800 rounded-lg flex items-center justify-center">
          Event Highlights
        </div>
        <div className="h-48 bg-gray-800 rounded-lg flex items-center justify-center">
          Creative Shoots
        </div>
      </div>
    </section>
    </div>
  );
};

export default FeaturedWork;
