interface CarDocuments {
    carRegistration: File | null;
    insuranceDocument: File | null;
}

export interface CarInitialValues {
    // Car Info
    listingType: string;
    carNo: string;
    title: string;
    brand: string;
    model: string;
    year: number;
    transmission: string;
    fuelType: string;
    seats: number;
    doors: number;
    category: string;
    carType: string;
    color: string;
    condition: string;
    kmDriven: string;
    ownership: string;

    // Images
    images: [
        {
            url: string,
            publicId: string
        }
    ];
    thumbnail: string;

    // Features
    features: string[];
    description: string;
    isNegotiable: boolean

    // Location & Availability
    pickuplocation: string;
    availableFrom: string | Date;
    availableTo: string | Date;
    address: {
        address1: string;
        address2: string;
        area: string;
        state: string;
        country: string;
    }

    // Pricing
    rentPrice: {
        price: number;
        priceUnit: string;
        deposit: number;
        lateFee: number;
        milageTypeUnlimited: boolean,
        kmDrive: number,
        extraKmFee: number
    }

    // Owner info
    ownerName: string;
    ownerEmail: string;
    ownerPhone: string;

    // Documents
    documents: CarDocuments;

    agree_terms: boolean
}

export interface Car {
    _id: string;
    title: string;
    thumbnail: string;
    listingType: 'rent' | 'sale';
    status: 'active' | 'inactive' | 'draft';
    seats: number;
    fuelType: string;
    transmission: string;
    rentPrice?: { price: number };
    price?: number;
}
export interface ICar {
    _id: string;
    isWishlisted: boolean,
    listedBy: string;
    title: string;
    carNo: string;
    brand: { name: string };
    model: string;
    Variant?: string;
    color?: string;
    carType?: "Hatchback" | "Sedan" | "SUV" | "Luxury" | "MUV" | "Convertible" | "Van";
    year: number;
    transmission?: string;
    fuelType?: string;
    seats: number;
    doors: number;
    category: string;
    condition?: string;
    kmDriven?: number;
    ownership?: number;
    isSold: boolean,
    listingType: "sell" | "rent";
    images?: {
        public_id: string;
        url: string;
    }[];
    thumbnail: string;
    features?: string[];
    price?: number;
    isNegotiable?: boolean;
    description: string;
    ownerName: string,
    ownerEmail: string,
    ownerPhone: string,
    views?: number;
    status: 'draft' | 'active' | 'inactive';
    currentStep: string;
    rentPrice?: {
        price: number,
        priceUnit: string,
        deposit: number,
        lateFee: number,
        kmDrive: number,
        extraKmFee: number
    }
}