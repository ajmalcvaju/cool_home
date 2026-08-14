import * as Icons from "lucide-react";
import { WATER_SERVICES, WATER_PRODUCTS, WATER_TREATMENT_PRODUCTS } from "../data/siteData";
import { Droplet, CheckCircle, Layers } from "lucide-react";

function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name] || Icons.HelpCircle;
  return <IconComponent className={className} />;
}

export default function WaterPurifierPage() {
  const handleEnquire = (productName: string) => {
    window.history.pushState({}, "", "/contact");
    window.dispatchEvent(new Event("pushstate-navigation"));
    
    setTimeout(() => {
      const serviceSelect = document.getElementById("service-type") as HTMLSelectElement;
      const messageTextarea = document.getElementById("message-text") as HTMLTextAreaElement;
      
      if (serviceSelect) {
        serviceSelect.value = "Product Enquiry";
      }
      if (messageTextarea) {
        messageTextarea.value = `Hello Cool Home, I would like to get a quote and details for the "${productName}". Please contact me back with details.`;
      }
      
      const nameInput = document.getElementById("user-name") as HTMLInputElement;
      if (nameInput) {
        nameInput.focus();
      }
    }, 600);
  };

  const filterSchedules = [
    { name: "Sediment Filter", interval: "Every 6 Months", purpose: "Removes dirt, sand, rust, and clay particles." },
    { name: "Pre-Carbon Filter", interval: "Every 6 - 12 Months", purpose: "Extracts chlorine, organic chemicals, and bad odor." },
    { name: "RO Membrane", interval: "Every 1.5 - 2 Years", purpose: "Reduces TDS, extracts heavy metals, salts, and fluoride." },
    { name: "Post-Carbon Filter", interval: "Every 12 Months", purpose: "Polishes water taste and adds minor essential minerals." }
  ];

  return (
    <div className="pt-20 lg:pt-24 animate-fade-in">
      
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#071e3d] via-primary-royal to-[#152e4d] text-white py-20 text-center relative overflow-hidden">
        <div className="water-waves opacity-10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-accent-cyan">
            <Droplet className="w-3.5 h-3.5 animate-bounce" />
            <span>Pure Hydration Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Water Purifier Sales & Service
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Ensure healthy, 99.9% pure water for your family with certified RO/UV repair, filter changes, membrane testing, and AMC protection.
          </p>
        </div>
      </div>

      {/* SECTION 1: All Water Services Grid */}
      <section className="py-20 lg:py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Purifier Servicing & Maintenance
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Full diagnostic testing including inlet pressure checking, TDS level measurement, and genuine cartridge fitting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {WATER_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-slate-800/80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-white/10 transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                {service.image && (
                  <div className="relative h-40 overflow-hidden bg-slate-950">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 p-2.5 rounded-xl bg-slate-900/90 backdrop-blur-md text-accent-cyan shadow-sm border border-white/10">
                      <ServiceIcon name={service.iconName} className="w-4 h-4" />
                    </div>
                  </div>
                )}

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-2.5 group-hover:text-accent-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 text-xs leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleEnquire(`Service Enquiry: ${service.title}`)}
                    className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-accent-cyan hover:text-white transition-colors mt-auto group/btn cursor-pointer"
                  >
                    <span>Request Service</span>
                    <Icons.ArrowRight className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Filter Maintenance Schedule */}
      <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight mb-4">
              Recommended Filter Replacement Schedule
            </h2>
            <p className="text-neutral-muted text-base sm:text-lg">
              Timely filter replacements block bacteria buildup, retain taste, and protect your RO membrane's life.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {filterSchedules.map((filter, idx) => (
              <div key={idx} className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm flex items-start space-x-5">
                <div className="p-3.5 bg-cyan-50 text-cyan-600 rounded-2xl shrink-0">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900">{filter.name}</h3>
                    <span className="bg-cyan-50 text-cyan-700 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md border border-cyan-100">{filter.interval}</span>
                  </div>
                  <p className="text-neutral-muted text-xs leading-relaxed mt-2.5">{filter.purpose}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Purifier Products Catalog with High-Res Images */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight mb-4">
              Water Purifiers for Health & Hydration
            </h2>
            <p className="text-neutral-muted text-base sm:text-lg">
              Shop advanced domestic water filters equipped with RO, UV, UF, and TDS controllers.
            </p>
          </div>

          {/* Products Grid with High-Res Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {WATER_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative h-60 overflow-hidden bg-slate-100 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-xl border border-slate-100 text-[10px] font-extrabold uppercase tracking-wider text-slate-800 shadow-sm">
                    Free Installation
                  </span>
                </div>

                <div className="p-7 md:p-8 flex-grow flex flex-col justify-between text-left">
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-neutral-muted text-sm leading-relaxed mb-6">
                      {product.description}
                    </p>

                    <ul className="space-y-2.5 mb-8">
                      <li className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Certified Manufacturer Warranty</span>
                      </li>
                      <li className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Includes Initial Setup & Tuning</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => handleEnquire(product.title)}
                    className="w-full py-4 bg-accent-cyan hover:bg-[#0096b4] text-primary-dark hover:text-white rounded-2xl font-bold text-sm shadow-md transition-colors cursor-pointer"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Subheading for Water Treatment Plants */}
          <div className="text-center max-w-3xl mx-auto mt-28 mb-16">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-primary-dark tracking-tight mb-4">
              Water Treatment Plants & Softeners
            </h3>
            <p className="text-neutral-muted text-base">
              Explore heavy-duty filtration and softening systems designed for villas, commercial complexes, and industrial units.
            </p>
          </div>

          {/* Water Treatment Plants Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {WATER_TREATMENT_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative h-60 overflow-hidden bg-slate-100 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-xl border border-slate-100 text-[10px] font-extrabold uppercase tracking-wider text-slate-800 shadow-sm">
                    On-Site Survey Free
                  </span>
                </div>

                <div className="p-7 md:p-8 flex-grow flex flex-col justify-between text-left">
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-neutral-muted text-sm leading-relaxed mb-6">
                      {product.description}
                    </p>

                    <ul className="space-y-2.5 mb-8">
                      <li className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Heavy-Duty Durable Construction</span>
                      </li>
                      <li className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Complete Pipeline Integration Included</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => handleEnquire(product.title)}
                    className="w-full py-4 bg-accent-cyan hover:bg-[#0096b4] text-primary-dark hover:text-white rounded-2xl font-bold text-sm shadow-md transition-colors cursor-pointer"
                  >
                    Request Callback & Survey
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
