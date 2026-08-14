import { useState, useEffect, useRef, useCallback } from "react";
import { Phone, Calendar, ShieldCheck, CheckCircle2, ChevronLeft, ChevronRight, Wind, Droplet, Wrench, RefreshCw, Sun, RotateCcw } from "lucide-react";
import { BUSINESS_INFO } from "../data/siteData";

interface HeroSlide {
  id: string;
  badge: string;
  badgeIcon: any;
  headlineLine1: string;
  headlineHighlight: string;
  headlineLine2: string;
  subheadline: string;
  description: string;
  primaryImage: string;
  primaryImageAlt: string;
  secondaryImage: string;
  secondaryImageAlt: string;
  floatingBadge1: { title: string; subtitle: string; icon: any; color: string };
  floatingBadge2: { title: string; subtitle: string; icon: any; color: string };
  highlights: string[];
  ctaPrimaryText: string;
  ctaPrimaryLink: string;
  ctaSecondaryText: string;
  ctaSecondaryLink: string;
  bgGradient: string;
  accentColor: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-ac",
    badge: "Certified AC Sales & Service",
    badgeIcon: Wind,
    headlineLine1: "Stay Cool.",
    headlineHighlight: "Breathe Better.",
    headlineLine2: "Peak Comfort.",
    subheadline: "Complete Air Conditioning Sales, Installation & Servicing",
    description: "Beat the heat with reliable split and inverter AC installation, jet-pump wet servicing, coil cleaning, and prompt doorstep technicians within 2 hours.",
    primaryImage: "/ac_technician.png",
    primaryImageAlt: "Cool Home AC Service Technician",
    secondaryImage: "/split_ac.png",
    secondaryImageAlt: "Modern Inverter Split AC",
    floatingBadge1: { title: "AC Service", subtitle: "Jet Pump Clean", icon: Wind, color: "text-blue-500 bg-blue-50" },
    floatingBadge2: { title: "Fast Arrival", subtitle: "Within 2 Hours", icon: ShieldCheck, color: "text-emerald-500 bg-emerald-50" },
    highlights: ["Split & Inverter Specialists", "Jet Pump Wet Cleaning", "30-Day Service Guarantee"],
    ctaPrimaryText: "Book AC Service",
    ctaPrimaryLink: "/contact",
    ctaSecondaryText: "Explore AC Models",
    ctaSecondaryLink: "/ac-services",
    bgGradient: "from-[#071e3d] via-primary-royal to-[#0f2e54]",
    accentColor: "text-accent-cyan"
  },
  {
    id: "slide-water",
    badge: "Pure Hydration Technology",
    badgeIcon: Droplet,
    headlineLine1: "Drink Pure.",
    headlineHighlight: "Live Healthy.",
    headlineLine2: "99.9% Clean Water.",
    subheadline: "Smart RO, UV & UF Purifier Sales, Installation & Repair",
    description: "Ensure crystal-clear, mineral-balanced drinking water for your family with multi-stage filtration, membrane tuning, and certified filter cartridge replacements.",
    primaryImage: "/water_purifier.png",
    primaryImageAlt: "Modern RO UV Water Purifier",
    secondaryImage: "/ro_purifier.png",
    secondaryImageAlt: "RO Purifier Appliance",
    floatingBadge1: { title: "RO Purity", subtitle: "99.9% Microbe-Free", icon: Droplet, color: "text-cyan-500 bg-cyan-50" },
    floatingBadge2: { title: "Free Test", subtitle: "Water TDS Check", icon: ShieldCheck, color: "text-teal-500 bg-teal-50" },
    highlights: ["Multi-Stage Filtration", "RO & UV Disinfection", "Certified Filter Swaps"],
    ctaPrimaryText: "Book Purifier Service",
    ctaPrimaryLink: "/contact",
    ctaSecondaryText: "View Purifiers",
    ctaSecondaryLink: "/water-purifier",
    bgGradient: "from-[#032030] via-[#003554] to-[#004e75]",
    accentColor: "text-cyan-300"
  },
  {
    id: "slide-appliances",
    badge: "Refrigerator & Washing Machine Care",
    badgeIcon: RotateCcw,
    headlineLine1: "Smart Care.",
    headlineHighlight: "Home Appliances.",
    headlineLine2: "Fast Repairs.",
    subheadline: "Expert Diagnostics, Gas Charging, Motor Fixes & Original Spares",
    description: "Keep your kitchen and laundry running smoothly with certified repair for single/double door refrigerators and front/top load washing machines.",
    primaryImage: "/refrigerator.png",
    primaryImageAlt: "Modern Smart Refrigerator",
    secondaryImage: "/washing_machine.png",
    secondaryImageAlt: "Automatic Washing Machine",
    floatingBadge1: { title: "Fridge Repair", subtitle: "Cooling & Gas Refill", icon: RotateCcw, color: "text-purple-500 bg-purple-50" },
    floatingBadge2: { title: "Washer Fix", subtitle: "Drum & Motor Repair", icon: Wrench, color: "text-blue-500 bg-blue-50" },
    highlights: ["All Major Brands Supported", "Genuine OEM Spare Parts", "2-Hour Doorstep Visit"],
    ctaPrimaryText: "Book Appliance Repair",
    ctaPrimaryLink: "/contact",
    ctaSecondaryText: "Explore Appliances",
    ctaSecondaryLink: "/appliances",
    bgGradient: "from-[#1b263b] via-[#243447] to-[#0d1b2a]",
    accentColor: "text-purple-300"
  },
  {
    id: "slide-solar",
    badge: "Clean Solar Energy Solutions",
    badgeIcon: Sun,
    headlineLine1: "Cut Bills.",
    headlineHighlight: "Go Solar Today.",
    headlineLine2: "25-Yr Yield.",
    subheadline: "Turnkey Rooftop Solar Installation, On-Grid Net Metering & Battery Setups",
    description: "Slash your home electricity bills by up to 90% with high-efficiency monocrystalline solar panels, hybrid inverters, and seamless net metering assistance.",
    primaryImage: "/solar_panel.png",
    primaryImageAlt: "Rooftop Solar Installation",
    secondaryImage: "/solar_inverter.png",
    secondaryImageAlt: "Solar Inverter Kit",
    floatingBadge1: { title: "Solar Power", subtitle: "Save up to 90%", icon: Sun, color: "text-amber-500 bg-amber-50" },
    floatingBadge2: { title: "Net Metering", subtitle: "Grid Connected", icon: ShieldCheck, color: "text-emerald-500 bg-emerald-50" },
    highlights: ["High-Efficiency Mono Panels", "Net Metering Paperwork Done", "Free Rooftop Assessment"],
    ctaPrimaryText: "Book Free Solar Audit",
    ctaPrimaryLink: "/contact",
    ctaSecondaryText: "Explore Solar Plans",
    ctaSecondaryLink: "/solar",
    bgGradient: "from-[#0b3c5d] via-[#1d2731] to-[#144552]",
    accentColor: "text-amber-300"
  },
  {
    id: "slide-gas",
    badge: "Emergency Breakdown & Gas Charging",
    badgeIcon: Wrench,
    headlineLine1: "Quick Repair.",
    headlineHighlight: "Instant Cooling.",
    headlineLine2: "100% Genuine Gas.",
    subheadline: "Accurate Pressure Checks & Refrigerant Charging (R32 / R410A)",
    description: "Facing low cooling or coil leakage? Our technicians execute nitrogen pressure checks, brazing leak repairs, and full gas top-ups to restore ice-cold airflow.",
    primaryImage: "/ac_gas_charging.png",
    primaryImageAlt: "AC Gas Pressure Charging",
    secondaryImage: "/window_ac.png",
    secondaryImageAlt: "AC Compressor Unit",
    floatingBadge1: { title: "Gas Refill", subtitle: "100% Pure Refrigerant", icon: Wrench, color: "text-amber-500 bg-amber-50" },
    floatingBadge2: { title: "Leak Check", subtitle: "Pressure Vacuum Test", icon: ShieldCheck, color: "text-sky-500 bg-sky-50" },
    highlights: ["Nitrogen Pressure Testing", "Original R32 / R410A Gas", "Compressor Diagnostic Fix"],
    ctaPrimaryText: "Emergency Gas Refill",
    ctaPrimaryLink: "/contact",
    ctaSecondaryText: "Call Technician",
    ctaSecondaryLink: BUSINESS_INFO.phoneLink,
    bgGradient: "from-[#0d1b2a] via-[#1b263b] to-[#253858]",
    accentColor: "text-amber-300"
  },
  {
    id: "slide-amc",
    badge: "Annual Maintenance Contracts (AMC)",
    badgeIcon: RefreshCw,
    headlineLine1: "Zero Stress.",
    headlineHighlight: "Complete AMC.",
    headlineLine2: "Year-Round Care.",
    subheadline: "Scheduled Filter Replacements & Unlimited Breakdown Visits",
    description: "Protect your appliances with our cost-saving annual maintenance plans. Enjoy complimentary routine servicing, priority scheduling, and discounts on original spare parts.",
    primaryImage: "/filter_replace.png",
    primaryImageAlt: "Water Purifier Filter Cartridges Replacement",
    secondaryImage: "/cassette_ac.png",
    secondaryImageAlt: "Ceiling Cassette AC",
    floatingBadge1: { title: "AMC Care", subtitle: "Unlimited Visits", icon: RefreshCw, color: "text-emerald-500 bg-emerald-50" },
    floatingBadge2: { title: "Savings", subtitle: "Spare Part Discounts", icon: ShieldCheck, color: "text-blue-500 bg-blue-50" },
    highlights: ["Scheduled Preventive Checks", "Free Filter Swaps", "Priority Support Visits"],
    ctaPrimaryText: "Get AMC Contract",
    ctaPrimaryLink: "/contact",
    ctaSecondaryText: "Filter Schedule",
    ctaSecondaryLink: "/water-purifier",
    bgGradient: "from-[#062c30] via-[#05445e] to-[#189ab4]",
    accentColor: "text-emerald-300"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-[92vh] pt-28 lg:pt-36 pb-20 lg:pb-32 text-white flex items-center overflow-hidden transition-colors duration-1000 select-none"
    >
      {/* Background Animated Gradient & Waves */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-0" : "opacity-0 -z-10 pointer-events-none"
          }`}
        >
          <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-accent-cyan/15 rounded-full blur-3xl pointer-events-none" />
        </div>
      ))}

      <div className="water-waves opacity-15" />
      <div className="water-waves-secondary opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="relative min-h-[580px] sm:min-h-[520px] lg:min-h-[540px] flex items-center">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === currentSlide;
            const BadgeIcon = slide.badgeIcon;
            const FloatIcon1 = slide.floatingBadge1.icon;
            const FloatIcon2 = slide.floatingBadge2.icon;

            return (
              <div
                key={slide.id}
                className={`w-full transition-all duration-700 ease-in-out ${
                  isActive
                    ? "opacity-100 translate-x-0 relative block"
                    : "opacity-0 absolute translate-x-12 pointer-events-none hidden"
                }`}
              >
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  
                  {/* Left Column */}
                  <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-5">
                    
                    <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider w-fit animate-pulse-slow">
                      <BadgeIcon className="w-4 h-4 text-accent-cyan" />
                      <span>{slide.badge}</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                      {slide.headlineLine1} <br />
                      <span className={`${slide.accentColor} drop-shadow-sm`}>
                        {slide.headlineHighlight}
                      </span> <br />
                      {slide.headlineLine2}
                    </h1>

                    <div>
                      <h2 className="text-base sm:text-lg font-bold text-slate-200 mb-2">
                        {slide.subheadline}
                      </h2>
                      <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
                        {slide.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-y-2 gap-x-6 pt-1">
                      {slide.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4 pt-4">
                      <a
                        href={slide.ctaPrimaryLink}
                        className="flex items-center justify-center space-x-2 bg-accent-orange hover:bg-accent-orange-hover text-white px-8 py-4 rounded-full font-bold text-base shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all text-center cursor-pointer"
                      >
                        <Calendar className="w-5 h-5" />
                        <span>{slide.ctaPrimaryText}</span>
                      </a>
                      
                      <a
                        href={slide.ctaSecondaryLink}
                        className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-base backdrop-blur-md hover:-translate-y-0.5 transition-all text-center cursor-pointer"
                      >
                        <Phone className="w-5 h-5 text-accent-cyan" />
                        <span>{slide.ctaSecondaryText}</span>
                      </a>
                    </div>

                  </div>

                  {/* Right Column */}
                  <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center items-center">
                    <div className="absolute inset-0 bg-white/5 rounded-3xl transform rotate-3 -z-10" />

                    <div className="relative w-full max-w-[430px] aspect-[4/5] sm:aspect-square flex items-center justify-center">
                      
                      <div className="w-[82%] h-[82%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 transform -translate-x-5 -translate-y-5 hover:scale-[1.02] transition-transform duration-500 bg-slate-900">
                        <img
                          src={slide.primaryImage}
                          alt={slide.primaryImageAlt}
                          className="w-full h-full object-cover"
                          loading="eager"
                        />
                      </div>

                      <div className="absolute bottom-3 right-3 w-[52%] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 hover:scale-[1.04] transition-transform duration-500 bg-slate-900">
                        <img
                          src={slide.secondaryImage}
                          alt={slide.secondaryImageAlt}
                          className="w-full h-full object-cover"
                          loading="eager"
                        />
                      </div>

                      <div className="absolute top-1/4 right-0 transform translate-x-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-white flex items-center space-x-3 select-none text-slate-800 animate-float">
                        <div className={`p-2.5 rounded-xl ${slide.floatingBadge1.color}`}>
                          <FloatIcon1 className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                          <div className="text-[10px] uppercase font-extrabold tracking-widest text-neutral-muted">
                            {slide.floatingBadge1.title}
                          </div>
                          <div className="text-xs font-extrabold text-primary-dark">
                            {slide.floatingBadge1.subtitle}
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-1/3 left-0 transform -translate-x-5 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-white flex items-center space-x-3 select-none text-slate-800 animate-float" style={{ animationDelay: '2s' }}>
                        <div className={`p-2.5 rounded-xl ${slide.floatingBadge2.color}`}>
                          <FloatIcon2 className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                          <div className="text-[10px] uppercase font-extrabold tracking-widest text-neutral-muted">
                            {slide.floatingBadge2.title}
                          </div>
                          <div className="text-xs font-extrabold text-primary-dark">
                            {slide.floatingBadge2.subtitle}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Slidable Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-10 sm:pt-12 border-t border-white/10 gap-6 mt-6">
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-2.5">
            {HERO_SLIDES.map((slide, idx) => {
              const isSelected = idx === currentSlide;
              const labels = ["AC Services", "RO Purifiers", "Appliances", "Solar Power", "Gas Refill", "AMC Plans"];
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer select-none ${
                    isSelected
                      ? "bg-white text-primary-dark shadow-lg shadow-white/10 scale-105"
                      : "bg-white/10 hover:bg-white/20 text-slate-300"
                  }`}
                  aria-label={`Switch to slide ${idx + 1}`}
                >
                  <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-accent-orange" : "bg-white/40"}`} />
                  <span>{labels[idx]}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white shadow-md hover:scale-110 active:scale-95 transition-all focus:outline-none cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white shadow-md hover:scale-110 active:scale-95 transition-all focus:outline-none cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
