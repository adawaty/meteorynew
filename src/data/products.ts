
export interface ProductSpec {
  model: string;
  capacity?: string;
  agent?: string;
  workingPressure?: string;
  testingPressure?: string;
  burstingPressure?: string;
  temperature?: string;
  material?: string;
  [key: string]: string | undefined;
}

export interface Product {
  id: string;
  name: string;
  category: "extinguisher" | "cabinet" | "system";
  subCategory?: "co2" | "powder" | "foam" | "water" | "cabinet-steel" | "cabinet-stainless";
  description: string;
  descriptionAr?: string;
  image: string;
  specs?: ProductSpec[];
  features?: string[];
  applications?: string[];
}

import co2_6kg from "@/assets/products/Co2-6-12-vk9x.png";
import co2_2kg from "@/assets/products/Co2---2-GUSS.png";
import powder_auto from "@/assets/products/Dry-Powder-Auto-min-coov.png";
import powder_ext from "@/assets/products/Dry-Powder-External-Cartrige-cBM5.jpg";
import powder_trolley from "@/assets/products/Meteory-Trolley-Dry-Chemical-Powder-3WYb.png";
import foam_trolley from "@/assets/products/1-faom-VRvg.png";
import cabinet_single from "@/assets/products/Cabinet-1-min-1muA.png";
import cabinet_double from "@/assets/products/Cabinets-2-min-kiry.png";
import cabinet_stainless from "@/assets/products/Untitled-1-x2cv.png";

export const products: Product[] = [
  // CO2
  {
    id: "co2-portable",
    name: "CO2 Fire Extinguisher (Portable)",
    category: "extinguisher",
    subCategory: "co2",
    description: "Effective for Class B flammable liquids and electrical fires. Clean agent leaves no residue.",
    image: co2_6kg,
    applications: ["Class B (Flammable Liquids)", "Class C (Electrical)", "Class E"],
    features: [
      "Seamless steel cylinder",
      "Brass valve with safety release",
      "Leaves no residue",
      "Electrostatic painted (RAL 3000)",
      "ISO 9001 Certified"
    ],
    specs: [
      { model: "CO2 2", capacity: "2 kg", workingPressure: "100 bar", burstingPressure: "Min 400 bar" },
      { model: "CO2 3", capacity: "3 kg", workingPressure: "100 bar", burstingPressure: "Min 400 bar" },
      { model: "CO2 6", capacity: "6 kg", workingPressure: "100 bar", burstingPressure: "Min 400 bar" }
    ]
  },
  {
    id: "co2-trolley",
    name: "CO2 Fire Extinguisher (Trolley)",
    category: "extinguisher",
    subCategory: "co2",
    description: "High capacity CO2 units for industrial applications.",
    image: co2_2kg, // Placeholder, using 2kg image but conceptually similar style
    applications: ["Industrial Facilities", "Power Stations"],
    features: ["Trolley mounted for mobility", "High pressure hose", "Seamless cylinder"],
    specs: [
      { model: "CO2 10", capacity: "10 kg", workingPressure: "100 bar" },
      { model: "CO2 45", capacity: "45 kg", workingPressure: "100 bar" }
    ]
  },
  
  // Dry Powder
  {
    id: "powder-stored",
    name: "Dry Powder (Stored Pressure)",
    category: "extinguisher",
    subCategory: "powder",
    description: "Multipurpose ABC dry chemical powder. Effective on most fire types.",
    image: powder_auto, // Using auto image as generic powder for now if better one missing
    applications: ["Class A (Solids)", "Class B (Liquids)", "Class C (Gas)"],
    features: [
      "Non-toxic dry chemical powder",
      "Corrosion resistant coating",
      "ISO 9001 Certified",
      "Egyptian Quality Mark"
    ],
    specs: [
      { model: "M1", capacity: "1 kg", agent: "ABC Powder" },
      { model: "M6", capacity: "6 kg", agent: "ABC Powder" },
      { model: "M12", capacity: "12 kg", agent: "ABC Powder" }
    ]
  },
  {
    id: "powder-cartridge",
    name: "Dry Powder (External Cartridge)",
    category: "extinguisher",
    subCategory: "powder",
    description: "External cartridge operated units for reliable activation in harsh conditions.",
    image: powder_ext,
    applications: ["Industrial", "Outdoor", "Harsh Environments"],
    specs: [
      { model: "ME 6", capacity: "6 kg" },
      { model: "ME 12", capacity: "12 kg" }
    ]
  },
  {
    id: "powder-automatic",
    name: "Automatic Dry Powder",
    category: "extinguisher",
    subCategory: "powder",
    description: "Heat-sensitive bulb activation for unmanned protection.",
    image: powder_auto,
    applications: ["Boiler Rooms", "Server Rooms", "Storage"],
    features: ["Automatic activation at 68°C", "Ceiling mounted"],
    specs: [
      { model: "MAuto 6", capacity: "6 kg" },
      { model: "MAuto 12", capacity: "12 kg" }
    ]
  },
  {
    id: "powder-trolley",
    name: "Trolley Dry Powder",
    category: "extinguisher",
    subCategory: "powder",
    description: "Mobile large capacity units for high risk areas.",
    image: powder_trolley,
    specs: [
      { model: "MET 30", capacity: "30 kg" },
      { model: "MET 100", capacity: "100 kg" }
    ]
  },

  // Foam
  {
    id: "foam-trolley",
    name: "Foam Fire Extinguisher",
    category: "extinguisher",
    subCategory: "foam",
    description: "AFFF Foam for Class B fires. Forms a sealing blanket over fuel.",
    image: foam_trolley,
    applications: ["Class B (Liquids)", "Refineries", "Garages"],
    features: ["AFFF 1:6%", "Corrosion resistant internal coating"],
    specs: [
      { model: "F 50", capacity: "50 Liters" },
      { model: "F 100", capacity: "100 Liters" }
    ]
  },

  // Cabinets
  {
    id: "cabinet-single",
    name: "Single Fire Cabinet",
    category: "cabinet",
    subCategory: "cabinet-steel",
    description: "Steel fire hose cabinet with glass door.",
    image: cabinet_single,
    features: ["Electrostatic powder coating", "1.2mm steel sheet", "Universal mounting"]
  },
  {
    id: "cabinet-double",
    name: "Double Fire Cabinet",
    category: "cabinet",
    subCategory: "cabinet-steel",
    description: "Vertical or horizontal double cabinet for hose and extinguisher.",
    image: cabinet_double,
    features: ["Separate compartment for extinguisher", "High visibility"]
  },
  {
    id: "cabinet-stainless",
    name: "Stainless Steel Cabinet",
    category: "cabinet",
    subCategory: "cabinet-stainless",
    description: "Premium stainless steel finish for architectural applications.",
    image: cabinet_stainless,
    features: ["304/316 Stainless Steel", "Corrosion resistant", "Modern aesthetic"]
  },

  // Systems
  {
    id: "system-co2",
    name: "CO2 Flooding System",
    category: "system",
    description: "Engineered total flooding systems for enclosed hazards.",
    image: co2_2kg, // Reusing CO2 image as placeholder for system cylinders
    applications: ["Server Rooms", "Engine Rooms", "Archives"],
    features: ["Automatic detection", "Manual release", "Audible/Visual alarms"],
    specs: [
      { model: "M-SYS-CO2", capacity: "Custom", workingPressure: "150 bar" }
    ]
  },
  {
    id: "system-kitchen",
    name: "Kitchen Suppression System",
    category: "system",
    description: "Wet chemical system for commercial kitchen hoods.",
    image: cabinet_single, // Placeholder
    applications: ["Restaurants", "Hotels", "Industrial Kitchens"],
    features: ["Fast acting", "Cooling effect", "UL Listed Agents"]
  },
  {
    id: "system-fm200",
    name: "FM 200 Suppression System",
    category: "system",
    description: "Waterless fire suppression system that protects high-value assets without residue.",
    image: co2_2kg, // Placeholder
    applications: ["Data Centers", "Telecommunications", "Museums"],
    features: ["Clean agent", "Safe for occupied spaces", "Rapid extinguishment"]
  },
  {
    id: "system-aerosol",
    name: "Condensed Aerosol System",
    category: "system",
    description: "Compact and cost-effective extinguishing solution for enclosed spaces.",
    image: powder_ext, // Placeholder
    applications: ["Electrical Panels", "Engine Compartments", "Storage"],
    features: ["No piping required", "Long service life", "Eco-friendly"]
  },
  {
    id: "system-water-spray",
    name: "Water Spray System",
    category: "system",
    description: "High velocity water spray for cooling and fire control.",
    image: foam_trolley, // Placeholder
    applications: ["Transformers", "Oil Tanks", "Conveyors"],
    features: ["Deluge valve operation", "High cooling capacity"]
  },
  {
    id: "system-sprinkler",
    name: "Fire Sprinkler System",
    category: "system",
    description: "Automatic water-based protection for building-wide coverage.",
    image: cabinet_single, // Placeholder
    applications: ["Commercial Buildings", "Warehouses", "Offices"],
    features: ["Heat activation", "24/7 protection", "Standard compliance"]
  }
];
