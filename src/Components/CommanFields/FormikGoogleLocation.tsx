import { useEffect, useRef, useState } from "react";
import { useField, useFormikContext } from "formik";
import { Loader } from "@googlemaps/js-api-loader";

interface GoogleLocationInputProps {
    name: string;
    label: string;
    placeholder: string;
    required?: boolean;
}

export const FormikGoogleLocation = ({
    name,
    label,
    placeholder,
    required,
}: GoogleLocationInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { setFieldValue } = useFormikContext<any>();
    const [field, meta] = useField(name);
    const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

    useEffect(() => {
        const loader = new Loader({
            apiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
            libraries: ["places"],
        });

        loader.load().then(() => {
            if (inputRef.current) {
                const auto = new window.google.maps.places.Autocomplete(inputRef.current, {
                    types: ["geocode"],
                    componentRestrictions: { country: "ae" },
                });

                auto.addListener("place_changed", () => {
                    const place = auto.getPlace();
                    const comps = place.address_components || [];

                    const getComponent = (type: string) =>
                        comps.find((c) => c.types.includes(type))?.long_name || "";

                    const area = getComponent("sublocality") || getComponent("locality") || "";
                    const emirate = getComponent("administrative_area_level_1") || "";
                    const country = getComponent("country") || "";

                    setFieldValue("address.area", area);
                    setFieldValue("address.state", emirate);
                    setFieldValue("address.country", country);
                });

                setAutocomplete(auto);
            }
        });
    }, [inputRef.current]);

    return (
        <div>
            <label className="block text-sm font-medium mb-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                ref={inputRef}
                name={field.name}
                placeholder={placeholder}
                className="w-full border px-3 py-2 rounded text-sm"
                defaultValue={field.value}
            />
            {meta.touched && meta.error && <p className="text-sm text-red-600 mt-1">{meta.error}</p>}
        </div>
    );
};