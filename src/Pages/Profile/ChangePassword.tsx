import { Form, Formik } from "formik"
import { FormikInput } from "../../Components/CommanFields/FormikInput"
import { useChangePasswordMutation } from "../../redux/api/user";
import { changePassswordValidationSchema } from "../../Formik/Profile";
import { toast } from "sonner";

const ChangePassword = () => {
    const [updatePassword] = useChangePasswordMutation()
    return (
        <div>
            <Formik
                initialValues={{
                    oldPassword: '',
                    newPassword: '',
                    confirmPassword: ''
                }}
                validationSchema={changePassswordValidationSchema}
                enableReinitialize={true}
                onSubmit={async (values, { resetForm }) => {
                    await updatePassword(values).unwrap().then(() => {
                        toast.success("Password changed successfully");
                        resetForm();
                    }).catch((err) => {
                        toast.error(err.data.message || "Failed to change passsword")
                    })
                }}
            >
                {({ dirty, resetForm }) => (
                    <Form>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                                <FormikInput
                                    name="oldPassword"
                                    label="Current Password"
                                    placeholder="Enter Current Password"
                                />
                            </div>
                            <div className="col-span-2">
                                <FormikInput
                                    name="newPassword"
                                    label="New Password"
                                    placeholder="Enter New Password"
                                />
                            </div>
                            <div className="col-span-2">
                                <FormikInput
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    placeholder="Enter Confirm Password"
                                />
                            </div>
                            <div className="col-span-2 flex items-center justify-end gap-2 my-2">
                                <button className="btn2 cancel" type="button" onClick={() => resetForm()} disabled={!dirty}>Cancel</button>
                                <button className="btn3" type="submit" disabled={!dirty}>Save Changes</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ChangePassword