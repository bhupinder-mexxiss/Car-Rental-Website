import { useCallback, useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import { useCarOptions } from "../../hooks/useCarOptions";
import { useFilterContext } from "../../Context/FilterContext";

export interface SearchOption {
    label: string;
    value: string | number;
    type: "brands" | "seats" | "transmission" | "carType";
}

const SearchBar = () => {
    const carOptions = useCarOptions();
    const {
        appliedOptions,
        setAppliedOptions,
        filterValues,
        setFilterValues,
        resetFilter,
        staticMaxPrice,
    } = useFilterContext();

    const [searchInput, setSearchInput] = useState("");
    const [suggestions, setSuggestions] = useState<SearchOption[]>([]);

    useEffect(() => {
        if (!searchInput.trim()) {
            setSuggestions([]);
            return;
        }

        const tokens = searchInput.toLowerCase().split(/\s+/);
        const comboSuggestions: SearchOption[] = [];

        const brandMatches = carOptions.brands.filter((b) =>
            tokens.some((t) => b.label.toLowerCase().includes(t))
        );

        for (const brand of brandMatches) {
            comboSuggestions.push({
                label: brand.label,
                value: brand.value,
                type: "brands",
            });

            for (const trans of carOptions.transmission) {
                comboSuggestions.push({
                    label: `${brand.label} ${trans.label}`,
                    value: trans.value,
                    type: "transmission",
                });
            }

            for (const type of carOptions.carType) {
                comboSuggestions.push({
                    label: `${brand.label} ${type.label}`,
                    value: type.value,
                    type: "carType",
                });
            }

            for (const seat of carOptions.seats) {
                comboSuggestions.push({
                    label: `${brand.label} ${seat.label} Seats`,
                    value: seat.value,
                    type: "seats",
                });
            }
        }

        // Basic match suggestions
        carOptions.transmission.forEach((t) => {
            if (tokens.some((token) => t.label.toLowerCase().includes(token))) {
                comboSuggestions.push({
                    label: `${t.label} Cars`,
                    value: t.value,
                    type: "transmission",
                });
            }
        });

        carOptions.carType.forEach((c) => {
            if (tokens.some((token) => c.label.toLowerCase().includes(token))) {
                comboSuggestions.push({
                    label: `${c.label} Cars`,
                    value: c.value,
                    type: "carType",
                });
            }
        });

        carOptions.seats.forEach((s) => {
            if (tokens.includes(String(s.label))) {
                comboSuggestions.push({
                    label: `${s.label} Seater`,
                    value: s.value,
                    type: "seats",
                });
            }
        });

        const uniqueSuggestions = Array.from(
            new Map(comboSuggestions.map((item) => [item.label, item])).values()
        );

        const sorted = uniqueSuggestions.sort((a, b) => {
            const aMatch = tokens.filter((t) => a.label.toLowerCase().includes(t)).length;
            const bMatch = tokens.filter((t) => b.label.toLowerCase().includes(t)).length;
            return bMatch - aMatch;
        });

        setSuggestions(sorted.slice(0, 10));
    }, [searchInput, carOptions]);

    const handleSuggestionClick = useCallback(
        (option: SearchOption) => {
            const updatedFilters = {
                brand: [],
                seat: [],
                carType: [],
                listingType: filterValues.listingType,
                transmission: [],
                minPrice: 0,
                maxPrice: staticMaxPrice,
            };

            if (option.type === "brands") {
                updatedFilters.brand = [option.label];
            } else if (option.type === "seats") {
                updatedFilters.seat = [Number(option.value)];
            } else if (option.type === "transmission") {
                updatedFilters.transmission = [String(option.value)];
            } else if (option.type === "carType") {
                updatedFilters.carType = [String(option.value)];
            }

            setAppliedOptions([option]);
            setFilterValues(updatedFilters);
            setSearchInput("");
            setSuggestions([]);
        },
        [filterValues.listingType, staticMaxPrice, setAppliedOptions, setFilterValues]
    );

    const removeSearchFilter = () => {
        setAppliedOptions([]);
        resetFilter();
    };

    return (
        <div className="relative flex items-center justify-center">
            <div className="flex items-center gap-2 border px-2 h-[42px] w-full rounded">
                {appliedOptions.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {appliedOptions.map((option, index) => (
                            <div
                                key={index}
                                className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full flex items-center text-sm"
                            >
                                <span className="max-w-[150px] w-fit line-clamp-1" title={option.label}>
                                    {option.label}
                                </span>
                                <button
                                    onClick={removeSearchFilter}
                                    className="ml-2 text-gray-500 hover:text-red-500 cursor-pointer"
                                >
                                    <Close className="!text-lg" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
                <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="w-full p-0 border-none rounded focus:ring-0"
                    placeholder="Search by brand, type, transmission..."
                />
            </div>

            {suggestions.length > 0 && (
                <ul className="absolute top-full mt-1 w-full bg-white border rounded shadow z-10">
                    {suggestions.map((s, index) => (
                        <li
                            key={index}
                            onClick={() => handleSuggestionClick(s)}
                            className="px-4 py-2 text-left hover:bg-gray-100 cursor-pointer text-sm"
                        >
                            {s.label}{" "}
                            <span className="text-gray-400 text-xs capitalize">({s.type})</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
