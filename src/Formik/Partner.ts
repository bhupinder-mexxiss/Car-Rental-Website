import * as Yup from "yup";

const individualSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    kycIdType: Yup.string().required("ID Type is required"),
    kycIdNumber: Yup.string().required("ID Number is required"),
    kycDocument: Yup.mixed()
        .required("Document is required")
        .test(
            "fileFormat",
            "Only PDF, JPG, or PNG files are accepted",
            (value) =>
                value !== null && value !== undefined && value instanceof File
        )
})

const businessSchema = Yup.object().shape({
    listingPreference: Yup.string().required("Listing preference is required"),
    businessName: Yup.string().required("Business name is required"),
    yearsOperation: Yup.string().required("Years of Operation is required"),
    // numberVehicles: Yup.string().required("Number Vehicles is required"),
    businessAddress: Yup.string().required("Business Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    postalCode: Yup.string().required("Postal Code is required"),
    country: Yup.string().required("Country is required"),
    contactName: Yup.string().required("Contact Name is required"),
    email: Yup.string().required("Email is required"),
    number: Yup.string().required("Number is required"),
    documents: Yup.array()
        .of(
            Yup.object().shape({
                idType: Yup.string().required("ID Type is required"),
                document: Yup.mixed()
                    .required("Document is required")
                    .test("fileFormat", "Only PDF, JPG, or PNG files are accepted", (value) =>
                        value instanceof File
                            ? ["application/pdf", "image/jpeg", "image/png"].includes(value.type)
                            : false
                    )
                    .test("fileSize", "File too large (max 5MB)", (value) =>
                        value instanceof File ? value.size <= 5 * 1024 * 1024 : false
                    ),
            })
        )
        .min(2, "Exactly two KYC documents are required")
        .max(2, "Exactly two KYC documents are required")
})

export const partnerSchema = {
    individual: individualSchema,
    business: businessSchema
}

const individualInitialValues = {
    fullName: "",
    kycIdType: "",
    kycIdNumber: "",
    kycDocument: null
}
const businessInitialValues = {
    listingPreference: "",
    businessName: "",
    yearsOperation: "",
    businessAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    contactName: "",
    email: "",
    number: "",
    documents: [
        { idType: "", document: null },
        { idType: "", document: null }
    ],
}

export const partnerInitialValues = {
    individual: individualInitialValues,
    business: businessInitialValues
}