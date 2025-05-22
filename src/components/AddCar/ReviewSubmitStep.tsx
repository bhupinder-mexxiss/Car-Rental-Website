interface ReviewSubmitStepProps {
    values: any;
}
const ReviewSubmitStep = ({ values }: ReviewSubmitStepProps) => {
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
                <div className="border rounded-md overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b">
                        <h3 className="font-medium text-gray-700">Car Information</h3>
                    </div>
                    <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm font-medium text-gray-500">Brand</p>
                                <p className="text-base">{values.brand || "Not specified"}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Model</p>
                                <p className="text-base">{values.model || "Not specified"}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Year</p>
                                <p className="text-base">{values.year || "Not specified"}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Transmission</p>
                                <p className="text-base">{values.transmission || "Not specified"}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Fuel Type</p>
                                <p className="text-base">{values.fuelType || "Not specified"}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Category</p>
                                <p className="text-base">{values.category || "Not specified"}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Seats</p>
                                <p className="text-base">{values.seats || "Not specified"}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Doors</p>
                                <p className="text-base">{values.doors || "Not specified"}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Car Images */}
                {values.images && values.images.length > 0 && (
                    <div className="border rounded-md overflow-hidden">
                        <div className="bg-gray-50 px-4 py-3 border-b">
                            <h3 className="font-medium text-gray-700">Car Images</h3>
                        </div>
                        <div className="p-4">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {values.images.map((image: string, index: number) => (
                                    <div key={index} className={`rounded-md overflow-hidden ${values.thumbnail === image ? 'ring-2 ring-blue-500' : ''} relative`}>
                                        <img src={image} alt={`Car image ${index + 1}`} className="w-full h-32 object-cover" />
                                        {values.thumbnail === image && (
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
                        <h3 className="font-medium text-gray-700">Features & Description</h3>
                    </div>
                    <div className="p-4">
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-2">Description</p>
                            <p className="text-base mb-4">{values.description || "No description provided"}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-2">Features</p>
                            {values.features && values.features.length > 0 ? (
                                <div className="flex flex-wrap gap-2">
                                    {values.features.map((feature: string, index: number) => (
                                        <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
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
                        <h3 className="font-medium text-gray-700">Location & Availability</h3>
                    </div>
                    <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm font-medium text-gray-500">Location Name</p>
                                <p className="text-base">{values.location || "Not specified"}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Address</p>
                                <p className="text-base">{values.address || "Not specified"}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">City</p>
                                <p className="text-base">{values.city || "Not specified"}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Available From</p>
                                <p className="text-base">{formatDate(values.availableFrom)}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Available To</p>
                                <p className="text-base">{formatDate(values.availableTo)}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing & Charges */}
                <div className="border rounded-md overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b">
                        <h3 className="font-medium text-gray-700">Pricing & Charges</h3>
                    </div>
                    <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm font-medium text-gray-500">Rental Price</p>
                                <p className="text-base">
                                    {values.price ? `$${values.price} per ${values.priceUnit || 'day'}` : "Not specified"}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Security Deposit</p>
                                <p className="text-base">{values.deposit ? `$${values.deposit}` : "Not specified"}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Late Return Fee</p>
                                <p className="text-base">{values.lateFee ? `$${values.lateFee} per hour` : "Not specified"}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Owner Information */}
                <div className="border rounded-md overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b">
                        <h3 className="font-medium text-gray-700">Owner Information</h3>
                    </div>
                    <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm font-medium text-gray-500">Full Name</p>
                                <p className="text-base">{values.ownerName || "Not specified"}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Email Address</p>
                                <p className="text-base">{values.ownerEmail || "Not specified"}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Phone Number</p>
                                <p className="text-base">{values.ownerPhone || "Not specified"}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Document Verification */}
                <div className="border rounded-md overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b">
                        <h3 className="font-medium text-gray-700">Document Verification</h3>
                    </div>
                    <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <p className="text-sm font-medium text-gray-500">Driver's License</p>
                                <p className="text-base">{values.driverLicense ? "✅ Uploaded" : "❌ Not uploaded"}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Car Registration</p>
                                <p className="text-base">{values.carRegistration ? "✅ Uploaded" : "❌ Not uploaded"}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Insurance Document</p>
                                <p className="text-base">{values.insuranceDocument ? "✅ Uploaded" : "❌ Not uploaded"}</p>
                            </div>
                        </div>
                    </div>
                </div>

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