import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const mobileLinks = [
    { label: "About", to: "/#about", key: "about" },
    { label: "Skills", to: "/#skills", key: "skills" },
    { label: "Projects", to: "/#projects", key: "projects" },
    { label: "Contact", to: "/contact", key: "contact" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(255, 249, 242, 0.78)" : "#FFF9F2",
        borderColor: scrolled
          ? "rgba(0, 62, 31, 0.12)"
          : "rgba(0, 62, 31, 0.15)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="w-full px-6 md:px-8 py-4 flex items-center justify-between">
        {/* Name */}
        <Link
          to="/#home"
          onClick={closeMenu}
          className="font-display text-xl md:text-2xl nav-name md:ml-20"
        >
          Neil Agnes Pimentel
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 md:mr-20">
          {mobileLinks.map((item) => (
            <Link
              key={item.key}
              to={item.to}
              className="nav-link"
              style={{
                color: active === item.key ? "var(--color-forest)" : undefined,
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
          style={{ color: "var(--color-forest)" }}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Toggle navigation</span>

          <span
            className={`absolute w-6 h-px transition-all duration-300 ${
              menuOpen ? "rotate-45" : "-translate-y-2"
            }`}
            style={{ backgroundColor: "var(--color-forest)" }}
          />

          <span
            className={`absolute w-6 h-px transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
            style={{ backgroundColor: "var(--color-forest)" }}
          />

          <span
            className={`absolute w-6 h-px transition-all duration-300 ${
              menuOpen ? "-rotate-45" : "translate-y-2"
            }`}
            style={{ backgroundColor: "var(--color-forest)" }}
          />
        </button>
      </div>

      {/* Mobile Floating Menu */}
      <div
        className={`md:hidden absolute right-6 top-full w-48 overflow-hidden border transition-all duration-300 origin-top-right ${
          menuOpen
            ? "opacity-100 scale-100 translate-y-2 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
        }`}
        style={{
          backgroundColor: "#FFF9F2",
          borderColor: "rgba(0, 62, 31, 0.18)",
          boxShadow: "0 12px 30px rgba(0, 62, 31, 0.08)",
        }}
      >
        <div className="px-5">
          {mobileLinks.map((item, index) => (
            <Link
              key={item.key}
              to={item.to}
              onClick={closeMenu}
              className={`block py-4 nav-link ${
                index !== mobileLinks.length - 1 ? "border-b" : ""
              }`}
              style={{
                borderColor: "rgba(0, 62, 31, 0.15)",
                color: active === item.key ? "var(--color-forest)" : undefined,
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
