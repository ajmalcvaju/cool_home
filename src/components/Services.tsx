import * as Icons from "lucide-react";
import { AC_SERVICES, WATER_SERVICES } from "../data/siteData";

function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name] || Icons.HelpCircle;
  return <IconComponent className={className} />;
}

export default function Services() {
  return (
    <div id="services">
      {/* 1. AC Services Section */}
      <section id="ac-services" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-48 h-48 bg-blue-400/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-12 right-0 w-80 h-80 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 text-primary-blue px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Icons.Wind className="w-3.5 h-3.5 animate-pulse" />
              <span>Chilling Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark tracking-tight mb-4">
              Our Professional AC Services
            </h2>
            <p className="text-neutral-muted text-base sm:text-lg">
              Complete home cooling solutions under one roof. From quick filter servicing to advanced compressor diagnostic repairs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {AC_SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between text-left group reveal"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Service Card Image Banner */}
                {service.image && (
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md text-primary-blue shadow-md">
                      <ServiceIcon name={service.iconName} className="w-5 h-5" />
                    </div>
                  </div>
                )}

                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-primary-dark mb-3 group-hover:text-primary-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-neutral-muted text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <a
                    href="/contact"
                    className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-primary-blue hover:text-primary-dark transition-colors mt-auto group/btn cursor-pointer"
                  >
                    <span>Book Service</span>
                    <Icons.ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Water Purifier Services Section */}
      <section id="water-purifier" className="py-20 lg:py-32 bg-gradient-to-b from-[#071e3d] to-[#1f4068] text-white relative overflow-hidden">
        <div className="water-waves opacity-20" />
        <div className="water-waves-secondary opacity-15" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/10 text-accent-cyan px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Icons.Droplet className="w-3.5 h-3.5 text-accent-cyan animate-bounce" />
              <span>Pure Hydration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Pure Water Starts With The Right Care
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Expert technicians for RO, UV, & UF water purifiers. Prevent sickness, ensure high water purity levels, and get filter swaps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {WATER_SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="glass-panel-dark rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-white/10 transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between text-left group reveal"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {service.image && (
                  <div className="relative h-36 overflow-hidden bg-slate-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 p-2.5 rounded-xl bg-[#071e3d]/90 backdrop-blur-md text-accent-cyan shadow-sm border border-white/10">
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

                  <a
                    href="/contact"
                    className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-accent-cyan hover:text-white transition-colors mt-auto group/btn cursor-pointer"
                  >
                    <span>Request Service</span>
                    <Icons.ArrowRight className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
