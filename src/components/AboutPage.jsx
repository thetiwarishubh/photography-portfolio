const AboutPage = () => {
  return (
    <section className="bg-[#0F0F0F] text-white min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Image */}
        <div className="flex-1">
          <img
            className="rounded-2xl shadow-lg object-cover w-full h-80 md:h-full"
            src="https://i.pinimg.com/736x/b9/c5/23/b9c52342690fdaae1c9787f918b58edc.jpg"
            alt="studio-image"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-6 text-[#C89B3C]">About DS Photography4u</h1>
          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
            At DS Photography4u, we believe every moment deserves to be captured beautifully.  
            With years of experience in wedding and cinematic photography, our passion lies in telling your unique story through stunning visuals.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
            Our team is dedicated to delivering professional, creative, and personalized photography services that preserve your memories forever.  
            We work closely with clients to understand their vision and bring it to life with artistry and precision.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Whether it's an intimate wedding, a grand event, or a cinematic project, DS Photography4u is committed to excellence and capturing emotions that last a lifetime.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;
