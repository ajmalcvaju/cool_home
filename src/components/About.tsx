import { useState, useEffect } from "react";
import { Check, ArrowRight, Award, Sparkles, Phone } from "lucide-react";
import { BUSINESS_INFO } from "../data/siteData";

interface StatCounterProps {
  id: string;
  target: number;
  suffix?: string;
  duration?: number;
}

function StatCounter({ id, target, suffix = "", duration = 1500 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      if (started) return;
      setStarted(true);
      
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };
      window.requestAnimationFrame(step);
    };

    window.addEventListener("start-counter-" + id, handleStart);
    
    const timer = setTimeout(() => {
      handleStart();
    }, 1000);

    return () => {
      window.removeEventListener("start-counter-" + id, handleStart);
      clearTimeout(timer);
    };
  }, [id, target, duration, started]);

  return (
    <div className="stat-counter-trigger inline-block" data-stat-id={id}>
      <span className="font-display font-extrabold text-3xl sm:text-4xl text-primary-dark">
        {count}
        {suffix}
      </span>
    </div>
  );
}

export default function About() {
  const capabilities = [
    "AC Sales & Inverter AC Systems",
    "Split & Window AC Installation",
    "AC Repairs, Gas Checks & Leak Fixes",
    "Periodic Jet Servicing & Cleaning",
    "Annual Maintenance Contracts (AC AMC)",
    "RO/UV/UF Purifier Sales & Mounting",
    "Sediment & Carbon Filter Replacements",
    "Membrane Cleaning & Water Testing",
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: High-Res Image Collage */}
          <div className="lg:col-span-5 relative flex justify-center reveal-left">
            <div className="relative w-full max-w-[400px] aspect-square sm:aspect-square">
              <div className="absolute inset-0 bg-primary-royal/5 border border-primary-royal/10 rounded-3xl transform -rotate-6 scale-95 -z-10" />
              
              {/* Primary Image: Water Purifier */}
              <div className="w-[85%] aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white hover:scale-[1.02] transition-transform duration-500 bg-slate-100">
                <img
                  src="/water_purifier.png"
                  alt="Water Purification Servicing"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Image: AC Installation */}
              <div className="absolute bottom-[-10%] right-[-10%] w-[60%] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white hover:scale-[1.03] transition-transform duration-500 bg-slate-100">
                <img
                  src="/ac_technician.png"
                  alt="Professional AC Installation"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -top-4 -right-4 bg-accent-orange text-white p-3 rounded-2xl shadow-lg animate-float">
                <Award className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Right Column: Copy and Stats */}
          <div className="lg:col-span-7 text-left reveal-right">
            
            <div className="flex items-center space-x-2 text-primary-blue font-bold text-xs uppercase tracking-widest mb-3">
              <Sparkles className="w-4 h-4 text-accent-cyan" />
              <span>Who We Are</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark leading-tight mb-6">
              Your Trusted Partner for Cooling & Pure Water Solutions
            </h2>

            <p className="text-neutral-muted text-base sm:text-lg mb-8 leading-relaxed">
              Cool Home is a professional AC and water purifier sales and service provider. We are focused on delivering dependable products, expert installation, and fast doorstep after-sales service.
            </p>

            <div className="grid sm:grid-cols-2 gap-3.5 mb-10">
              {capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start space-x-2.5">
                  <span className="p-1 rounded-full bg-cyan-100 text-cyan-600 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-sm font-semibold text-slate-700 leading-snug">
                    {cap}
                  </span>
                </div>
              ))}
            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-150 mb-10">
              <div className="text-center p-2">
                <StatCounter id="exp" target={10} suffix="+" />
                <p className="text-xs font-bold text-neutral-muted mt-1.5">Years Experience</p>
              </div>
              <div className="text-center p-2">
                <StatCounter id="cust" target={1000} suffix="+" />
                <p className="text-xs font-bold text-neutral-muted mt-1.5">Happy Customers</p>
              </div>
              <div className="text-center p-2">
                <StatCounter id="jobs" target={500} suffix="+" />
                <p className="text-xs font-bold text-neutral-muted mt-1.5">Services Completed</p>
              </div>
              <div className="text-center p-2">
                <StatCounter id="support" target={24} suffix="/7" />
                <p className="text-xs font-bold text-neutral-muted mt-1.5">Tech Support</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="/contact"
                className="flex items-center space-x-2 bg-primary-royal hover:bg-primary-dark text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Book Service Now</span>
                <ArrowRight className="w-4 h-4 text-accent-cyan" />
              </a>
              <a
                href={BUSINESS_INFO.phoneLink}
                className="flex items-center space-x-2 text-primary-royal hover:text-primary-blue font-bold text-sm px-4 py-2 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-primary-blue" />
                <span>Call Us: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
