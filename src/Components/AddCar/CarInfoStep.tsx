import { FormikInput } from "../CommanFields/FormikInput";
import { filterOptions, categories } from "../../constants/car";

const CarInfoStep = () => {
    const brandOptions = filterOptions.brands.map(brand => ({
        label: brand,
        value: brand,
    }));

    const transmissionOptions = filterOptions.transmission.map(option => ({
        label: option,
        value: option,
    }));

    const fuelTypeOptions = filterOptions.fuelType.map(option => ({
        label: option,
        value: option,
    }));

    const categoryOptions = categories
        .filter(cat => cat !== 'All')
        .map(category => ({
            label: category,
            value: category,
        }));

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormikInput
                    name="brand"
                    label="Brand"
                    type="select"
                    options={[{ label: "Select Brand", value: "" }, ...brandOptions]}
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
                    options={transmissionOptions}
                />

                <FormikInput
                    name="fuelType"
                    label="Fuel Type"
                    type="select"
                    options={fuelTypeOptions}
                />

                <FormikInput
                    name="seats"
                    label="Number of Seats"
                    type="number"
                    min={1}
                    max={10}
                />

                <FormikInput
                    name="doors"
                    label="Number of Doors"
                    type="number"
                    min={2}
                    max={5}
                />

                <FormikInput
                    name="category"
                    label="Category"
                    type="select"
                    options={categoryOptions}
                />
            </div>

            <div className="text-sm text-gray-500 mt-6">
                <p>* Please provide accurate information about your car. This information will be displayed to potential renters.</p>
            </div>
        </div>
    );
};

export default CarInfoStep;
