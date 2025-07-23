import { Form, Formik } from "formik"
import { useState } from "react";
import { partnerInitialValues, partnerSchema } from "../../Formik/Partner";
import { useRegisterPartnerMutation } from "../../redux/api/user";
import { useUploadMultiMutation } from "../../redux/api/common";
import BusinessForm from "./BusinessForm";
import IndividualForm from "./IndividualForm";

const tabs = ['individual', 'business'] as const;
type PartnerTab = typeof tabs[number];

const PartnerApplication = () => {
    const [activeTab, setActiveTab] = useState<PartnerTab>("individual");
    const [registerPartner] = useRegisterPartnerMutation()
    const [uploadDocument] = useUploadMultiMutation()

    const handleSubmit = async (values) => {
        console.log(values);

        const formData = new FormData();
        if (activeTab === "individual") {
            formData.append("images", values.kycDocument);
        } else {
            values.documents.forEach((file) => {
                formData.append("images", file.document);
            });
        }
        formData.append("folder", "documents");

        await uploadDocument(formData).unwrap().then(async (res) => {
            const body = {
                partnerType: activeTab,
                ...(activeTab === "individual"
                    ? { individualKyc: { ...values, kycDocument: res[0] } }
                    : {
                        businessDetails: {
                            ...values,
                            documents: [
                                {
                                    document: res[0],
                                    idType: values.documents[0].idType
                                },
                                {
                                    document: res[1],
                                    idType: values.documents[1].idType
                                }
                            ]
                        }
                    }
                )
            }
            await registerPartner(body).unwrap()

        })

    }

    return (
        <div className="py-10 lg:py-14">
            <div className="container">
                <div>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#121212] mb-4">Partner Application</h2>
                        <p className="text-[#525252] text-lg">Complete the form below to start your journey as a CarRide partner</p>
                    </div>
                    <div className="max-w-[900px] mx-auto">
                        <div className="p-6 rounded-xl shadow-md border border-border">
                            <div>
                                <p className="text-color2 !mb-1.5 inline-block text-sm font-medium" >Partner Type * </p>
                                <ul className="grid grid-cols-2 gap-2 items-center justify-between p-1.5 rounded border border-primary w-full">
                                    {tabs.map((e) => (
                                        <li key={e} className={`cursor-pointer font-medium text-center rounded-sm text-color2 px-3 py-1.5 text-sm capitalize ${activeTab === e && "shadow-sm bg-primary/90 text-white"}`} onClick={() => setActiveTab(e)}>{e}</li>
                                    ))}
                                </ul>
                            </div>
                            <Formik
                                initialValues={partnerInitialValues[activeTab]}
                                validationSchema={partnerSchema[activeTab]}
                                enableReinitialize
                                onSubmit={(values) => handleSubmit(values)}
                            >
                                {() => (
                                    <Form>
                                        {activeTab === "business" ?
                                            <BusinessForm />
                                            :
                                            <IndividualForm />
                                        }
                                        <div className="mt-6">
                                            <div className="flex items-center mb-2">
                                                <input id="terms" type="checkbox" className="w-4 h-4 text-[#f07e2c] bg-gray-100 border-gray-300 rounded focus:ring-[#f07e2c]" />
                                                <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900">I agree to the <a href="#" className="text-[#f07e2c] hover:underline">Terms of Service</a> and <a href="#" className="text-[#f07e2c] hover:underline">Partner Agreement</a></label>
                                            </div>

                                            <div className="flex items-center">
                                                <input id="marketing" type="checkbox" className="w-4 h-4 text-[#f07e2c] bg-gray-100 border-gray-300 rounded focus:ring-[#f07e2c]" />
                                                <label htmlFor="marketing" className="ml-2 text-sm font-medium text-gray-900">I would like to receive updates and marketing communications about CarRide partner services</label>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <button type="submit" className="btn2 w-full py-2.5">Submit Application</button>
                                            <p className="text-center mt-2 text-color2 text-sm">Our team will review your application and get back to you within 2-3 business days.</p>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PartnerApplication