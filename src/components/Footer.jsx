import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex gap-3 cursor-pointer">
            <img
              src={Logo}
              alt="DS Photography Logo"
              className="w-10 h-10 object-contain"
            />

            <div className="flex flex-col leading-tight">
              <span className="text-lg md:text-xl text-[#C89B3C] font-bold tracking-wide">
                DS PHOTOGRAPHY
              </span>
              <span className="text-[10px] md:text-xs tracking-[0.2em] text-gray-400 uppercase">
                We Capture Happiness
              </span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pl-1">
            <a
              href="https://www.facebook.com/dsphotography4u"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-[#C89B3C] hover:scale-110 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/dsphotography4u"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-[#C89B3C] hover:scale-110 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.youtube.com/@dsphotography4u"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-gray-400 hover:text-[#C89B3C] hover:scale-110 transition"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-medium mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              "Home",
              "About",
              "Services",
              "Portfolio",
              "Packages",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-[#C89B3C] transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-medium mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📍 Shital Bazar, Ghoghraha, Bariyadih, Bihar 845435</li>

            <li>
              📞{" "}
              <a
                href="tel:+918298246846"
                className="hover:text-[#C89B3C] transition"
              >
                +91 82982 46846
              </a>
            </li>

            <li>
              ✉️{" "}
              <a
                href="mailto:dsphotography4u@gmail.com"
                className="hover:text-[#C89B3C] transition"
              >
                dsphotography4u@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} DS Photography. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
