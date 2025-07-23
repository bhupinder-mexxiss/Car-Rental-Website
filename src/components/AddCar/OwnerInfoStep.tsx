import { FormikInput } from "../CommanFields/FormikInput";

const OwnerInfoStep = () => {
  return (
    <div>
      <div className="space-y-6">
        <FormikInput
          name="ownerName"
          label="Full Name"
          placeholder="John Doe"
        />

        <FormikInput
          name="ownerEmail"
          label="Email Address"
          type="email"
          placeholder="john.doe@example.com"
        />

        <FormikInput
          name="ownerPhone"
          label="Phone Number"
          type="tel"
          placeholder="(123) 456-7890"
        />

        <div className="bg-blue-50 p-4 rounded-md">
          <h3 className="text-blue-700 font-medium mb-1">Owner Contact Information</h3>
          <p className="text-[13px]">
            Your contact information will be shared with approved renters only. We take your privacy seriously and protect your information in accordance with our privacy policy.
          </p>
        </div>
      </div>

      <div className="text-sm text-gray-500 mt-6">
        <p>Please provide accurate contact information. This helps us and renters to reach you regarding bookings, questions, or emergencies.</p>
      </div>
    </div>
  );
};

export default OwnerInfoStep;