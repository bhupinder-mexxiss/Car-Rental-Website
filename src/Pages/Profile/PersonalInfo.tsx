import { Formik } from "formik"
import { FormikInput } from "../../Components/CommanFields/FormikInput"

const PersonalInfo = () => {
    return (
        <div>
            <Formik
                initialValues={{}}
                validationSchema={null}
                onSubmit={() => { }}
                validateOnChange={false}
                validateOnBlur={true}
            >
                {() => (
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <FormikInput
                                name="name"
                                label="Name"
                            />
                        </div>
                        <div>
                            <FormikInput
                                name="email"
                                label="Email"
                                type="email"
                            />
                        </div>
                        <div>
                            <FormikInput
                                name="number"
                                label="Phone Number"
                            />
                        </div>
                        <div>
                            <FormikInput
                                name="dob"
                                label="Date of Birth"
                                type="date"
                                className="!w-full"
                            />
                        </div>
                        <div>
                            <FormikInput
                                name="address1"
                                label="Address Line 1"
                            />
                        </div>
                        <div>
                            <FormikInput
                                name="address2"
                                label="Address Line 2 (Optional)"
                            />
                        </div>
                        <div>
                            <FormikInput
                                name="city"
                                label="City"
                            />
                        </div>
                        <div>
                            <FormikInput
                                name="stateProvince"
                                label="State/Province"
                            />
                        </div>
                        <div>
                            <FormikInput
                                name="postalCode"
                                label="Postal Code"
                            />
                        </div>
                        <div>
                            <FormikInput
                                name="country"
                                label="Country"
                            />
                        </div>
                        <div className="col-span-2 flex items-center justify-end gap-2 my-2">
                            <button className="btn2 hover:text-red-600 hover:border-red-600">Cancel</button>
                            <button className="btn3">Save Changes</button>
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default PersonalInfo