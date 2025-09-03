import * as Yup from "yup";
import { useAddEnquiryMutation } from "../redux/api/Enquiry";
import { numberSchema } from "./Comman";
import { toast } from "sonner";

export const enquirySchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: numberSchema,
    message: Yup.string().required("Message is required"),
    offeredPrice: Yup.number().min(0, "Offered price must be positive").required("Offered price is required")
});

export const enquiryInitialValues = (user) => ({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    message: "",
    offeredPrice: 0
});

export const EnquirySubmit = () => {
    const [addEnquiry] = useAddEnquiryMutation()

    interface EnquiryValues {
        name: string;
        email: string;
        phone: string | number;
        message: string;
        offeredPrice: number;
    }

    type CarId = string | number;

    const handleSubmit = async (values: EnquiryValues, carId: CarId): Promise<void> => {
        try {
            await addEnquiry({ ...values, carId }).unwrap();
            toast.success("Enquiry submitted successfully");
        } catch (error) {
            toast.error(error?.data?.message || "Failed to submit enquiry");
        }
    };

    return { handleSubmit };
}