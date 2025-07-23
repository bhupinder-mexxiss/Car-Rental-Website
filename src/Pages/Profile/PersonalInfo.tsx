import { Form, Formik } from "formik"
import { FormikInput } from "../../Components/CommanFields/FormikInput"
import { initialValues, validationSchema } from "../../Formik/Profile"
import { User } from "../../Types/Common"
import { useUpdateProfileMutation } from "../../redux/api/user"

const PersonalInfo = ({ user }: { user: User }) => {
    const [updateProfile] = useUpdateProfileMutation()

    const handelSubmit = async (values: User): Promise<void> => {
        await updateProfile(values).unwrap();
    };

    return (
        <div>
            <Formik
                initialValues={initialValues(user)}
                validationSchema={validationSchema}
                enableReinitialize={true}
                onSubmit={(values) => handelSubmit(values)}
            >
                {({ dirty, resetForm }) => (
                    <Form>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <FormikInput
                                    name="name"
                                    label="Name"
                                    required
                                />
                            </div>
                            <div>
                                <FormikInput
                                    name="email"
                                    label="Email"
                                    type="email"
                                    required
                                    disabled
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
                                    name="address.address1"
                                    label="Address Line 1"
                                    required
                                />
                            </div>
                            <div>
                                <FormikInput
                                    name="address.address2"
                                    label="Address Line 2 (Optional)"
                                />
                            </div>
                            <div>
                                <FormikInput
                                    name="address.city"
                                    label="City"
                                    required
                                />
                            </div>
                            <div>
                                <FormikInput
                                    name="address.state"
                                    label="State"
                                    required
                                />
                            </div>
                            <div>
                                <FormikInput
                                    name="address.postalCode"
                                    label="Postal Code"
                                    required
                                />
                            </div>
                            <div>
                                <FormikInput
                                    name="address.country"
                                    label="Country"
                                    required
                                />
                            </div>
                            <div className="col-span-2 flex items-center justify-end gap-2 my-2">
                                <button className="btn2 cancel" type="button" onClick={() => resetForm()} disabled={!dirty}>Discard </button>
                                <button className="btn3" type="submit" disabled={!dirty}>Save Changes</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div >
    )
}

export default PersonalInfo