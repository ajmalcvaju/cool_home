import * as Icons from "lucide-react";
import { WHY_CHOOSE_US } from "../data/siteData";

function ChooseIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name] || Icons.HelpCircle;
  return <IconComponent className={className} />;
}

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center space-x-2 bg-blue-100/60 text-primary-royal px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Icons.CheckCircle className="w-3.5 h-3.5 text-primary-blue" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark tracking-tight mb-4">
            Service Standards You Can Rely On
          </h2>
          <p className="text-neutral-muted text-base sm:text-lg">
            We are dedicated to offering prompt, clear-cut, and professional home services. Here is what makes us different.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 md:p-9 shadow-sm hover:shadow-xl border border-slate-100 hover:border-blue-100 transform hover:-translate-y-2 transition-all duration-300 flex items-start space-x-5 text-left group reveal"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="p-4 rounded-2xl bg-slate-50 text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all duration-300 shrink-0 shadow-xs">
                <ChooseIcon name={item.iconName} className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-primary-dark mb-2.5 group-hover:text-primary-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
