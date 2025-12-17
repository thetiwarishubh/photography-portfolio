import { useState } from "react";

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
    console.log(formData);
    alert("Message sent! We will contact you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="bg-[#0F0F0F] text-white py-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-[#C89B3C] text-center">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#C89B3C]">Get in Touch</h2>
            <p className="text-gray-300 leading-relaxed">
              Have a question or want to book a session? Fill out the form, or reach us through the details below.
            </p>
            <div className="space-y-2">
              <p>
                <span className="font-semibold text-[#C89B3C]">Email:</span> info@dsphotography4u.com
              </p>
              <p>
                <span className="font-semibold text-[#C89B3C]">Phone:</span> +91 98765 43210
              </p>
              <p>
                <span className="font-semibold text-[#C89B3C]">Location:</span> Mumbai, India
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-[#C89B3C] transition text-2xl">📸</a>
              <a href="#" className="hover:text-[#C89B3C] transition text-2xl">🎥</a>
              <a href="#" className="hover:text-[#C89B3C] transition text-2xl">📍</a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              className="bg-[#1C1C1C] p-8 rounded-lg shadow-lg space-y-4"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block mb-1 font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded bg-[#0F0F0F] border border-gray-700 focus:border-[#C89B3C] outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded bg-[#0F0F0F] border border-gray-700 focus:border-[#C89B3C] outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded bg-[#0F0F0F] border border-gray-700 focus:border-[#C89B3C] outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="w-full p-3 rounded bg-[#0F0F0F] border border-gray-700 focus:border-[#C89B3C] outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#C89B3C] text-black font-semibold py-3 px-6 rounded hover:bg-yellow-500 transition w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
