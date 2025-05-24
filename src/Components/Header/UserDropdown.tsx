import { useState, useRef, useEffect } from "react";
import {
    User,
    Car,
    Heart,
    Settings,
    HelpCircle,
    LogOut,
} from "lucide-react";
import { Link } from "react-router";

interface UserDropdownProps {
    user: any
    handleLogout: () => void;
}

const UserDropdown = ({ user, handleLogout }: UserDropdownProps) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const handleClose = () => setOpen(false);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="relative h-[46px] w-[46px] p-[5px] rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer"
            >
                <span className="h-full w-full rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="h-4 w-4" />
                </span>
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black/5 z-50 overflow-hidden">
                    <div className="px-4 py-3 border-b border-border">
                        <p className="text-sm font-medium leading-none">{user.name}</p>
                        <p className="text-xs text-gray-500 mt-1">{user.email}</p>
                    </div>

                    <ul className="py-1">
                        <li>
                            <Link
                                to="/profile"
                                onClick={handleClose}
                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                <User className="mr-2 h-4 w-4" />
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/my-listings"
                                onClick={handleClose}
                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                <Car className="mr-2 h-4 w-4" />
                                My Listings
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/favorites"
                                onClick={handleClose}
                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                <Heart className="mr-2 h-4 w-4" />
                                Favorites
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={handleClose} className="cursor-pointer w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <Settings className="mr-2 h-4 w-4" />
                                Settings
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={handleClose} className="cursor-pointer w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <HelpCircle className="mr-2 h-4 w-4" />
                                Help & Support
                            </button>
                        </li>
                    </ul>

                    <div className="border-t border-border">
                        <button onClick={() => {
                            handleLogout();
                            handleClose();
                        }} className="cursor-pointer w-full flex items-center px-4 py-2.5 text-sm text-red-600 hover:bg-gray-100">
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                        </button>
                    </div>
                </div>
            )
            }
        </div >
    );
};

export default UserDropdown;
