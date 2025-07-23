import { useLocation } from "react-router";
import { useGetCarsQuery } from "../redux/api/car";

export const useFilteredCars = (filters: Record<string, any>) => {
    const location = useLocation();
    const listingType = location.pathname.includes('buy-car') ? 'sell' : 'rent';

    const { data, isLoading, error } = useGetCarsQuery({
        ...filters,
        listingType,
    });

    return { cars: data?.cars ?? [], filters: data?.filters ?? {}, isLoading, error };
};
