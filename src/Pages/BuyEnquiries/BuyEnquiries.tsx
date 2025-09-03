import { useState } from "react";
import {
    User,
    Phone,
    Mail,
    CheckCircle
} from "lucide-react";
import ResponseModal from './ResponseModal';
import { useGetEnquiriesQuery } from "../../redux/api/Enquiry";
import { format } from "date-fns";
import { IBuyEnquiry } from "../../Types/IBuyEnquiry";

const tabs = [
    { value: "all", label: "All" },
    { value: "new", label: "New" },
    { value: "negotiating", label: "Negotiating" },
    { value: "completed", label: "Completed" },
    { value: "closed", label: "Closed" }
];

const BuyEnquiries = () => {
    const { data } = useGetEnquiriesQuery({ type: "seller" })
    const [activeTab, setActiveTab] = useState("new");
    const [isResponseDialogOpen, setIsResponseDialogOpen] = useState(false);
    const [selectedEnquiry, setSelectedEnquiry] = useState<IBuyEnquiry | null>(null);

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

    const filteredEnquiries = data?.filter((enquiry: IBuyEnquiry) =>
        activeTab === "all" || enquiry.status === activeTab
    );

    // openResponseDialog
    const openResponseDialog = (enquiry: IBuyEnquiry) => {
        setSelectedEnquiry(enquiry);
        setIsResponseDialogOpen(true);
    };
    const closeResponseDialog = () => {
        setIsResponseDialogOpen(false);
        setSelectedEnquiry(null);
    };

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
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                            <div className="card border border-border/40">
                                <div className="card-header">Total</div>
                                <div className="text-3xl mt-2 font-semibold">{data?.length}</div>
                            </div>
                            <div className="card border border-border/40">
                                <div className="card-header">New</div>
                                <div className="text-3xl mt-2 font-semibold">{data?.filter((e: IBuyEnquiry) => e.status === "new").length}</div>
                            </div>
                            <div className="card border border-border/40">
                                <div className="card-header">Negotiating</div>
                                <div className="text-3xl mt-2 font-semibold">{data?.filter((e: IBuyEnquiry) => e.status === "negotiating").length}</div>
                            </div>
                            <div className="card border border-border/40">
                                <div className="card-header">Completed</div>
                                <div className="text-3xl mt-2 font-semibold">{data?.filter((e: IBuyEnquiry) => e.status === "completed").length}</div>
                            </div>
                            <div className="card border border-border/40">
                                <div className="card-header">Closed</div>
                                <div className="text-3xl mt-2 font-semibold">{data?.filter((e: IBuyEnquiry) => e.status === "closed").length}</div>
                            </div>
                            <div className="card border border-border/40">
                                <div className="card-header">Potential Value</div>
                                <div className="text-3xl mt-2 font-semibold">${data?.reduce((sum: number, e: IBuyEnquiry) => sum + ((e.finalPrice ?? 0) || (e.offeredPrice ?? 0)), 0).toLocaleString()}</div>
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
                                                {filteredEnquiries?.map((enquiry: IBuyEnquiry) => (
                                                    <tr key={enquiry.enquiryId} className="hover:bg-gray-50">
                                                        <td className="border-t border-gray-300 px-4 py-2">
                                                            <div className="space-y-1 text-sm">
                                                                {enquiry.enquiryId}
                                                            </div>
                                                        </td>
                                                        <td className="border-t border-gray-300 px-4 py-2">
                                                            <div className="space-y-1">
                                                                <div className="flex items-center text-sm">
                                                                    <User className="h-4 w-4 mr-2 text-gray-500" />
                                                                    {enquiry?.buyer?.name}
                                                                </div>
                                                                <div className="flex items-center text-xs text-gray-500">
                                                                    <Mail className="h-3 w-3 mr-1" />
                                                                    {enquiry?.buyer?.email}
                                                                </div>
                                                                <div className="flex items-center text-xs text-gray-500">
                                                                    <Phone className="h-3 w-3 mr-1" />
                                                                    {enquiry?.buyer?.phone || "-"}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="border-t border-gray-300 px-4 py-2">
                                                            <div className="flex items-center text-sm">
                                                                {enquiry?.car?.title}
                                                            </div>
                                                        </td>
                                                        <td className="border-t border-gray-300 px-4 py-2">
                                                            <div className="space-y-1">
                                                                <div className="flex items-center text-sm">
                                                                    <span className="text-gray-500">Asking:</span>
                                                                    <span className="ml-2 font-semibold">${enquiry?.car?.price?.toLocaleString()}</span>
                                                                </div>
                                                                {(enquiry?.offeredPrice ?? 0) > 0 && (
                                                                    <div className="flex items-center text-sm">
                                                                        <span className="text-gray-500">Offered:</span>
                                                                        <span className="ml-2 font-semibold text-[#f07e2c]">${enquiry?.offeredPrice?.toLocaleString()}</span>
                                                                    </div>
                                                                )}
                                                                {enquiry?.finalPrice && (
                                                                    <div className="flex items-center text-sm">
                                                                        <span className="text-gray-500">Final:</span>
                                                                        <span className="ml-2 font-semibold text-green-600">${enquiry.finalPrice.toLocaleString()}</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </td>
                                                        <td className="border-t border-gray-300 px-4 py-2">
                                                            <div className="max-w-xs">
                                                                <p className="text-sm text-gray-600 truncate" title={enquiry?.message}>
                                                                    {enquiry?.message}
                                                                </p>
                                                                <span className="text-xs text-gray-400">
                                                                    {selectedEnquiry?.createdAt
                                                                        ? format(new Date(selectedEnquiry.createdAt), 'MMMM dd, yyyy')
                                                                        : ''}
                                                                </span>
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
                                                                    // onClick={() => handleStatusChange(enquiry.id, "closed")}
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
                setSelectedEnquiry={setSelectedEnquiry}
                selectedEnquiry={selectedEnquiry}
            />
        </div>
    );
};

export default BuyEnquiries;