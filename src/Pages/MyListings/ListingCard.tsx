import { AirlineSeatReclineExtraOutlined, DeleteOutlineRounded, EditOutlined, LocalGasStationOutlined, SpeedOutlined } from "@mui/icons-material";
import ListingDropdown from "./ListingDropdown";
import { Link } from "react-router";
import { Car } from "../../Types/car";

interface ListingCardProps {
    gridview?: boolean;
    car: Car;
}

const ListingCard = ({ gridview = true, car }: ListingCardProps) => {
    const handleAction = (action: string, listingId: number) => {
        console.log(`${action} action for listing ${listingId}`);
        // Handle different actions here
    };
    return (
        <>
            {gridview ?
                <div className="cardList rounded flex flex-col border border-border relative">
                    <div className="absolute top-2 right-2 flex gap-2">
                        <span className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize ${car.listingType === 'rent'
                            ? 'bg-blue-200 text-blue-800'
                            : 'bg-purple-200 text-purple-800'
                            }`}>
                            For {car.listingType}
                        </span>
                        <span className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize ${car.status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                            }`}>
                            {car.status}
                        </span>
                    </div>
                    <div className="w-full min-w-full min-h-[200px] rounded rounded-b-none overflow-hidden">
                        <img src={car.thumbnail} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 p-3">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h4 className="text-lg font-semibold">{car.title}</h4>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="flex items-center gap-1 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full"><LocalGasStationOutlined className="!text-sm" /> Petrol</span>
                                    <span className="flex items-center gap-1 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full"><AirlineSeatReclineExtraOutlined className="!text-sm" /> {car.seats}</span>
                                    <span className="flex items-center gap-1 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full"><SpeedOutlined className="!text-sm" /> {car.transmission}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <ListingDropdown onAction={handleAction} status={car.status} />
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-lg font-bold text-blue-600">
                                ${car.listingType === "rent" ? car.rentPrice?.price ?? "-" : car.price ?? "-"}
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
                <div className="cardList rounded-lg flex border border-border bg-white hover:shadow-md">
                    <div className="w-[200px] max-w-[200px] min-h-[120px] rounded">
                        <img src={car.thumbnail} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 py-2 px-4">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h4 className="text-lg font-semibold">{car.title}</h4>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize ${car.listingType === 'rent'
                                    ? 'bg-blue-100 text-blue-800'
                                    : 'bg-purple-100 text-purple-800'
                                    }`}>
                                    For {car.listingType}
                                </span>
                                <span className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize ${car.status === 'active'
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
                        <div className="flex items-center gap-2 mb-4">
                            <span className="flex items-center gap-1 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full"><LocalGasStationOutlined className="!text-sm" /> {car.fuelType}</span>
                            <span className="flex items-center gap-1 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full"><AirlineSeatReclineExtraOutlined className="!text-sm" /> {car.seats} Seats</span>
                            <span className="flex items-center gap-1 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full"><SpeedOutlined className="!text-sm" /> {car.transmission}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-lg font-bold text-blue-600">
                                ${car.listingType === "rent" ? car.rentPrice?.price ?? "-" : car.price ?? "-"}
                                {car.listingType === "rent" && <span className="text-sm text-gray-500">/{"day"}</span>}
                            </div>
                            {car.status != "draft" ?
                                <div className="flex gap-2">
                                    <Link to={`/add-car?type=${car.listingType}&draft=${car._id}`}>
                                        <button className="text-sm border border-border rounded flex items-center gap-1 xl:gap-2 px-2 xl:px-3 py-1 xl:py-1.5 cursor-pointer hover:bg-gray-200/60"><EditOutlined className='!text-lg' /> Edit</button>
                                    </Link>
                                    <button className="text-sm border border-border rounded flex items-center gap-1 xl:gap-2 px-2 xl:px-3 py-1 xl:py-1.5 cursor-pointer hover:bg-gray-200/60 text-red-600"><DeleteOutlineRounded className='!text-lg' /> Delete</button>
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