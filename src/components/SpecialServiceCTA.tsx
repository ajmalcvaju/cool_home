import { Calendar, MessageSquare, Phone, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "../data/siteData";

export default function SpecialServiceCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary-dark via-primary-royal to-primary-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-500/10 opacity-30 pointer-events-none" />
      <div className="water-waves opacity-10" />
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent-cyan/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8 reveal">
        
        <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/10 text-accent-cyan px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mx-auto">
          <ShieldCheck className="w-4 h-4 text-accent-cyan" />
          <span>Quick Turnaround Guarantee</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl mx-auto tracking-tight">
          Need AC or Water Purifier Service?
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Book a professional diagnostics service with Cool Home today. Our verified doorstep technicians will resolve your cooling and purity concerns within 2 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto pt-4">
          <a
            href="/contact#booking-form"
            className="flex items-center justify-center space-x-2.5 bg-accent-orange hover:bg-accent-orange-hover text-white w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all text-center select-none cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span>Book a Service</span>
          </a>

          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2.5 bg-emerald-500 hover:bg-emerald-600 text-white w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base shadow-lg shadow-emerald-500/10 hover:shadow-xl hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all text-center select-none"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href={BUSINESS_INFO.phoneLink}
            className="flex items-center justify-center space-x-2.5 bg-white hover:bg-slate-50 text-slate-800 w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-center select-none"
          >
            <Phone className="w-5 h-5 text-primary-blue" />
            <span>Call Now</span>
          </a>
        </div>

      </div>
    </section>
  );
}
