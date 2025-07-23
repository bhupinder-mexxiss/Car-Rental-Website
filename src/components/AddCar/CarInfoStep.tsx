import { FormikInput } from "../CommanFields/FormikInput";
import { carOptions } from "../../constants/car";
import { useGetBrandsQuery } from "../../redux/api/common";
import { IBrand } from "../../Types/Common";

const CarInfoStep = ({ type }: { type: string }) => {
    const { data: Brands } = useGetBrandsQuery({})
    const allBrands = Brands?.map((brand: IBrand) => ({
        label: brand.name,
        value: brand._id
    }))

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormikInput
                    name="carNo"
                    label="Car Number"
                    className="uppercase"
                />
                <FormikInput
                    name="title"
                    label="Title"
                    placeholder="List Title"
                />
                <FormikInput
                    name="brand"
                    label="Brand"
                    type="select"
                    options={allBrands}
                />

                <FormikInput
                    name="model"
                    label="Model"
                    placeholder="e.g. Civic, Camry, etc."
                />

                <FormikInput
                    name="year"
                    label="Year"
                    type="number"
                    min={1990}
                    max={new Date().getFullYear() + 1}
                />

                <FormikInput
                    name="transmission"
                    label="Transmission"
                    type="select"
                    options={carOptions.transmission}
                />

                <FormikInput
                    name="fuelType"
                    label="Fuel Type"
                    type="select"
                    options={carOptions.fuelType}
                />

                <FormikInput
                    name="seats"
                    label="Number of Seats"
                    type="number"
                />

                <FormikInput
                    name="doors"
                    label="Number of Doors"
                    type="number"
                />

                <FormikInput
                    name="category"
                    label="Category"
                    type="select"
                    options={carOptions.categories}
                />
                <FormikInput
                    name="carType"
                    label="Car Type"
                    type="select"
                    options={carOptions.carType}
                />

                <FormikInput
                    name="color"
                    label="Color"
                />
                {type === "sell" &&
                    <>
                        <FormikInput
                            name="condition"
                            label="Condition"
                            type="select"
                            options={[
                                { label: "New", value: "new" },
                                { label: "Used", value: "used" }
                            ]}
                        />
                        <FormikInput
                            name="kmDriven"
                            label="KM Driven"
                            type="number"
                        />
                        <FormikInput
                            name="ownership"
                            label="Ownership"
                            type="number"
                        />
                    </>
                }
            </div>

            <div className="text-sm text-gray-500 mt-6">
                <p>* Please provide accurate information about your car. This information will be displayed to potential renters.</p>
            </div>
        </div>
    );
};

export default CarInfoStep;
