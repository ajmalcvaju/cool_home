import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-20 lg:pt-24 animate-fade-in">
      
      {/* Page Header */}
      <div className="bg-gradient-to-br from-primary-dark via-primary-royal to-primary-dark text-white py-20 text-center relative overflow-hidden">
        <div className="water-waves opacity-10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-accent-cyan">
            <Mail className="w-4 h-4" />
            <span>Support & Booking Center</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Contact & Service Booking
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Need emergency AC repair or quick filter replacement? Fill in your schedule below or reach our 24/7 service coordinators.
          </p>
        </div>
      </div>

      {/* Main Contact Form & Location */}
      <Contact />

      {/* Accordion FAQ Section */}
      <FAQ />

    </div>
  );
}
