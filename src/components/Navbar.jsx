import { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isMenuOpen
          ? "bg-slate-900/95 backdrop-blur-sm shadow-lg border-b border-slate-800"
          : scrolled
          ? "bg-slate-900/95 backdrop-blur-sm shadow-lg border-b border-slate-800"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-bold text-emerald-400 tracking-tighter"
        >
          &lt;Hritik/&gt;
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#about" onClick={handleLinkClick}>
            About
          </NavLink>
          <NavLink href="#skills" onClick={handleLinkClick}>
            Skills
          </NavLink>
          <NavLink href="#projects" onClick={handleLinkClick}>
            Projects
          </NavLink>
          <NavLink href="#contact" onClick={handleLinkClick}>
            Contact
          </NavLink>
          <a
            href="https://drive.google.com/file/d/1KsxJyXVqf22-T_S4nbRPt4GM2braaFfg/view?usp=sharing"
            target="_blank"
            className="px-4 py-2 text-sm font-medium text-emerald-400 border border-emerald-400 rounded hover:bg-emerald-400/10 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-200 hover:text-emerald-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col items-center shadow-2xl">
          <NavLink mobile href="#about" onClick={handleLinkClick}>
            About
          </NavLink>
          <NavLink mobile href="#skills" onClick={handleLinkClick}>
            Skills
          </NavLink>
          <NavLink mobile href="#projects" onClick={handleLinkClick}>
            Projects
          </NavLink>
          <NavLink mobile href="#contact" onClick={handleLinkClick}>
            Contact
          </NavLink>
          <div className="py-4">
            <a
              href="https://drive.google.com/file/d/1KsxJyXVqf22-T_S4nbRPt4GM2braaFfg/view?usp=sharing"
              target="_blank"
              className="px-4 py-2 text-sm font-medium text-emerald-400 border border-emerald-400 rounded hover:bg-emerald-400/10 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
