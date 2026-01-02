import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We’ll get back to you shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="bg-[#0F0F0F] text-white py-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light tracking-wide mb-3">Contact Us</h1>
          <p className="text-sm tracking-[0.2em] text-gray-400">
            Let’s talk about your story
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* LEFT INFO */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-[#C89B3C]">
              Get in Touch
            </h2>

            <p className="text-gray-300 leading-relaxed">
              We specialize in wedding photography, cinematic films, and
              storytelling. Reach us anytime.
            </p>

            <div className="space-y-5 text-gray-300">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#C89B3C]" />
                <span>dsphotography4u@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#C89B3C]" />
                <span>+91 82982 46846</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#C89B3C]" />
                <span>Shital Bazar, Ghoghraha, Bariyadih, Bihar 845435</span>
              </div>
            </div>

            {/* MAP (IMAGE-2 STYLE) */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
              <iframe
                title="DS Photography Location"
                src="https://www.google.com/maps?q=DS+PHOTOGRAPHY,+Shital+Bazar,+Ghoghraha,+Bariyadih,+Bihar+845435&output=embed"
                width="100%"
                height="300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#1C1C1C] p-8 rounded-2xl shadow-xl"
          >
            <div className="space-y-5">
              {[
                { label: "Name", name: "name", type: "text" },
                { label: "Email", name: "email", type: "email" },
                { label: "Subject", name: "subject", type: "text" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block mb-1 font-medium">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md bg-[#0F0F0F]
                               border border-gray-700
                               focus:border-[#C89B3C]
                               focus:ring-1 focus:ring-[#C89B3C]
                               outline-none transition"
                  />
                </div>
              ))}

              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md bg-[#0F0F0F]
                             border border-gray-700
                             focus:border-[#C89B3C]
                             focus:ring-1 focus:ring-[#C89B3C]
                             outline-none transition"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-[#C89B3C] text-black
                           font-semibold py-3 rounded-md
                           hover:bg-yellow-500 hover:shadow-lg
                           active:scale-95 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
