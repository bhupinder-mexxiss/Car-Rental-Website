export type listingSteps = "carInfo"
    | "uploadImages"
    | "carFeatures"
    | "locationAndAvailability"
    | "pricingAndCharges"
    | "ownerInfo"
    | "documents"
    | "final"

export type listingStepInfo = {
    title: string,
    showFor: string[],
    key: listingSteps,
}

export const addCarSteps: Record<listingSteps, listingStepInfo> = {
    carInfo: { title: "Car Info", showFor: ["rent", "sell"], key: "carInfo" },
    uploadImages: { title: "Upload Images", showFor: ["rent", "sell"], key: "uploadImages" },
    carFeatures: { title: "Car Features", showFor: ["rent", "sell"], key: "carFeatures" },
    locationAndAvailability: { title: "Location & Availability", showFor: ["rent", "sell"], key: "locationAndAvailability" },
    pricingAndCharges: { title: "Pricing & Charges", showFor: ["rent"], key: "pricingAndCharges" },
    ownerInfo: { title: "Owner Info", showFor: ["rent", "sell"], key: "ownerInfo" },
    documents: { title: "Upload Documents", showFor: ["rent", "sell"], key: "documents" },
    final: { title: "Review & Submit", showFor: ["rent", "sell"], key: "final" }
}

export const carType = [
    { label: 'Hatchback', value: 'hatchback' },
    { label: 'Sedan', value: 'sedan' },
    { label: 'SUV', value: 'suv' },
    { label: 'Luxury', value: 'luxury' },
    { label: 'MUV', value: 'muv' },
    { label: 'Convertible', value: 'convertible' },
    { label: 'Van', value: 'van' },
];


export const carOptions = {
    transmission: [
        { label: "Automatic", value: "automatic" },
        { label: "Manual", value: "manual" },
        { label: "CVT", value: "cvt" },
        { label: "Semi-Automatic", value: "semi-automatic" },
        { label: "Electric Drive", value: "electric-drive" },
    ],
    fuelType: [
        { label: "Petrol", value: 'petrol' },
        { label: "Diesel", value: 'diesel' },
        { label: "Hybrid", value: 'hybrid' },
        { label: "Electric", value: 'electric' },
    ],
    seats: [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
        { label: '5+', value: 6 },
    ],
    carType: [
        { label: "Hatchback", value: "hatchback" },
        { label: "Sedan", value: "sedan" },
        { label: "SUV", value: "suv" },
        { label: "MUV", value: "muv" },
        { label: "Convertible", value: "convertible" },
        { label: "Van", value: "van" },
        { label: "Coupe", value: "coupe" },
        { label: "Crossover", value: "crossover" },
        { label: "Pickup Truck", value: "pickup-truck" },
        { label: "Wagon", value: "wagon" },
        { label: "Roadster", value: "roadster" },
        { label: "Minivan", value: "minivan" },
        { label: "Microcar", value: "microcar" },
    ],
    categories: [
        { label: "Luxury", value: "luxury" },
        { label: "Vintage", value: "vintage" },
        { label: "Family", value: "family" },
        { label: "Budget", value: "budget" },
        { label: "Sports", value: "sports" },
        { label: "Off-Road", value: "off-road" },
        { label: "Commercial", value: "commercial" },
        { label: "Electric", value: "electric" },
        { label: "Premium", value: "premium" },
    ]
};
export const groupedCommonFeatures = [
    {
        category: "Technology & Infotainment",
        features: [
            { label: "Bluetooth", value: "bluetooth" },
            { label: "USB Port", value: "usb-port" },
            { label: "Apple CarPlay", value: "apple-carplay" },
            { label: "Android Auto", value: "android-auto" },
            { label: "Premium Sound System", value: "premium-sound-system" },
            { label: "Wireless Phone Charging", value: "wireless-phone-charging" },
            { label: "Wi-Fi Hotspot", value: "wifi-hotspot" },
            { label: "Rear Entertainment System", value: "rear-entertainment-system" },
            { label: "Voice Recognition", value: "voice-recognition" },
            { label: "Touchscreen Display", value: "touchscreen-display" },
            { label: "Navigation System", value: "navigation" },
            { label: "Heads-Up Display", value: "heads-up-display" },
            { label: "Digital Instrument Cluster", value: "digital-instrument-cluster" }
        ]
    },
    {
        category: "Comfort & Convenience",
        features: [
            { label: "Cruise Control", value: "cruise-control" },
            { label: "Adaptive Cruise Control", value: "adaptive-cruise-control" },
            { label: "Keyless Entry", value: "keyless-entry" },
            { label: "Remote Start", value: "remote-start" },
            { label: "Push Button Start", value: "push-button-start" },
            { label: "Sunroof", value: "sunroof" },
            { label: "Panoramic Sunroof", value: "panoramic-sunroof" },
            { label: "Power Windows", value: "power-windows" },
            { label: "Power Seats", value: "power-seats" },
            { label: "Heated Seats", value: "heated-seats" },
            { label: "Cooled Seats", value: "cooled-seats" },
            { label: "Ventilated Seats", value: "ventilated-seats" },
            { label: "Leather Seats", value: "leather-seats" },
            { label: "Ambient Lighting", value: "ambient-lighting" },
            { label: "Climate Control (Dual/Triple Zone)", value: "climate-control" },
            { label: "Drive Mode Selector", value: "drive-mode-selector" },
            { label: "Power Tailgate", value: "power-tailgate" },
            { label: "Split Folding Rear Seats", value: "split-folding-rear-seats" },
            { label: "Auto Dimming Rearview Mirror", value: "auto-dimming-mirror" }
        ]
    },
    {
        category: "Safety",
        features: [
            { label: "Backup Camera", value: "backup-camera" },
            { label: "360-Degree Camera", value: "360-camera" },
            { label: "Parking Sensors", value: "parking-sensors" },
            { label: "Blind Spot Monitor", value: "blind-spot-monitor" },
            { label: "Lane Assist", value: "lane-assist" },
            { label: "Lane Keep Assist", value: "lane-keep-assist" },
            { label: "Driver Attention Monitoring", value: "driver-attention-monitoring" },
            { label: "Automatic Emergency Braking", value: "automatic-emergency-braking" },
            { label: "Collision Warning System", value: "collision-warning" },
            { label: "Rear Cross Traffic Alert", value: "rear-cross-traffic-alert" },
            { label: "Tire Pressure Monitoring System (TPMS)", value: "tpms" },
            { label: "Hill Start Assist", value: "hill-start-assist" },
            { label: "Hill Descent Control", value: "hill-descent-control" },
            { label: "Stability Control", value: "stability-control" },
            { label: "Traction Control", value: "traction-control" }
        ]
    },
    {
        category: "Security",
        features: [
            { label: "Anti-Theft System", value: "anti-theft" },
            { label: "Immobilizer", value: "immobilizer" },
            { label: "Child Safety Locks", value: "child-safety-locks" }
        ]
    },
    {
        category: "Lighting & Visibility",
        features: [
            { label: "Fog Lights", value: "fog-lights" },
            { label: "LED Headlights", value: "led-headlights" },
            { label: "Auto High Beam", value: "auto-high-beam" },
            { label: "Rain-Sensing Wipers", value: "rain-sensing-wipers" }
        ]
    },
    {
        category: "Drivetrain & Performance",
        features: [
            { label: "All-Wheel Drive (AWD)", value: "awd" },
            { label: "Four-Wheel Drive (4WD)", value: "4wd" }
        ]
    },
    {
        category: "Exterior Utility",
        features: [
            { label: "Roof Rails", value: "roof-rails" }
        ]
    }
];
