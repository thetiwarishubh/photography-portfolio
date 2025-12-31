import { useNavigate } from "react-router-dom";

const PackagesPage = () => {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate("/contact");
  };

  const packages = [
    {
      title: "Basic Wedding Package",
      price: "₹50,000",
      sections: [
        {
          heading: "Coverage & Team",
          points: [
            "Events Covered: Haldi / Mehndi + Wedding Day",
            "Professional Team (3 Members)",
            "1 Photographer (Candid & Portraits)",
            "1 Cinematographer (Cinematic shots)",
            "1 Videographer (Traditional Documentary)",
          ],
        },
        {
          heading: "Photography Deliverables",
          points: [
            "150+ Professionally Edited High-Resolution Images",
            "Printed Album: Karizma Photo Book (30 Sheets, 12x36 inch)",
          ],
        },
        {
          heading: "Video Deliverables",
          points: [
            "5-Minute Cinematic Story Film",
            "1-Minute Instagram Teaser",
            "Traditional Video (~120 Minutes, Full HD 1080p)",
            "1 Professionally Edited Reel",
          ],
        },
        {
          heading: "Final Delivery",
          points: [
            "Raw Data via Client Hard Drive",
            "1 Branded 32GB USB 3.0 Pendrive",
          ],
        },
      ],
    },

    {
      title: "Engagement & Reception Package",
      price: "₹25,000",
      sections: [
        {
          heading: "Coverage & Team",
          points: [
            "Duration: Up to 5–6 Hours",
            "Professional Team (2 Members)",
            "1 Photographer (Candid + Traditional)",
            "1 Traditional Videographer",
          ],
        },
        {
          heading: "Photography Deliverables",
          points: [
            "100+ Edited High-Resolution Images",
            "Quick Sneak Peek (10 Photos within 48 Hours)",
            "Private Online Gallery",
          ],
        },
        {
          heading: "Video Deliverables",
          points: [
            "45–60 Minute Full Traditional Video (Full HD)",
            "2–3 Minute Event Highlight",
            "1 Social Media Reel",
          ],
        },
        {
          heading: "Final Delivery",
          points: [
            "Raw Data (Client provides Hard Drive)",
            "Online Gallery Access for 3 Months",
          ],
        },
      ],
    },

    {
      title: "Premium Wedding Package",
      price: "₹90,000",
      featured: true,
      sections: [
        {
          heading: "Coverage & Team",
          points: [
            "Events: Mehndi + Haldi + Full Wedding Day",
            "Professional Team (4 Members)",
            "2 Photographers (Candid + Traditional)",
            "1 Cinematographer",
            "1 Videographer",
          ],
        },
        {
          heading: "Photography Deliverables",
          points: [
            "350+ Edited High-Resolution Images",
            "Premium Album: Karizma (40 Sheets, 12x36 inch)",
            "1 LED Photo Frame (12x18 inch)",
          ],
        },
        {
          heading: "Video Deliverables",
          points: [
            "5–7 Minute Cinematic Highlight Film",
            "1-Minute Social Media Teaser",
            "Traditional Full Documentary (~120 Minutes)",
            "2 Professionally Edited Reels",
          ],
        },
        {
          heading: "Final Delivery",
          points: [
            "Raw Data via Client Hard Drive",
            "1 Branded 32GB USB 3.0 Pendrive",
            "Private Online Gallery",
          ],
        },
      ],
    },

    {
      title: "Luxury Wedding Package",
      price: "₹1,50,000",
      sections: [
        {
          heading: "Coverage & Team",
          points: [
            "Events Covered: Pre-Wedding Shoot + Haldi / Mehndi + Wedding Day",
            "Professional Team (4 Members)",
            "2 Candid Photographers (Bride & Groom sides)",
            "1 Cinematographer (Cinematic Film / Reels)",
            "1 Traditional Videographer (Full Documentary)",
          ],
        },
        {
          heading: "Photography Deliverables",
          points: [
            "500+ Professionally Edited High-Resolution Images",
            "Luxury Album: Premium Photo Book (50 Sheets, 14x40 inch)",
            "Wall Art: 1 LED Photo Frame (20x30 inch)",
          ],
        },
        {
          heading: "Video Deliverables",
          points: [
            "1-Minute Instagram-ready Cinematic Teaser",
            "5–7 Minute Story-based Highlight Film",
            "25–30 Minute Cinematic Feature Film",
            "Traditional Video: 90–120 Minutes (Full HD 1080p)",
            "Social Media: 3 Edited Reels with Trending Audio",
            "LED Wall & JIB Crane: 16:9 ratio, 16x9 & 18–30 feet",
          ],
        },
        {
          heading: "Digital Delivery",
          points: [
            "All Raw Data via Client Hard Drive",
            "1 Branded 64GB USB 3.0 Pendrive",
            "1-Year Private Online Gallery for Sharing",
          ],
        },
      ],
    },

    {
      title: "Portrait / Pre-Wedding Package",
      price: "₹20,000+",
      sections: [
        {
          heading: "Session Details",
          points: [
            "2–3 Hour Dedicated Photoshoot",
            "One Location of Your Choice",
            "1 Photographer + 1 Assistant",
          ],
        },
        {
          heading: "Photography Deliverables",
          points: [
            "25+ Professionally Retouched Images",
            "Online Proofing Gallery",
            "Professional Lighting Setup",
          ],
        },
        {
          heading: "Video Deliverables",
          points: ["60-Second Cinematic Teaser", "Behind-the-Scenes Reel"],
        },
        {
          heading: "Final Delivery",
          points: [
            "Private Online Gallery (3 Months)",
            "Turnaround Time: 7–10 Business Days",
          ],
        },
      ],
    },

    {
      title: "Event / Corporate Package",
      price: "₹30,000+",
      sections: [
        {
          heading: "Coverage & Team",
          points: [
            "Up to 4–6 Hours Coverage",
            "1 Photographer + 1 Videographer",
            "Seminars, Conferences, Product Launches",
          ],
        },
        {
          heading: "Photography Deliverables",
          points: [
            "75+ High-Resolution Edited Images",
            "24-Hour Express Delivery for Top 10 Photos",
            "Professional Online Gallery",
          ],
        },
        {
          heading: "Video Deliverables",
          points: [
            "2–3 Minute Cinematic After-Movie",
            "Interview / Soundbite Clips",
            "Corporate Reel for LinkedIn / Instagram",
          ],
        },
        {
          heading: "Final Delivery",
          points: [
            "All Raw Files via Client Hard Drive",
            "Full Commercial Usage Rights",
          ],
        },
      ],
    },
  ];

  return (
    <section className="bg-[#0F0F0F] text-white py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 text-[#C89B3C]">
          Our Photography Packages
        </h1>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-[#1C1C1C] rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg border
                ${
                  pkg.featured
                    ? "border-[#C89B3C] shadow-[#C89B3C]/30"
                    : "border-white/10"
                }
              `}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#C89B3C] mb-2">
                {pkg.title}
              </h2>
              <p className="text-lg md:text-xl font-semibold mb-6">
                {pkg.price}
              </p>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
                {pkg.sections.map((section, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-lg mb-3 text-white">
                      {section.heading}
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      {section.points.map((point, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-[#C89B3C]">✔</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <button
                onClick={handleBook}
                className="mt-10 bg-[#C89B3C] w-full lg:w-auto text-black px-10 py-3 rounded-lg font-semibold
                hover:scale-105 hover:shadow-xl transition cursor-pointer"
              >
                Book Now
              </button>

              <p className="mt-4 text-sm text-gray-400">
                * Customised packages available as per your budget
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesPage;
