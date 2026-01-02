import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      <nav className="min-h-[80px] flex justify-between lg:justify-around items-center px-6">
        
        {/* Logo */}
        <div
          onClick={handleLogoClick}
          className="flex items-center gap-3 cursor-pointer"
        >
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

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative text-[10px] md:text-xs tracking-[0.12em] uppercase font-medium
                hover:text-[#C89B3C] transition duration-200
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-[#C89B3C] after:transition-all hover:after:w-full"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          aria-label="Toggle Menu"
          aria-expanded={open}
          className="lg:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <ul className="lg:hidden bg-[#1C1C1C] px-8 pb-6 space-y-4">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="block uppercase tracking-wider hover:text-[#C89B3C] transition"
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
