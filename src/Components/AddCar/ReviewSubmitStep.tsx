import { useSearchParams } from "react-router";
import { addCarSteps, listingStepInfo, listingSteps } from "../../constants/car";
import { FormikInput } from "../CommanFields/FormikInput";
import { formatDateRange } from "../../Utils/comman";

interface ReviewSubmitStepProps {
    values: any;
}
const ReviewSubmitStep = ({ values }: ReviewSubmitStepProps) => {
    console.log(values);


    const [searchParams] = useSearchParams();
    const type = searchParams.get("type");

    const steps: listingSteps[] = Object.values(addCarSteps)
        .filter((step: listingStepInfo) => type !== null && step.showFor.includes(type))
        .map((step) => step.key);

    const formatDate = (dateString: string) => {
        if (!dateString) return "Not specified";

        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div>
            {/* <h2 className="text-xl font-semibold mb-6">Review & Submit</h2> */}

            <div className="space-y-8">
                {/* Car Information */}
                {steps.includes("carInfo") &&
                    <div className="border rounded-md overflow-hidden">
                        <div className="bg-gray-50 px-4 py-3 border-b">
                            <h3 className="font-medium text-gray-700">Car Information</h3>
                        </div>
                        <div className="p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Car Number</p>
                                    <p className="text-base uppercase">{values?.carNo || "Not specified"}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Title</p>
                                    <p className="text-base">{values?.title || "Not specified"}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Brand</p>
                                    <p className="text-base capitalize">{values?.brand?.name || "Not specified"}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Model</p>
                                    <p className="text-base capitalize">{values?.model || "Not specified"}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Year</p>
                                    <p className="text-base">{values?.year || "Not specified"}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Transmission</p>
                                    <p className="text-base capitalize">{values?.transmission || "Not specified"}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Fuel Type</p>
                                    <p className="text-base capitalize">{values?.fuelType || "Not specified"}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Category</p>
                                    <p className="text-base capitalize">{values?.category || "Not specified"}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Car Type</p>
                                    <p className="text-base capitalize">{values?.carType || "Not specified"}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Color</p>
                                    <p className="text-base capitalize">{values?.color || "Not specified"}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Seats</p>
                                    <p className="text-base">{values?.seats || "Not specified"}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Doors</p>
                                    <p className="text-base">{values?.doors || "Not specified"}</p>
                                </div>
                                {values?.listingType === "sell" &&
                                    <>
                                        <div>
                                            <p className="text-sm font-medium text-gray-500">Ownership</p>
                                            <p className="text-base capitalize">{values?.ownership || "Not specified"}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-500">Condition</p>
                                            <p className="text-base capitalize">{values?.condition || "Not specified"}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-500">KM Driven</p>
                                            <p className="text-base capitalize">{values?.kmDriven || "Not specified"}</p>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                }

                {/* Car Images */}
                {values?.images && values?.images.length > 0 && steps.includes("uploadImages") && (
                    <div className="border rounded-md overflow-hidden">
                        <div className="bg-gray-50 px-4 py-3 border-b">
                            <h3 className="font-medium text-gray-700">Car Images</h3>
                        </div>
                        <div className="p-4">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                                {values?.images.map((image, index: number) => (
                                    <div key={index} className={`rounded-md overflow-hidden ${values?.thumbnail === image.url ? 'ring-2 ring-blue-500' : ''} relative`}>
                                        <img src={image.url} alt={`Car image ${index + 1}`} className="w-full h-40 object-cover" />
                                        {values?.thumbnail === image.url && (
                                            <div className="absolute bottom-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                                                Main Image
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Features & Description */}
                <div className="border rounded-md overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b">
                        <h3 className="font-medium text-gray-700">{values?.listingType === "sell" ? "Features & Pricing" : "Features & Description"}</h3>
                    </div>
                    <div className="p-4">
                        {values?.listingType === "sell" &&
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mb-4">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Price</p>
                                        <p className="text-base">₹ {values?.price?.toLocaleString() || "-"}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Negotiable</p>
                                        <p className="text-base">{values?.negotiable || "-"}</p>
                                    </div>
                                </div>
                            </>
                        }
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-2">Description</p>
                            <p className="text-base mb-4">{values?.description || "No description provided"}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-2">Features</p>
                            {values?.features && values?.features.length > 0 ? (
                                <div className="flex flex-wrap gap-2">
                                    {values?.features.map((feature: string, index: number) => (
                                        <span key={index} className="bg-blue-100/60 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full capitalize">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-base">No features specified</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Location & Availability */}
                <div className="border rounded-md overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b">
                        <h3 className="font-medium text-gray-700">{values?.listingType === "sell" ? "Location" : "Location & Availability"}</h3>
                    </div>
                    <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {type === "rent" &&
                                <>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Pickup/Return Location</p>
                                        <p className="text-base">{values?.pickuplocation || "Not specified"}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Available From - To</p>
                                        <p className="text-base">{formatDateRange([values?.availableFrom, values?.availableTo])}</p>
                                    </div>
                                </>
                            }
                            <div>
                                <p className="text-sm font-medium text-gray-500">Building</p>
                                <p className="text-base">{values?.address?.address1 || "Not specified"}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Street Address</p>
                                <p className="text-base">{values?.address?.address2 || "Not specified"}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Community / Area</p>
                                <p className="text-base">{values?.address?.area || "-"}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">City / Emirate</p>
                                <p className="text-base">{values?.address?.state || "Not specified"}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Country</p>
                                <p className="text-base">{values?.address?.country || "Not specified"}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing & Charges */}
                {steps?.includes("pricingAndCharges") &&
                    <div className="border rounded-md overflow-hidden">
                        <div className="bg-gray-50 px-4 py-3 border-b">
                            <h3 className="font-medium text-gray-700">Pricing & Charges</h3>
                        </div>
                        <div className="p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">{type === "sell" ? "Price" : "Rental Price"}</p>
                                    <p className="text-base">
                                        {values?.rentPrice?.price ? `₹ ${values?.rentPrice?.price.toLocaleString()} per ${values?.rentPrice?.priceUnit || 'day'}` : "Not specified"}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Security Deposit</p>
                                    <p className="text-base">{values?.rentPrice?.deposit ? `₹ $${values?.rentPrice?.deposit?.toLocaleString()}` : "Not specified"}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Late Return Fee</p>
                                    <p className="text-base">{values?.rentPrice?.lateFee ? `₹ $${values?.rentPrice?.lateFee?.toLocaleString()} per hour` : "Not specified"}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Drive Type</p>
                                    <p className="text-base">{values?.rentPrice?.milageTypeUnlimited === false ? "Limted" : "Unlimited"}</p>
                                </div>
                                {values?.rentPrice?.milageTypeUnlimited === false &&
                                    <>
                                        <div>
                                            <p className="text-sm font-medium text-gray-500">KM Drive</p>
                                            <p className="text-base">{values?.rentPrice?.kmDrive}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-500">Extra KM Fee</p>
                                            <p className="text-base">₹ {values?.rentPrice?.extraKmFee?.toLocaleString()}</p>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                }

                {/* Owner Information */}
                {steps?.includes("ownerInfo") &&
                    <div className="border rounded-md overflow-hidden">
                        <div className="bg-gray-50 px-4 py-3 border-b">
                            <h3 className="font-medium text-gray-700">Owner Information</h3>
                        </div>
                        <div className="p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Full Name</p>
                                    <p className="text-base">{values?.ownerName || "Not specified"}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Email Address</p>
                                    <p className="text-base">{values?.ownerEmail || "Not specified"}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Phone Number</p>
                                    <p className="text-base">{values?.ownerPhone || "Not specified"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {/* Document Verification */}
                {steps?.includes("documents") &&
                    <div className="border rounded-md overflow-hidden">
                        <div className="bg-gray-50 px-4 py-3 border-b">
                            <h3 className="font-medium text-gray-700">Document Verification</h3>
                        </div>
                        <div className="p-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* <div>
                                    <p className="text-sm font-medium text-gray-500">Driver's License</p>
                                    <p className="text-base">{values?.documents.driverLicense ? "✅ Uploaded" : "❌ Not uploaded"}</p>
                                </div> */}
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Car Registration</p>
                                    <p className="text-base">{values?.documents?.carRegistration ? "✅ Uploaded" : "❌ Not uploaded"}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Insurance Document</p>
                                    <p className="text-base">{values?.documents?.insuranceDocument ? "✅ Uploaded" : "❌ Not uploaded"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="bg-blue-50 p-4 rounded-md">
                    <h3 className="text-blue-700 font-medium mb-1">Important Information</h3>
                    <ul className="text-[13px] list-decimal list-inside">
                        <li>By submitting, you agree to our Terms of Service and Privacy Policy.</li>
                        <li>Your listing will be reviewed by our team and published within 1-2 business days.</li>
                        <li>You can edit your listing at any time after it's published.</li>
                        <li>You'll receive an email notification when your listing is approved.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ReviewSubmitStep;