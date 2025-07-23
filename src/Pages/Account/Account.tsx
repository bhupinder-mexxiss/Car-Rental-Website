import { Assessment, DirectionsCarRounded, EventAvailableRounded, FavoriteRounded, PersonRounded } from "@mui/icons-material"
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router"

const Account = () => {
    const { user } = useSelector((state: any) => state.auth);
    return (
        <div className="py-8">
            <div className="container">
                <div className="flex gap-4">
                    <div className="w-[25%]">
                        <div className="bg-gray-100 rounded-xl p-4">
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-primary">

                                </div>
                                <p className="text-base font-semibold mt-2">{user?.name}</p>
                                {/* <p className="text-  mb-1">inder@gmail.com</p> */}
                                <span className="capitalize text-xs px-3 py-1 rounded-full bg-green-200/60 text-green-600 font-medium">{user?.role}</span>
                            </div>
                            <hr className="border-border my-4" />
                            <ul className="flex flex-col gap-2">
                                <li><NavLink to="/profile" className={({ isActive }) => `flex items-center gap-2 py-2 px-2 rounded-md hover:bg-primary/10 hover:text-primary ${isActive ? "bg-primary/10 text-primary" : ""}`}><PersonRounded className="!text-xl" /> My Profile</NavLink></li>
                                <li><NavLink to="/my-bookings" className={({ isActive }) => `flex items-center gap-2 py-2 px-2 rounded-md hover:bg-primary/10 hover:text-primary ${isActive ? "bg-primary/10 text-primary" : ""}`}><DirectionsCarRounded className="!text-xl" /> My Bookings</NavLink></li>
                                <li><NavLink to="/favorites" className={({ isActive }) => `flex items-center gap-2 py-2 px-2 rounded-md hover:bg-primary/10 hover:text-primary ${isActive ? "bg-primary/10 text-primary" : ""}`}><FavoriteRounded className="!text-xl" /> Favorites</NavLink></li>
                            </ul>
                            {user?.role === "partner" &&
                                <>
                                    <hr className="border-border my-4" />
                                    <h6 className="text-color2">Dealer Options</h6>
                                    <ul className="flex flex-col gap-2 mt-2">
                                        <li><NavLink to="/my-listings" className={({ isActive }) => `flex items-center gap-2 py-2 px-2 rounded-md hover:bg-primary/10 hover:text-primary ${isActive ? "bg-primary/10 text-primary" : ""}`}><DirectionsCarRounded className="!text-xl" /> My Listings</NavLink></li>
                                        <li><NavLink to="/booking-requests" className={({ isActive }) => `flex items-center gap-2 py-2 px-2 rounded-md hover:bg-primary/10 hover:text-primary ${isActive ? "bg-primary/10 text-primary" : ""}`}><EventAvailableRounded className="!text-xl" />Booking Request</NavLink></li>
                                        <li><NavLink to="/buy-enquiries" className={({ isActive }) => `flex items-center gap-2 py-2 px-2 rounded-md hover:bg-primary/10 hover:text-primary ${isActive ? "bg-primary/10 text-primary" : ""}`}><EventAvailableRounded className="!text-xl" />Buy Enquiries</NavLink></li>
                                        <li><NavLink to="/" className={({ isActive }) => `flex items-center gap-2 py-2 px-2 rounded-md hover:bg-primary/10 hover:text-primary ${isActive ? "bg-primary/10 text-primary" : ""}`}><Assessment className="!text-xl" /> Analytics</NavLink></li>
                                    </ul>
                                </>
                            }
                        </div>
                    </div>
                    <div className="w-[75%]">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Account