
import * as Yup from "yup";
import { listingSteps } from "../constants/car";

const carInfo = Yup.object({
    title: Yup.string().required("Title is required"),
    brand: Yup.string().required("Brand is required"),
    model: Yup.string().required("Model is required"),
    year: Yup.number().required("Year is required").min(1990, "Year must be 1990 or later").max(new Date().getFullYear() + 1, `Year must be ${new Date().getFullYear() + 1} or earlier`),
    transmission: Yup.string().required("Transmission is required"),
    fuelType: Yup.string().required("Fuel type is required"),
    seats: Yup.number().required("Number of seats is required").min(1, "Must have at least 1 seat"),
    doors: Yup.number().required("Number of doors is required").min(2, "Must have at least 2 doors"),
    category: Yup.string().required("Category is required"),
})
const uploadImages = Yup.object({
    images: Yup.array().min(1, "At least 5 images are required").required("At least 5 images are required"),
    thumbnail: Yup.mixed().required("Thumbnail image is required"),
})
// Car Features
const carFeatures = Yup.object({
    features: Yup.array().min(1, "At least 5 features is required"),
    description: Yup.string().required("Description is required"),
})
// Location & Availability
const locationAndAvailability = Yup.object({
    location: Yup.string().required("Pickup/Return location is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    availableFrom: Yup.date().required("Available from date is required"),
    availableTo: Yup.date().required("Available to date is required")
        .min(Yup.ref('availableFrom'), "Available to date must be after available from date"),
})
// Pricing & Charges
const pricingAndChaarges = Yup.object({
    price: Yup.number().required("Price is required").min(0, "Price must be positive"),
    priceUnit: Yup.string().required("Price unit is required"),
    deposit: Yup.number().min(0, "Deposit must be positive"),
    lateFee: Yup.number().min(0, "Late fee must be positive"),
})
// Owner Info
const ownerInfo = Yup.object({
    ownerName: Yup.string().required("Owner name is required"),
    ownerEmail: Yup.string().email("Invalid email format").required("Owner email is required"),
    ownerPhone: Yup.string().required("Owner phone number is required"),
})
// Upload Documents
const documents = Yup.object({
    driverLicense: Yup.mixed().required("Driver's license is required"),
    carRegistration: Yup.mixed().required("Car registration is required"),
    insuranceDocument: Yup.mixed().required("Insurance document is required"),
})
export const carValidationSchemas: Record<listingSteps, any> = {
    carInfo: carInfo,
    uploadImages: uploadImages,
    carFeatures: carFeatures,
    locationAndAvailability: locationAndAvailability,
    pricingAndCharges: pricingAndChaarges,
    ownerInfo: ownerInfo,
    documents: documents,
    reviewSubmit: Yup.object()
}

export const carInitialValues = (data) => ({
    // Car Info
    title: data.title || "",
    brand: data.brand || "",
    model: data.model || "",
    year: data.year || new Date().getFullYear(),
    transmission: data.transmission || "",
    fuelType: data.fuelType || "",
    seats: data.seats || 0,
    doors: data.doors || 2,
    category: data.category || "",

    // Images
    images: data.images || [],
    thumbnail: data.thumbnail || "",

    // Features
    features: [],
    description: data.description || "",

    // Location & Availability
    location: data.location || "",
    address: data.address || "",
    city: data.city || "",
    availableFrom: data.availableFrom || "",
    availableTo: data.availableTo || "",

    // Pricing
    price: data.price || 0,
    priceUnit: data.priceUnit || "day",
    deposit: data.deposit || 0,
    lateFee: data.lateFee || 0,

    // Owner info
    ownerName: data.ownerName || "",
    ownerEmail: data.ownerEmail || "",
    ownerPhone: data.ownerPhone || "",

    // Documents
    driverLicense: data.driverLicense || null,
    carRegistration: data.carRegistration || null,
    insuranceDocument: data.insuranceDocument || null,
});