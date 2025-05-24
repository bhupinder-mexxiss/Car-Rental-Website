import { FormikInput } from "../CommanFields/FormikInput";

const LocationAvailabilityStep = () => {
  return (
    <div>
      {/* <h2 className="text-xl font-semibold mb-6">Location & Availability</h2> */}

      <div className="space-y-6">
        <FormikInput
          name="location"
          label="Pickup/Return Location Name"
          placeholder="e.g. Downtown Office, Main Street Parking, etc."
        />

        <FormikInput
          name="address"
          label="Street Address"
          placeholder="123 Main St"
        />

        <FormikInput
          name="city"
          label="City"
          placeholder="New York"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormikInput
            name="availableFrom"
            label="Available From"
            type="date"
            min={new Date().toISOString().split('T')[0]}
          />

          <FormikInput
            name="availableTo"
            label="Available To"
            type="date"
          />
        </div>

        <div className="bg-blue-50 p-4 rounded-md">
          <h3 className="text-blue-700 font-medium mb-1">Availability Guidelines</h3>
          <ol className="text-[13px] list-decimal list-inside">
            <li>Set your car's availability based on when you won't need it for personal use.</li>
            <li>You can update the availability dates later if your plans change.</li>
            <li>If you need your car on specific days within your availability period, you can block those dates later from your dashboard.</li>
          </ol>
        </div>
      </div>

      <div className="text-sm text-gray-500 mt-6">
        <p>* Provide accurate location and availability information. This helps renters find cars that match their schedule and preferred pickup location.</p>
      </div>
    </div>
  );
};

export default LocationAvailabilityStep;