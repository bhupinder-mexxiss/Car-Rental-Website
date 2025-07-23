import * as Yup from "yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const emailSchema = Yup.string()
    .email("Invalid email")
    .required("Email is required");
export const passwordSchema = Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required");

export const numberSchema = Yup.string()
    .required("Phone number is required")
    .test("is-valid-phone", "Invalid phone number", (value) => {
        if (!value) return false;

        const formattedValue = value.startsWith("+") ? value : `+${value}`;
        const phoneNumber = parsePhoneNumberFromString(formattedValue);

        return phoneNumber?.isValid() || false;
    });