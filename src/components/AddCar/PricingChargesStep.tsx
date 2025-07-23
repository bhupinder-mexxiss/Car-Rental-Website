
import { useSearchParams } from "react-router";
import { FormikInput } from "../CommanFields/FormikInput";
import { useFormikContext } from "formik";

interface RentPrice {
  price?: number;
  priceUnit?: string;
  deposit?: number;
  lateFee?: number;
  milageTypeUnlimited?: boolean;
  kmDrive?: number;
}

interface PricingChargesStepValues {
  rentPrice?: RentPrice;
}

const PricingChargesStep = () => {
  const { values, } = useFormikContext<PricingChargesStepValues>()

  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

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
              name="rentPrice.price"
              label={type === "sell" ? "Price" : "Rental Price"}
              type="number"
              min={0}
              step={1}
              placeholder="0"
              description="Set your rental price per selected unit (hour/day/week)"
            />
          </div>

          <div className="space-y-2">
            <FormikInput
              name="rentPrice.priceUnit"
              label="Price Per"
              type="select"
              options={priceUnitOptions}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <FormikInput
              name="rentPrice.deposit"
              label="Security Deposit"
              type="number"
              min={0}
              step={1}
              placeholder="0"
              description="The security deposit will be refunded after the car is returned in its original condition."
            />
          </div>

          <div className="space-y-2">
            <FormikInput
              name="rentPrice.lateFee"
              label="Late Return Fee (per hour)"
              type="number"
              min={0}
              step={1}
              placeholder="0"
              description="This fee applies for each hour the car is returned after the scheduled return time."
            />
          </div>
          <div className="space-y-2 col-span-2">
            <p className="text-color2 !mb-1.5 inline-block text-sm font-medium" >Drive Type</p>

            <FormikInput
              name="rentPrice.milageTypeUnlimited"
              label="Drive Type"
              type="radio"
              options={[
                { label: "Unlimited", value: true },
                { label: "Limited", value: false },
              ]}
            />
          </div>
          {!values?.rentPrice?.milageTypeUnlimited &&
            <>
              <div className="space-y-2">
                <FormikInput
                  name="rentPrice.kmDrive"
                  label="KM Drive"
                  type="number"
                  min={0}
                  step={1}
                  placeholder="0"
                  description="This fee applies for each hour the car is returned after the scheduled return time."
                />
              </div>
              <div className="space-y-2">
                <FormikInput
                  name="rentPrice.extraKmFee"
                  label="Extra Fee (per km)"
                  type="number"
                  min={0}
                  step={1}
                  placeholder="0"
                  description="This fee applies for each hour the car is returned after the scheduled return time."
                />
              </div>
            </>
          }
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