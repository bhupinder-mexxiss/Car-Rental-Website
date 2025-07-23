import { useFormikContext } from "formik";
import { FormikInput } from "../CommanFields/FormikInput";
import { FormikGoogleAddressFields } from "../CommanFields/FormikGoogleAddressFields";

const LocationAvailabilityStep = ({ type }: { type: string }) => {
  const { errors, values } = useFormikContext()

  console.log(values);
  console.log(errors);

  return (
    <div>
      {/* <h2 className="text-xl font-semibold mb-6">Location & Availability</h2> */}

      <div className="space-y-4">
        {type === "rent" &&
          <>
            <FormikInput
              name="pickuplocation"
              label="Pickup/Return Location Name"
              placeholder="e.g. Downtown Office, Main Street Parking, etc."
              required
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormikInput
                name="availableFrom"
                label="Available From"
                type="date"
                min={new Date().toISOString().split('T')[0]}
                required
              />

              <FormikInput
                name="availableTo"
                label="Available To"
                type="date"
                min={new Date(values?.availableFrom)}
                required
              />
            </div>
          </>
        }

        <FormikGoogleAddressFields />
        <FormikInput
          name="address.address1"
          label="Building"
          placeholder="123"
          required
        />
        <FormikInput
          name="address.address2"
          label="Street Address (Optional)"
          placeholder="123 Main St"
        />
        <FormikInput
          name="address.area"
          label="Community / Area"
          placeholder="Community / Area"
          required
          disabled
        />
        <FormikInput
          name="address.state"
          label="City / Emirate"
          placeholder="City / Emirate"
          required
          disabled
        />
        <FormikInput
          name="address.country"
          label="Country"
          placeholder="Country"
          required
          disabled
        />


        <div className="bg-blue-50 p-4 rounded-md">
          <h3 className="text-blue-700 font-medium mb-1">Availability Guidelines</h3>
          {type === "rent" ? (
            <ol className="text-[13px] list-decimal list-inside">
              <li>Set your car's availability based on when you won't need it for personal use.</li>
              <li>You can update the availability dates later if your plans change.</li>
              <li>If you need your car on specific days within your availability period, you can block those dates later from your dashboard.</li>
            </ol>
          ) : (
            <ul className="text-[13px] list-disc list-inside">
              <li>Indicate when the vehicle will be available for inspection or test drives.</li>
              <li>Make sure the location is accessible and convenient for potential buyers.</li>
            </ul>
          )}
        </div>
      </div>

      <div className="text-sm text-gray-500 mt-6">
        <p>* Provide accurate location and availability information. This helps renters find cars that match their schedule and preferred pickup location.</p>
      </div>
    </div>
  );
};

export default LocationAvailabilityStep;