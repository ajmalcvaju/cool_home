import { useState } from "react";
import * as Icons from "lucide-react";
import { REFRIGERATOR_SERVICES, WASHING_MACHINE_SERVICES, APPLIANCE_PRODUCTS } from "../data/siteData";
import { Sparkles, CheckCircle, RotateCcw, Wrench } from "lucide-react";

function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name] || Icons.HelpCircle;
  return <IconComponent className={className} />;
}

export default function AppliancesPage() {
  const [activeTab, setActiveTab] = useState<"fridge" | "washing">("fridge");

  const handleEnquire = (serviceName: string) => {
    window.history.pushState({}, "", "/contact");
    window.dispatchEvent(new Event("pushstate-navigation"));
    
    setTimeout(() => {
      const serviceSelect = document.getElementById("service-type") as HTMLSelectElement;
      const messageTextarea = document.getElementById("message-text") as HTMLTextAreaElement;
      
      if (serviceSelect) {
        serviceSelect.value = "Home Appliance Service";
      }
      if (messageTextarea) {
        messageTextarea.value = `Hello Cool Home, I would like to book service / enquiry for "${serviceName}". Please contact me back.`;
      }
      
      const nameInput = document.getElementById("user-name") as HTMLInputElement;
      if (nameInput) {
        nameInput.focus();
      }
    }, 600);
  };

  const servicesList = activeTab === "fridge" ? REFRIGERATOR_SERVICES : WASHING_MACHINE_SERVICES;

  return (
    <div className="pt-20 lg:pt-24 animate-fade-in">
      
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#1b263b] via-primary-royal to-[#0d1b2a] text-white py-20 text-center relative overflow-hidden">
        <div className="water-waves opacity-10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-accent-cyan">
            <Sparkles className="w-4 h-4 text-accent-cyan" />
            <span>Home Appliance Specialists</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Refrigerator & Washing Machine Care
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Professional sales, installation, multi-brand repairs, genuine spare parts, and annual maintenance for all domestic refrigerators and washing machines.
          </p>
        </div>
      </div>

      {/* SECTION 1: Appliance Services with Switcher */}
      <section className="py-20 lg:py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight mb-4">
              Expert Repairs & Preventive Maintenance
            </h2>
            <p className="text-neutral-muted text-base sm:text-lg">
              Choose your appliance category below to view our specialized diagnostic and repair solutions.
            </p>
          </div>

          {/* Toggle Switch */}
          <div className="flex justify-center mb-16">
            <div className="bg-white p-1.5 rounded-full flex items-center space-x-2 border border-slate-200 shadow-md">
              <button
                onClick={() => setActiveTab("fridge")}
                className={`flex items-center space-x-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all select-none cursor-pointer ${
                  activeTab === "fridge"
                    ? "bg-primary-blue text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Icons.ThermometerSnowflake className="w-4 h-4" />
                <span>Refrigerators</span>
              </button>
              <button
                onClick={() => setActiveTab("washing")}
                className={`flex items-center space-x-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all select-none cursor-pointer ${
                  activeTab === "washing"
                    ? "bg-accent-cyan text-primary-dark shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <RotateCcw className="w-4 h-4" />
                <span>Washing Machines</span>
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {servicesList.map((service) => (
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
                    onClick={() => handleEnquire(service.title)}
                    className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-primary-blue hover:text-primary-dark transition-colors mt-auto group/btn cursor-pointer"
                  >
                    <span>Book Diagnostic Visit</span>
                    <Icons.ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 2: Appliances Products Catalog */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight mb-4">
              Featured Appliances for Sale
            </h2>
            <p className="text-neutral-muted text-base sm:text-lg">
              Explore energy-efficient smart refrigerators and washing machines with free doorstep installation and official brand warranty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {APPLIANCE_PRODUCTS.map((product) => (
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
                    Free Delivery
                  </span>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between text-left">
                  <div>
                    <h3 className="font-display font-extrabold text-lg text-slate-900 mb-2.5 group-hover:text-primary-blue transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-neutral-muted text-xs leading-relaxed mb-5">
                      {product.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>Brand Manufacturer Warranty</span>
                      </li>
                      <li className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>Includes Demo & Setup</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => handleEnquire(product.title)}
                    className="w-full py-3.5 bg-primary-blue hover:bg-primary-dark text-white rounded-2xl font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems Covered Banner */}
      <section className="py-16 bg-[#0d1b2a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-display font-extrabold text-2xl text-white">Appliance Breakdown Emergency?</h3>
            <p className="text-slate-300 text-sm">We fix water leakage, PCB circuit errors, spin failure, and gas leaks within 2 hours.</p>
          </div>
          <a
            href="/contact"
            className="flex items-center space-x-2 bg-accent-orange hover:bg-accent-orange-hover text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md shrink-0 transition-colors cursor-pointer"
          >
            <Wrench className="w-4 h-4" />
            <span>Book Appliance Technician</span>
          </a>
        </div>
      </section>

    </div>
  );
}
