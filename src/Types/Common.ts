export interface User {
    name: string;
    email: string;
    number: string;
    dob: string;
    address: {
        address1: string;
        address2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    }
}

export interface IBrand {
    _id: string,
    name: string
}
export interface IFeatureGroup {
    category: string;
    features: string[];
}
export interface FilterValues {
    brand?: string[];
    seat?: string[];
    carType?: string[];
    listingType?: string[];
    transmission?: string[];
    minPrice?: number;
    maxPrice?: number;
    startDate?: string;
    endDate?: string;
    area?: string[];
}


export interface CarOption {
    label: string;
    value: string | number;
}

export interface CarOptions {
    transmission: CarOption[];
    fuelType: CarOption[];
    brands: CarOption[];
    seats: CarOption[];
    carType: CarOption[];
    categories: CarOption[];
}