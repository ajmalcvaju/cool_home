import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Process from "../components/Process";
import { Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-20 lg:pt-24 animate-fade-in">
      
      {/* Page Header */}
      <div className="bg-gradient-to-br from-primary-dark via-primary-royal to-primary-dark text-white py-20 text-center relative overflow-hidden">
        <div className="water-waves opacity-10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-accent-cyan">
            <Award className="w-4 h-4" />
            <span>Dedicated Excellence</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            About Cool Home
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Leading technician-driven sales and service for domestic AC installations, jet cleaning, RO filters, and comprehensive home appliance care.
          </p>
        </div>
      </div>

      {/* Main About Component */}
      <About />

      {/* Why Choose Us Values */}
      <WhyChooseUs />

      {/* Step by Step Workflow */}
      <Process />

    </div>
  );
}
