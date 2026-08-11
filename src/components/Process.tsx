import { PROCESS_STEPS } from "../data/siteData";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-10 right-[-10%] w-80 h-80 bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <div className="inline-flex items-center space-x-2 bg-sky-50 border border-sky-100 text-primary-royal px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark tracking-tight mb-4">
            Simple. Fast. Reliable.
          </h2>
          <p className="text-neutral-muted text-base sm:text-lg">
            Get your home cooling and water purification systems running in four simple, stress-free steps.
          </p>
        </div>

        <div className="relative mt-8">
          <div className="hidden lg:block absolute top-[44px] left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-slate-200 -z-10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="flex flex-col items-center text-center group reveal"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <div className="w-22 h-22 rounded-full bg-slate-50 border-4 border-white shadow-md flex items-center justify-center text-xl font-black text-primary-blue group-hover:bg-primary-blue group-hover:text-white group-hover:scale-110 transition-all duration-300 relative select-none">
                  {step.step}
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent-orange rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 shadow-sm" />
                </div>

                <h3 className="font-display font-extrabold text-xl text-primary-dark mt-7 mb-3 group-hover:text-primary-blue transition-colors">
                  {step.title}
                </h3>

                <p className="text-neutral-muted text-sm leading-relaxed max-w-[260px]">
                  {step.description}
                </p>

                {idx < 3 && (
                  <div className="sm:hidden mt-6 text-slate-300">
                    <ArrowRight className="w-5 h-5 transform rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
