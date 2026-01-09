import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    setLoading(true);

    const phoneNumber = "918298246846";

    const whatsappMessage = `
      Hello DS Photography ☺️

      📌 Name: ${formData.name}   
      📧 Email: ${formData.email}
      🎯 Service: ${formData.subject}
      💬 Message: ${formData.message}
      `;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    setLoading(false);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
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
                <a
                  href="mailto:dsphotography4u@gmail.com"
                  className="hover:text-[#C89B3C] transition"
                >
                  dsphotography4u@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#C89B3C]" />
                <a
                  href="tel:+918298246846"
                  className="hover:text-[#C89B3C] transition"
                >
                  +91 82982 46846
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#C89B3C]" />
                <span>Shital Bazar, Ghoghraha, Bariyadih, Bihar 845435</span>
              </div>
            </div>

            {/* MAP */}
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
              {/* Name */}
              <div>
                <label className="block mb-1 font-medium">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="w-full p-3 rounded-md bg-[#0F0F0F]
                             border border-gray-700
                             focus:border-[#C89B3C]
                             outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 font-medium">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="w-full p-3 rounded-md bg-[#0F0F0F]
                             border border-gray-700
                             focus:border-[#C89B3C]
                             outline-none"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block mb-1 font-medium">Service *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md bg-[#0F0F0F]
                             border border-gray-700
                             focus:border-[#C89B3C]
                             outline-none cursor-pointer"
                >
                  <option value="">Select Service</option>
                  <option value="Wedding Photography">
                    Wedding Photography
                  </option>
                  <option value="Cinematic Film">Cinematic Film</option>
                  <option value="Pre Wedding Shoot">Pre Wedding Shoot</option>
                  <option value="Event Coverage">Event Coverage</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-1 font-medium">Message *</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md bg-[#0F0F0F]
                             border border-gray-700
                             focus:border-[#C89B3C]
                             outline-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 bg-[#C89B3C] text-black
                           font-semibold py-3 rounded-md
                           flex items-center justify-center gap-2
                           hover:bg-yellow-500
                           disabled:opacity-60 transition cursor-pointer"
              >
                <FaWhatsapp />
                {loading ? "Sending..." : "Send on WhatsApp"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
