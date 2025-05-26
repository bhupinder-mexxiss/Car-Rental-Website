import { DeleteOutlineRounded, EditOutlined } from "@mui/icons-material";
import ListingDropdown from "./ListingDropdown";
import { Link } from "react-router";

const ListingCard = ({ gridview = true, car }) => {
    const handleAction = (action: string, listingId: number) => {
        console.log(`${action} action for listing ${listingId}`);
        // Handle different actions here
    };
    return (
        <>
            {gridview ?
                <div className="cardList rounded flex flex-col border border-border bg-white hover:shadow-md">
                    <div className="w-full min-w-full min-h-[200px] bg-gray-200 rounded rounded-b-none">

                    </div>
                    <div className="flex-1 p-3">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h4 className="text-lg font-semibold">{car.title}</h4>
                                <p className="text-sm text-gray-600">New York, NY</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className={`px-4 py-1.5 rounded-full text-xs font-medium capitalize ${car.status === 'active'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                    {car.status}
                                </span>
                                <ListingDropdown onAction={handleAction} status={car.status} />
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-lg font-bold text-blue-600">
                                ${car.price || "-"}
                                {car.listingType === "rent" && <span className="text-sm text-gray-500">/{"day"}</span>}
                            </div>
                            {car.status != "draft" &&
                                <div className="text-sm text-gray-500">
                                    {12} views • {23} {car.listingType === "rent" ? "bookings" : "inquiries"}
                                </div>
                            }
                        </div>
                    </div>
                </div>
                :
                <div className="cardList rounded flex border border-border bg-white hover:shadow-md">
                    <div className="w-[200px] max-w-[200px] min-h-[120px] bg-gray-200 rounded">

                    </div>
                    <div className="flex-1 py-2 px-4">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h4 className="text-lg font-semibold">{car.title}</h4>
                                <p className="text-sm text-gray-600">New York, NY</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className={`px-4 py-1.5 rounded-full text-xs font-medium capitalize ${car.status === 'active'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                    {car.status}
                                </span>

                                {car.status != "draft" &&
                                    <ListingDropdown onAction={handleAction} status={car.status} />
                                }
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-lg font-bold text-blue-600">
                                ${car.price || "-"}
                                {car.listingType === "rent" && <span className="text-sm text-gray-500">/{"day"}</span>}
                            </div>
                            {car.status === "draft" ?
                                <div className="flex gap-2">
                                    <Link to={`/add-car?type=${car.listingType}&draft=${car._id}`}>
                                        <button className="text-sm border border-border rounded flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-gray-200/60"><EditOutlined className='!text-lg' /> Edit</button>
                                    </Link>
                                    <button className="text-sm border border-border rounded flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-gray-200/60 text-red-600"><DeleteOutlineRounded className='!text-lg' /> Delete</button>
                                </div>
                                :
                                <div className="text-sm text-gray-500">
                                    {12} views • {23} {car.listingType === "rent" ? "bookings" : "inquiries"}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ListingCard