export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
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
  tagline: "Complete Cooling, Pure Water, Home Appliances & Solar Energy Solutions",
  description: "Cool Home provides reliable sales, installation, repair and maintenance for Air Conditioners, Water Purifiers, Refrigerators, Washing Machines, and Rooftop Solar Panel installations.",
  phone: "+91 95676 78575",
  phoneLink: "tel:+919567678575",
  whatsapp: "+91 95676 78575",
  whatsappLink: "https://wa.me/919567678575?text=Hello%20Cool%20Home%2C%20I%20would%20like%20to%20book%20a%20service.",
  email: "info@coolhomeplaceholder.com",
  address: "Vadakara Bus Stand, Vadakara, Kozhikode - 673101, Kerala",
  hours: "Monday - Sunday: 8:00 AM - 9:00 PM",
  directionsUrl: "https://google.com/maps/search/?api=1&query=11.5889494,75.5887989",
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
    image: "/ac_repair.png"
  },
  {
    id: "ac-service",
    title: "AC Jet Servicing",
    description: "Complete jet pump wet servicing, coil cleaning, drain line clearing, and filter cleaning for optimum performance.",
    iconName: "Wind",
    image: "/ac_jet_service.png"
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
    image: "/ac_maintenance_user.png"
  },
  {
    id: "ac-amc",
    title: "AC AMC Packages",
    description: "Annual maintenance contracts providing multiple routine check-ups, unlimited breakdown calls, and priority visits.",
    iconName: "Calendar",
    image: "/ac_amc_user.png"
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
    image: "/uv_purifier_user.png"
  },
  {
    id: "wp-install",
    title: "Purifier Installation",
    description: "Wall mounting, pressure valve fitting, wastewater tube routing, and clean input line connections.",
    iconName: "Layers",
    image: "/water_purifier_user.png"
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
    image: "/wp_repair_user.png"
  },
  {
    id: "wp-amc",
    title: "Water Purifier AMC",
    description: "Flexible Annual Contracts cover periodic filter replacements, sanitization, and unlimited support visits.",
    iconName: "CheckSquare",
    image: "/wp_amc_user.png"
  }
];

export const REFRIGERATOR_SERVICES: ServiceItem[] = [
  {
    id: "fridge-repair",
    title: "Refrigerator Repair",
    description: "Quick diagnosis and fix for non-cooling, excessive freezing, noisy compressor, or water pooling underneath.",
    iconName: "ThermometerSnowflake",
    image: "/refrigerator.png"
  },
  {
    id: "fridge-gas",
    title: "Fridge Gas Charging",
    description: "Reliable refrigerant leak detection, brazing repairs, and original refrigerant refill (R134a, R600a).",
    iconName: "Thermometer",
    image: "/fridge_gas_charging_user.png"
  },
  {
    id: "fridge-compressor",
    title: "Compressor Replacement",
    description: "Original brand-certified inverter and rotary compressor replacements with warranty protection.",
    iconName: "Cpu",
    image: "/fridge_compressor_user.png"
  },
  {
    id: "fridge-thermostat",
    title: "Thermostat & Defrost Repair",
    description: "Fixing faulty defrost timers, bi-metal sensors, defrost heaters, and electronic PCB temperature controls.",
    iconName: "Sliders",
    image: "/fridge_thermostat_user.png"
  },
  {
    id: "fridge-door",
    title: "Door Gasket & Seal Fix",
    description: "Replacing worn magnetic door gaskets to prevent cool air leakage and reduce heavy power consumption.",
    iconName: "ShieldAlert",
    image: "/fridge_gasket_user.png"
  },
  {
    id: "fridge-amc",
    title: "Refrigerator AMC",
    description: "Annual maintenance contracts covering bi-annual condenser cleaning, health checks, and breakdown visits.",
    iconName: "CalendarCheck",
    image: "/fridge_amc_user.png"
  }
];

export const WASHING_MACHINE_SERVICES: ServiceItem[] = [
  {
    id: "wm-front-load",
    title: "Front Load Repair",
    description: "Certified service for front-load drum shaking, door lock switch errors, water drainage, and high-speed spin issues.",
    iconName: "RotateCcw",
    image: "/washing_machine.png"
  },
  {
    id: "wm-top-load",
    title: "Top Load Repair",
    description: "Troubleshooting pulsator rotation, agitator faults, water level sensor errors, and unbalanced load vibrations.",
    iconName: "Disc",
    image: "/top_load_washer.png"
  },
  {
    id: "wm-motor",
    title: "Motor & Belt Replacement",
    description: "Genuine motor repair, belt tensioning, carbon brush replacement, and clutch assembly repairs.",
    iconName: "Wrench",
    image: "/washer_repair.png"
  },
  {
    id: "wm-pcb",
    title: "Motherboard (PCB) Repair",
    description: "Component-level microchip repair for display error codes (E1, E2, dE, etc.), power trip, and sensor glitches.",
    iconName: "Cpu",
    image: "/pcb_repair.png"
  },
  {
    id: "wm-inlet-drain",
    title: "Inlet & Drainage Fix",
    description: "Fixing clogged drain pumps, broken inlet solenoid valves, slow water filling, and continuous draining issues.",
    iconName: "Droplets",
    image: "/wm_drain_valve.png"
  },
  {
    id: "wm-install",
    title: "Installation & Demo",
    description: "Complete unboxing, transit bolt removal, level calibration, water inlet tap plumbing, and drain pipe setup.",
    iconName: "CheckCircle",
    image: "/wm_installation.png"
  }
];

export const SOLAR_SERVICES: ServiceItem[] = [
  {
    id: "solar-rooftop",
    title: "Rooftop Solar Installation",
    description: "Turnkey residential and commercial rooftop solar installation with high-efficiency monocrystalline panels.",
    iconName: "Sun",
    image: "/solar_panel.png"
  },
  {
    id: "solar-on-grid",
    title: "On-Grid Net Metering",
    description: "Grid-tied solar systems that export excess electricity back to the grid to slash electricity bills up to 80-90%.",
    iconName: "Zap",
    image: "/solar_inverter.png"
  },
  {
    id: "solar-off-grid",
    title: "Off-Grid & Hybrid Storage",
    description: "Solar setups with hybrid solar inverters and lithium/tubular battery backup for 24/7 uninterrupted power.",
    iconName: "BatteryCharging",
    image: "/solar_panels.png"
  },
  {
    id: "solar-cleaning",
    title: "Panel Cleaning & Maintenance",
    description: "Periodic dust and bird-dropping cleaning using de-mineralized water to maximize solar generation efficiency.",
    iconName: "Sparkles",
    image: "/solar_cleaning.png"
  },
  {
    id: "solar-inverter",
    title: "Solar Inverter Repair",
    description: "Diagnostics, fault code clearing, and repair for micro-inverters, string inverters, and MPPT charge controllers.",
    iconName: "Cpu",
    image: "/pcb_repair.png"
  },
  {
    id: "solar-amc",
    title: "Solar AMC & Audits",
    description: "Annual maintenance contracts covering string voltage audits, structure tightening, cable health, and cleanings.",
    iconName: "ShieldCheck",
    image: "/solar_audit_user.png"
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
    image: "/smart_inverter_ac_clean.png",
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
    image: "/water_purifier_user.png",
    imageAlt: "RO UV Water Purifier"
  },
  {
    id: "prod-ro-uv-uf-purifier",
    title: "RO + UV + UF + TDS Controller",
    description: "Elite 7-stage purification including mineral control to retain natural essential taste while removing impurities.",
    image: "/ro_uv_uf_purifier_user.png",
    imageAlt: "RO UV UF Water Purifier"
  },
  {
    id: "prod-uv-purifier",
    title: "UV Water Purifier",
    description: "High-speed filtration best suited for municipal tap water, destroying microbes without discarding water.",
    image: "/uv_purifier_user.png",
    imageAlt: "UV Water Purifier"
  },
  {
    id: "prod-domestic-purifier",
    title: "Alkaline Water Purifier",
    description: "Enhances drinking water with essential minerals and balances pH levels to support overall wellness.",
    image: "/alkaline_purifier_user.png",
    imageAlt: "Alkaline Water Purifier"
  }
];

export const WATER_TREATMENT_PRODUCTS: ProductItem[] = [
  {
    id: "wtp-softener",
    title: "Domestic Water Softener (2000 LPH)",
    description: "Premium dual-tank continuous hardness softener system. Eliminates calcium & magnesium scaling to protect pipelines, bathroom fittings, and skin.",
    image: "/water_treatment_plant_user.png",
    imageAlt: "Domestic Water Softener"
  },
  {
    id: "wtp-ro-industrial",
    title: "Commercial RO Plant (1000 LPH)",
    description: "Heavy-duty skid-mounted stainless steel reverse osmosis system with pressure gauges, sand-carbon pretreatment, and anti-scalant dosing pump.",
    image: "/commercial_ro_plant_user.png",
    imageAlt: "Commercial RO Plant"
  },
  {
    id: "wtp-sand-carbon",
    title: "Commercial Sand & Carbon Filter",
    description: "High-grade FRP vessel containing activated carbon and silica sand. Extracted turbidity, chlorine, chemical odor, and suspended sediment.",
    image: "/sand_carbon_filter_user.png",
    imageAlt: "Sand & Carbon Filter"
  }
];

export const APPLIANCE_PRODUCTS: ProductItem[] = [
  {
    id: "prod-double-fridge",
    title: "Frost-Free Double Door Refrigerator",
    description: "Smart inverter multi-airflow cooling with toughened glass shelves, odor filter, and ultra-quiet compressor.",
    image: "/double_door_fridge.png",
    imageAlt: "Double Door Refrigerator"
  },
  {
    id: "prod-side-fridge",
    title: "Side-by-Side Inverter Refrigerator",
    description: "Large capacity luxury refrigeration featuring digital display touch controls, express freeze, and quick chill zones.",
    image: "/side_by_side_fridge.png",
    imageAlt: "Side-by-Side Refrigerator"
  },
  {
    id: "prod-front-wm",
    title: "Front Load Smart Inverter Washing Machine",
    description: "Hygiene steam wash, active water plus sensor, 1200 RPM high-speed spin, and 5-star energy rating.",
    image: "/washing_machine.png",
    imageAlt: "Front Load Washing Machine"
  },
  {
    id: "prod-top-wm",
    title: "Fully Automatic Top Load Washing Machine",
    description: "Pulsator dynamic wash with waterfall detergent mixing, soft-close glass lid, and auto-tub clean feature.",
    image: "/top_load_washer.png",
    imageAlt: "Top Load Washing Machine"
  }
];

export const SOLAR_PRODUCTS: ProductItem[] = [
  {
    id: "prod-solar-mono",
    title: "Monocrystalline Solar Panels (550W)",
    description: "Half-cut bifacial monocrystalline solar cells with 21.5% peak module efficiency and 25-year performance warranty.",
    image: "/solar_panel.png",
    imageAlt: "Monocrystalline Solar Panel"
  },
  {
    id: "prod-solar-hybrid",
    title: "Hybrid Solar Inverter + Lithium battery",
    description: "Intelligent solar power management that switches seamlessly between solar, battery storage, and the electricity grid.",
    image: "/solar_inverter.png",
    imageAlt: "Hybrid Solar Inverter"
  },
  {
    id: "prod-solar-kit-3kw",
    title: "3kW Residential Rooftop Solar Kit",
    description: "Complete turnkey on-grid system with structure mounting, inverter, earthing kit, and net metering assistance.",
    image: "/solar_cleaning.png",
    imageAlt: "3kW Rooftop Solar Kit"
  },
  {
    id: "prod-solar-kit-5kw",
    title: "5kW Heavy Duty Home & Commercial Solar",
    description: "High-yield solar generation package capable of powering multiple ACs, refrigerators, and water pumps.",
    image: "/solar_panels.png",
    imageAlt: "5kW Solar Kit"
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: "choose-tech",
    title: "Certified Multiskill Technicians",
    description: "Our certified professionals undergo rigorous technical training for HVAC, RO purifiers, major appliances & solar.",
    iconName: "Users"
  },
  {
    id: "choose-parts",
    title: "100% Genuine Certified Spares",
    description: "We use strictly high-grade, manufacturer-certified spare parts, filters, membranes, compressors & solar hardware.",
    iconName: "Award"
  },
  {
    id: "choose-response",
    title: "Fast 2-Hour Doorstep Response",
    description: "Enjoy prompt bookings and rapid doorstep technician visits for all appliance repairs and solar audits.",
    iconName: "Zap"
  },
  {
    id: "choose-pricing",
    title: "Transparent & Upfront Pricing",
    description: "Honest estimates with zero hidden costs. You approve the diagnostic pricing before work starts.",
    iconName: "DollarSign"
  },
  {
    id: "choose-work",
    title: "Workmanship Warranty Guarantee",
    description: "Every installation, repair, gas charging, and filter replacement is backed by our local service warranty.",
    iconName: "ThumbsUp"
  },
  {
    id: "choose-satisfaction",
    title: "Dedicated After-Sales Support",
    description: "Our dedicated service desk provides post-service follow-up to ensure 100% customer satisfaction.",
    iconName: "Heart"
  }
];

export const PROCESS_STEPS: StepItem[] = [
  {
    step: "01",
    title: "Book a Service or Audit",
    description: "Call us, message on WhatsApp, or submit your requirement online to schedule an appointment."
  },
  {
    step: "02",
    title: "Expert Doorstep Visit",
    description: "Our certified technician arrives at your home on your preferred date and time slot."
  },
  {
    step: "03",
    title: "Inspection & Diagnosis",
    description: "We inspect your AC, purifier, refrigerator, washing machine or solar site, explain the fix, and quote standard rates."
  },
  {
    step: "04",
    title: "Completion & Warranty",
    description: "Service or installation is executed cleanly. Enjoy peak performance with our guaranteed service coverage!"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Rajesh Kumar",
    quote: "Exceptional AC servicing! The technician arrived within 90 minutes, jet-washed the coils, and now my AC cools like brand new. Highly recommended!",
    serviceType: "AC Jet Servicing",
    rating: 5
  },
  {
    id: "test-2",
    name: "Sunita Sharma",
    quote: "Very professional water purifier service. We had a filter change and membrane replacement done. The water tastes clean now and pricing was very fair.",
    serviceType: "RO Filter Replacement",
    rating: 5
  },
  {
    id: "test-3",
    name: "Karthik Nambiar",
    quote: "Cool Home installed our 5kW rooftop solar panel system. The team handled everything from structural mounting to net metering. Our electricity bill dropped by 85%!",
    serviceType: "5kW Rooftop Solar Installation",
    rating: 5
  },
  {
    id: "test-4",
    name: "Priyanka Sen",
    quote: "Our double door refrigerator stopped cooling suddenly. The technician diagnosed a faulty defrost sensor and replaced it with an original part right away. Saved all my food!",
    serviceType: "Refrigerator Repair",
    rating: 5
  },
  {
    id: "test-5",
    name: "Vikram Malhotra",
    quote: "Fixed my front load washing machine's severe drum shaking and drainage blockage on the same day. Very clean work and well-behaved staff.",
    serviceType: "Washing Machine Repair",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What products and services does Cool Home offer?",
    answer: "Cool Home provides end-to-end sales, installation, repair, servicing, and AMC contracts for Air Conditioners, RO Water Purifiers, Refrigerators, Washing Machines, and Rooftop Solar Panel installations."
  },
  {
    id: "faq-2",
    question: "Do you repair all types and brands of Refrigerators?",
    answer: "Yes, our technicians repair Single Door, Double Door, Triple Door, and Side-by-Side Inverter refrigerators of all major brands, handling issues like cooling failure, gas charging, compressor replacements, and thermostat faults."
  },
  {
    id: "faq-3",
    question: "Do you repair Front Load and Top Load Washing Machines?",
    answer: "Yes, we troubleshoot and repair Front Load, Top Load, Semi-Automatic, and Fully Automatic washing machines. We fix drum vibrations, spin failures, motor/belt issues, PCB circuit boards, and drainage blockages."
  },
  {
    id: "faq-4",
    question: "How does Rooftop Solar Panel installation work, and how much can I save?",
    answer: "We perform a free rooftop shadow analysis, design an On-Grid or Hybrid solar system, install high-efficiency monocrystalline panels, and help you connect Net Metering to export excess energy, reducing monthly power bills by 80% to 90%."
  },
  {
    id: "faq-5",
    question: "Do you provide AC gas charging and leak testing?",
    answer: "Yes, gas charging includes nitrogen pressure testing of copper joints and coils. If a leak is found, we braze/repair it, vacuum the system, and refill 100% original R32 or R410A refrigerant to manufacturer specifications."
  },
  {
    id: "faq-6",
    question: "Do you provide water purifier installation and filter replacement?",
    answer: "Yes, we install RO/UV/UF purifiers and provide timely cartridge swaps for sediment filters, activated pre-carbon blocks, post-carbon filters, and RO membranes."
  },
  {
    id: "faq-7",
    question: "Do you provide Annual Maintenance Contracts (AMC)?",
    answer: "Yes, we offer comprehensive AMC plans for ACs, RO water purifiers, refrigerators, and rooftop solar installations that include scheduled preventive maintenance, unlimited breakdown calls, and discounts on spares."
  },
  {
    id: "faq-8",
    question: "How fast is your doorstep technician service?",
    answer: "We provide doorstep services within 2 hours of booking across the city or on your exact scheduled time slot."
  }
];
