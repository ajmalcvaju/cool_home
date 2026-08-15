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
            <div className="flex flex-col items-end text-slate-700 select-none">
              <a
                href={BUSINESS_INFO.phoneLink}
                className="flex items-center space-x-1.5 hover:text-primary-blue font-bold text-xs transition-colors cursor-pointer group"
              >
                <Phone className="w-3.5 h-3.5 text-primary-blue shrink-0 animate-pulse" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              <a
                href={BUSINESS_INFO.phoneLink2}
                className="flex items-center space-x-1.5 hover:text-primary-blue font-bold text-[10px] text-neutral-muted transition-colors cursor-pointer mt-0.5"
              >
                <span>{BUSINESS_INFO.phone2}</span>
              </a>
            </div>
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
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-md border-b border-slate-100 z-50 transition-all duration-300 ease-in-out origin-top overflow-y-auto max-h-[calc(100vh-80px)] ${
          isMobileMenuOpen ? "scale-y-100 opacity-100 py-5" : "scale-y-0 opacity-0 h-0 pointer-events-none"
        }`}
      >
        <div className="px-4 sm:px-6 space-y-4">
          {/* Service App Grid Layout (6 items) */}
          <div className="grid grid-cols-3 gap-2">
            {navLinks.slice(0, 6).map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl text-center transition-all cursor-pointer border ${
                    active
                      ? "bg-sky-50/90 border-sky-100/80 text-primary-blue font-bold shadow-2xs"
                      : "bg-white border-slate-100 text-slate-700 hover:bg-slate-50 hover:text-primary-blue"
                  }`}
                >
                  <span className={`p-2 rounded-xl mb-1.5 transition-all ${
                    active ? "bg-white text-primary-blue shadow-xs" : "bg-slate-50/80 text-slate-500 shadow-2xs"
                  }`}>
                    <Icon className="w-5 h-5 shrink-0" />
                  </span>
                  <span className="text-[11px] font-extrabold tracking-tight leading-tight">{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Contact Banner Row */}
          <a
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all cursor-pointer ${
              isActive("/contact")
                ? "bg-sky-50/90 border-sky-100/80 text-primary-blue font-bold"
                : "bg-white border-slate-100 text-slate-700 hover:bg-slate-50 hover:text-primary-blue"
            }`}
          >
            <div className="flex items-center space-x-3 text-left">
              <span className={`p-2 rounded-xl shrink-0 ${isActive("/contact") ? "bg-white text-primary-blue shadow-xs" : "bg-slate-50/80 text-slate-500 shadow-2xs"}`}>
                <Mail className="w-5 h-5 shrink-0" />
              </span>
              <div>
                <span className="text-xs font-extrabold block text-slate-800">Support & Directions</span>
                <span className="text-[10px] text-neutral-muted block leading-none mt-0.5">Address, GPS location & Map</span>
              </div>
            </div>
            <span className="text-[11px] font-extrabold text-primary-blue bg-white border border-sky-100/50 px-2.5 py-1 rounded-lg">Open Info →</span>
          </a>

          {/* Footer Call-to-actions */}
          <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-slate-100">
            <div className="flex flex-col space-y-1.5 flex-1">
              <a
                href={BUSINESS_INFO.phoneLink}
                className="flex items-center justify-center space-x-2.5 bg-white hover:bg-slate-50 text-slate-800 py-2.5 rounded-xl font-bold border border-slate-200 transition-all text-[13px] cursor-pointer"
              >
                <Phone className="w-4 h-4 text-primary-blue animate-pulse" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              <a
                href={BUSINESS_INFO.phoneLink2}
                className="flex items-center justify-center space-x-2.5 bg-white hover:bg-slate-50 text-slate-800 py-2.5 rounded-xl font-bold border border-slate-200 transition-all text-[13px] cursor-pointer"
              >
                <Phone className="w-4 h-4 text-primary-blue" />
                <span>{BUSINESS_INFO.phone2}</span>
              </a>
            </div>
            <a
              href="/contact#booking-form"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-3 flex-1 bg-accent-orange hover:bg-accent-orange-hover text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all cursor-pointer text-sm min-h-[88px] sm:min-h-0"
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
          className="fixed inset-x-0 bottom-0 top-[64px] sm:top-[72px] bg-slate-900/40 z-40 lg:hidden"
        />
      )}
    </nav>
  );
}
