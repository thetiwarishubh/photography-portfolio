import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        {/* Brand */}
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
            <li>📍 Delhi, India</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ dsphotography4u@gmail.com</li>
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
