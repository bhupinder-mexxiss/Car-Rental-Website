import * as Yup from "yup";
import { emailSchema, passwordSchema } from "./Comman";

export const loginSchema = Yup.object().shape({
    email: emailSchema,
    password: passwordSchema,
});

export const registerSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], "Confirm Password not match")
        .required("Confirm Password is required")
});

export const forgotSchema = Yup.object().shape({
    email: emailSchema,
});

export const resetPasswordSchema = Yup.object().shape({
    password: passwordSchema,
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], "Confirm Password not match")
        .required("Confirm Password is required")
});