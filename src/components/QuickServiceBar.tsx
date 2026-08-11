import { Wind, Droplet, Clock, PhoneCall } from "lucide-react";
import { BUSINESS_INFO } from "../data/siteData";

export default function QuickServiceBar() {
  const items = [
    {
      title: "AC Service",
      description: "Repair, Install & Maintain",
      icon: Wind,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
      href: "/ac-services",
    },
    {
      title: "Water Purifier Service",
      description: "RO, UV & UF Diagnostics",
      icon: Droplet,
      iconColor: "text-cyan-500",
      bgColor: "bg-cyan-50",
      href: "/water-purifier",
    },
    {
      title: "Emergency Support",
      description: "Quick Doorstep Visit",
      icon: Clock,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50",
      href: "/contact",
    },
  ];

  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 lg:-mt-12">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="flex items-center space-x-4 p-3.5 rounded-2xl hover:bg-slate-50 transition-colors group"
            >
              <div className={`p-3.5 rounded-2xl ${item.bgColor} ${item.iconColor} transition-transform group-hover:scale-110 shadow-xs`}>
                <item.icon className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-extrabold text-slate-800 group-hover:text-primary-blue transition-colors text-base">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-muted mt-0.5">{item.description}</p>
              </div>
            </a>
          ))}

          <a
            href={BUSINESS_INFO.phoneLink}
            className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-primary-dark to-primary-royal text-white shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/20 transition-all hover:-translate-y-0.5 group"
          >
            <div className="p-3 rounded-xl bg-white/10 text-accent-cyan group-hover:scale-115 transition-transform">
              <PhoneCall className="w-5 h-5 animate-pulse" />
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase font-bold tracking-widest text-slate-300">
                Call Us Directly
              </div>
              <div className="text-base font-extrabold tracking-tight text-white mt-0.5">
                {BUSINESS_INFO.phone}
              </div>
            </div>
          </a>

        </div>
      </div>
    </div>
  );
}
