import { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  Phone, 
  Calendar, 
  Home as HomeIcon, 
  Info, 
  Wind, 
  Droplet, 
  Tv, 
  Sun, 
  Mail 
} from "lucide-react";
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
    { label: "Home", href: "/home", path: "/home", icon: HomeIcon },
    { label: "About", href: "/about", path: "/about", icon: Info },
    { label: "AC Services", href: "/ac-services", path: "/ac-services", icon: Wind },
    { label: "Water Purifier", href: "/water-purifier", path: "/water-purifier", icon: Droplet },
    { label: "Appliances", href: "/appliances", path: "/appliances", icon: Tv },
    { label: "Solar Energy", href: "/solar", path: "/solar", icon: Sun },
    { label: "Contact", href: "/contact", path: "/contact", icon: Mail },
  ];

  const isActive = (path: string) => {
    if (path === "/home" && (currentRoute === "/" || currentRoute === "/home")) return true;
    return currentRoute === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-slate-100/80 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-4"
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
              Cooling • Appliances • Solar
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-semibold text-sm transition-all relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-blue after:transition-transform ${
                  isActive(link.path)
                    ? "text-primary-blue after:scale-x-100 font-bold"
                    : "text-slate-700 hover:text-primary-blue after:scale-x-0 hover:after:scale-x-100 after:origin-left"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={BUSINESS_INFO.phoneLink}
              className="flex items-center space-x-2 text-slate-700 hover:text-primary-blue font-semibold transition-colors group cursor-pointer"
            >
              <span className="p-2 rounded-full bg-slate-100 group-hover:bg-sky-100 transition-colors">
                <Phone className="w-4 h-4 text-primary-blue" />
              </span>
              <span className="text-xs font-bold">{BUSINESS_INFO.phone}</span>
            </a>
            <a
              href="/contact#booking-form"
              className="flex items-center space-x-2 bg-accent-orange hover:bg-accent-orange-hover text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
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

      {/* Mobile Navigation Dropdown Menu (Full Horizontal Cover) */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100 transition-all duration-300 ease-in-out origin-top overflow-y-auto max-h-[calc(100vh-80px)] ${
          isMobileMenuOpen ? "scale-y-100 opacity-100 py-6" : "scale-y-0 opacity-0 h-0 pointer-events-none"
        }`}
      >
        <div className="px-4 sm:px-6 space-y-5">
          <div className="grid sm:grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3.5 px-4 py-3 rounded-2xl transition-all cursor-pointer group ${
                    isActive(link.path)
                      ? "bg-sky-50/70 text-primary-blue font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-primary-blue"
                  }`}
                >
                  <Icon className={`w-5 h-5 shrink-0 transition-transform group-hover:scale-110 ${isActive(link.path) ? "text-primary-blue" : "text-slate-400 group-hover:text-primary-blue"}`} />
                  <span className="text-sm font-semibold">{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-slate-100">
            <a
              href={BUSINESS_INFO.phoneLink}
              className="flex items-center justify-center space-x-3 flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 py-3.5 rounded-2xl font-bold transition-all text-sm cursor-pointer"
            >
              <Phone className="w-4 h-4 text-primary-blue animate-pulse" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <a
              href="/contact#booking-form"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-3 flex-1 bg-accent-orange hover:bg-accent-orange-hover text-white py-3.5 rounded-2xl font-bold shadow-md hover:shadow-lg transition-all cursor-pointer text-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Service</span>
            </a>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-x-0 bottom-0 top-[64px] sm:top-[72px] bg-slate-900/30 backdrop-blur-xs z-40 lg:hidden"
        />
      )}
    </nav>
  );
}
