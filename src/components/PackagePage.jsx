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
            "Coverage : 2 Days (Haldi / Mehndi + Wedding Day)",
            "Team : 3 (Photographer + Videographer + Cinematographer Wedding Day)",
          ],
        },
        {
          heading: "Photography Deliverables",
          points: [
            "150+ Edited High-Resolution Images",
            "Karizma Photo Book (30 Sheets, 12x36 inch)",
          ],
        },
        {
          heading: "Video Deliverables",
          points: [
            "5-Minute Cinematic Story Film",
            "1-Minute Instagram Teaser",
            "Traditional Video (~120 Minutes, Full HD 1080p)",
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
            "Coverage : 5–6 Hours",
            "Team : 2 (Candid Photographer + Traditional Videographer)",
          ],
        },
        {
          heading: "Photography Deliverables",
          points: [
            "100+ Edited Images",
            "Sneak Peek 10 Photos within 48 Hours",
          ],
        },
        {
          heading: "Video Deliverables",
          points: [
            "60 Minute Full Video HD",
            "2–3 Minute Event Highlight",
            "1 Social Media Reel",
          ],
        },
        {
          heading: "Final Delivery",
          points: [
            "Raw Data (Client provides Hard Drive)",
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
            "Coverage : Mehndi + Haldi + Full Wedding Day",
            "Team : 4 (2 Photographers + 1 Cinematographer + 1 Videographer)",
          ],
        },
        {
          heading: "Photography Deliverables",
          points: [
            "350+ Edited Images",
            "Karizma (80 Page, 12x36 inch)",
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
          ],
        },
        {
          heading : "Bonus",
          points : [
            "LED Photo Frame (12x18) + Printed Coffee Mugs + Pendrive"
          ]
          
        }
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
            "Team : 4(2 Candid Photographers + 1 Cinematographer + 1 Videographer)",
          ],
        },
        {
          heading: "Photography Deliverables",
          points: [
            "500+ Edited Images",
            "Luxury Album (14x40 inch)",
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
          heading : "LED Wall & Crane",
          points : [
            "16:9 aspect ratio 16X9 feet & 18-30 feet."
          ]
        },
        {
          heading: "Digital Delivery",
          points: [
            "All Raw Data via Client Hard Drive",
            "64GB Branded USB 3.0",
          ],
        },
        {
          heading : "Bonus",
          points : [
            "LED Photo Frame (20x30) + Printed Coffee Mugs + Pendrive"
          ]
          
        }
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
            "Professional Lighting Setup",
          ],
        },
        {
          heading: "Video Deliverables",
          points: ["60s Cinematic Teaser", "BTS Reel"],
        },
        {
          heading: "Final Delivery",
          points: ["Raw Data Provided (on your HDD)"],
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
    <section className="bg-[#0F0F0F] text-white py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-light tracking-wide text-center mb-16">
          Our Packages
          <div className="w-24 h-[1px] bg-gray-600 mx-auto mt-6"></div>
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
                  hover:scale-105 hover:shadow-xl transition w-full lg:w-auto cursor-pointer"
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
