import { CheckCircle, Clock, Mail, Phone, User, XCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const tabs = [
    { value: "all", label: "All" },
    { value: "pending", label: "Pending" },
    { value: "approved", label: "Approved" },
    { value: "rejected", label: "Rejected" },
];

const BookingRequests = () => {
    const [activeTab, setActiveTab] = useState("all");
    const bookingRequests = [
        {
            id: "BR001",
            customerName: "John Smith",
            customerEmail: "john.smith@email.com",
            customerPhone: "+1 (555) 123-4567",
            carModel: "Toyota Camry 2023",
            startDate: "2024-06-10",
            endDate: "2024-06-15",
            totalAmount: 450,
            status: "pending",
            requestDate: "2024-06-05",
            pickupLocation: "Downtown Office"
        },
        {
            id: "BR002",
            customerName: "Sarah Johnson",
            customerEmail: "sarah.j@email.com",
            customerPhone: "+1 (555) 987-6543",
            carModel: "Honda CR-V 2022",
            startDate: "2024-06-12",
            endDate: "2024-06-18",
            totalAmount: 720,
            status: "approved",
            requestDate: "2024-06-04",
            pickupLocation: "Airport Terminal"
        },
        {
            id: "BR003",
            customerName: "Mike Wilson",
            customerEmail: "mike.w@email.com",
            customerPhone: "+1 (555) 456-7890",
            carModel: "BMW X5 2023",
            startDate: "2024-06-08",
            endDate: "2024-06-12",
            totalAmount: 800,
            status: "rejected",
            requestDate: "2024-06-03",
            pickupLocation: "City Center"
        }
    ];
    const getStatusBadge = (status: string) => {
        switch (status) {
            case "pending":
                return <span className="flex items-center justify-center gap-1 text-yellow-600 border border-yellow-300 w-fit px-3 py-0.5 text-xs font-medium rounded-full"><Clock className="h-3 w-3 mr-1" />Pending</span>;
            case "approved":
                return <span className="flex items-center justify-center gap-1 text-green-600 border border-green-300 w-fit px-3 py-0.5 text-xs font-medium rounded-full"><CheckCircle className="h-3 w-3 mr-1" />Approved</span>;
            case "rejected":
                return <span className="flex items-center justify-center gap-1 text-red-600 border border-red-300 w-fit px-3 py-0.5 text-xs font-medium rounded-full"><XCircle className="h-3 w-3 mr-1" />Rejected</span>;
            default:
                return <span>{status}</span>;
        }
    };
    const handleApprove = (requestId: string) => {
        toast("Booking Approved", {
            description: `Booking request ${requestId} has been approved.`,
        });
    };

    const handleReject = (requestId: string) => {
        toast("Booking Rejected", {
            description: `Booking request ${requestId} has been rejected.`,
        });
    };
    const filteredRequests = bookingRequests.filter(request =>
        activeTab === "all" || request.status === activeTab
    );
    return (
        <div className="flex flex-col bg-gray-50">
            <main className="flex-1">
                <div className="container py-8 px-4">
                    <div>
                        {/* Header */}
                        <div className="mb-8">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">Booking Requests</h1>
                            <p className="text-gray-600 text-lg">Manage booking requests from potential customers</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
                            <div className="p-4 rounded-lg shadow-sm border border-border/50">
                                <div className="card-header">Total Requests</div>
                                <div className="text-3xl mt-2 font-semibold">5</div>
                            </div>
                            <div className="p-4 rounded-lg shadow-sm border border-border/50">
                                <div className="card-header">Pending</div>
                                <div className="text-3xl mt-2 font-semibold">3</div>
                            </div>
                            <div className="p-4 rounded-lg shadow-sm border border-border/50">
                                <div className="card-header">Approved</div>
                                <div className="text-3xl mt-2 font-semibold">1</div>
                            </div>
                            <div className="p-4 rounded-lg shadow-sm border border-border/50">
                                <div className="card-header">Rejected</div>
                                <div className="text-3xl mt-2 font-semibold">1</div>
                            </div>
                            <div className="p-4 rounded-lg shadow-sm border border-border/50">
                                <div className="card-header">Total Revenue</div>
                                <div className="text-3xl mt-2 font-semibold">$5000</div>
                            </div>
                        </div>


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
                                <div className="p-4 rounded-lg shadow-sm border border-border/50">
                                    <h4 className="text-xl font-semibold">Booking Requests</h4>
                                    <div className="mt-4 overflow-auto">
                                        <table className="table-auto w-full border-collapse">
                                            <thead>
                                                <tr className="">
                                                    <th className="px-4 py-2 text-left text-nowrap text-sm font-medium text-color2">Request ID</th>
                                                    <th className="px-4 py-2 text-left text-nowrap text-sm font-medium text-color2">Customer</th>
                                                    <th className="px-4 py-2 text-left text-nowrap text-sm font-medium text-color2 min-w-[170px]">Vehicle</th>
                                                    <th className="px-4 py-2 text-left text-nowrap text-sm font-medium text-color2">Dates</th>
                                                    <th className="px-4 py-2 text-left text-nowrap text-sm font-medium text-color2">Amount</th>
                                                    <th className="px-4 py-2 text-left text-nowrap text-sm font-medium text-color2">Status</th>
                                                    <th className="px-4 py-2 text-left text-nowrap text-sm font-medium text-color2">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredRequests.map(request => (
                                                    <tr key={request.id} className="border-b border-border/50">
                                                        <td className="border-t border-gray-300 px-4 py-2">{request.id}</td>
                                                        <td className="border-t border-gray-300 px-4 py-2">
                                                            <div className="space-y-1">
                                                                <div className="flex items-center text-sm">
                                                                    <User className="h-4 w-4 mr-2 text-gray-500" />
                                                                    {request.customerName}
                                                                </div>
                                                                <div className="flex items-center text-xs text-gray-500">
                                                                    <Mail className="h-3 w-3 mr-1" />
                                                                    {request.customerEmail}
                                                                </div>
                                                                <div className="flex items-center text-xs text-gray-500">
                                                                    <Phone className="h-3 w-3 mr-1" />
                                                                    {request.customerPhone}
                                                                </div>
                                                            </div>
                                                        </td><td className="border-t border-gray-300 px-4 py-2">
                                                            <div className="flex items-center text-sm">
                                                                {request.carModel}
                                                            </div>
                                                        </td>

                                                        <td className="border-t border-gray-300 px-4 py-2 text-sm">
                                                            {request.startDate} - {request.endDate}
                                                        </td>
                                                        <td className="border-t border-gray-300 px-4 py-2 text-sm">${request.totalAmount.toLocaleString()}</td>
                                                        <td className="border-t border-gray-300 px-4 py-2 text-sm">
                                                            {getStatusBadge(request.status)}
                                                        </td>
                                                        <td className="border-t border-gray-300 px-4 py-2 text-sm">
                                                            {request.status === "pending" && (
                                                                <div className="flex space-x-2">
                                                                    <button
                                                                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded flex items-center cursor-pointer"
                                                                    onClick={() => handleApprove(request.id)}
                                                                    >
                                                                        <CheckCircle className="h-4 w-4 mr-1" />
                                                                        Approve
                                                                    </button>
                                                                    <button
                                                                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded flex items-center cursor-pointer"
                                                                    onClick={() => handleReject(request.id)}
                                                                    >
                                                                        <XCircle className="h-4 w-4 mr-1" />
                                                                        Reject
                                                                    </button>
                                                                </div>
                                                            )}
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
        </div>
    )
}

export default BookingRequests