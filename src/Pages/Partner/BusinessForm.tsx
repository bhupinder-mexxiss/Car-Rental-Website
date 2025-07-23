import { FieldArray, useFormikContext } from 'formik';
import { FormikInput } from '../../Components/CommanFields/FormikInput'

const BusinessForm = () => {
    const { values } = useFormikContext<any>();
    return (
        <>
            <div className="mt-6">
                <h4 className="text-lg font-medium">Business Information</h4>
                <hr className="border-border my-3" />
                <div className="grid grid-cols-2 gap-3">
                    <div className="col-span-2">
                        <p className="text-color2 !mb-1.5 inline-block text-sm font-medium" >Listing Preference * </p>
                        <div className="flex gap-8">
                            <FormikInput
                                name="listingPreference"
                                type="radio"
                                required
                                options={[
                                    { label: "Rental Only", value: "rent" },
                                    { label: "Sale Only", value: "sell" },
                                    { label: "Both Rental & Sale", value: "both" },
                                ]}
                            />
                        </div>
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
                            options={[
                                { label: "1 Year", value: "1" },
                                { label: "2 Years", value: "2" },
                                { label: "3 Years", value: "3" },
                                { label: "4 Years +", value: "4+" }
                            ]}
                        />
                    </div>
                    {/* <div>
                                                                <FormikInput
                                                                    name="numberVehicles"
                                                                    label="Number of Vehicles"
                                                                    required
                                                                />
                                                            </div> */}
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
                <h4 className="text-lg font-medium">Documents</h4>
                <hr className="border-border my-3" />

                <FieldArray name="documents">
                    {() => (
                        <>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                {values?.documents?.map((_: any, index: number) => {
                                    // Get idType selected in other field
                                    const selectedTypes = values.documents
                                        .map((doc: any, i: number) => (i !== index ? doc.idType : null))
                                        .filter((v: any) => v);

                                    const allOptions = [
                                        { label: "Aadhaar", value: "aadhaar" },
                                        { label: "Passport", value: "passport" },
                                        { label: "Driving License", value: "driving_license" },
                                        { label: "Voter ID", value: "voter_id" }
                                    ];

                                    const filteredOptions = allOptions.filter(
                                        (opt) => !selectedTypes.includes(opt.value)
                                    );

                                    return (
                                        <div key={index}>
                                            <div className="flex flex-col gap-2">
                                                <FormikInput
                                                    name={`documents[${index}].idType`}
                                                    type="select"
                                                    placeholder="ID Type"
                                                    required
                                                    options={filteredOptions}
                                                />
                                                <FormikInput
                                                    name={`documents[${index}].document`}
                                                    type="file"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    )}
                </FieldArray>
                <p className="text-xs text-[#525252] mt-1">
                    You can upload multiple files (max 5MB each). Accepted formats: PDF, JPG, PNG.
                </p>
            </div>
        </>
    )
}

export default BusinessForm