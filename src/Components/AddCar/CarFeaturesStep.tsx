import { useState } from "react";
import { useFormikContext } from "formik";
import { FormikInput } from "../CommanFields/FormikInput";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { groupedCommonFeatures } from "../../constants/car";
import { Close } from "@mui/icons-material";
import { useGetCategoriesQuery } from "../../redux/api/common";
import { IFeatureGroup } from "../../Types/Common";

const CarFeaturesStep = ({ type }: { type: string }) => {
  const { data: Features } = useGetCategoriesQuery({})

  const { values, setFieldValue, errors } = useFormikContext<any>();
  const [customFeature, setCustomFeature] = useState("");
  console.log(errors, values);

  const handleFeatureToggle = (feature: string, checked: boolean) => {
    const currentFeatures = values.features || [];
    let updatedFeatures;

    if (checked) {
      updatedFeatures = [...currentFeatures, feature];
    } else {
      updatedFeatures = currentFeatures.filter((item: string) => item !== feature);
    }

    setFieldValue("features", updatedFeatures);
  };

  const addCustomFeature = () => {
    if (customFeature.trim() === "") return;

    const currentFeatures = values.features || [];
    const updatedFeatures = [...currentFeatures, customFeature.trim()];
    setFieldValue("features", updatedFeatures);
    setCustomFeature("");
  };

  return (
    <div>
      {/* <h2 className="text-xl font-semibold mb-6">Car Features</h2> */}
      {type === "sell" &&
        <>
          <div className="mb-6">
            <FormikInput
              name="price"
              label="Car Price"
              type="number"
            />
          </div>
          <div className="mb-6">
            <p className="text-color2 !mb-1.5 inline-block text-sm font-medium" >Price Negotiable</p>
            <FormikInput
              name="isNegotiable"
              label="Price Negotiable"
              type="radio"
              options={[
                { label: "Yes", value: true },
                { label: "No", value: false },
              ]}
            />
          </div>
        </>
      }

      <div className="mb-6">
        <FormikInput
          name="description"
          label="Car Description"
          type="textarea"
          placeholder="Provide a detailed description of your car..."
          className="h-32"
          description="Describe your car with important details that renters should know. Include any special features, performance details, or unique aspects."
        />
      </div>

      <div className="mb-6">
        <Label className="mb-1 block text-lg">Features</Label>
        <p className="text-sm text-gray-500 mb-4">Select all features that your car has:</p>

        {Features?.map((group: IFeatureGroup) => (
          <div key={Features.category} className="mb-6">
            <h4 className="font-medium text-gray-800 text-sm mb-3">{group.category}</h4>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {group?.features.map((feature) => {
                console.log(feature);

                return (
                  <div key={feature} className="flex items-center space-x-2">
                    <Checkbox
                      name="features"
                      id={`feature-${feature}`}
                      checked={(values?.features || []).includes(feature)}
                      onCheckedChange={(checked) =>
                        handleFeatureToggle(feature, checked === true)
                      }
                    />
                    <Label
                      htmlFor={`feature-${feature}`}
                      className="text-sm font-normal cursor-pointer capitalize"
                    >
                      {feature}
                    </Label>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>


      <div className="mb-6">
        <Label className="mb-2 block">Add Custom Feature</Label>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Enter custom feature"
            value={customFeature}
            onChange={(e) => setCustomFeature(e.target.value)}
            className="form-input focus:right-1 focus-visible:ring-1"
          />
          <Button
            type="button"
            onClick={addCustomFeature}
            className="btn3"
          >
            Add
          </Button>
        </div>
      </div>

      {(values?.features || []).length > 0 && (
        <div className="mb-6">
          <Label className="mb-2 block">Selected Features</Label>
          <div className="flex flex-wrap gap-2">
            {(values?.features || []).map((featureValue: string, index: number) => {
              // Find the label from groupedCommonFeatures
              const matchedFeature = groupedCommonFeatures
                .flatMap((group) => group.features)
                .find((f) => f.value === featureValue);

              return (
                <div
                  key={index}
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full flex items-center"
                >
                  {matchedFeature?.label || featureValue}
                  <button
                    type="button"
                    className="ml-2 focus:outline-none cursor-pointer"
                    onClick={() => handleFeatureToggle(featureValue, false)}
                  >
                    <Close className="!text-base" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {typeof errors.features === "string" && <p className="text-xs text-red-500">{errors.features}</p>}

      <div className="text-sm text-gray-500 mt-6">
        <p>* Highlighting the features of your car helps potential renters understand what they're getting and can increase the chances of your car being rented.</p>
      </div>
    </div>
  );
};

export default CarFeaturesStep;