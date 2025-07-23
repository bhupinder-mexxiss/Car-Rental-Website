import { Remove, Add, Close } from "@mui/icons-material";
import { Slider } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useGetBrandsQuery } from "../../redux/api/common";
import { FilterValues, IBrand } from "../../Types/Common";
import { useLocation } from "react-router";
import { useFilterContext } from "../../Context/FilterContext";
import { useCarOptions } from "../../hooks/useCarOptions";

const Filters = () => {
    const carOptions = useCarOptions();
    const { filterValues, setFilterValues, resetFilter, staticMaxPrice } = useFilterContext();
    const location = useLocation();
    const { data: Brands } = useGetBrandsQuery({});

    const allBrands = Brands?.map((brand: IBrand) => ({
        label: brand?.name,
        value: brand?._id,
    }));

    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        Price: true,
    });

    const listingType = Array.isArray(filterValues.listingType)
        ? filterValues.listingType[0]
        : filterValues.listingType;

    // const staticMaxPrice = listingType === "rent" ? 50000 : 1000000;

    const [price, setPrice] = useState<number[]>([0, staticMaxPrice ?? 0]);

    const isFilterApplied = useMemo(() => {
        return (
            (filterValues.brand ?? []).length > 0 ||
            (filterValues.seat ?? []).length > 0 ||
            (filterValues.carType ?? []).length > 0 ||
            (filterValues.transmission ?? []).length > 0 ||
            filterValues.minPrice !== 0 ||
            filterValues.maxPrice !== staticMaxPrice
        );
    }, [filterValues, staticMaxPrice]);

    // Reset price when listingType or URL changes
    useEffect(() => {
        setPrice([0, staticMaxPrice ?? 0]);
        setFilterValues((prev) => ({
            ...prev,
            minPrice: 0,
            maxPrice: staticMaxPrice,
        }));
    }, [listingType, location.pathname]);

    const handlePriceChange = (_event: Event, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setPrice(newValue);
            setFilterValues((prev: FilterValues) => ({
                ...prev,
                minPrice: newValue[0],
                maxPrice: newValue[1],
            }));
        }
    };

    const toggleSection = (title: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    const handleCheckbox = (key: string, value: string) => {
        const currentValues = Array.isArray(filterValues[key]) ? (filterValues[key] as string[]) : [];

        const updated = currentValues.includes(value)
            ? currentValues.filter((v: string) => v !== value)
            : [...currentValues, value];

        setFilterValues({
            ...filterValues,
            [key]: updated,
        });
    };

    return (
        <>
            <aside>
                <div className="flex items-center justify-between">
                    <h4 className="text-xl font-semibold">Filters</h4>
                    <button onClick={() => { resetFilter(); setPrice([0, staticMaxPrice ?? 0]) }} className={`text-sm ${isFilterApplied ? "text-red-500 hover:underline" : "text-gray-400 cursor-not-allowed"} flex items-center`}
                    >
                        <Close className="!text-base" />Clear
                    </button>
                </div>
                <div className="mt-5 flex flex-col gap-4">
                    {/* Price Filter */}
                    <div className="border-t-2 border-border pt-4">
                        <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => toggleSection("Price")}
                        >
                            <h6 className="text-color2 font-semibold">Price</h6>
                            <span>{openSections["Price"] ? <Remove /> : <Add />}</span>
                        </div>
                        {openSections["Price"] && (
                            <div className="px-2.5 mt-2">
                                <Slider
                                    min={0}
                                    max={staticMaxPrice}
                                    value={price}
                                    onChange={handlePriceChange}
                                    valueLabelDisplay="auto"
                                    disableSwap
                                />
                                <div className="flex items-center justify-between gap-2 text-sm text-color2">
                                    <span>₹ {price[0].toLocaleString()}</span>
                                    <span>
                                        ₹{" "}
                                        {price[1] >= (staticMaxPrice ?? 0)
                                            ? (staticMaxPrice ?? 0).toLocaleString() + "+" // show "+" at the end
                                            : price[1].toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Dynamic Filters */}
                    {[
                        { title: "Brands", key: "brand", data: allBrands },
                        { title: "Fuel Type", key: "carType", data: carOptions.fuelType },
                        { title: "Body Type", key: "carType", data: carOptions.carType },
                        { title: "Seating", key: "seat", data: carOptions.seats },
                        { title: "Transmission", key: "transmission", data: carOptions.transmission },
                    ].map((section) => {
                        const isOpen = openSections[section.title] ?? true;
                        return (
                            <div key={section.title} className="border-t-2 border-border pt-4">
                                <div
                                    className="flex items-center justify-between cursor-pointer"
                                    onClick={() => toggleSection(section.title)}
                                >
                                    <h6 className="text-color2 font-semibold">{section.title}</h6>
                                    <span>{isOpen ? <Remove /> : <Add />}</span>
                                </div>
                                {isOpen && (
                                    <ul className="text-color1 text-sm flex flex-col gap-2 mt-2 max-h-60 overflow-auto">
                                        {section?.data?.map((opt: { label: string; value: string }, i: number) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    className="accent-primary"
                                                    checked={((filterValues[section.key] ?? []) as string[]).includes(
                                                        section.key === "brand" ? opt.label : opt.value
                                                    )}
                                                    onChange={() =>
                                                        handleCheckbox(section.key, section.key === "brand" ? opt.label : opt.value)
                                                    }
                                                />
                                                <label>{opt.label}</label>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        );
                    })}
                </div>
            </aside>
        </>
    );
};

export default Filters;
