import { useState } from "react";
import { AC_PRODUCTS, WATER_PRODUCTS } from "../data/siteData";
import { Wind, Droplet, Check, ShieldCheck } from "lucide-react";

export default function Products() {
  const [activeTab, setActiveTab] = useState<"ac" | "water">("ac");

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

  const productsList = activeTab === "ac" ? AC_PRODUCTS : WATER_PRODUCTS;

  return (
    <section id="products" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <div className="inline-flex items-center space-x-2 bg-slate-100 border border-slate-200 text-slate-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-primary-blue" />
            <span>Product Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark tracking-tight mb-4">
            Reliable Appliances for Your Home
          </h2>
          <p className="text-neutral-muted text-base sm:text-lg">
            We supply and install top-tier AC cooling systems and RO purifiers at reasonable pricing, backed by local service guarantees.
          </p>
        </div>

        {/* Tab Toggle Switch */}
        <div className="flex justify-center mb-16 reveal">
          <div className="bg-slate-100 p-1.5 rounded-full flex items-center space-x-1.5 border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab("ac")}
              className={`flex items-center space-x-2 px-7 py-3 rounded-full font-bold text-sm transition-all select-none cursor-pointer ${
                activeTab === "ac"
                  ? "bg-primary-blue text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Wind className="w-4 h-4" />
              <span>Air Conditioners</span>
            </button>
            <button
              onClick={() => setActiveTab("water")}
              className={`flex items-center space-x-2 px-7 py-3 rounded-full font-bold text-sm transition-all select-none cursor-pointer ${
                activeTab === "water"
                  ? "bg-accent-cyan text-primary-dark shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Droplet className="w-4 h-4" />
              <span>Water Purifiers</span>
            </button>
          </div>
        </div>

        {/* Products Grid with High-Res Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {productsList.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group reveal"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              
              {/* Product Card Image Container */}
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

              {/* Product Body */}
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
                  className={`w-full py-4 rounded-2xl font-bold text-sm shadow-md transition-all duration-300 select-none cursor-pointer ${
                    activeTab === "ac"
                      ? "bg-primary-blue hover:bg-primary-dark text-white shadow-blue-500/15 hover:shadow-lg hover:shadow-blue-500/25"
                      : "bg-accent-cyan hover:bg-[#0096b4] text-primary-dark hover:text-white shadow-cyan-500/15 hover:shadow-lg hover:shadow-cyan-500/25"
                  }`}
                >
                  Enquire Now
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
