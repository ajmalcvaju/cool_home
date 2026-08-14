import React, { useState } from "react";
import { BUSINESS_INFO } from "../data/siteData";
import { Phone, Mail, Clock, MapPin, Navigation, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: "",
    preferredDate: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    "AC Installation",
    "AC Repair",
    "AC Jet Servicing",
    "AC Gas Charging",
    "AC Maintenance / AMC",
    "Water Purifier Installation",
    "Water Purifier Repair",
    "Filter Replacement",
    "Water Purifier AMC",
    "Refrigerator Repair / Gas Charging",
    "Washing Machine Repair / Drum Fix",
    "Rooftop Solar Installation / Net Metering",
    "Solar Panel Cleaning & Maintenance",
    "Product Enquiry",
    "Other",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }

    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service type";
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Please choose a preferred date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      serviceType: "",
      preferredDate: "",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-primary-royal px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-primary-blue" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark tracking-tight mb-4">
            Book Your Service Today
          </h2>
          <p className="text-neutral-muted text-base sm:text-lg">
            Request an expert visit for AC, Water Purifiers, Refrigerators, Washing Machines, or Solar Panels.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8 reveal-left text-left">
            <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-sm border border-slate-100 space-y-6">
              
              <div>
                <h3 className="font-display font-extrabold text-2xl text-primary-dark mb-1">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs uppercase font-extrabold tracking-widest text-neutral-muted">
                  Cooling • Purifiers • Appliances • Solar
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <a
                  href={BUSINESS_INFO.phoneLink}
                  className="flex items-start space-x-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="p-3 bg-blue-50 text-primary-blue rounded-xl group-hover:bg-primary-blue group-hover:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-muted uppercase tracking-wider">Call Helpdesk</h4>
                    <p className="text-base font-extrabold text-slate-800 mt-0.5">{BUSINESS_INFO.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-start space-x-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="p-3 bg-cyan-50 text-accent-cyan rounded-xl group-hover:bg-accent-cyan group-hover:text-primary-dark transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-muted uppercase tracking-wider">Email Inquiry</h4>
                    <p className="text-sm font-extrabold text-slate-800 mt-0.5 break-all">{BUSINESS_INFO.email}</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 p-3 rounded-2xl">
                  <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-muted uppercase tracking-wider">Business Hours</h4>
                    <p className="text-sm font-semibold text-slate-700 mt-0.5">{BUSINESS_INFO.hours}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-3 rounded-2xl">
                  <div className="p-3 bg-slate-100 text-slate-600 rounded-xl">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-muted uppercase tracking-wider">Service Coverage</h4>
                    <p className="text-sm font-semibold text-slate-700 mt-0.5">{BUSINESS_INFO.address}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Map Frame */}
            <div className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100 flex flex-col space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-display font-extrabold text-base text-slate-900">Our Location</h4>
                <span className="text-[10px] font-extrabold text-neutral-muted bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-md tracking-wider">
                  11°35'20.2"N 75°35'19.7"E
                </span>
              </div>
              
              <div className="relative h-48 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
                <iframe
                  title="Cool Home Location Map"
                  src="https://maps.google.com/maps?q=11.5889494,75.5887989&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <a
                href={BUSINESS_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-primary-blue hover:bg-primary-dark text-white py-3.5 rounded-2xl font-bold text-sm shadow-md transition-all group select-none cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-accent-cyan group-hover:rotate-12 transition-transform" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>

          </div>

          {/* Right Column: Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-12 shadow-md border border-slate-100 reveal-right">
            {isSubmitted ? (
              <div className="py-12 px-4 flex flex-col items-center justify-center text-center space-y-6 animate-scale">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 shadow-inner">
                  <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-slate-900 mb-2">
                    Booking Successful!
                  </h3>
                  <p className="text-neutral-muted text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-800">{formData.name}</strong>. Your service request for <strong className="text-slate-800">{formData.serviceType}</strong> has been logged. Our coordinator will call you back on <strong className="text-slate-800">{formData.phone}</strong> in a few minutes.
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="bg-primary-blue hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all cursor-pointer"
                >
                  Book Another Service
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 text-left">
                    Schedule Doorstep Visit
                  </h3>
                  <p className="text-neutral-muted text-sm text-left mt-1.5">
                    Select your service category. Our verified technician will arrive on your preferred slot.
                  </p>
                </div>

                <div className="text-left">
                  <label htmlFor="user-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="user-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50/50 hover:bg-slate-50 focus:bg-white text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? "border-red-400 focus:ring-red-200"
                        : "border-slate-200 focus:ring-blue-100 focus:border-primary-blue"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1.5 flex items-center space-x-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="text-left">
                    <label htmlFor="user-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="user-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210"
                      className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50/50 hover:bg-slate-50 focus:bg-white text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.phone
                          ? "border-red-400 focus:ring-red-200"
                          : "border-slate-200 focus:ring-blue-100 focus:border-primary-blue"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1.5 flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  <div className="text-left">
                    <label htmlFor="preferred-date" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="preferred-date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                      className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50/50 hover:bg-slate-50 focus:bg-white text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.preferredDate
                          ? "border-red-400 focus:ring-red-200"
                          : "border-slate-200 focus:ring-blue-100 focus:border-primary-blue"
                      }`}
                    />
                    {errors.preferredDate && (
                      <p className="text-xs text-red-500 mt-1.5 flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.preferredDate}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-left">
                  <label htmlFor="service-type" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service-type"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50/50 hover:bg-slate-50 focus:bg-white text-sm focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer ${
                      errors.serviceType
                        ? "border-red-400 focus:ring-red-200"
                        : "border-slate-200 focus:ring-blue-100 focus:border-primary-blue"
                    }`}
                  >
                    <option value="">Select service category...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.serviceType && (
                    <p className="text-xs text-red-500 mt-1.5 flex items-center space-x-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.serviceType}</span>
                    </p>
                  )}
                </div>

                <div className="text-left">
                  <label htmlFor="message-text" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Additional Details / Notes
                  </label>
                  <textarea
                    id="message-text"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Provide details of the issue or requirement (e.g. Fridge not cooling, Washing machine drum shaking, 3kW Rooftop solar enquiry, etc.)"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-primary-blue transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-accent-orange hover:bg-accent-orange-hover text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Book Service</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
