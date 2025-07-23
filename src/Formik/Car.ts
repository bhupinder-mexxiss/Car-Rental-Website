
import * as Yup from "yup";
import { listingSteps } from "../constants/car";
import { CarInitialValues } from "../Types/car";

const carInfo = (listingType: string) => Yup.object({
    listingType: Yup.string(),
    carNo: Yup.string().required("Car No is required"),
    title: Yup.string().required("Title is required"),
    brand: Yup.string().required("Brand is required"),
    model: Yup.string().required("Model is required"),
    year: Yup.number().required("Year is required").min(1990, "Year must be 1990 or later").max(new Date().getFullYear() + 1, `Year must be ${new Date().getFullYear() + 1} or earlier`),
    transmission: Yup.string().required("Transmission is required"),
    fuelType: Yup.string().required("Fuel type is required"),
    seats: Yup.number().required("Number of seats is required").min(1, "Must have at least 1 seat"),
    doors: Yup.number().required("Number of doors is required").min(2, "Must have at least 2 doors"),
    category: Yup.string().required("Category is required"),
    carType: Yup.string().required("Car Type is required"),
    color: Yup.string().required("Color is required"),
    condition: Yup.string().test("is-valid", "Condition is required", function (condition) {
        if (listingType === "rent") return true;
        return !!condition;
    }),
    kmDriven: Yup.string().test("is-valid", "KM Driven is required", function (kmDriven) {
        if (listingType === "rent") return true;
        return !!kmDriven
    }),
    ownership: Yup.string().test("is-valid", "Ownership is required", function (ownership) {
        if (listingType === "rent") return true;
        return !!ownership
    })

})
const uploadImages = Yup.object({
    images: Yup.array().min(5, "At least 5 images are required").required("At least 5 images are required"),
    thumbnail: Yup.mixed().required("Thumbnail image is required"),
})
// Car Features
const carFeatures = (listingType: string) => Yup.object({
    features: Yup.array().min(5, "At least 5 features is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number()
        .nullable()
        .test("is-valid", "Condition is required", function (condition) {
            if (listingType === "rent") return true;
            return !!condition;
        }),
    isNegotiable: Yup.boolean()
})
// Location & Availability
const locationAndAvailability = (listingType: string) => Yup.object({
    pickuplocation: Yup.string().test("is-valid", "Pickup/Return location is required", function (pickuplocation) {
        if (listingType === "sell") return true;
        return !!pickuplocation
    }),
    availableFrom: Yup.date().test("is-valid", "Available from date is required", function (availableFrom) {
        if (listingType === "sell") return true;
        return !!availableFrom
    }),
    availableTo: Yup.date().test(
        "is-valid",
        "Available to date is required",
        function (availableTo) {
            if (listingType === "sell") return true;
            if (!availableTo) return false;

            const { availableFrom } = this.parent;
            if (availableFrom && new Date(availableTo) < new Date(availableFrom)) {
                return this.createError({
                    message: "Available to date must be after available from date",
                });
            }

            return true;
        }
    ),
    address: Yup.object({
        address1: Yup.string().required('Address Line 1 is required'),
        address2: Yup.string(),
        area: Yup.string().required('City is required'),
        state: Yup.string().required('State/Province is required'),
        country: Yup.string().required('Country is required'),
    })
})
// Pricing & Charges
const pricingAndCharges = Yup.object().shape({
    rentPrice: Yup.object({
        price: Yup.number().required("Price is required").min(0, "Price must be positive"),
        priceUnit: Yup.string().required("Price unit is required"),
        deposit: Yup.number().min(0, "Deposit must be positive"),
        lateFee: Yup.number().min(0, "Late fee must be positive"),
        milageTypeUnlimited: Yup.boolean(),
        kmDrive: Yup.number().when("milageTypeUnlimited", {
            is: false,
            then: schema => schema.required("KM Drive is required").min(1, "Must be more than 0"),
            otherwise: schema => schema.notRequired(),
        }),
        extraKmFee: Yup.number(),
    })
})
// Owner Info
const ownerInfo = Yup.object({
    ownerName: Yup.string().required("Owner name is required"),
    ownerEmail: Yup.string().email("Invalid email format").required("Owner email is required"),
    ownerPhone: Yup.string().required("Owner phone number is required"),
})
// Upload Documents
const documents = Yup.object().shape({
    documents: Yup.object({
        carRegistration: Yup.mixed().required("Car Registration is required"),
        insuranceDocument: Yup.mixed().required("Insurance Document is required")
    })
})

export const carValidationSchemas = (listingType: string): Record<listingSteps, any> => ({
    carInfo: carInfo(listingType),
    uploadImages: uploadImages,
    carFeatures: carFeatures(listingType),
    locationAndAvailability: locationAndAvailability(listingType),
    pricingAndCharges: pricingAndCharges,
    ownerInfo: ownerInfo,
    documents: documents,
    final: Yup.object({
        agree_terms: Yup.boolean()
            .oneOf([true], "You must agree to the Terms & Conditions")
            .required("You must agree to the Terms & Conditions")
    })
});


export const carInitialValues = (data?: Partial<CarInitialValues>): Record<listingSteps, Partial<CarInitialValues>> => ({
    // Car
    carInfo: {
        listingType: data?.listingType || "",
        carNo: data?.carNo || "",
        title: data?.title || "",
        brand: data?.brand || "",
        model: data?.model || "",
        year: data?.year || new Date().getFullYear(),
        transmission: data?.transmission || "",
        fuelType: data?.fuelType || "",
        seats: data?.seats || 0,
        doors: data?.doors || 2,
        category: data?.category || "",
        carType: data?.carType || "",
        color: data?.color || "",
        condition: data?.condition || "",
        kmDriven: data?.kmDriven || "",
        ownership: data?.ownership || "",
    },
    uploadImages: {
        images: data?.images && data.images.length > 0 ? data.images : undefined,
        thumbnail: data?.thumbnail || "",
    },
    carFeatures: {
        price: data?.price || 0,
        isNegotiable: data?.isNegotiable || false,
        features: data?.features || [],
        description: data?.description || "",
    },
    locationAndAvailability: {
        pickuplocation: data?.pickuplocation || "",
        availableFrom: data?.availableFrom || "",
        availableTo: data?.availableTo || "",
        address: {
            address1: data?.address?.address1 || "",
            address2: data?.address?.address2 || "",
            area: data?.address?.area || "",
            state: data?.address?.state || "",
            country: data?.address?.country || "",
        }
    },
    pricingAndCharges: {
        rentPrice: {
            price: data?.rentPrice?.price || 0,
            priceUnit: data?.rentPrice?.priceUnit || "",
            deposit: data?.rentPrice?.deposit || 0,
            lateFee: data?.rentPrice?.lateFee || 0,
            milageTypeUnlimited: data?.rentPrice?.milageTypeUnlimited ?? true,
            kmDrive: data?.rentPrice?.kmDrive || 0,
            extraKmFee: data?.rentPrice?.extraKmFee || 0
        },
    },
    ownerInfo: {
        ownerName: data?.ownerName || "",
        ownerEmail: data?.ownerEmail || "",
        ownerPhone: data?.ownerPhone || "",
    },
    documents: {
        documents: {
            carRegistration: data?.documents?.carRegistration || null,
            insuranceDocument: data?.documents?.insuranceDocument || null,
        }
    },
    final: {
        agree_terms: false
    }
    // Documents
})