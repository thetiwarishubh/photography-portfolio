import { wedding, event, cinematic } from "../assets/assets";

const FeaturedWork = () => {
  return (
    <div className="bg-[#0F0F0F]">
      <section className="bg-[#0F0F0F] py-16 px-6 max-w-7xl mx-auto text-white">
        <h2 className="text-2xl md:text-3xl font-normal tracking-wide mb-6 text-center">
          Featured Work
        </h2>

        <p className="text-sm md:text-base text-gray-300 mb-10 text-center">
          A curated selection of our finest photography and cinematic projects,
          highlighting our passion for storytelling and visual excellence.
        </p>

        {/* Slider / Grid placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Wedding Films */}
          <div className="group relative overflow-hidden rounded-xl cursor-pointer">
            <img
              src={wedding}
              alt="Wedding Films"
              className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-lg font-semibold">Wedding Films</span>
            </div>
          </div>

          {/* Event Highlights */}
          <div className="group relative overflow-hidden rounded-xl cursor-pointer">
            <img
              src={event}
              alt="Event Highlights"
              className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-lg font-semibold">Event Highlights</span>
            </div>
          </div>

          {/* Creative Shoots */}
          <div className="group relative overflow-hidden rounded-xl cursor-pointer">
            <img
              src={cinematic}
              alt="Creative Shoots"
              className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-lg font-semibold">Creative Shoots</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedWork;
