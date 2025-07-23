import { FormikInput } from "../../Components/CommanFields/FormikInput"

const IndividualForm = () => {
    return (
        <>
            <div className="mt-6">
                <h4 className="text-lg font-medium">KYC Information</h4>
                <hr className="border-border my-3" />
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <FormikInput
                            name="fullName"
                            label="Full Name (as per ID)"
                            required
                        />
                    </div>
                    <div>
                        <FormikInput
                            name="kycIdType"
                            type="select"
                            label="ID Type"
                            required
                            options={[
                                { label: "Aadhaar", value: "aadhaar" },
                                { label: "Passport", value: "passport" },
                                { label: "Driving License", value: "driving_license" },
                                { label: "Voter ID", value: "voter_id" }
                            ]}
                        />
                    </div>
                    <div>
                        <FormikInput
                            name="kycIdNumber"
                            label="ID Number"
                            required
                        />
                    </div>
                    <div className="col-span-2">
                        <FormikInput
                            name="kycDocument"
                            label="Upload ID Document (PDF, JPG, PNG)"
                            type="file"
                            required
                        />
                        <p className="text-xs text-[#525252] mt-1">Accepted formats: PDF, JPG, PNG. Max size: 5MB.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndividualForm