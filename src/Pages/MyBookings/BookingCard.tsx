import { LocalGasStationOutlined, PersonOutlined, SpeedOutlined } from "@mui/icons-material"
import { Car10, Car12 } from "../../assets/images"

const status: { [key: string]: string } = {
    active: "bg-green-200/60 text-green-800",
    upcoming: "bg-blue-200/60 text-blue-800",
    completed: "bg-gray-300/60 text-gray-800",
    cancelled: "bg-red-200/60 text-red-800"
}
const BookingCard = () => {
    return (
        <>
            <div className="rounded flex border border-border bg-white">
                <div className="w-[180px] max-w-[180px] h-[130px] bg-gray-200 rounded">
                    <img src={Car12} className="h-full w-full object-cover rounded" />
                </div>
                <div className="flex-1 py-2 px-4">
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <h4 className="text- font-semibold">Honda Civic 2020</h4>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="flex items-center gap-1 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full"><LocalGasStationOutlined className="!text-sm" /> Petrol</span>
                                <span className="flex items-center gap-1 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full"><PersonOutlined className="!text-sm" /> 5 Seats</span>
                                <span className="flex items-center gap-1 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full"><SpeedOutlined className="!text-sm" /> Auto</span>
                            </div>
                        </div>
                        <div className="flex items-end justify-end flex-col gap-1.5">
                            <div className="flex items-center gap-2">
                                <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${status["upcoming"]}`}>
                                    {"Upcoming"}
                                </span>
                            </div>

                            <p className="text-sm text-color2">Booking ID: #BK12345</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="text-sm">
                            <p className="text-gray-500 text-sm">Pick-up - Drop-off</p>
                            <span>May 15, 2023 - May 17, 202</span>
                        </div>
                        <div className="flex gap-2">
                            <button className="btn2 text-sm px-4 py-2">View Details</button>
                            <button className="btn3 text-sm px-4 py-2">Modify Booking</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded flex border border-border bg-white">
                <div className="w-[180px] max-w-[180px] h-[130px] bg-gray-200 rounded">
                    <img src={Car10} className="h-full w-full object-cover rounded" />
                </div>
                <div className="flex-1 py-2 px-4">
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <h4 className="text- font-semibold">Honda Civic 2020</h4>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="flex items-center gap-1 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full"><LocalGasStationOutlined className="!text-sm" /> Petrol</span>
                                <span className="flex items-center gap-1 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full"><PersonOutlined className="!text-sm" /> 5 Seats</span>
                                <span className="flex items-center gap-1 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full"><SpeedOutlined className="!text-sm" /> Auto</span>
                            </div>
                        </div>
                        <div className="flex items-end justify-end flex-col gap-1.5">
                            <div className="flex items-center gap-2">
                                <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${status["upcoming"]}`}>
                                    {"Upcoming"}
                                </span>
                            </div>

                            <p className="text-sm text-color2">Booking ID: #BK12345</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="text-sm">
                            <p className="text-gray-500 text-sm">Pick-up - Drop-off</p>
                            <span>May 15, 2023 - May 17, 202</span>
                        </div>
                        <div className="flex gap-2">
                            <button className="btn2 text-sm px-4 py-2">View Details</button>
                            <button className="btn3 text-sm px-4 py-2">Modify Booking</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookingCard