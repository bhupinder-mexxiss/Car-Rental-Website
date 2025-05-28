import * as Yup from "yup";

export const emailSchema = Yup.string()
    .email("Invalid email")
    .required("Email is required");
export const passwordSchema = Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required");

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