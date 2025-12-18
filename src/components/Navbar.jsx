import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/"); // home page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll
    });
  };
  const [open, setOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Packages",
    "Contact",
  ];

  return (
    <header className="bg-[#1C1C1C] text-white fixed top-0 left-0 w-full z-50">
      <nav className="h-16 flex justify-between md:justify-around items-center px-6">
        {/* Logo */}
        <h3 className="text-lg text-[#C89B3C] font-semibold">
          <Link onClick={handleLogoClick} to="/">
            DS Photography
          </Link>
        </h3>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-[#C89B3C] transition duration-200 p-1.5"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-[#1C1C1C] px-8 pb-6 space-y-4">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="block hover:text-[#C89B3C] transition duration-200"
                onClick={() => setOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
