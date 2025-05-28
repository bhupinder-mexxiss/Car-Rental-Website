import { Formik } from "formik"
import { FormikInput } from "../../Components/CommanFields/FormikInput"

const PartnerApplication = () => {
    return (
        <div className="py-10 lg:py-14">
            <div className="container">
                <div>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#121212] mb-4">Partner Application</h2>
                        <p className="text-[#525252] text-lg">Complete the form below to start your journey as a CarRide partner</p>
                    </div>
                    <div className="max-w-[900px] mx-auto">
                        <Formik
                            initialValues={{}}
                            enableReinitialize
                            onSubmit={() => { }}
                        >
                            {() => (
                                <div className="p-8 rounded-xl shadow-md border border-border">
                                    <div>
                                        <h4 className="text-lg font-medium">Business Information</h4>
                                        <hr className="border-border my-3" />
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="col-span-2">
                                                <p className="text-color2 !mb-1.5 inline-block text-sm font-medium" >Listing Preference * </p>
                                                <div className="flex gap-8">
                                                    <FormikInput
                                                        name="listingPreference"
                                                        type="checkbox"
                                                        label="Rental Only"
                                                        required
                                                    />
                                                    <FormikInput
                                                        name="listingPreference"
                                                        type="checkbox"
                                                        label="Sale Only"
                                                        required
                                                    />
                                                    <FormikInput
                                                        name="listingPreference"
                                                        type="checkbox"
                                                        label="Both Rental & Sale"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <FormikInput
                                                    name="partnerType"
                                                    type="select"
                                                    label="Partner Type"
                                                    required
                                                // options={}
                                                />
                                            </div>
                                            <div>
                                                <FormikInput
                                                    name="businessName"
                                                    label="Business/Individual Name"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <FormikInput
                                                    name="yearsOperation"
                                                    label="Years in Operation"
                                                    type="select"
                                                    placeholder="Option"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <FormikInput
                                                    name="numberVehicles"
                                                    label="Number of Vehicles"
                                                    required
                                                />
                                            </div>
                                            <div className="col-span-2">
                                                <FormikInput
                                                    name="businessAddress"
                                                    label="Business Address"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <FormikInput
                                                    name="city"
                                                    label="City"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <FormikInput
                                                    name="state"
                                                    label="State"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <FormikInput
                                                    name="postalCode"
                                                    label="Postal Code"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <FormikInput
                                                    name="country"
                                                    label="Country"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <h4 className="text-lg font-medium">Contact Information</h4>
                                        <hr className="border-border my-3" />
                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <FormikInput
                                                    name="contactName"
                                                    label="Contact Name"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <FormikInput
                                                    name="email"
                                                    label="Email Address"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <FormikInput
                                                    name="number"
                                                    label="Phone Number"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <label htmlFor="documents" className="block text-sm font-medium text-[#525252] mb-2">Upload Business Documents (Business License, Insurance, etc.)</label>
                                        <input type="file" id="documents" name="documents" className="w-full px-4 rounded-lg border border-[#d4d3d9] focus:border-[#f07e2c] focus:outline-none" />
                                        <p className="text-xs text-[#525252] mt-1">You can upload multiple files (max 5MB each). Accepted formats: PDF, JPG, PNG.</p>
                                    </div>

                                    <div className="mt-6">
                                        <div className="flex items-center mb-2">
                                            <input id="terms" type="checkbox" className="w-4 h-4 text-[#f07e2c] bg-gray-100 border-gray-300 rounded focus:ring-[#f07e2c]" required />
                                            <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900">I agree to the <a href="#" className="text-[#f07e2c] hover:underline">Terms of Service</a> and <a href="#" className="text-[#f07e2c] hover:underline">Partner Agreement</a></label>
                                        </div>

                                        <div className="flex items-center">
                                            <input id="marketing" type="checkbox" className="w-4 h-4 text-[#f07e2c] bg-gray-100 border-gray-300 rounded focus:ring-[#f07e2c]" />
                                            <label htmlFor="marketing" className="ml-2 text-sm font-medium text-gray-900">I would like to receive updates and marketing communications about CarRide partner services</label>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <button className="btn3 w-full py-2.5">Submit Application</button>
                                        <p className="text-center mt-3 text-color2">Our team will review your application and get back to you within 2-3 business days.</p>
                                    </div>

                                </div>
                            )}

                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerApplication