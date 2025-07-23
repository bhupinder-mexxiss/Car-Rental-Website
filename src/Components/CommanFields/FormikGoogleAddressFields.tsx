import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { useFormikContext } from "formik";

export const FormikGoogleAddressFields = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { setFieldValue, values } = useFormikContext<any>();

    useEffect(() => {
        const loader = new Loader({
            apiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
            libraries: ["places"],
        });

        loader.load().then(() => {
            if (!inputRef.current) return;

            const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
                types: ["geocode"],
                componentRestrictions: { country: "ae" },
            });

            autocomplete.addListener("place_changed", () => {
                const place = autocomplete.getPlace();
                const comps = place.address_components || [];

                const getComponent = (type: string) =>
                    comps.find((c) => c.types.includes(type))?.long_name || "";

                const area = getComponent("sublocality") || getComponent("locality");
                const emirate = getComponent("administrative_area_level_1");
                const country = getComponent("country");

                setFieldValue("address.area", area);
                setFieldValue("address.state", emirate);
                setFieldValue("address.country", country);
            });
        });
    }, []);

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Search Location <span className="text-red-500">*</span></label>
            <input
                ref={inputRef}
                placeholder="Search for area or city"
                className="w-full px-3 py-2 border rounded text-sm"
            />
        </div>
    );
};