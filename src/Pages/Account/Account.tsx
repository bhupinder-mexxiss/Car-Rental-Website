import { Assessment, DirectionsCarRounded, EventAvailableRounded, FavoriteRounded, PersonRounded } from "@mui/icons-material"
import { Link, NavLink, Outlet } from "react-router"

const Account = () => {
    return (
        <div className="py-8">
            <div className="container">
                <div className="flex">
                    <div className="w-[25%]">
                        <div className="bg-gray-100 rounded-xl p-4">
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-primary">

                                </div>
                                <p className="text-lg font-semibold mt-2">John Doe</p>
                                <p className="text-sm">inder@gmail.com</p>
                            </div>
                            <hr className="border-border my-4" />
                            <ul className="flex flex-col gap-2">
                                <li><NavLink to="/account/profile" className={({ isActive }) => `flex items-center gap-2 py-2 px-2 rounded-md hover:bg-primary/10 hover:text-primary ${isActive ? "bg-primary/10 text-primary" : ""}`}><PersonRounded className="!text-xl" /> My Profile</NavLink></li>
                                <li><NavLink to="/account/my-bookings" className={({ isActive }) => `flex items-center gap-2 py-2 px-2 rounded-md hover:bg-primary/10 hover:text-primary ${isActive ? "bg-primary/10 text-primary" : ""}`}><DirectionsCarRounded className="!text-xl" /> My Bookings</NavLink></li>
                                <li><NavLink to="/" className={({ isActive }) => `flex items-center gap-2 py-2 px-2 rounded-md hover:bg-primary/10 hover:text-primary ${isActive ? "bg-primary/10 text-primary" : ""}`}><FavoriteRounded className="!text-xl" /> Favorites</NavLink></li>
                            </ul>
                            <hr className="border-border my-4" />
                            <h6 className="text-color2">Dealer Options</h6>
                            <ul className="flex flex-col gap-2 mt-2">
                                <li><NavLink to="/" className={({ isActive }) => `flex items-center gap-2 py-2 px-2 rounded-md hover:bg-primary/10 hover:text-primary ${isActive ? "bg-primary/10 text-primary" : ""}`}><DirectionsCarRounded className="!text-xl" /> My Listings</NavLink></li>
                                <li><NavLink to="/" className={({ isActive }) => `flex items-center gap-2 py-2 px-2 rounded-md hover:bg-primary/10 hover:text-primary ${isActive ? "bg-primary/10 text-primary" : ""}`}><EventAvailableRounded className="!text-xl" />Booking / Enquiries</NavLink></li>
                                <li><NavLink to="/" className={({ isActive }) => `flex items-center gap-2 py-2 px-2 rounded-md hover:bg-primary/10 hover:text-primary ${isActive ? "bg-primary/10 text-primary" : ""}`}><Assessment className="!text-xl" /> Analytics</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account