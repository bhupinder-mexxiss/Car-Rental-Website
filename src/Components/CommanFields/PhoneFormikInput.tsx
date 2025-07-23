import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import classNames from "classnames";
import { useField, useFormikContext } from "formik";
import { Label } from "../ui/label"; // assuming you use this component for labels

interface PhoneFormikInputProps {
    name: string;
    label?: string;
    placeholder?: string;
    labelClass?: string;
    className?: string;
    defaultCountry?: string;
    required?: boolean;
    description?: string;
    disabled?: boolean;
}

const PhoneFormikInput: React.FC<PhoneFormikInputProps> = ({
    name,
    label,
    placeholder,
    defaultCountry = "in",
    labelClass,
    required = false,
    description,
    disabled = false,
}) => {
    const [field, meta,] = useField(name);
    const { setFieldValue } = useFormikContext();
    const hasError = meta.touched && meta.error;

    return (
        <div className="space-y-2">
            {label && (
                <Label
                    htmlFor={name}
                    className={classNames("text-color2 !mb-1.5 inline-block", labelClass)}
                >
                    {label} {required && "*"}
                </Label>
            )}
            <PhoneInput
                inputStyle={{
                    fontFamily: "Poppins",
                    width: "100%",
                    borderRadius: "6px",
                    height: "41px",
                    borderColor: hasError ? "#ef4444" : "#6b7280",
                    backgroundColor: disabled ? "#f7fafc" : "",
                    paddingRight: "32px",
                }}
                containerStyle={{ width: "100%" }}
                buttonStyle={{ border: "none" }}
                country={defaultCountry}
                placeholder={placeholder || "Enter phone number"}
                value={field.value}
                disabled={disabled}
                onChange={(value: string | undefined) => {
                    if (value === "+" || value === "" || (value && /^\d{1,3}$/.test(value))) {
                        setFieldValue(name, "");
                    } else {
                        setFieldValue(name, value?.startsWith("+") ? value : `+${value}`);
                    }
                }}
            />

            {description && <p className="text-xs text-gray-500">{description}</p>}

            {/* {hasError && typeof meta.error === "string" && (
        <p className="text-xs text-red-500">{meta.error}</p>
      )} */}
        </div>
    );
};

export default PhoneFormikInput;
