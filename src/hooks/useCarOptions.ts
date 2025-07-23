import { useMemo } from "react";
import { carOptions as staticOptions } from "../constants/car";
import { useGetBrandsQuery } from "../redux/api/common";
import { CarOptions, IBrand } from "../Types/Common";

export const useCarOptions = (): CarOptions => {
    const { data: Brands = [] } = useGetBrandsQuery({});

    const brandOptions = useMemo(
        () =>
            Brands.map((brand: IBrand) => ({
                label: brand.name,
                value: brand._id,
            })),
        [Brands]
    );

    const options = useMemo(
        () => ({
            transmission: staticOptions.transmission,
            fuelType: staticOptions.fuelType,
            seats: staticOptions.seats,
            carType: staticOptions.carType,
            categories: staticOptions.categories,
            brands: brandOptions,
        }),
        [brandOptions]
    );

    return options;
};
