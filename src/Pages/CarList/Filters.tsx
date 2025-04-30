import { Remove, Add } from "@mui/icons-material";
import { Slider } from "@mui/material";
import { useState } from "react";

const filterData = [
    {
        title: "Vehicles",
        options: [
            { label: "Cars", count: 15 },
            { label: "Sedan", count: 28 },
        ],
    },
    {
        title: "Available seating",
        options: [
            { label: "2", count: 5 },
            { label: "4", count: 5 },
            { label: "5", count: 35 },
        ],
    },
    {
        title: "Year",
        options: [
            { label: "2025", count: 35 },
            { label: "2024", count: 35 },
            { label: "2023", count: 35 },
            { label: "2022", count: 35 },
            { label: "2021", count: 5 },
            { label: "2020", count: 5 },
        ],
    },
];

const Filters = () => {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        Price: true,
    });

    const [value2, setValue2] = useState<number[]>([20, 37]);
    const minDistance = 10;

    const handleChange2 = (event: Event, newValue: number[], activeThumb: number) => {
        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setValue2([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue2([clamped - minDistance, clamped]);
            }
        } else {
            setValue2(newValue);
        }
    };

    const toggleSection = (title: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    return (
        <>
            {/* Price Filter Section */}
            <div className="border-t-2 border-border pt-4">
                <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleSection("Price")}
                >
                    <h6 className="text-color2 font-semibold">Price</h6>
                    <span>
                        {openSections["Price"] ? (
                            <Remove className="text-color1 !text-xl" />
                        ) : (
                            <Add className="text-color1 !text-xl" />
                        )}
                    </span>
                </div>
                <div
                    className={`transition-all duration-300 ease-in-out ${openSections["Price"] ? "max-h-60 mt-2 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="px-2.5">
                        <Slider
                            getAriaLabel={() => "Minimum distance shift"}
                            value={value2}
                            onChange={handleChange2}
                            valueLabelDisplay="auto"
                            disableSwap
                        />
                    </div>
                    <div className="flex items-center justify-between gap-2 text-color1 text-sm mt-2">
                        <input
                            type="text"
                            className="w-full rounded py-1"
                            value={value2[0]}
                            onChange={(e) => setValue2([+e.target.value, value2[1]])}
                        />
                        <span>
                            <Remove className="!text-lg" />
                        </span>
                        <input
                            type="text"
                            className="w-full rounded py-1"
                            value={value2[1]}
                            onChange={(e) => setValue2([value2[0], +e.target.value])}
                        />
                    </div>
                </div>
            </div>

            {/* Dynamic Filters */}
            {filterData.map((filter) => {
                const isOpen = openSections[filter.title] ?? true;
                return (
                    <div key={filter.title} className="border-t-2 border-border pt-4">
                        <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => toggleSection(filter.title)}
                        >
                            <h6 className="text-color2 font-semibold">{filter.title}</h6>
                            <span>
                                {isOpen ? (
                                    <Remove className="text-color1 !text-xl" />
                                ) : (
                                    <Add className="text-color1 !text-xl" />
                                )}
                            </span>
                        </div>
                        <ul
                            className={`text-color1 text-sm flex flex-col gap-2 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-56 opacity-100 mt-2" : "max-h-0 opacity-0"
                                }`}
                        >
                            {filter.options.map((opt, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <input type="checkbox" className="accent-primary" />
                                    <label>{`${opt.label} (${opt.count})`}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </>
    );
};

export default Filters;
