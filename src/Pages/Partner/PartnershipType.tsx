import { useState } from "react";
import { Button } from "../../Components/ui/button"
import { CheckCircle, DirectionsCar, Inventory, Person } from "@mui/icons-material";

const tabs = ["individual", "dealership", "fleet"] as const;
type PartnerTypeKey = typeof tabs[number];

const PartnershipType = () => {
    const [selectedTab, setSelectedTab] = useState<PartnerTypeKey>("individual")
    const partnerTypes: Record<PartnerTypeKey, {
        id: string;
        title: string;
        icon: React.ReactNode;
        description: string;
        features: string[];
        requirements: string[];
    }> = {
        individual: {
            id: "individual",
            title: "Individual Vehicle Owner",
            icon: <Person className="text-primary" />,
            description: "Perfect for individuals with one or more vehicles looking to generate extra income when their cars aren't in use.",
            features: [
                "List up to 5 personal vehicles for sale only",
                // "Basic analytics and booking management",
                // "5% commission on rental bookings",
                "$100 per successful vehicle sale"
            ],
            requirements: [
                "Valid vehicle registration and insurance",
                "Clean vehicle history report",
                "Proof of identity and address"
            ]
        },
        dealership: {
            id: "dealership",
            title: "Car Dealership",
            icon: <Inventory className="text-primary" />,
            description: "Designed for established dealerships looking to expand their customer base and offer rental options alongside sales.",
            features: [
                "Unlimited vehicle listings",
                "Advanced analytics and CRM tools",
                "3.5% commission on rental bookings",
                "$75 per successful vehicle sale",
                "Dedicated account manager"
            ],
            requirements: [
                "Business registration and dealer license",
                "Proof of commercial insurance",
                "Minimum of 10 vehicles in inventory",
                "Physical location for vehicle pickup/drop-off"
            ]
        },
        fleet: {
            id: "fleet",
            title: "Fleet Management Company",
            icon: <DirectionsCar className="text-primary" />,
            description: "Tailored for companies managing large vehicle fleets looking to optimize utilization and expand revenue streams.",
            features: [
                "Unlimited vehicle listings with bulk upload options",
                "Enterprise-grade fleet analytics and reporting",
                "2.5% commission on rental bookings",
                "$50 per successful vehicle sale",
                "Priority customer support and account management",
                "API integration options"
            ],
            requirements: [
                "Corporate business registration",
                "Fleet insurance documentation",
                "Minimum of 25 vehicles in fleet",
                "Dedicated fleet management team"
            ]
        }
    };

    return (
        <div className="bg-gray-100 py-10 lg:py-14">
            <div className="container">
                <div>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#121212] mb-4">Choose Your Partnership Type</h2>
                        <p className="text-[#525252] text-lg">We offer flexible partnership options to suit your business needs</p>
                    </div>
                    <div>
                        <ul className="flex items-center gap-4 justify-center mb-6">
                            {tabs.map((tab) => (
                                <li><Button className={`btn3 ${selectedTab === tab ? "" : "bg-gray-300 border-gray-300 hover:bg-gray-400/60"}`} onClick={() => setSelectedTab(tab)}>{tab === "individual" ? "Individual Owner" : tab === "dealership" ? "Dealership" : "Fleet Management"}</Button></li>
                            ))}
                        </ul>
                        <div className="max-w-[900px] mx-auto">
                            <div key={partnerTypes[selectedTab].id} className={`partnerTypes[selectedTab]-tab-content ${partnerTypes[selectedTab].id === "individual" ? "active" : ""}`} id={`${partnerTypes[selectedTab].id}-content`}>
                                <div className="bg-white p-8 rounded-xl shadow-md">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 rounded-full bg-[#f07e2c]/10 flex items-center justify-center mr-4">
                                            {partnerTypes[selectedTab].icon}
                                        </div>
                                        <h3 className="text-2xl font-bold">{partnerTypes[selectedTab].title}</h3>
                                    </div>

                                    <p className="text-[#525252] mb-6">{partnerTypes[selectedTab].description}</p>

                                    <ul className="space-y-3 mb-6">
                                        {partnerTypes[selectedTab].features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <CheckCircle className="!text-lg text-green-500" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="bg-[#f07e2c]/10 p-4 rounded-lg">
                                        <p className="font-medium text-[#f07e2c]">Requirements:</p>
                                        <ul className="text-sm mt-2">
                                            {partnerTypes[selectedTab].requirements.map((req, idx) => (
                                                <li key={idx}>• {req}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnershipType