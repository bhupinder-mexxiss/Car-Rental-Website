import { useState } from "react";
import { toast } from "sonner";
import {
    User,
    Phone,
    Mail,
    CheckCircle
} from "lucide-react";
import ResponseModal from './ResponseModal';

interface BuyEnquiry {
    id: string;
    buyerName: string;
    buyerEmail: string;
    buyerPhone: string;
    carModel: string;
    askingPrice: number;
    offeredPrice: number;
    status: "new" | "responded" | "negotiating" | "completed" | "closed";
    enquiryDate: string;
    message: string;
    requestType: "enquiry";
    responses: Array<{
        id: string;
        message: string;
        sender: "buyer" | "seller";
        timestamp: string;
        offer?: number;
    }>;
    finalPrice?: number;
}

const tabs = [
    { value: "all", label: "All" },
    { value: "new", label: "New" },
    { value: "negotiating", label: "Negotiating" },
    { value: "completed", label: "Completed" },
    { value: "closed", label: "Closed" }
];

const BuyEnquiries = () => {
    const [activeTab, setActiveTab] = useState("new");
    const [buyEnquiries, setBuyEnquiries] = useState<BuyEnquiry[]>([
        {
            id: "BE001",
            buyerName: "Alex Rodriguez",
            buyerEmail: "alex.r@email.com",
            buyerPhone: "+1 (555) 234-5678",
            carModel: "Toyota Camry 2020",
            askingPrice: 18500,
            offeredPrice: 17000,
            status: "new",
            enquiryDate: "2024-06-05",
            message: "Very interested in this car. Can we negotiate the price?",
            requestType: "enquiry",
            responses: []
        },
        {
            id: "BE002",
            buyerName: "Emma Davis",
            buyerEmail: "emma.d@email.com",
            buyerPhone: "+1 (555) 345-6789",
            carModel: "Honda Accord 2019",
            askingPrice: 22000,
            offeredPrice: 21000,
            status: "negotiating",
            enquiryDate: "2024-06-04",
            message: "Looking for a reliable family car. Is this car accident-free?",
            requestType: "enquiry",
            responses: [
                {
                    id: "R1",
                    message: "Yes, this car is accident-free with full service history. I can accept $21,500.",
                    sender: "seller",
                    timestamp: "2024-06-04 14:30",
                    offer: 21500
                },
                {
                    id: "R2",
                    message: "That sounds good. Can we schedule a test drive this weekend?",
                    sender: "buyer",
                    timestamp: "2024-06-04 15:45"
                }
            ]
        },
        {
            id: "BE003",
            buyerName: "David Brown",
            buyerEmail: "david.b@email.com",
            buyerPhone: "+1 (555) 456-7890",
            carModel: "BMW 320i 2021",
            askingPrice: 35000,
            offeredPrice: 33000,
            status: "completed",
            enquiryDate: "2024-06-03",
            message: "Ready to buy immediately if the price is right.",
            requestType: "enquiry",
            responses: [],
            finalPrice: 34000
        }
    ]);

    const [isResponseDialogOpen, setIsResponseDialogOpen] = useState(false);
    const [selectedEnquiry, setSelectedEnquiry] = useState<BuyEnquiry | null>(null);
    const [responseMessage, setResponseMessage] = useState("");
    const [counterOffer, setCounterOffer] = useState("");

    const openResponseDialog = (enquiry: BuyEnquiry) => {
        setSelectedEnquiry(enquiry);
        setIsResponseDialogOpen(true);
    };

    const closeResponseDialog = () => {
        setSelectedEnquiry(null);
        setIsResponseDialogOpen(false);
        setResponseMessage("");
    };

    const handleSendResponse = () => {
        if (selectedEnquiry) {
            toast("Response sent", {
                description: `Response sent to ${selectedEnquiry.buyerName}`,
            });
            closeResponseDialog();
        }
    };

    const handleStatusChange = (enquiryId: string, newStatus: BuyEnquiry["status"]) => {
        setBuyEnquiries(prev => prev.map(enquiry => {
            if (enquiry.id === enquiryId) {
                return { ...enquiry, status: newStatus };
            }
            return enquiry;
        }));

        toast("Status Updated", {
            description: `Enquiry ${enquiryId} status changed to ${newStatus.replace('_', ' ')}.`,
        });
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "new":
                return <span className="badge badge-blue">New</span>;
            case "responded":
                return <span className="badge badge-yellow">Responded</span>;
            case "negotiating":
                return <span className="badge badge-orange">Negotiating</span>;
            case "completed":
                return <span className="badge badge-green">Completed</span>;
            case "closed":
                return <span className="badge badge-gray">Closed</span>;
            default:
                return <span className="badge">{status}</span>;
        }
    };

    const filteredEnquiries = buyEnquiries.filter(enquiry =>
        activeTab === "all" || enquiry.status === activeTab
    );

    return (
        <div className="flex flex-col bg-gray-50">
            <main className="flex-1">
                <div className="container py-8 px-4">
                    <div>
                        {/* Header */}
                        <div className="mb-8">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">Buy Enquiries</h1>
                            <p className="text-gray-600 text-lg">Manage enquiries from potential buyers</p>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-8">
                            <div className="card border border-border/40">
                                <div className="card-header">Total</div>
                                <div className="text-3xl mt-2 font-semibold">{buyEnquiries.length}</div>
                            </div>
                            <div className="card border border-border/40">
                                <div className="card-header">New</div>
                                <div className="text-3xl mt-2 font-semibold">{buyEnquiries.filter(e => e.status === "new").length}</div>
                            </div>
                            <div className="card border border-border/40">
                                <div className="card-header">Negotiating</div>
                                <div className="text-3xl mt-2 font-semibold">{buyEnquiries.filter(e => e.status === "negotiating").length}</div>
                            </div>
                            <div className="card border border-border/40">
                                <div className="card-header">Completed</div>
                                <div className="text-3xl mt-2 font-semibold">{buyEnquiries.filter(e => e.status === "completed").length}</div>
                            </div>
                            <div className="card border border-border/40">
                                <div className="card-header">Closed</div>
                                <div className="text-3xl mt-2 font-semibold">{buyEnquiries.filter(e => e.status === "closed").length}</div>
                            </div>
                            <div className="card border border-border/40">
                                <div className="card-header">Potential Value</div>
                                <div className="text-3xl mt-2 font-semibold">${buyEnquiries.reduce((sum, e) => sum + (e.finalPrice || e.offeredPrice || e.askingPrice), 0).toLocaleString()}</div>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="">
                            <div className="bg-gray-200/50 rounded flex justify-between p-1.5">
                                {tabs.map(tab => (
                                    <button
                                        key={tab.value}
                                        className={`text-center w-full rounded text-sm py-1.5 px-3 cursor-pointer ${activeTab === tab.value ? "bg-white shadow-xs" : "text-gray-600"}`}
                                        onClick={() => setActiveTab(tab.value)}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-6">
                                <div className="card">
                                    <h4 className="text-xl font-medium">Buy Enquiries</h4>
                                    <div className="mt-4 overflow-auto">
                                        <table className="table-auto w-full border-collapse">
                                            <thead>
                                                <tr className="">
                                                    <th className="px-4 py-2 text-left text-nowrap text-sm font-medium text-color2">ID / Type</th>
                                                    <th className="px-4 py-2 text-left text-nowrap text-sm font-medium text-color2">Buyer</th>
                                                    <th className="px-4 py-2 text-left text-nowrap text-sm font-medium text-color2 min-w-[170px]">Vehicle</th>
                                                    <th className="px-4 py-2 text-left text-nowrap text-sm font-medium text-color2">Price Details</th>
                                                    <th className="px-4 py-2 text-left text-nowrap text-sm font-medium text-color2">Message / Request</th>
                                                    <th className="px-4 py-2 text-left text-nowrap text-sm font-medium text-color2">Status</th>
                                                    <th className="px-4 py-2 text-left text-nowrap text-sm font-medium text-color2">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredEnquiries.map((enquiry) => (
                                                    <tr key={enquiry.id} className="hover:bg-gray-50">
                                                        <td className="border-t border-gray-300 px-4 py-2">
                                                            <div className="space-y-1 text-sm">
                                                                {enquiry.id}
                                                            </div>
                                                        </td>
                                                        <td className="border-t border-gray-300 px-4 py-2">
                                                            <div className="space-y-1">
                                                                <div className="flex items-center text-sm">
                                                                    <User className="h-4 w-4 mr-2 text-gray-500" />
                                                                    {enquiry.buyerName}
                                                                </div>
                                                                <div className="flex items-center text-xs text-gray-500">
                                                                    <Mail className="h-3 w-3 mr-1" />
                                                                    {enquiry.buyerEmail}
                                                                </div>
                                                                <div className="flex items-center text-xs text-gray-500">
                                                                    <Phone className="h-3 w-3 mr-1" />
                                                                    {enquiry.buyerPhone}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="border-t border-gray-300 px-4 py-2">
                                                            <div className="flex items-center text-sm">
                                                                {enquiry.carModel}
                                                            </div>
                                                        </td>
                                                        <td className="border-t border-gray-300 px-4 py-2">
                                                            <div className="space-y-1">
                                                                <div className="flex items-center text-sm">
                                                                    <span className="text-gray-500">Asking:</span>
                                                                    <span className="ml-2 font-semibold">${enquiry.askingPrice.toLocaleString()}</span>
                                                                </div>
                                                                {enquiry.offeredPrice > 0 && (
                                                                    <div className="flex items-center text-sm">
                                                                        <span className="text-gray-500">Offered:</span>
                                                                        <span className="ml-2 font-semibold text-[#f07e2c]">${enquiry.offeredPrice.toLocaleString()}</span>
                                                                    </div>
                                                                )}
                                                                {enquiry.finalPrice && (
                                                                    <div className="flex items-center text-sm">
                                                                        <span className="text-gray-500">Final:</span>
                                                                        <span className="ml-2 font-semibold text-green-600">${enquiry.finalPrice.toLocaleString()}</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </td>
                                                        <td className="border-t border-gray-300 px-4 py-2">
                                                            <div className="max-w-xs">
                                                                <p className="text-sm text-gray-600 truncate" title={enquiry.message}>
                                                                    {enquiry.message}
                                                                </p>
                                                                <span className="text-xs text-gray-400">{enquiry.enquiryDate}</span>
                                                            </div>
                                                        </td>
                                                        <td className="border-t border-gray-300 px-4 py-2 text-sm">{getStatusBadge(enquiry.status)}</td>
                                                        <td className="border-t border-gray-300 px-4 py-2">
                                                            <div className="flex space-x-2">
                                                                <button
                                                                    className="px-3 py-1 bg-[#f07e2c] text-white rounded hover:bg-[#e06d1f]"
                                                                    onClick={() => openResponseDialog(enquiry)}
                                                                >
                                                                    Respond
                                                                </button>
                                                                {enquiry.status === "completed" && (
                                                                    <button
                                                                        className="px-3 py-1 text-sm flex items-center border border-green-300 text-green-600 rounded hover:bg-green-50"
                                                                        onClick={() => handleStatusChange(enquiry.id, "closed")}
                                                                    >
                                                                        <CheckCircle className="h-3 w-3 mr-1 inline" />
                                                                        Close
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <ResponseModal
                isOpen={isResponseDialogOpen}
                onClose={closeResponseDialog}
                selectedEnquiry={selectedEnquiry}
                responseMessage={responseMessage}
                setResponseMessage={setResponseMessage}
                counterOffer={counterOffer}
                setCounterOffer={setCounterOffer}
                handleSendResponse={handleSendResponse}
            />
        </div>
    );
};

export default BuyEnquiries;