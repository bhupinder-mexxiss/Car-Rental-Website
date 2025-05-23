import { KeyboardArrowDown } from '@mui/icons-material';
import { Link, NavLink } from 'react-router'
import { Logo } from '../../assets/images';

const menuitems = [
    { url: "/", label: "Home" },
    {
        url: "/rent-car", label: "Rent Cars", subMenu: [
            // { url: "/buy-car", label: "Buy car" },
            // { url: "/sell-car", label: "Sell car" },
            // { url: "/car-insurance", label: "Car insurance" },
            // { url: "/car-loan", label: "Car loan" },
            // { url: "/car-service", label: "Car service" },
            // { url: "/car-accessories", label: "Car accessories" },
        ]
    },
    { url: "/buy-car", label: "Buy cars" },
    { url: "/add-car", label: "List your car" },
    { url: "/about-us", label: "About us" },
    { url: "/contact-us", label: "Contact us" },
]

const Header = () => {
    return (
        <div className='z-[999] sticky top-0 w-full bg-white/80 border-b border-[#12121226] backdrop-blur-xs shadow'>
            <div className="container">
                <div className='flex items-center justify-between px-3 py-3 '>
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
                    <div className='flex gap-2'>
                        <Link to="/login" className='btn2'>Login</Link>
                        <Link to="/register" className='btn1'>Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header