import * as Yup from "yup";
import { emailSchema, numberSchema } from "./Comman";

export const contactSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required "),
    lastName: Yup.string().required("Last name is required "),
    email: emailSchema,
    number: numberSchema,
    subject: Yup.string().required("Subject is required "),
    message: Yup.string().required("Message is required "),
})

export const contactInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    subject: "",
    message: "",
} 