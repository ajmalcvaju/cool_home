import Hero from "../components/Hero";
import QuickServiceBar from "../components/QuickServiceBar";
import Testimonials from "../components/Testimonials";
import SpecialServiceCTA from "../components/SpecialServiceCTA";
import { ArrowRight, Wind, Droplet, RotateCcw, Sun } from "lucide-react";

export default function Home() {
  const divisions = [
    {
      title: "Air Conditioning Systems",
      desc: "Reliable AC sales, professional installation, filter cleanings, gas recharging, and emergency breakdown repairs for split, window, and inverter systems.",
      link: "/ac-services",
      buttonText: "Explore AC Services",
      image: "/split_ac.png",
      icon: Wind,
      bgColor: "bg-slate-50",
      themeDark: false,
      btnColor: "bg-primary-blue hover:bg-primary-dark text-white",
      iconBg: "bg-blue-50 text-primary-blue",
    },
    {
      title: "Water Purification Systems",
      desc: "Multi-stage RO system repairs, UV lamp replacements, sediment filter cleaning, and TDS controller testing to guarantee pure, refreshing drinking water.",
      link: "/water-purifier",
      buttonText: "Explore Purifier Services",
      image: "/water_purifier_user.png",
      icon: Droplet,
      bgColor: "bg-[#071e3d] text-white",
      themeDark: true,
      btnColor: "bg-accent-cyan hover:bg-white text-primary-dark",
      iconBg: "bg-[#071e3d]/90 text-accent-cyan border border-white/10",
    },
    {
      title: "Refrigerators & Washing Machines",
      desc: "Certified doorstep repair and sales for single/double door refrigerators and front/top load washing machines with 100% genuine replacement parts.",
      link: "/appliances",
      buttonText: "Explore Appliances",
      image: "/refrigerator.png",
      icon: RotateCcw,
      bgColor: "bg-slate-50",
      themeDark: false,
      btnColor: "bg-primary-royal hover:bg-primary-dark text-white",
      iconBg: "bg-purple-50 text-purple-600",
    },
    {
      title: "Rooftop Solar Panel Solutions",
      desc: "Harness clean solar energy with turnkey on-grid net metering, hybrid inverter/battery storage systems, and routine panel maintenance to slash bills up to 90%.",
      link: "/solar",
      buttonText: "Explore Solar Systems",
      image: "/solar_panel.png",
      icon: Sun,
      bgColor: "bg-[#0b3c5d] text-white",
      themeDark: true,
      btnColor: "bg-amber-500 hover:bg-amber-600 text-white",
      iconBg: "bg-[#0b3c5d]/90 text-amber-300 border border-white/10",
    }
  ];

  return (
    <div className="space-y-0">
      {/* 1. Slidable Multi-Image Hero */}
      <Hero />

      {/* 2. Quick action bar floating over hero */}
      <QuickServiceBar />

      {/* 3. 4-Pillar Category Showcase Grid */}
      <section className="py-24 lg:py-36 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-flex items-center space-x-2 bg-slate-100 text-primary-royal px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <span>Our Core Specialities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark tracking-tight mb-4">
              Four Pillars of Home Comfort & Clean Energy
            </h2>
            <p className="text-neutral-muted text-base sm:text-lg">
              Explore our comprehensive range of HVAC cooling, pure water filtration, domestic home appliances, and green rooftop solar solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {divisions.map((div, idx) => (
              <div
                key={idx}
                className={`${div.bgColor} rounded-3xl overflow-hidden border ${div.themeDark ? "border-white/5" : "border-slate-150"} flex flex-col justify-between items-start text-left hover:shadow-2xl transition-all duration-300 group reveal`}
                style={{ animationDelay: `${idx * 90}ms` }}
              >
                <div className="w-full h-64 overflow-hidden relative bg-slate-900">
                  <img
                    src={div.image}
                    alt={div.title}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${div.themeDark ? "opacity-85" : "opacity-100"}`}
                    loading="lazy"
                  />
                  <div className={`absolute top-4 left-4 p-3 rounded-2xl shadow-md ${div.iconBg}`}>
                    <div.icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-8 sm:p-10 flex flex-col justify-between flex-grow w-full">
                  <div>
                    <h3 className={`font-display font-extrabold text-2xl mb-3 ${div.themeDark ? "text-white" : "text-primary-dark"} group-hover:text-accent-cyan transition-colors`}>
                      {div.title}
                    </h3>
                    <p className={`${div.themeDark ? "text-slate-300" : "text-neutral-muted"} text-sm sm:text-base leading-relaxed mb-6`}>
                      {div.desc}
                    </p>
                  </div>
                  <a
                    href={div.link}
                    className={`inline-flex items-center space-x-2 font-bold px-7 py-3.5 rounded-full text-sm shadow-md transition-colors w-fit cursor-pointer ${div.btnColor}`}
                  >
                    <span>{div.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Special emergency CTA bar */}
      <SpecialServiceCTA />

      {/* 5. Customer feedback carousel */}
      <Testimonials />
    </div>
  );
}
