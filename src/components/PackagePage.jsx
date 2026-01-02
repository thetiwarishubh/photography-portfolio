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
            "Pre-Wedding + Haldi / Mehndi + Wedding Day",
            "Professional Team (4 Members)",
            "2 Candid Photographers",
            "1 Cinematographer",
            "1 Traditional Videographer",
          ],
        },
        {
          heading: "Photography Deliverables",
          points: [
            "500+ Edited High-Resolution Images",
            "Luxury Album (50 Sheets, 14x40 inch)",
            "LED Photo Frame (20x30 inch)",
          ],
        },
        {
          heading: "Video Deliverables",
          points: [
            "Cinematic Teaser + Highlight Film",
            "25–30 Minute Feature Film",
            "Traditional Video (90–120 Minutes)",
            "3 Social Media Reels",
          ],
        },
        {
          heading: "Digital Delivery",
          points: [
            "All Raw Data via Client Hard Drive",
            "64GB Branded USB 3.0",
            "1-Year Online Gallery",
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
            "2–3 Hour Photoshoot",
            "One Location",
            "1 Photographer + Assistant",
          ],
        },
        {
          heading: "Photography Deliverables",
          points: [
            "25+ Retouched Images",
            "Online Proofing Gallery",
            "Professional Lighting Setup",
          ],
        },
        {
          heading: "Video Deliverables",
          points: ["60s Cinematic Teaser", "Behind-the-Scenes Reel"],
        },
        {
          heading: "Final Delivery",
          points: ["Online Gallery (3 Months)", "Delivery: 7–10 Days"],
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
            "4–6 Hours Coverage",
            "Photographer + Videographer",
            "Corporate / Events",
          ],
        },
        {
          heading: "Photography Deliverables",
          points: [
            "75+ Edited Images",
            "24h Express Delivery",
            "Online Gallery",
          ],
        },
        {
          heading: "Video Deliverables",
          points: ["2–3 Min After-Movie", "Interview Clips", "Corporate Reel"],
        },
        {
          heading: "Final Delivery",
          points: ["All Raw Files", "Commercial Usage Rights"],
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
              flex flex-col h-full
              ${
                pkg.featured
                  ? "border-[#C89B3C] shadow-[#C89B3C]/30"
                  : "border-white/10"
              }`}
            >
              {/* CONTENT */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#C89B3C] mb-2">
                  {pkg.title}
                </h2>

                <p className="text-lg md:text-xl font-semibold mb-6">
                  {pkg.price}
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                  {pkg.sections.map((section, i) => (
                    <div key={i}>
                      <h3 className="font-semibold text-lg mb-3">
                        {section.heading}
                      </h3>

                      <ul className="space-y-2 text-gray-300 text-sm">
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
              </div>

              {/* BUTTON - FIXED BOTTOM */}
              <div className="mt-auto">
                <button
                  onClick={handleBook}
                  className="mt-10 bg-[#C89B3C] text-black px-10 py-3 rounded-lg font-semibold
                  hover:scale-105 hover:shadow-xl transition w-full lg:w-auto"
                >
                  Book Now
                </button>

                <p className="mt-4 text-sm text-gray-400">
                  * Customised packages available as per your budget
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesPage;
