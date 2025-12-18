const AboutPage = () => {
  return (
    <section className="bg-[#0F0F0F] text-white min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1">
          <img
            className="rounded-2xl shadow-lg object-cover w-full h-80 md:h-full"
            src="https://i.pinimg.com/736x/b9/c5/23/b9c52342690fdaae1c9787f918b58edc.jpg"
            alt="DS Photography Studio"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-6 text-[#C89B3C]">
            About DS Photography4u
          </h1>

          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
            DS Photography4u is a professional photography and videography
            studio dedicated to capturing authentic emotions, timeless moments,
            and visually compelling stories. We specialize in wedding
            photography, cinematic films, and premium event coverage.
          </p>

          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
            With a creative eye and a strong focus on storytelling, our team
            blends modern techniques with artistic vision to deliver images and
            films that feel natural, elegant, and meaningful. Every project is
            approached with precision, passion, and attention to detail.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Whether it’s an intimate celebration or a grand production, we work
            closely with our clients to understand their vision and transform
            moments into lasting memories. At DS Photography4u, excellence,
            creativity, and professionalism define everything we do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
