import Hero from "../components/Hero";
import QuickServiceBar from "../components/QuickServiceBar";
import Testimonials from "../components/Testimonials";
import SpecialServiceCTA from "../components/SpecialServiceCTA";
import { ArrowRight, Wind, Droplet } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-0">
      {/* 1. Hero with high-res composite visuals */}
      <Hero />

      {/* 2. Quick action bar floating over hero */}
      <QuickServiceBar />

      {/* 3. Category Showcase Grid */}
      <section className="py-24 lg:py-36 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-flex items-center space-x-2 bg-slate-100 text-primary-royal px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <span>Core Specialities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark tracking-tight mb-4">
              Two Pillars of Home Comfort
            </h2>
            <p className="text-neutral-muted text-base sm:text-lg">
              Explore our comprehensive range of HVAC cooling systems and cutting-edge water purification technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            
            {/* Division 1: Air Conditioning with High-Res Image */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-150 flex flex-col justify-between items-start text-left hover:shadow-2xl transition-all duration-300 group reveal-left">
              <div className="w-full h-64 overflow-hidden relative bg-slate-200">
                <img
                  src="/split_ac.png"
                  alt="Air Conditioning Systems"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 p-3 bg-white/95 backdrop-blur-md rounded-2xl text-primary-blue shadow-md">
                  <Wind className="w-6 h-6" />
                </div>
              </div>

              <div className="p-8 sm:p-10 flex flex-col justify-between flex-grow w-full">
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-primary-dark mb-3 group-hover:text-primary-blue transition-colors">
                    Air Conditioning Systems
                  </h3>
                  <p className="text-neutral-muted text-sm sm:text-base leading-relaxed mb-6">
                    Reliable AC sales, professional installation, filter cleanings, gas recharging, and emergency breakdown repairs for split, window, and inverter systems.
                  </p>
                </div>
                <a
                  href="/ac-services"
                  className="inline-flex items-center space-x-2 bg-primary-blue hover:bg-primary-dark text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-md transition-colors w-fit cursor-pointer"
                >
                  <span>Explore AC Services</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Division 2: Water Purifiers with High-Res Image */}
            <div className="bg-[#071e3d] text-white rounded-3xl overflow-hidden border border-white/5 flex flex-col justify-between items-start text-left hover:shadow-2xl transition-all duration-300 group reveal-right">
              <div className="w-full h-64 overflow-hidden relative bg-slate-900">
                <img
                  src="/water_purifier.png"
                  alt="Water Purification Systems"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 p-3 bg-[#071e3d]/90 backdrop-blur-md rounded-2xl text-accent-cyan shadow-md border border-white/10">
                  <Droplet className="w-6 h-6 animate-pulse" />
                </div>
              </div>

              <div className="p-8 sm:p-10 flex flex-col justify-between flex-grow w-full">
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-white mb-3 group-hover:text-accent-cyan transition-colors">
                    Water Purification Systems
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    Multi-stage RO system repairs, UV lamp replacements, sediment filter cleaning, and TDS controller testing to guarantee pure, refreshing drinking water.
                  </p>
                </div>
                <a
                  href="/water-purifier"
                  className="inline-flex items-center space-x-2 bg-accent-cyan hover:bg-white text-primary-dark font-bold px-7 py-3.5 rounded-full text-sm shadow-md transition-colors w-fit cursor-pointer"
                >
                  <span>Explore Purifier Services</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

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
