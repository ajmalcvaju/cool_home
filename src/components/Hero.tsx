import { Phone, Calendar, ShieldCheck, CheckCircle, Droplet, Wind } from "lucide-react";
import { BUSINESS_INFO } from "../data/siteData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-32 lg:pt-44 pb-20 lg:pb-32 bg-gradient-to-br from-slate-50 via-sky-50/40 to-white flex items-center overflow-hidden"
    >
      {/* Decorative background shapes */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and copy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left reveal">
            {/* Small floating badge */}
            <div className="inline-flex items-center space-x-2 bg-primary-royal/5 border border-primary-royal/10 text-primary-royal px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 w-fit animate-pulse-slow">
              <ShieldCheck className="w-4 h-4 text-accent-cyan" />
              <span>Certified Sales & Service Provider</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary-dark leading-[1.1] mb-6">
              Stay Cool. <br />
              <span className="text-primary-blue bg-clip-text">Breathe Better.</span> <br />
              Drink <span className="text-accent-cyan">Pure.</span>
            </h1>

            {/* Supporting Heading */}
            <h2 className="text-lg sm:text-xl font-bold text-primary-royal mb-4">
              {BUSINESS_INFO.tagline}
            </h2>

            {/* Description */}
            <p className="text-neutral-muted text-base sm:text-lg max-w-xl mb-10 leading-relaxed">
              {BUSINESS_INFO.description} We bring fast, reliable doorstep service and original parts to your home.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 mb-10">
              <a
                href="/contact"
                className="flex items-center justify-center space-x-2 bg-accent-orange hover:bg-accent-orange-hover text-white px-8 py-4 rounded-full font-bold text-base shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all text-center cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Service</span>
              </a>
              <a
                href={BUSINESS_INFO.phoneLink}
                className="flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 px-8 py-4 rounded-full font-bold text-base shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-center"
              >
                <Phone className="w-5 h-5 text-primary-blue" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Trust statement */}
            <div className="border-t border-slate-200 pt-6 flex flex-wrap gap-y-3 gap-x-8">
              <div className="flex items-center space-x-2 text-sm text-slate-700 font-semibold">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Trusted Service</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-700 font-semibold">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Expert Technicians</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-700 font-semibold">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Genuine Parts Only</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Res Composite Visuals */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center items-center">
            {/* Background geometric design elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-300/15 to-cyan-300/20 rounded-3xl transform rotate-3 -z-10" />
            <div className="absolute top-4 left-4 w-14 h-14 bg-accent-orange/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-8 right-8 w-16 h-16 bg-primary-blue/10 rounded-full animate-float" />

            {/* Composite Images Stack */}
            <div className="relative w-full max-w-[440px] aspect-[4/5] sm:aspect-square flex items-center justify-center">
              
              {/* Primary Image: AC Technician in 4k photo */}
              <div className="w-[82%] h-[82%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform -translate-x-6 -translate-y-6 hover:scale-[1.02] transition-transform duration-500 bg-slate-100">
                <img
                  src="/ac_technician.png"
                  alt="Cool Home AC Service Technician"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Secondary Overlapping Image: Water Purifier in 4k photo */}
              <div className="absolute bottom-4 right-4 w-[50%] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white hover:scale-[1.04] transition-transform duration-500 bg-slate-100">
                <img
                  src="/water_purifier.png"
                  alt="Cool Home Pure Water Solutions"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating Service Badges */}
              <div className="absolute top-1/4 right-0 transform translate-x-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3 animate-float select-none">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                  <Wind className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-extrabold tracking-widest text-neutral-muted">AC Service</div>
                  <div className="text-xs font-extrabold text-primary-dark">Rapid Chilling</div>
                </div>
              </div>

              <div className="absolute bottom-1/3 left-0 transform -translate-x-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3 animate-float select-none" style={{ animationDelay: '2s' }}>
                <div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-600">
                  <Droplet className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-extrabold tracking-widest text-neutral-muted">RO Purifier</div>
                  <div className="text-xs font-extrabold text-primary-dark">99.9% Pure Water</div>
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
