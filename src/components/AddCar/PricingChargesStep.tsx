
import { FormikInput } from "../../components/CommanFields/FormikInput";

const PricingChargesStep = () => {
  const priceUnitOptions = [
    { label: "Hour", value: "hour" },
    { label: "Day", value: "day" },
    { label: "Week", value: "week" },
  ];
  
  return (
    <div>
      {/* <h2 className="text-xl font-semibold mb-6">Pricing & Charges</h2> */}
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <FormikInput
              name="price"
              label="Rental Price"
              type="number"
              min="0"
              step="0.01"
              placeholder="0.00"
              className="rounded-l-none pl-8"
              description="Set your rental price per selected unit (hour/day/week)"
            />
          </div>
          
          <div className="space-y-2">
            <FormikInput
              name="priceUnit"
              label="Price Per"
              type="select"
              options={priceUnitOptions}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <FormikInput
              name="deposit"
              label="Security Deposit"
              type="number"
              min="0"
              step="0.01"
              placeholder="0.00"
              className="rounded-l-none pl-8"
              description="The security deposit will be refunded after the car is returned in its original condition."
            />
          </div>
          
          <div className="space-y-2">
            <FormikInput
              name="lateFee"
              label="Late Return Fee (per hour)"
              type="number"
              min="0"
              step="0.01"
              placeholder="0.00"
              className="rounded-l-none pl-8"
              description="This fee applies for each hour the car is returned after the scheduled return time."
            />
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-md">
          <h3 className="text-blue-700 font-medium mb-1">Pricing Tips</h3>
          <ul className="text-[13px] list-decimal list-inside">
            <li>Research similar cars in your area to ensure your pricing is competitive.</li>
            <li>Consider offering discounts for weekly or monthly rentals.</li>
            <li>Set a reasonable security deposit to protect your car while not deterring renters.</li>
            <li>Late fees should be fair but sufficient to discourage late returns.</li>
          </ul>
        </div>
      </div>
      
      <div className="text-sm text-gray-500 mt-6">
        <p>Set competitive pricing to attract renters while ensuring you're compensated fairly for the use of your vehicle.</p>
      </div>
    </div>
  );
};

export default PricingChargesStep;