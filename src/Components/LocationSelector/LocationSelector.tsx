import { Modal, ModalBody } from "flowbite-react";
import { useEffect, useState } from "react";
import { Close, KeyboardArrowDownOutlined, Search } from "@mui/icons-material";
import { useAreaLocation as useGlobalLocation, } from "../../Context/LocationContext";
import { loadGoogleMapsAPI, getPlaceDetails } from '../../Utils/googlePlacesUtils';

const emirates = ["All Emirates", "Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Fujairah", "Ras Al Khaimah", "Umm Al Quwain"];

const LocationSelector = () => {
    const { areaLocation, setAreaLocation } = useGlobalLocation();
    const [openModal, setOpenModal] = useState(false);
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState<google.maps.places.AutocompletePrediction[]>([]);
    const [autocompleteService, setAutocompleteService] = useState<google.maps.places.AutocompleteService | null>(null);

    useEffect(() => {
        loadGoogleMapsAPI().then(() => {
            setAutocompleteService(new window.google.maps.places.AutocompleteService());
        });
    }, []);

    useEffect(() => {
        if (!autocompleteService || !input.trim()) return setSuggestions([]);

        const timeout = setTimeout(() => {
            autocompleteService.getPlacePredictions(
                {
                    input,
                    componentRestrictions: { country: "ae" },
                    types: ["geocode"],
                },
                (predictions, status) => {
                    setSuggestions(status === google.maps.places.PlacesServiceStatus.OK ? predictions || [] : []);
                }
            );
        }, 300);

        return () => clearTimeout(timeout);
    }, [input, autocompleteService]);

    const extractComponent = (components: google.maps.GeocoderAddressComponent[], type: string) =>
        components.find((c) => c.types.includes(type))?.long_name || "";

    const handleSuggestionClick = async (s: google.maps.places.AutocompletePrediction) => {
        const details = await getPlaceDetails(s.place_id);
        console.log(details);

        if (!details) return;

        const comps = details.address_components || [];
        const area = extractComponent(comps, 'sublocality') || extractComponent(comps, 'locality') || s.description;
        const emirate = extractComponent(comps, 'administrative_area_level_1') || '';
        const country = extractComponent(comps, 'country') || 'United Arab Emirates';

        setAreaLocation({ area, emirate, country, full: s.description });
        setInput('');
        setSuggestions([]);
        setOpenModal(false);
    };

    const handleEmirateClick = (e: string) => {
        if (e === "All Emirates") {
            setAreaLocation({
                area: "",
                emirate: "",
                country: "United Arab Emirates",
                full: "All Emirates, United Arab Emirates",
            });
        } else {
            setAreaLocation({
                area: e,
                emirate: e,
                country: "United Arab Emirates",
                full: `${e}, United Arab Emirates`,
            });
        }
        setInput("");
        setOpenModal(false);
    };

    return (
        <>
            <button className="text-sm border border-black/20 px-3 py-1.5 rounded flex items-center cursor-pointer" onClick={() => setOpenModal(true)}>
                {areaLocation.area || "UAE"} <KeyboardArrowDownOutlined className="!text-lg" />
            </button>

            <Modal show={openModal} onClose={() => { setOpenModal(false); setInput(""); }}>
                <ModalBody className="p-0">
                    <div className="px-6 py-4 flex justify-between items-center">
                        <div className="flex items-center gap-6 flex-1">
                            <h5 className="text-lg font-medium text-color2 text-nowrap">Select a city</h5>
                            <div className="relative max-w-[320px] w-full">
                                <div className="flex items-center justify-between bg-gray-100 rounded pr-2">
                                    <input
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Search for a city / emirate"
                                        className="w-full px-3 py-2.5 placeholder:text-color2/70 focus:outline-0"
                                    />
                                    <span className="text-color2/80"><Search className="!text-xl" /></span>
                                </div>
                                {suggestions.length > 0 && (
                                    <ul className="absolute w-full bg-white shadow z-10 rounded border mt-1 max-h-[200px] overflow-auto">
                                        {suggestions.map((s) => (
                                            <li
                                                key={s.place_id}
                                                onClick={() => handleSuggestionClick(s)}
                                                className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                            >
                                                {s.description}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                        <button onClick={() => { setOpenModal(false); setInput(""); }}><Close /></button>
                    </div>

                    <div className="px-6 py-4 border-t border-border">
                        <h6 className="text-color2 uppercase">Emirates</h6>
                        <div className="grid grid-cols-3 gap-3 mt-3">
                            {emirates.map((e) => (
                                <div
                                    key={e}
                                    onClick={() => handleEmirateClick(e)}
                                    className="py-3 flex items-center justify-center text-sm border border-border rounded-lg hover:text-primary hover:border-primary cursor-pointer"
                                >
                                    {e}
                                </div>
                            ))}
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
};

export default LocationSelector;
