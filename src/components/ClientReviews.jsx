const ClientReviews = () => {
  return (
    <section className="py-16 px-6 bg-[#0F0F0F] text-white text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#C89B3C] mb-6">
        Client Reviews
      </h2>

      <p className="max-w-3xl mx-auto text-gray-300 mb-10">
        Hear from our clients who trusted us to capture their special moments
        and transform them into timeless memories.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#141414] p-6 rounded-lg">
          “Amazing experience! Truly cinematic work.”
        </div>
        <div className="bg-[#141414] p-6 rounded-lg">
          “Professional team with outstanding creativity.”
        </div>
        <div className="bg-[#141414] p-6 rounded-lg">
          “Highly recommend for weddings and events.”
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
