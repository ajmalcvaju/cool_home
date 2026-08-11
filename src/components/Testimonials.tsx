import { useState, useEffect, useRef } from "react";
import { TESTIMONIALS } from "../data/siteData";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef<(() => void) | null>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      if (autoPlayRef.current) {
        autoPlayRef.current();
      }
    };
    const interval = setInterval(play, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/4 left-[-5%] w-80 h-80 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-5%] w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center space-x-2 bg-blue-100/60 text-primary-royal px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-primary-blue" />
            <span>Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark tracking-tight mb-4">
            What Our Customers Say
          </h2>
          <p className="text-neutral-muted text-base sm:text-lg">
            Read real feedback from local homeowners who have experienced our cooling repairs and filter replacement services.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-xl border border-slate-100 reveal max-w-4xl mx-auto">
          
          <div className="absolute top-6 left-6 sm:top-10 sm:left-10 text-slate-100 pointer-events-none">
            <Quote className="w-20 h-20 transform scale-x-[-1] fill-current" />
          </div>

          <div className="relative min-h-[190px] flex flex-col justify-between z-10 text-left">
            {TESTIMONIALS.map((test, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={test.id}
                  className={`transition-all duration-500 ease-in-out ${
                    isActive 
                      ? "opacity-100 translate-x-0 relative block" 
                      : "opacity-0 absolute translate-x-10 pointer-events-none hidden"
                  }`}
                >
                  <div className="flex items-center space-x-1.5 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < test.rating
                            ? "text-amber-400 fill-amber-400"
                            : "text-slate-200"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-slate-750 text-base sm:text-lg lg:text-xl font-medium leading-relaxed italic mb-8">
                    "{test.quote}"
                  </p>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <h4 className="font-display font-extrabold text-slate-900 text-lg">
                        {test.name}
                      </h4>
                      <p className="text-xs font-bold text-neutral-muted uppercase tracking-widest mt-0.5">
                        Verified Customer
                      </p>
                    </div>

                    <span className="bg-sky-50 text-primary-royal text-xs font-bold px-3.5 py-1.5 rounded-full border border-sky-100">
                      {test.serviceType}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-[-18px] sm:left-[-24px] top-1/2 transform -translate-y-1/2 p-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 shadow-xl border border-slate-100 transition-colors select-none focus:outline-none z-20 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-[-18px] sm:right-[-24px] top-1/2 transform -translate-y-1/2 p-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 shadow-xl border border-slate-100 transition-colors select-none focus:outline-none z-20 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        <div className="flex justify-center space-x-2.5 mt-10 reveal">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? "w-8 bg-primary-blue"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
