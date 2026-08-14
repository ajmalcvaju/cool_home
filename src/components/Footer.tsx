import { BUSINESS_INFO } from "../data/siteData";
import { Phone, MessageSquare, Mail, MapPin, ChevronRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/home" },
    { label: "About Us", href: "/about" },
    { label: "AC Services", href: "/ac-services" },
    { label: "Water Purifier", href: "/water-purifier" },
    { label: "Home Appliances", href: "/appliances" },
    { label: "Solar Energy", href: "/solar" },
    { label: "Contact Us", href: "/contact" },
  ];

  const servicesLinks = [
    { label: "AC Jet Servicing & Gas", href: "/ac-services" },
    { label: "RO Filter Replacement", href: "/water-purifier" },
    { label: "Refrigerator Repair", href: "/appliances" },
    { label: "Washing Machine Service", href: "/appliances" },
    { label: "Rooftop Solar Installation", href: "/solar" },
    { label: "Solar Panel Maintenance", href: "/solar" },
  ];

  return (
    <footer className="bg-primary-dark text-slate-300 pt-20 pb-10 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16 text-left">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <a href="/home" className="flex flex-col select-none">
              <span className="font-extrabold text-2xl tracking-tight text-white">
                COOL <span className="text-accent-cyan">HOME</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-0.5">
                Cooling • Appliances • Solar Solutions
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Complete sales, installation, repair, and AMC maintenance for Air Conditioners, RO Water Purifiers, Refrigerators, Washing Machines, and Rooftop Solar Panel systems.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-extrabold text-white text-base tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white flex items-center space-x-1.5 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-accent-cyan opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 transition-all" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-extrabold text-white text-base tracking-wide">
              Services
            </h4>
            <ul className="space-y-2.5">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white flex items-center space-x-1.5 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-accent-cyan opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 transition-all" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-extrabold text-white text-base tracking-wide">
              Contact Us
            </h4>
            <div className="space-y-3.5 text-sm text-slate-400">
              <a
                href={BUSINESS_INFO.phoneLink}
                className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors"
              >
                <div className="p-2 rounded-lg bg-white/5 text-accent-cyan">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-bold">{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors"
              >
                <div className="p-2 rounded-lg bg-white/5 text-emerald-400">
                  <MessageSquare className="w-4 h-4 fill-current" />
                </div>
                <span>WhatsApp Message</span>
              </a>

              <div className="flex items-center space-x-3 text-slate-300">
                <div className="p-2 rounded-lg bg-white/5 text-accent-cyan">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="break-all text-xs">{BUSINESS_INFO.email}</span>
              </div>

              <div className="flex items-start space-x-3 text-slate-400 pt-1">
                <div className="p-2 rounded-lg bg-white/5 text-accent-orange shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs leading-relaxed">{BUSINESS_INFO.address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="/about" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="/about" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="/contact" className="hover:text-slate-400 transition-colors">Support</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
