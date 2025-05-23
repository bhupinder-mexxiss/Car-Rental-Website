export type listingSteps = "carInfo"
  | "uploadImages"
  | "carFeatures"
  | "locationAndAvailability"
  | "pricingAndCharges"
  | "ownerInfo"
  | "documents"
  | "reviewSubmit"

export type listingStepInfo = {
    title: string,
    showFor: string[],
    key: listingSteps,
}

export const addCarSteps: Record<listingSteps, listingStepInfo> = {
    carInfo: {title: "Car Info", showFor: ["rent", "sell"], key: "carInfo"},
    uploadImages: {title: "Upload Images", showFor: ["rent", "sell"], key: "uploadImages"},
    carFeatures: {title: "Car Features", showFor: ["rent", "sell"], key: "carFeatures"},
    locationAndAvailability: {title: "Location & Availability", showFor: ["rent"], key: "locationAndAvailability"},
    pricingAndCharges: {title: "Pricing & Charges", showFor: ["rent", "sell"], key: "pricingAndCharges"},
    ownerInfo: {title: "Owner Info", showFor: ["rent", "sell"], key: "ownerInfo"},
    documents: {title: "Upload Documents", showFor: ["rent", "sell"], key: "documents"},
    reviewSubmit: {title: "Review & Submit", showFor:["rent", "sell"], key: "reviewSubmit"}
}

export const categories = [
    'All',
    'Economy',
    'Midsize',
    'SUV',
    'Sports',
    'Luxury',
    'Electric'
];
export const filterOptions = {
    transmission: ['automatic', 'manual'],
    fuelType: ['gasoline', 'diesel', 'hybrid', 'electric'],
    brands: ['Honda', 'Toyota', 'Ford', 'BMW', 'Tesla', 'Jeep']
};
export const commonFeatures = [
    "Bluetooth",
    "Backup Camera",
    "USB Port",
    "Apple CarPlay",
    "Android Auto",
    "Cruise Control",
    "Leather Seats",
    "Sunroof",
    "Navigation",
    "Keyless Entry",
    "Premium Sound System",
    "Heated Seats",
    "Cooled Seats",
    "Driver Assistance Package",
    "Lane Assist",
    "Blind Spot Monitor",
    "Parking Sensors",
    "Automatic Emergency Braking",
    "Adaptive Cruise Control",
    "Wireless Phone Charging",
    "Remote Start",
];