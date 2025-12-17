import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        
        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold mb-3">DS Photography4u</h3>
          <p className="text-sm text-gray-400">
            Capturing moments, creating memories.  
            Professional photography for every occasion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-medium mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Services", "Portfolio", "Packages", "Contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-[#C89B3C] transition"
                >
                  {item}
                </Link>
                </li>
              )
            )}
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
        © {new Date().getFullYear()} DS Photography4u. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
