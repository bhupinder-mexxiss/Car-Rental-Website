import { useEffect, useMemo, useState } from "react";
import { Formik, Form, } from "formik";
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
import { useAddCarMutation, useGetCarDetailsQuery } from "../../redux/api/car";
import Loader from "../../Components/Loader/Loader";
import { FormikInput } from "../../Components/CommanFields/FormikInput";
import { useSelector } from "react-redux";
import { showConfirmDialog } from "../../Components/Dialog/Comman";

const AddCar = () => {
    const { user } = useSelector((state: any) => state.auth);
    const navigate = useNavigate()
    useEffect(() => {
        if (user?.role !== "partner") {
            navigate("/partner");
        }
    }, [user, navigate]);

    const [searchParams] = useSearchParams()
    const [addCar] = useAddCarMutation()

    const initialDraftId = searchParams.get("draft") || "";
    const [id, setId] = useState(initialDraftId);
    const { data, isLoading, refetch } = useGetCarDetailsQuery(id, { skip: !id });

    const type = searchParams.get("type") || data?.listingType;

    const [currentStep, setCurrentStep] = useState("carInfo");
    const [formValues, setFormValues] = useState(carInitialValues);

    const steps = useMemo(() => (
        Object.values(addCarSteps)
            .filter((step: listingStepInfo) => type && step.showFor.includes(type))
            .map((step, index) => ({ ...step, id: index }))
    ), [type]);
    const currentStepObj = steps.find((step) => step.key === currentStep);

    useEffect(() => {
        if (data?.currentStep) setCurrentStep(data.currentStep);
        if (data) setFormValues(carInitialValues({ ...data, listingType: type }));
    }, [data, type]);

    const nextStep = () => {
        console.log("Next Step Function Called", currentStep);

        const index = steps.findIndex((s) => s.key === currentStep);
        if (index < steps.length - 1) setCurrentStep(steps[index + 1].key);
    };

    const prevStep = () => {
        const index = steps.findIndex((s) => s.key === currentStep);
        if (index > 0) setCurrentStep(steps[index - 1].key);
    };

    const handleSubmit = async (values: any) => {

        if (currentStep === "final") {
            if (currentStep === "final") {
                const confirmed = await showConfirmDialog(
                    "Verify All Car Details?",
                    "Please review all information before final submission."
                    ,
                    {
                        confirmButtonText: "Submit"
                    }
                );

                if (!confirmed) return; // Stop submission if user cancels
            }
        }
        await addCar({ ...values, listingId: id, listingType: type, stepKey: currentStep }).unwrap().then((res) => {
            toast("Car Added Successfully", {
                description: "Your car has been added to the listing."
            });
            if (!id && res._id) setId(res._id)
            setCurrentStep(res.currentStep)
            setFormValues(carInitialValues({ ...res, listingType: type }));
            if (currentStep === "final") {
                navigate("/my-listings")
            } else (
                nextStep()
            )
        })
    };

    useEffect(() => {
        if (currentStep === "final") {
            refetch()
        }
    }, [currentStep])

    const renderStep = () => {
        switch (currentStep) {
            case "carInfo": return <CarInfoStep type={type ?? ""} />;
            case "uploadImages": return <UploadImagesStep />;
            case "carFeatures": return <CarFeaturesStep type={type ?? ""} />;
            case "locationAndAvailability": return <LocationAvailabilityStep type={type ?? ""} />;
            case "pricingAndCharges": return <PricingChargesStep />;
            case "ownerInfo": return <OwnerInfoStep />;
            case "documents": return <UploadDocumentsStep />;
            case "final": return <ReviewSubmitStep values={data} />;
            default: return null;
        }
    };

    if (isLoading) return <Loader />;

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
                                        {steps.map((step) => {
                                            const stepIndex = steps.findIndex((s) => s.key === step.key);
                                            const currentIndex = steps.findIndex((s) => s.key === currentStep);
                                            const isComplete = currentIndex > stepIndex;
                                            const isCurrent = currentStep === step.key;

                                            return (
                                                <div key={step.id} className={`flex flex-col items-center ${isCurrent ? "text-primary" : "text-gray-400"}`}>
                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1
                      ${isComplete ? "bg-primary text-white" :
                                                            isCurrent ? "bg-white border-2 border-primary text-primary" :
                                                                "bg-gray-200 text-gray-500"}`}>
                                                        {isComplete ? (
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        ) : step.id + 1}
                                                    </div>
                                                    <span className="text-xs hidden md:block text-center">
                                                        {type === "sell" && step.id === 2 ? "Features & Pricing" : step.id === 3 ? "Location": step.title}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="relative mt-1">
                                        <div className="h-1 bg-gray-200 rounded-full">
                                            <div
                                                className="h-1 bg-primary rounded-full transition-all duration-300"
                                                style={{ width: `${(steps.findIndex(s => s.key === currentStep) / (steps.length - 1)) * 100}%` }}
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
                                            disabled={currentStep === "carInfo"}
                                            hidden={currentStep === "carInfo"}
                                            className="py-1 border text-sm px-3 rounded-md disabled:opacity-50 hover:border-primary hover:text-primary cursor-pointer"
                                        >
                                            Back
                                        </button>
                                        <h2 className="text-2xl font-semibold">{currentStepObj?.title}</h2>
                                    </div>
                                    <Formik
                                        initialValues={formValues[currentStep as keyof typeof formValues]}
                                        enableReinitialize
                                        validationSchema={carValidationSchemas(type)[currentStep as keyof typeof carValidationSchemas]}
                                        onSubmit={handleSubmit}
                                    >
                                        {({ dirty, submitForm, }) => {
                                            return (
                                                <Form>
                                                    {renderStep()}

                                                    {currentStep === "final" && (
                                                        <>
                                                            <div className="mt-6">
                                                                <FormikInput
                                                                    type="checkbox"
                                                                    name="agree_terms"
                                                                    label="By checking this checkbox, You agree to Terms & Conditions"
                                                                />
                                                            </div>
                                                        </>
                                                    )}
                                                    {/* Navigation buttons */}
                                                    <div className={`flex ${currentStep === "carInfo" ? "justify-end" : "justify-between"} mt-6`}>
                                                        {currentStep !== "carInfo" && (
                                                            <button
                                                                type="button"
                                                                onClick={prevStep}
                                                                className="py-1 border text-sm px-3 rounded-md hover:border-primary hover:text-primary"
                                                            >
                                                                Previous
                                                            </button>
                                                        )}

                                                        {currentStep === "final" ? (
                                                            <Button type="submit" className="btn3">
                                                                Submit Listing
                                                            </Button>
                                                        ) : (
                                                            <Button
                                                                type="button"
                                                                className="btn3"
                                                                onClick={async () => {
                                                                    const currentIndex = steps.findIndex(s => s.key === currentStep);
                                                                    const dataStepIndex = data?.currentStep ? steps.findIndex(s => s.key === data.currentStep) : -1;
                                                                    const nextStepKey = steps[currentIndex + 1]?.key;
                                                                    if (currentIndex < dataStepIndex && !dirty) {
                                                                        console.log("Step already saved. Skipping submission.");
                                                                        setCurrentStep(nextStepKey);
                                                                    } else {
                                                                        console.log("Submitting form...");
                                                                        submitForm();
                                                                    }
                                                                }}
                                                            >
                                                                Next Step
                                                            </Button>
                                                        )}
                                                    </div>
                                                </Form>
                                            )
                                        }}
                                    </Formik>
                                </div>
                            </div>
                        }
                    </div>
                </main >
            </div >
        </>
    );
};

export default AddCar;