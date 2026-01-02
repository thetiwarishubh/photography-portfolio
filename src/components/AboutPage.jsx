import { FaAward, FaUsers, FaCameraRetro } from "react-icons/fa";
import { owner } from "../assets/assets";

const AboutPage = () => {
  return (
    <section className="bg-[#0F0F0F] text-white min-h-screen px-6 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light tracking-wide mb-3">
            About Us
          </h1>
          <p className="uppercase text-sm tracking-[0.3em] text-gray-400">
            Our Accomplishments
          </p>
          <div className="w-24 h-[1px] bg-gray-600 mx-auto mt-6"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left Text */}
          <div className="flex-1 text-gray-300 text-[15px] leading-7 space-y-6">
            <p>
              <span className="text-white font-medium">DS Photography</span>, led
              by <span className="text-white font-medium">Dinesh Singh</span>, is
              a professionally established photography and cinematography brand
              with over <span className="text-[#C89B3C]">15 years of industry experience</span>.
              We deliver world-class creative photography services with a strong
              focus on quality, affordability, and artistic excellence.
            </p>

            <p>
              Our team of skilled photographers and videographers specializes in
              capturing a wide spectrum of visuals — from elegant portraits to
              authentic candid moments. We work extensively with natural light
              as well as advanced lighting setups, including professional
              softboxes and controlled studio environments.
            </p>

            <p>
              In addition to photography, we provide comprehensive services such
              as <span className="text-white">cinematography, videography, and
              premium event coverage</span>. Our approach is subtle and
              story-driven, allowing events to flow naturally without forced
              poses, preserving genuine emotions as they unfold.
            </p>

            <p>
              Trusted by <span className="text-[#C89B3C]">6000+ satisfied clients</span>,
              DS Photography has built a reputation for professionalism, safety,
              and attention to detail. Every project is executed using
              industry-standard equipment and a carefully planned workflow.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative">
            <img
              src={owner}
              alt="Founder - DS Photography"
              className="rounded-2xl shadow-2xl object-cover w-full h-[620px]"
            />

            {/* Experience Badge */}
            <div className="absolute -top-6 -right-6 bg-[#C89B3C] text-black px-5 py-3 rounded-full text-sm font-semibold shadow-lg">
              15+ Years Experience
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20">
          <div className="flex items-center gap-4 bg-[#1A1A1A] p-6 rounded-xl">
            <FaAward className="text-[#C89B3C] text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">15+ Years</h3>
              <p className="text-gray-400 text-sm">Professional Experience</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#1A1A1A] p-6 rounded-xl">
            <FaUsers className="text-[#C89B3C] text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">6000+ Clients</h3>
              <p className="text-gray-400 text-sm">Happy Customers</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#1A1A1A] p-6 rounded-xl">
            <FaCameraRetro className="text-[#C89B3C] text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Cinematic</h3>
              <p className="text-gray-400 text-sm">Storytelling Approach</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;
