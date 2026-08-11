import * as Icons from "lucide-react";
import { AC_SERVICES, AC_PRODUCTS } from "../data/siteData";
import { Wind, Check } from "lucide-react";

function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name] || Icons.HelpCircle;
  return <IconComponent className={className} />;
}

export default function ACServicesPage() {
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

  return (
    <div className="pt-20 lg:pt-24 animate-fade-in">
      
      {/* Page Header */}
      <div className="bg-gradient-to-br from-primary-dark via-primary-royal to-primary-dark text-white py-20 text-center relative overflow-hidden">
        <div className="water-waves opacity-10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-accent-cyan">
            <Wind className="w-4 h-4" />
            <span>Air Conditioning Specialists</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            AC Sales, Installation & Servicing
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Stay comfortable all season long with professional split, window, and inverter AC services, pressure leak checks, and certified gas charging.
          </p>
        </div>
      </div>

      {/* SECTION 1: All AC Services Grid */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight mb-4">
              Comprehensive AC Services
            </h2>
            <p className="text-neutral-muted text-base sm:text-lg">
              We handle every aspect of air conditioning maintenance with original spare parts and certified workmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {AC_SERVICES.map((service) => (
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
                    <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md text-primary-blue shadow-md">
                      <ServiceIcon name={service.iconName} className="w-5 h-5" />
                    </div>
                  </div>
                )}

                <div className="p-7 md:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-primary-dark mb-3 group-hover:text-primary-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-neutral-muted text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleEnquire(`Service Enquiry: ${service.title}`)}
                    className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-primary-blue hover:text-primary-dark transition-colors mt-auto group/btn cursor-pointer"
                  >
                    <span>Book Service</span>
                    <Icons.ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: AC Products Catalog */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight mb-4">
              Air Conditioners for Sale
            </h2>
            <p className="text-neutral-muted text-base sm:text-lg">
              Explore energy-efficient 3-Star and 5-Star inverter AC models with doorstep installation and manufacturer warranty.
            </p>
          </div>

          {/* Products Grid with High-Res Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {AC_PRODUCTS.map((product) => (
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
                    <h3 className="font-display font-extrabold text-xl text-slate-900 mb-3 group-hover:text-primary-blue transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-neutral-muted text-sm leading-relaxed mb-6">
                      {product.description}
                    </p>

                    <ul className="space-y-2.5 mb-8">
                      <li className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Certified Manufacturer Warranty</span>
                      </li>
                      <li className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Includes Initial Setup & Tuning</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => handleEnquire(product.title)}
                    className="w-full py-4 bg-primary-blue hover:bg-primary-dark text-white rounded-2xl font-bold text-sm shadow-md shadow-blue-500/10 hover:shadow-lg transition-all cursor-pointer"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Seal Banner */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h3 className="font-display font-extrabold text-2xl text-white">All AC services include 30-Day Service Guarantee</h3>
            <p className="text-slate-300 text-sm">If any problem occurs within 30 days of service, we will re-inspect it free of charge.</p>
          </div>
          <a
            href="/contact"
            className="bg-accent-orange hover:bg-accent-orange-hover text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md shrink-0 transition-colors cursor-pointer"
          >
            Book AC Technician
          </a>
        </div>
      </section>

    </div>
  );
}
