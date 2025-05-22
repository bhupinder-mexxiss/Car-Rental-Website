import { useState } from "react";
import { Formik, Form } from "formik";
import { Button } from "../../components/ui/button";
import { toast } from 'sonner';
import { useNavigate } from "react-router";
import CarInfoStep from "../../components/AddCar/CarInfoStep";
import UploadImagesStep from "../../components/AddCar/UploadImagesStep";
import CarFeaturesStep from "../../components/AddCar/CarFeaturesStep";
import LocationAvailabilityStep from "../../components/AddCar/LocationAvailabilityStep";
import PricingChargesStep from "../../components/AddCar/PricingChargesStep";
import OwnerInfoStep from "../../components/AddCar/OwnerInfoStep";
import UploadDocumentsStep from "../../components/AddCar/UploadDocumentsStep";
import ReviewSubmitStep from "../../components/AddCar/ReviewSubmitStep";
import { carInitialValues, carValidationSchemas } from "../../Formik/Car";
import { addCarSteps } from "../../constants/car";

const AddCar = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const navigate = useNavigate();

    const nextStep = () => {
        if (currentStep < addCarSteps.length - 1) {
            setCurrentStep(currentStep + 1);
            window.scrollTo(0, 0);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
            window.scrollTo(0, 0);
        }
    };

    const handleSubmit = (values) => {
        // Here you would typically send the data to your backend
        console.log("Submitting car data:", values);

        // Show success message
        toast("Car Added Successfully", {
            description: "Your car has been added to the listing."
        });

        // Navigate to cars page
        navigate("/cars");
    };

    const renderStep = (formikProps) => {
        const { values, setFieldValue } = formikProps;

        switch (currentStep) {
            case 0:
                return <CarInfoStep />;
            case 1:
                return <UploadImagesStep setFieldValue={setFieldValue} values={values} />;
            case 2:
                return <CarFeaturesStep />;
            case 3:
                return <LocationAvailabilityStep />;
            case 4:
                return <PricingChargesStep />;
            case 5:
                return <OwnerInfoStep />;
            case 6:
                return <UploadDocumentsStep setFieldValue={setFieldValue} values={values} />;
            case 7:
                return <ReviewSubmitStep values={values} />;
            default:
                return <CarInfoStep />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <div className="container mx-auto py-8 px-4">
                    <h1 className="text-3xl font-bold text-center mb-8">Add Your Car for Rent</h1>

                    {/* Progress addCarSteps */}
                    <div className="mb-8">
                        <div className="flex justify-between items-center">
                            {addCarSteps.map((step) => (
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
                                    style={{ width: `${(currentStep / (addCarSteps.length - 1)) * 100}%` }}
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
                            <h2 className="text-2xl font-semibold">{addCarSteps[currentStep].title}</h2>
                        </div>
                        <Formik
                            initialValues={carInitialValues}
                            validationSchema={carValidationSchemas[currentStep]}
                            onSubmit={currentStep === addCarSteps.length - 1 ? handleSubmit : nextStep}
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

                                        {currentStep === addCarSteps.length - 1 ? (
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
            </main>
        </div>
    );
};

export default AddCar;