import React from "react";
import { useField } from "formik";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

interface FormikInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  description?: string;
  options?: { label: string; value: string }[];
  min?: number | string;
  max?: number | string;
  step?: string;
}

export const FormikInput: React.FC<FormikInputProps> = ({
  name,
  label,
  placeholder,
  type = "text",
  className,
  description,
  options,
  min,
  max,
  step,
  ...props
}) => {
  const [field, meta, helpers] = useField(name);
  const hasError = meta.touched && meta.error;

  const renderInput = () => {
    switch (type) {
      case "textarea":
        return (
          <Textarea
            id={name}
            placeholder={placeholder}
            className={`${hasError ? "border-red-500" : ""} !focus-visible:ring-0 !ring-0 !focus:border-primary focus-visible:border-primary ${className}`}
            {...field}
            {...props}
          />
        );

      case "select":
        return (
          <select
            id={name}
            className={`flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-0 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${hasError ? "border-red-500" : ""
              } !focus-visible:ring-0 !ring-0 !focus:border-primary focus-visible:border-primary h-10 ${className}`}
            {...field}
            {...props}
          >
            <option value="" hidden>Select {label}</option>
            {options?.map((option) => (
              <option key={option.value} value={option.value} >
                {option.label}
              </option>
            ))}
          </select>
        );

      case "checkbox":
        return (
          <div className="flex items-center space-x-2" >
            <Checkbox
              id={name}
              checked={field.value}
              onCheckedChange={(checked) => {
                helpers.setValue(checked);
              }}
              {...props}
            />
            {
              label && (
                <Label
                  htmlFor={name}
                  className="text-sm font-normal cursor-pointer"
                >
                  {label}
                </Label>
              )
            }
          </div>
        );

      case "number":
        return (
          <Input
            id={name}
            type="number"
            step={step}
            placeholder={placeholder}
            className={`${hasError ? "border-red-500" : ""} !focus-visible:ring-0 !ring-0 !focus:border-primary focus-visible:border-primary h-10 ${className}`}
            {...field}
            {...props}
          />
        );

      default:
        return (
          <Input
            id={name}
            type={type}
            placeholder={placeholder}
            className={`${hasError ? "border-red-500" : ""} !focus-visible:ring-0 !ring-0 !focus:border-primary focus-visible:border-primary h-10 ${className}`}
            {...field}
            {...props}
          />
        );
    }
  };

  return (
    <div className="space-y-2" >
      {label && type !== "checkbox" && <Label className="text-color2 mb-1" htmlFor={name}> {label} </Label>}
      {renderInput()}
      {description && <p className="text-xs text-gray-500" > {description} </p>}
      {hasError && <p className="text-xs text-red-500" > {meta.error} </p>}
    </div>
  );
};