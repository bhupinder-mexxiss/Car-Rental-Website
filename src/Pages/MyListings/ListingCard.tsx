import ListingDropdown from "./ListingDropdown";

const ListingCard = ({ gridview = true }) => {
    const handleAction = (action: string, listingId: number) => {
        console.log(`${action} action for listing ${listingId}`);
        // Handle different actions here
    };
    return (
        <>
            {gridview ?
                <div className="cardList rounded flex flex-col border border-border">
                    <div className="w-full min-w-full min-h-[200px] bg-gray-200 rounded rounded-b-none">

                    </div>
                    <div className="flex-1 p-3">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h4 className="text-lg font-semibold">Honda Civic 2020</h4>
                                <p className="text-sm text-gray-600">New York, NY</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${'active' === 'active'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                    {"Active"}
                                </span>
                                <ListingDropdown onAction={handleAction} />
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-lg font-bold text-blue-600">
                                $122
                                {"rent" === "rent" && <span className="text-sm text-gray-500">/{"day"}</span>}
                            </div>
                            <div className="text-sm text-gray-500">
                                {12} views • {23} {"rent" === "rent" ? "bookings" : "inquiries"}
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="cardList rounded flex border border-border">
                    <div className="w-[200px] max-w-[200px] min-h-[120px] bg-gray-200 rounded">

                    </div>
                    <div className="flex-1 py-2 px-4">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h4 className="text-lg font-semibold">Honda Civic 2020</h4>
                                <p className="text-sm text-gray-600">New York, NY</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${'active' === 'active'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                    {"Active"}
                                </span>
                                <ListingDropdown onAction={handleAction} />
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-lg font-bold text-blue-600">
                                $122
                                {"rent" === "rent" && <span className="text-sm text-gray-500">/{"day"}</span>}
                            </div>
                            <div className="text-sm text-gray-500">
                                {12} views • {23} {"rent" === "rent" ? "bookings" : "inquiries"}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ListingCard