import * as Icons from "lucide-react";
import { SOLAR_SERVICES, SOLAR_PRODUCTS } from "../data/siteData";
import { Sun, Zap, CheckCircle2, DollarSign, ShieldCheck, ArrowRight, BatteryCharging } from "lucide-react";

function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name] || Icons.HelpCircle;
  return <IconComponent className={className} />;
}

export default function SolarPage() {
  const handleEnquire = (solarTopic: string) => {
    window.history.pushState({}, "", "/contact");
    window.dispatchEvent(new Event("pushstate-navigation"));
    
    setTimeout(() => {
      const serviceSelect = document.getElementById("service-type") as HTMLSelectElement;
      const messageTextarea = document.getElementById("message-text") as HTMLTextAreaElement;
      
      if (serviceSelect) {
        serviceSelect.value = "Solar Panel Installation";
      }
      if (messageTextarea) {
        messageTextarea.value = `Hello Cool Home, I would like to get a free rooftop audit / quote for "${solarTopic}". Please contact me back.`;
      }
      
      const nameInput = document.getElementById("user-name") as HTMLInputElement;
      if (nameInput) {
        nameInput.focus();
      }
    }, 600);
  };

  const solarBenefits = [
    { title: "Slash Electricity Bills", desc: "Cut power costs by up to 80-90% with on-grid net metering exports.", icon: DollarSign },
    { title: "25-Year Performance Warranty", desc: "Monocrystalline panels built to generate high yields for over two decades.", icon: ShieldCheck },
    { title: "Zero Outages & 24/7 Power", desc: "Hybrid inverters combined with lithium storage maintain uninterrupted home power.", icon: BatteryCharging },
    { title: "Eco-Friendly Clean Energy", desc: "Reduce your household carbon footprint and contribute to a greener planet.", icon: Sun }
  ];

  return (
    <div className="pt-20 lg:pt-24 animate-fade-in">
      
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0b3c5d] via-[#1d2731] to-[#328cc1] text-white py-20 text-center relative overflow-hidden">
        <div className="water-waves opacity-10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-300">
            <Sun className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '20s' }} />
            <span>Green Clean Energy Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Rooftop Solar Panel Installation
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Harness clean solar energy with turnkey on-grid, off-grid, and hybrid solar installations for homes, apartments, and commercial facilities.
          </p>
        </div>
      </div>

      {/* SECTION 1: Why Go Solar Grid */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solarBenefits.map((benefit, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start space-x-4 text-left">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl shrink-0">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-base text-slate-900 mb-1">{benefit.title}</h3>
                  <p className="text-neutral-muted text-xs leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Solar Services Grid */}
      <section className="py-20 lg:py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight mb-4">
              Comprehensive Solar Services
            </h2>
            <p className="text-neutral-muted text-base sm:text-lg">
              From site feasibility audits and structure design to government net metering liaison and solar maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {SOLAR_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                {service.image && (
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md text-amber-600 shadow-md">
                      <ServiceIcon name={service.iconName} className="w-5 h-5" />
                    </div>
                  </div>
                )}

                <div className="p-7 md:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-primary-dark mb-3 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-neutral-muted text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleEnquire(service.title)}
                    className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-600 hover:text-amber-700 transition-colors mt-auto group/btn cursor-pointer"
                  >
                    <span>Request Solar Audit</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3: Solar Systems & Kits Catalog */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight mb-4">
              Turnkey Solar Kits & Hardware
            </h2>
            <p className="text-neutral-muted text-base sm:text-lg">
              High-efficiency monocrystalline panels, smart hybrid inverters, and battery storage modules engineered for peak power yield.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SOLAR_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative h-56 overflow-hidden bg-slate-100 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-xl border border-slate-100 text-[10px] font-extrabold uppercase tracking-wider text-slate-800 shadow-sm">
                    Net Metering Ready
                  </span>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between text-left">
                  <div>
                    <h3 className="font-display font-extrabold text-lg text-slate-900 mb-2.5 group-hover:text-amber-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-neutral-muted text-xs leading-relaxed mb-5">
                      {product.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>25-Year Performance Guarantee</span>
                      </li>
                      <li className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>Includes Mounting & Net Metering</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => handleEnquire(product.title)}
                    className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    Get Solar Estimate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Site Audit Banner */}
      <section className="py-16 bg-gradient-to-r from-[#0b3c5d] via-[#1d2731] to-[#0b3c5d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-display font-extrabold text-2xl text-white">Want a Free Rooftop Solar Feasibility Assessment?</h3>
            <p className="text-slate-300 text-sm">Our engineers will inspect your roof space, calculate power generation, and provide full ROI estimates.</p>
          </div>
          <a
            href="/contact"
            className="flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md shrink-0 transition-colors cursor-pointer"
          >
            <Zap className="w-4 h-4" />
            <span>Book Free Solar Audit</span>
          </a>
        </div>
      </section>

    </div>
  );
}
