
import * as Yup from "yup";

export const carValidationSchemas = [
    // Car Info
    Yup.object({
        brand: Yup.string().required("Brand is required"),
        model: Yup.string().required("Model is required"),
        year: Yup.number().required("Year is required").min(1990, "Year must be 1990 or later").max(new Date().getFullYear() + 1, `Year must be ${new Date().getFullYear() + 1} or earlier`),
        transmission: Yup.string().required("Transmission is required"),
        fuelType: Yup.string().required("Fuel type is required"),
        seats: Yup.number().required("Number of seats is required").min(1, "Must have at least 1 seat"),
        doors: Yup.number().required("Number of doors is required").min(2, "Must have at least 2 doors"),
        category: Yup.string().required("Category is required"),
    }),
    // Upload Images
    Yup.object({
        images: Yup.array().min(1, "At least one image is required"),
        thumbnail: Yup.mixed().required("Thumbnail image is required"),
    }),
    // Car Features
    Yup.object({
        features: Yup.array(),
        description: Yup.string().required("Description is required"),
    }),
    // Location & Availability
    Yup.object({
        location: Yup.string().required("Pickup/Return location is required"),
        address: Yup.string().required("Address is required"),
        city: Yup.string().required("City is required"),
        availableFrom: Yup.date().required("Available from date is required"),
        availableTo: Yup.date().required("Available to date is required")
            .min(Yup.ref('availableFrom'), "Available to date must be after available from date"),
    }),
    // Pricing & Charges
    Yup.object({
        price: Yup.number().required("Price is required").min(0, "Price must be positive"),
        priceUnit: Yup.string().required("Price unit is required"),
        deposit: Yup.number().min(0, "Deposit must be positive"),
        lateFee: Yup.number().min(0, "Late fee must be positive"),
    }),
    // Owner Info
    Yup.object({
        ownerName: Yup.string().required("Owner name is required"),
        ownerEmail: Yup.string().email("Invalid email format").required("Owner email is required"),
        ownerPhone: Yup.string().required("Owner phone number is required"),
    }),
    // Upload Documents
    Yup.object({
        driverLicense: Yup.mixed().required("Driver's license is required"),
        carRegistration: Yup.mixed().required("Car registration is required"),
        insuranceDocument: Yup.mixed().required("Insurance document is required"),
    }),
    // Review & Submit
    Yup.object({}),
];


export const carInitialValues = {
    // Car Info
    brand: "",
    model: "",
    year: new Date().getFullYear(),
    transmission: "Automatic",
    fuelType: "Gasoline",
    seats: 5,
    doors: 4,
    category: "Economy",

    // Images
    images: [],
    thumbnail: null,

    // Features
    features: [],
    description: "",

    // Location & Availability
    location: "",
    address: "",
    city: "",
    availableFrom: "",
    availableTo: "",

    // Pricing
    price: 0,
    priceUnit: "day",
    deposit: 0,
    lateFee: 0,

    // Owner info
    ownerName: "",
    ownerEmail: "",
    ownerPhone: "",

    // Documents
    driverLicense: null,
    carRegistration: null,
    insuranceDocument: null,
};