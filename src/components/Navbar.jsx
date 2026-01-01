import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png"; // 👈 logo import

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setOpen(false);
  };

  const navItems = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Packages",
    "Contact",
  ];

  return (
    <header className="bg-[#1C1C1C] text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <nav className="h-16 flex justify-between md:justify-around items-center px-6">
        {/* Logo + Text */}
        <div
          onClick={handleLogoClick}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src={Logo}
            alt="DS Photography Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-lg text-[#C89B3C] font-bold tracking-wide">
            DS Photography
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative hover:text-[#C89B3C] transition font-semibold duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C89B3C] after:transition-all hover:after:w-full"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.75 bg-white"></span>
          <span className="w-6 h-0.75 bg-white"></span>
          <span className="w-6 h-0.75 bg-white"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-[#1C1C1C] px-8 pb-6 space-y-4 animate-fadeIn">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="block hover:text-[#C89B3C] font-semibold transition duration-200"
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
