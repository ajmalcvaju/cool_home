export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image?: string;
}

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  quote: string;
  serviceType: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
}

export const BUSINESS_INFO = {
  name: "Cool Home",
  tagline: "Complete Cooling & Pure Water Solutions for Your Home",
  description: "Cool Home provides reliable AC sales, installation, repair and maintenance services along with water purifier sales, installation, repair and filter replacement.",
  phone: "+91 99999 99999",
  phoneLink: "tel:+919999999999",
  whatsapp: "+91 99999 99999",
  whatsappLink: "https://wa.me/919999999999?text=Hello%20Cool%20Home%2C%20I%20would%20like%20to%20book%20a%20service.",
  email: "info@coolhomeplaceholder.com",
  address: "Service Centers across city, Doorstep Services Delivered within 2 Hours",
  hours: "Monday - Sunday: 8:00 AM - 9:00 PM",
  directionsUrl: "https://share.google/w9fKvHjCEB8Nkh8kw",
};

export const AC_SERVICES: ServiceItem[] = [
  {
    id: "ac-install",
    title: "AC Installation",
    description: "Professional installation and mounting for split, window, and inverter residential AC systems with gas checks.",
    iconName: "Wrench",
    image: "/ac_technician.png"
  },
  {
    id: "ac-repair",
    title: "AC Repair",
    description: "Fast diagnosis and repair for cooling failures, compressor issues, water leakage, and electrical short circuits.",
    iconName: "AlertTriangle",
    image: "/ac_technician.png"
  },
  {
    id: "ac-service",
    title: "AC Servicing",
    description: "Complete jet pump wet servicing, coil cleaning, drain line clearing, and filter cleaning for optimum performance.",
    iconName: "Wind",
    image: "/ac_technician.png"
  },
  {
    id: "ac-gas",
    title: "AC Gas Charging",
    description: "Accurate gas pressure leak checks followed by full gas charging (R32, R410, etc.) for peak cooling capacity.",
    iconName: "Thermometer",
    image: "/ac_gas_charging.png"
  },
  {
    id: "ac-maintenance",
    title: "AC Maintenance",
    description: "Preventive general checks and tune-ups to boost energy efficiency, lower power bills, and extend AC life.",
    iconName: "ShieldCheck",
    image: "/split_ac.png"
  },
  {
    id: "ac-amc",
    title: "AC AMC Packages",
    description: "Annual maintenance contracts providing multiple routine check-ups, unlimited breakdown calls, and priority visits.",
    iconName: "Calendar",
    image: "/ac_technician.png"
  }
];

export const WATER_SERVICES: ServiceItem[] = [
  {
    id: "ro-service",
    title: "RO Water Purifier",
    description: "Comprehensive multi-stage RO system installation, membrane replacements, and performance troubleshooting.",
    iconName: "Droplet",
    image: "/ro_purifier.png"
  },
  {
    id: "uv-service",
    title: "UV Water Purifier",
    description: "Advanced UV disinfection lamp replacement and circuit repairs to eliminate active viruses and bacteria.",
    iconName: "Zap",
    image: "/water_purifier.png"
  },
  {
    id: "uf-service",
    title: "UF Water Purifier",
    description: "Hassle-free servicing and replacement of ultra-filtration filters to screen physical particles and sediment.",
    iconName: "Filter",
    image: "/ro_purifier.png"
  },
  {
    id: "wp-install",
    title: "Purifier Installation",
    description: "Wall mounting, pressure valve fitting, wastewater tube routing, and clean input line connections.",
    iconName: "Layers",
    image: "/water_purifier.png"
  },
  {
    id: "filter-replace",
    title: "Filter Replacement",
    description: "Timely replacements for sediment filters, pre-carbon block filters, post-carbon filters, and RO membranes.",
    iconName: "RefreshCw",
    image: "/filter_replace.png"
  },
  {
    id: "wp-repair",
    title: "Purifier Repair",
    description: "Fixing low water flow, constant wastewater dripping, auto-shutoff faults, and pump vibration noises.",
    iconName: "Settings",
    image: "/filter_replace.png"
  },
  {
    id: "wp-amc",
    title: "Water Purifier AMC",
    description: "Flexible Annual Contracts cover periodic filter replacements, sanitization, and unlimited support visits.",
    iconName: "CheckSquare",
    image: "/water_purifier.png"
  }
];

export const AC_PRODUCTS: ProductItem[] = [
  {
    id: "prod-split-ac",
    title: "Inverter Split AC",
    description: "High energy-efficiency cooling designed for quiet, comfortable, and consistent bedroom performance.",
    image: "/split_ac.png",
    imageAlt: "Inverter Split AC unit"
  },
  {
    id: "prod-window-ac",
    title: "Window AC",
    description: "Heavy-duty, compact cooling units ideal for quick installation and robust single-room temperature control.",
    image: "/window_ac.png",
    imageAlt: "Window AC unit"
  },
  {
    id: "prod-inverter-ac",
    title: "Smart Inverter AC",
    description: "Next-gen smart AC with variable speed compressor that adapts to room occupancy and lowers power bills.",
    image: "/split_ac.png",
    imageAlt: "Smart Inverter AC unit"
  },
  {
    id: "prod-cassette-ac",
    title: "Cassette AC",
    description: "Ceiling-mounted 360-degree uniform cooling distribution, ideal for spacious living rooms and offices.",
    image: "/cassette_ac.png",
    imageAlt: "Cassette AC unit"
  },
  {
    id: "prod-portable-ac",
    title: "Portable AC",
    description: "Convenient wheel-mounted cooling with exhaust kits for spaces where structural wall modification is not feasible.",
    image: "/portable_ac.png",
    imageAlt: "Portable AC unit"
  }
];

export const WATER_PRODUCTS: ProductItem[] = [
  {
    id: "prod-ro-purifier",
    title: "RO Water Purifier",
    description: "Multi-stage reverse osmosis filtration that extracts heavy metals, dissolved solids, and chemical residue.",
    image: "/ro_purifier.png",
    imageAlt: "RO Water Purifier"
  },
  {
    id: "prod-ro-uv-purifier",
    title: "RO + UV Purifier",
    description: "Combined RO membrane extraction and intense UV sterilisation for dual-layer home purity assurance.",
    image: "/water_purifier.png",
    imageAlt: "RO UV Water Purifier"
  },
  {
    id: "prod-ro-uv-uf-purifier",
    title: "RO + UV + UF + TDS Controller",
    description: "Elite 7-stage purification including mineral control to retain natural essential taste while removing impurities.",
    image: "/water_purifier.png",
    imageAlt: "RO UV UF Water Purifier"
  },
  {
    id: "prod-uv-purifier",
    title: "UV Water Purifier",
    description: "High-speed filtration best suited for municipal tap water, destroying microbes without discarding water.",
    image: "/ro_purifier.png",
    imageAlt: "UV Water Purifier"
  },
  {
    id: "prod-domestic-purifier",
    title: "Alkaline Water Purifier",
    description: "Enhances drinking water with essential minerals and balances pH levels to support overall wellness.",
    image: "/water_purifier.png",
    imageAlt: "Alkaline Water Purifier"
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: "choose-tech",
    title: "Experienced Technicians",
    description: "Our certified professionals undergo rigorous technical training for AC cooling systems and RO purifiers.",
    iconName: "Users"
  },
  {
    id: "choose-parts",
    title: "Genuine Parts Only",
    description: "We use strictly high-grade, manufacturer-certified spare parts, filters, membranes, and compressors.",
    iconName: "Award"
  },
  {
    id: "choose-response",
    title: "Fast Doorstep Response",
    description: "Enjoy prompt bookings and quick doorstep technicians arrival within 2 hours of booking.",
    iconName: "Zap"
  },
  {
    id: "choose-pricing",
    title: "Transparent Pricing",
    description: "Honest, upfront estimates with zero hidden costs. You approve the diagnostic pricing before work starts.",
    iconName: "DollarSign"
  },
  {
    id: "choose-work",
    title: "Quality Workmanship",
    description: "Every installation, gas charging, and filter tuning is backed by our local service warranty.",
    iconName: "ThumbsUp"
  },
  {
    id: "choose-satisfaction",
    title: "Dedicated Support",
    description: "Our service team is focused on providing post-service support to ensure 100% peace of mind.",
    iconName: "Heart"
  }
];

export const PROCESS_STEPS: StepItem[] = [
  {
    step: "01",
    title: "Book a Service",
    description: "Call us, message on WhatsApp, or fill out the booking form on our website to schedule a visit."
  },
  {
    step: "02",
    title: "Technician Visit",
    description: "Our skilled technician arrives at your doorstep on your preferred date and time slot."
  },
  {
    step: "03",
    title: "Inspection & Diagnosis",
    description: "We inspect your AC or Purifier, diagnose the issue, explain the fix, and quote standard rates."
  },
  {
    step: "04",
    title: "Back to Comfort",
    description: "The service is completed with care. Sit back and enjoy chilling cooling and absolute pure water!"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Rajesh Kumar",
    quote: "Exceptional AC servicing. The technician arrived within 90 minutes. He washed the filters, cleaned the coils with a jet spray, and now my AC cools like it's brand new. Highly recommended!",
    serviceType: "AC Jet Servicing",
    rating: 5
  },
  {
    id: "test-2",
    name: "Sunita Sharma",
    quote: "Very professional water purifier service. We had a filter change and membrane replacement done. The water tastes clean now, and the pricing was much lower than what local franchises quote.",
    serviceType: "RO Filter Replacement",
    rating: 5
  },
  {
    id: "test-3",
    name: "Amit Patel",
    quote: "I took their AC AMC package for my home. They perform two deep cleaning services a year and resolve breakdowns without extra labor fees. Very cost-effective and dependable.",
    serviceType: "AC Annual Maintenance (AMC)",
    rating: 5
  },
  {
    id: "test-4",
    name: "Priyanka Sen",
    quote: "Our RO water purifier had a continuous water leakage issue. The technician identified a faulty solenoid valve and replaced it with an original part immediately. Excellent service!",
    serviceType: "Water Purifier Repair",
    rating: 5
  },
  {
    id: "test-5",
    name: "Vikram Malhotra",
    quote: "Superb installation of our new inverter split AC. They did a neat copper pipe routing and vacuum-tested the line before turning it on. No messy drilling, clean job.",
    serviceType: "Inverter Split AC Installation",
    rating: 4
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What AC services does Cool Home provide?",
    answer: "We offer end-to-end AC solutions including professional installation, fault diagnosis & repair, wet jet-pump servicing, gas leak checks, gas charging, general maintenance, and Annual Maintenance Contracts (AMC)."
  },
  {
    id: "faq-2",
    question: "Do you provide AC installation for all brands?",
    answer: "Yes, our certified technicians are trained to install split ACs, inverter ACs, window ACs, and cassette ACs of all major brands in residential and commercial spaces."
  },
  {
    id: "faq-3",
    question: "Do you service all types of AC?",
    answer: "Yes, we service split, window, multi-split, cassette, inverter, and non-inverter air conditioners."
  },
  {
    id: "faq-4",
    question: "Do you provide AC gas charging, and how do you check for leaks?",
    answer: "Yes, gas charging includes a thorough leak inspection of copper joints and condenser/evaporator coils. If we find a leak, we braze/repair it, perform vacuum testing, and then refill the refrigerant to the manufacturer's exact specifications."
  },
  {
    id: "faq-5",
    question: "Do you provide water purifier installation?",
    answer: "Yes, we provide wall mounting, inlet valve installation, waste pipe routing, and testing of water purifiers for new units as well as relocations."
  },
  {
    id: "faq-6",
    question: "Do you repair RO water purifiers of all brands?",
    answer: "Yes, we troubleshoot and repair all brands of domestic and commercial water purifiers, resolving issues like low water output, vibration, noise, constant drain water, or power supply faults."
  },
  {
    id: "faq-7",
    question: "How often should I replace my water purifier filters?",
    answer: "Sediment filters, pre-carbon filters, and post-carbon filters should generally be replaced every 6 to 12 months, depending on your source water TDS level. The RO membrane typically lasts 1.5 to 2 years before needing replacement."
  },
  {
    id: "faq-8",
    question: "Do you provide Annual Maintenance Contracts (AMC) for ACs and purifiers?",
    answer: "Yes, we provide customizable AMC plans. For ACs, this includes 2 wet services, unlimited breakdown support, and discounted parts. For water purifiers, AMC covers regular filter kits replacement, membrane cleaning, and checks."
  },
  {
    id: "faq-9",
    question: "How can I book a service with Cool Home?",
    answer: "You can book by clicking the 'Book Service' buttons on our website, calling our helpline directly, or sending us a quick request on WhatsApp. We will confirm your slot in minutes."
  },
  {
    id: "faq-10",
    question: "Do you provide doorstep service and how long does it take?",
    answer: "Yes, we provide 100% doorstep services at your home or office. Once a booking is made, our technician is dispatched and typically arrives at your location within 2 hours or at your preferred scheduled time."
  }
];
