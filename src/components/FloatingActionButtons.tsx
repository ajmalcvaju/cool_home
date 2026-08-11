import { Phone, MessageSquare } from "lucide-react";
import { BUSINESS_INFO } from "../data/siteData";

export default function FloatingActionButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3 select-none">
      {/* WhatsApp Button */}
      <a
        href={BUSINESS_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl flex items-center justify-center transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 group relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="absolute right-15 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>

      {/* Direct Call Button */}
      <a
        href={BUSINESS_INFO.phoneLink}
        className="w-13 h-13 rounded-full bg-primary-blue hover:bg-primary-dark text-white shadow-xl flex items-center justify-center transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 group relative"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6 animate-pulse" />
        <span className="absolute right-15 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          Call {BUSINESS_INFO.phone}
        </span>
      </a>
    </div>
  );
}
