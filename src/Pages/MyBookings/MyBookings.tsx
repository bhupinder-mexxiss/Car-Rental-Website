import { useState } from "react";
import BookingCard from "./BookingCard"
import { Cancel, CheckCircle, Circle, WatchLater } from "@mui/icons-material";

const tabs = ['active', 'upcoming', 'completed', 'cancelled']
const MyBookings = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    return (
        <div className=''>
            <div className="">
                <div className="py-4 px-4 bg-black rounded-t-xl flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold text-white">My Bookings</h1>
                        <p className="text-white/80">
                            Manage your bookings and view details of your past and upcoming reservations.
                        </p>
                    </div>
                </div>
                <div className="bg-gray-100 rounded-b-xl">
                    <ul className="px-4 flex gap-8 border-b border-border">
                        {tabs.map((tab, index) => (
                            <li key={index} className={`cursor-pointer text-sm flex items-center gap-1.5 py-3 ${selectedTab === index ? '!text-primary' : 'text-color2 hover:text-color1'}`} onClick={() => setSelectedTab(index)}>
                                {index === 0 ? <Circle className="!text-base" /> : index === 1 ? <WatchLater className="!text-lg" /> : index === 3 ? <Cancel className="!text-lg" /> : <CheckCircle className="!text-lg" />}
                                <span className="capitalize">{tab}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="px-4 py-5">
                        <div className="flex flex-col gap-4">
                            <BookingCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyBookings

