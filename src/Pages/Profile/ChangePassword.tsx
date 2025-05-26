import { Formik } from "formik"
import { FormikInput } from "../../Components/CommanFields/FormikInput"

const ChangePassword = () => {
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
                        <div className="col-span-2">
                            <FormikInput
                                name="currentPassword"
                                label="Current Password"
                                placeholder="Enter Current Password"
                            />
                        </div>
                        <div className="col-span-2">
                            <FormikInput
                                name="newtPassword"
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
                            <button className="btn2 hover:text-red-600 hover:border-red-600">Cancel</button>
                            <button className="btn3">Save Changes</button>
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default ChangePassword