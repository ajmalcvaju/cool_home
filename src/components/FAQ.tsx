import { useState } from "react";
import { FAQS } from "../data/siteData";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center space-x-2 bg-slate-100 border border-slate-200 text-slate-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-primary-blue" />
            <span>FAQ Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-muted text-base sm:text-lg">
            Find answers to common questions about our AC and water purifier repairs, filter installations, and AMC service packages.
          </p>
        </div>

        <div className="space-y-4 text-left reveal">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-150 shadow-xs hover:shadow-md transition-shadow overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-slate-800 hover:text-primary-blue text-left focus:outline-none transition-colors select-none cursor-pointer"
                >
                  <span className="font-display font-extrabold text-base sm:text-lg pr-4">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full bg-slate-50 text-slate-500 group-hover:text-primary-blue shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-blue-50 text-primary-blue" : ""
                  }`}>
                    <ChevronDown className="w-4.5 h-4.5" />
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-slate-100" : "max-h-0"
                  }`}
                >
                  <p className="p-5 sm:p-6 text-neutral-muted text-sm sm:text-base leading-relaxed bg-slate-50/60">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
