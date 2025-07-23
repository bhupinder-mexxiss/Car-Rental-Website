import { KeyboardArrowDown } from '@mui/icons-material';
import { Link, NavLink, useLocation } from 'react-router'
import { Logo } from '../../assets/images';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../../redux/baseApi';
import { clearUser } from '../../redux/Slices/AuthSlice';
import { useEffect, useState } from 'react';
import UserDropdown from './UserDropdown';
import LocationSelector from '../LocationSelector/LocationSelector';

const menuitems = [
    { url: "/", label: "Home" },
    {
        url: "/rent-car", label: "Rent Cars", subMenu: [
            // { url: "/buy-car", label: "Buy car" },
        ]
    },
    { url: "/buy-car", label: "Buy cars" },
    { url: "/add-car", label: "List your car" },
    { url: "/about-us", label: "About us" },
    { url: "/contact-us", label: "Contact us" },
]

const Header = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [logout] = useLogoutMutation()
    const { isAuthenticated, user } = useSelector((state: any) => state.auth);
    const [showLoginPopup, setShowLoginPopup] = useState(false);

    const handleLogout = async () => {
        await logout({}).unwrap().then(() => {
            dispatch(clearUser());
            setShowLoginPopup(true);
        })
    };
    useEffect(() => {
        if (!isAuthenticated && location.pathname !== "/login") {
            setShowLoginPopup(true);
        }
    }, [isAuthenticated, location.pathname]);

    useEffect(() => {
        if (showLoginPopup) {
            const timer = setTimeout(() => {
                setShowLoginPopup(false);
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [showLoginPopup]);
    return (
        <div className='z-[999] sticky top-0 w-full bg-white/80 border-b border-[#12121226] backdrop-blur-xs shadow'>
            <div className="container">
                <div className='flex items-center justify-between py-3 '>
                    <div>
                        <img src={Logo} alt="" className='h-14' />
                        {/* <span className='text-color1 text-xl font-semibold'>CarRide</span> */}
                    </div>
                    <div>
                        <ul className="flex items-center justify-between gap-8" >
                            {menuitems.map((item, index) => (
                                <li key={index} className='hover:text-primary text-[17px] group relative'>
                                    <NavLink to={item.url} className={({ isActive }) => `flex items-center gap-2 ${isActive ? "text-shadow-xl text-primary" : "text-color1"}`} >
                                        {item.label}
                                        {item.subMenu && item.subMenu.length > 0 &&
                                            <span><KeyboardArrowDown /> </span>
                                        }
                                    </NavLink>
                                    {item.subMenu && item.subMenu.length > 0 && (
                                        <ul className="absolute left-1/2 -translate-x-1/2 bg-white shadow-lg mt-2 rounded-md p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                                            {item.subMenu.map((subItem, subIndex) => (
                                                <li key={subIndex} className='hover:text-primary text-[17px] w-max'>
                                                    <NavLink to={subItem.url} className={({ isActive }) => `${isActive ? "text-shadow-xl text-primary" : " text-color1"}`} >
                                                        {subItem.label}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex items-center gap-3'>
                        {/* area/city slect dropdown: seacrh area,city,emirate location for only uae use google api for locations */}
                        <LocationSelector/>
                        {isAuthenticated ?
                            <UserDropdown user={user} handleLogout={handleLogout} />
                            :
                            <div className='relative flex gap-2'>
                                <Link to="/login" className='btn2'>Login</Link>
                                <Link to="/register" className='btn1'>Register</Link>
                                {showLoginPopup && (
                                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-max bg-white text-sm text-gray-700 px-4 py-2 rounded shadow transition-all duration-300 animate-fadeIn border border-border">
                                        Please log in to continue
                                    </div>
                                )}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header