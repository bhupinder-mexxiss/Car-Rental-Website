import { useState } from "react";
import { Formik, Form } from "formik";
import { Button } from "../../Components/ui/button";
import { toast } from 'sonner';
import { useNavigate, useSearchParams } from "react-router";
import CarInfoStep from "../../Components/AddCar/CarInfoStep";
import UploadImagesStep from "../../Components/AddCar/UploadImagesStep";
import CarFeaturesStep from "../../Components/AddCar/CarFeaturesStep";
import LocationAvailabilityStep from "../../Components/AddCar/LocationAvailabilityStep";
import PricingChargesStep from "../../Components/AddCar/PricingChargesStep";
import OwnerInfoStep from "../../Components/AddCar/OwnerInfoStep";
import UploadDocumentsStep from "../../Components/AddCar/UploadDocumentsStep";
import ReviewSubmitStep from "../../Components/AddCar/ReviewSubmitStep";
import { carInitialValues, carValidationSchemas } from "../../Formik/Car";
import { addCarSteps, listingStepInfo } from "../../constants/car";
import ListType from "./ListType";
import { useAddCarMutation } from "../../redux/api/car";

const AddCar = () => {
    const [searchParams] = useSearchParams()
    const type = searchParams.get("type")
    const [addCar] = useAddCarMutation()

    const steps = Object.values(addCarSteps)
        .filter((step: listingStepInfo) => type !== null && step.showFor.includes(type))
        .map((step, index) => ({ ...step, id: index }));

    const [currentStep, setCurrentStep] = useState(0);
    const navigate = useNavigate();

    const nextStep = () => currentStep < steps.length - 1 && setCurrentStep(prev => prev + 1);
    const prevStep = () => currentStep > 0 && setCurrentStep(prev => prev - 1);

    const handleSubmit = async (values) => {
        console.log("Submitting car data:", { ...values, listingType: type, step: currentStep + 1 });

        await addCar({ ...values, listingType: type, step: currentStep + 1 }).unwrap().then(() => {
            toast("Car Added Successfully", {
                description: "Your car has been added to the listing."
            });
            nextStep()
        })
        // navigate("/cars");
    };

    const renderStep = (formikProps) => {
        const { values, setFieldValue, errors, touched } = formikProps;
        const key = steps[currentStep].key;

        switch (key) {
            case "carInfo": return <CarInfoStep />;
            case "uploadImages": return <UploadImagesStep setFieldValue={setFieldValue} values={values} />;
            case "carFeatures": return <CarFeaturesStep />;
            case "locationAndAvailability": return <LocationAvailabilityStep />;
            case "pricingAndCharges": return <PricingChargesStep />;
            case "ownerInfo": return <OwnerInfoStep />;
            case "documents": return <UploadDocumentsStep setFieldValue={setFieldValue} values={values} />;
            case "reviewSubmit": return <ReviewSubmitStep values={values} />;
            default: return null;
        }
    };

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <main className="flex-1">
                    <div className="container mx-auto py-8 px-4">
                        {!type ?
                            <ListType />
                            :
                            <div>
                                <h1 className="text-3xl font-bold text-center mb-8">Add Your Car for {type === "sell" ? "Sell" : "Rent"}</h1>

                                {/* Progress addCarSteps */}
                                <div className="mb-8">
                                    <div className="flex justify-between items-center">
                                        {steps.map((step) => (
                                            <div
                                                key={step.id}
                                                className={`flex flex-col items-center ${step.id <= currentStep ? 'text-primary' : 'text-gray-400'}`}
                                            >
                                                <div
                                                    className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${step.id < currentStep
                                                        ? 'bg-primary text-white'
                                                        : step.id === currentStep
                                                            ? 'bg-white border-2 border-primary text-primary'
                                                            : 'bg-gray-200 text-gray-500'
                                                        }`}
                                                >
                                                    {step.id < currentStep ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    ) : (
                                                        step.id + 1
                                                    )}
                                                </div>
                                                <span className="text-xs hidden md:block text-center">{step.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="relative mt-1">
                                        <div className="h-1 bg-gray-200 rounded-full">
                                            <div
                                                className="h-1 bg-primary rounded-full transition-all duration-300"
                                                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Form with Formik */}
                                <div className="rounded-lg mb-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            disabled={currentStep === 0}
                                            hidden={currentStep === 0}
                                            className="py-1 border text-sm px-3 rounded-md disabled:opacity-50 hover:border-primary hover:text-primary cursor-pointer"
                                        >
                                            Back
                                        </button>
                                        <h2 className="text-2xl font-semibold">{steps[currentStep].title}</h2>
                                    </div>
                                    <Formik
                                        initialValues={carInitialValues}
                                        validationSchema={carValidationSchemas[steps[currentStep].key as keyof typeof carValidationSchemas]}
                                        onSubmit={(values) => handleSubmit(values)}
                                        validateOnChange={false}
                                        validateOnBlur={true}
                                    >
                                        {(formikProps) => (
                                            <Form>
                                                {renderStep(formikProps)}

                                                {/* Navigation buttons */}
                                                <div className={`flex ${currentStep === 0 ? "justify-end" : "justify-between"} mt-6`}>
                                                    <button
                                                        type="button"
                                                        onClick={prevStep}
                                                        disabled={currentStep === 0}
                                                        hidden={currentStep === 0}
                                                        className="py-1 border text-sm px-3 rounded-md disabled:opacity-50 hover:border-primary hover:text-primary cursor-pointer"
                                                    >
                                                        Previous
                                                    </button>

                                                    {currentStep === steps.length - 1 ? (
                                                        <Button type="submit" className="btn3">
                                                            Submit Listing
                                                        </Button>
                                                    ) : (
                                                        <Button type="submit" className="btn3">
                                                            Next Step
                                                        </Button>
                                                    )}
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        }
                    </div>
                </main>
            </div>
        </>
    );
};

export default AddCar;