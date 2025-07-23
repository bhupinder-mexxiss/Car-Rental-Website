import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    useCallback,
    ReactNode,
} from "react";
import { useLocation } from "react-router";
import { FilterValues } from "../Types/Common";
import { useGetCarsQuery } from "../redux/api/car";
import { useAreaLocation } from "./LocationContext";
import { ICar } from "../Types/car";
import { SearchOption } from "../Components/SearchBar/SearchBar";

interface FilterContextType {
    filterValues: FilterValues;
    setFilterValues: React.Dispatch<React.SetStateAction<FilterValues>>;
    resetFilter: () => void;
    staticMaxPrice: number | undefined;
    cars: ICar[];
    meta: { total: number };
    isFetching: boolean;
    appliedOptions: SearchOption[];
    setAppliedOptions: React.Dispatch<React.SetStateAction<SearchOption[]>>;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilterContext = () => {
    const context = useContext(FilterContext);
    if (!context) throw new Error("useFilterContext must be used within a FilterProvider");
    return context;
};

export const FilterProvider = ({ children }: { children: ReactNode }) => {
    const location = useLocation();
    const [appliedOptions, setAppliedOptions] = useState<SearchOption[]>([]);
    const { areaLocation } = useAreaLocation();

    const defaultFilter = useMemo<FilterValues>(() => {
        const isSell = location.pathname === "/buy-car";
        return {
            brand: [],
            seat: [],
            carType: [],
            listingType: [isSell ? "sell" : "rent"],
            transmission: [],
            minPrice: 0,
            maxPrice: isSell ? 1000000 : 50000,
        };
    }, [location.pathname]);

    const [filterValues, setFilterValues] = useState<FilterValues>(defaultFilter);

    const resetFilter = useCallback(() => {
        setFilterValues(defaultFilter);
        setAppliedOptions([]); // clear search chips
    }, [defaultFilter]);

    // Build query string based on filters
    const queryString = useMemo(() => {
        const queryParams = Object.entries(filterValues)
            .filter(([, v]) => v !== "" && v !== undefined && v !== null)
            .map(([key, val]) => {
                const value = Array.isArray(val) ? val.join(",") : String(val);
                return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
            });

        if (areaLocation?.area) {
            queryParams.push(`area=${encodeURIComponent(areaLocation.area)}`);
        }

        return queryParams.join("&");
    }, [filterValues, areaLocation]);

    // Fetch cars with query
    const { data, isFetching, refetch } = useGetCarsQuery(queryString);

    useEffect(() => {
        refetch();
    }, [queryString, refetch]);

    useEffect(() => {
        resetFilter(); // reset filters on route or areaLocation change
    }, [location.pathname, areaLocation, resetFilter]);

    const staticMaxPrice = defaultFilter.maxPrice;

    return (
        <FilterContext.Provider
            value={{
                appliedOptions,
                setAppliedOptions,
                filterValues,
                setFilterValues,
                resetFilter,
                staticMaxPrice,
                cars: data?.cars || [],
                meta: data?.meta || { total: 0 },
                isFetching,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};
