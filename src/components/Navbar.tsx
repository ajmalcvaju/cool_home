import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { BUSINESS_INFO } from "../data/siteData";

export default function Navbar({ currentRoute }: { currentRoute: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/home", path: "/home" },
    { label: "About", href: "/about", path: "/about" },
    { label: "AC Services", href: "/ac-services", path: "/ac-services" },
    { label: "Water Purifier", href: "/water-purifier", path: "/water-purifier" },
    { label: "Contact", href: "/contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/home" && (currentRoute === "/" || currentRoute === "/home")) return true;
    return currentRoute === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-slate-100"
          : "bg-white/70 backdrop-blur-sm py-5 border-b border-slate-100/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo & Subtitle */}
          <a href="/home" className="flex flex-col group select-none">
            <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-primary-dark group-hover:text-primary-blue transition-colors">
              COOL <span className="text-accent-cyan">HOME</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-muted">
              AC & Water Purifier Solutions
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-semibold text-sm transition-all relative py-1.5 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-blue after:transition-transform ${
                  isActive(link.path)
                    ? "text-primary-blue after:scale-x-100"
                    : "text-slate-700 hover:text-primary-blue after:scale-x-0 hover:after:scale-x-100 after:origin-left"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-5">
            <a
              href={BUSINESS_INFO.phoneLink}
              className="flex items-center space-x-2.5 text-slate-700 hover:text-primary-blue font-semibold transition-colors group"
            >
              <span className="p-2 rounded-full bg-slate-100 group-hover:bg-sky-100 transition-colors">
                <Phone className="w-4 h-4 text-primary-blue" />
              </span>
              <span className="text-sm font-bold">Call Now</span>
            </a>
            <a
              href="/contact"
              className="flex items-center space-x-2 bg-accent-orange hover:bg-accent-orange-hover text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Service</span>
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-primary-dark hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-6 border-b border-slate-100">
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-primary-dark">
                  COOL <span className="text-accent-cyan">HOME</span>
                </span>
                <span className="text-[9px] uppercase font-semibold text-neutral-muted">
                  AC & Purifier Solutions
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="py-8 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-semibold text-lg py-2.5 block border-b border-slate-50 transition-colors ${
                    isActive(link.path)
                      ? "text-primary-blue border-l-4 border-primary-blue pl-3 font-bold"
                      : "text-slate-700 hover:text-primary-blue"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 border-t border-slate-100 pt-6">
            <a
              href={BUSINESS_INFO.phoneLink}
              className="flex items-center justify-center space-x-3 w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-3.5 rounded-xl font-bold transition-all"
            >
              <Phone className="w-5 h-5 text-primary-blue" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <a
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-3 w-full bg-accent-orange hover:bg-accent-orange-hover text-white py-3.5 rounded-xl font-bold shadow-lg shadow-orange-500/10 transition-all cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>Book a Service</span>
            </a>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-xs z-40 lg:hidden"
        />
      )}
    </nav>
  );
}
