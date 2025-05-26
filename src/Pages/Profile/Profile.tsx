import { useSearchParams } from "react-router"
import { Button } from "../../Components/ui/button"
import { BadgeRounded, LockRounded, PersonRounded } from "@mui/icons-material";
import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import ChangePassword from "./ChangePassword";

const tabs = ['Personal Info', 'Security', 'Licence Info']
const Profile = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [searchParams, setSeacrhParams] = useSearchParams()
    const edit = searchParams.get("edit") || false;

    const handleEdit = () => {
        if (edit) {
            setSeacrhParams({});
        } else {
            setSeacrhParams({ edit: "true" });
        }
    }
    return (
        <div className=''>
            <div className="container tsx">
                <div className="">
                    <div className="py-4 px-6 bg-black rounded-t-xl flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-semibold text-white">{edit ? "Edit Profile" : "My Profile"}</h1>
                            <p className="text-white/80">
                                {edit ?
                                    "Update your personal information"
                                    :
                                    "Manage your personal details."
                                }
                            </p>
                        </div>
                        {edit ?
                            <button className="btn3" onClick={handleEdit}>Cancel</button>
                            :
                            <Button className="btn3" onClick={handleEdit}>Edit Profile</Button>
                        }
                    </div>
                    <div className="bg-gray-100 rounded-b-xl">
                        {edit ?
                            <>
                                <ul className="px-6 flex gap-6 border-b border-border">
                                    {tabs.map((tab, index) => (
                                        <li key={index} className={`cursor-pointer text-sm flex items-center gap-1 py-3 ${selectedTab === index ? '!text-primary' : 'text-color2 hover:text-color1'}`} onClick={() => setSelectedTab(index)}>
                                            {index === 0 ? <PersonRounded className="!text-lg" /> : index === 1 ? <LockRounded className="!text-lg" /> : <BadgeRounded className="!text-lg" />}
                                            {tab}
                                        </li>
                                    ))}
                                </ul>
                                <div className="px-6 py-4">
                                    {selectedTab === 0 ?
                                        <PersonalInfo />
                                        : selectedTab === 1 ?
                                            <ChangePassword />
                                            : ""
                                    }
                                </div>
                            </>
                            :
                            <div className="px-6 py-4">
                                <div>
                                    <h6 className="text-xl mb-3 font-semibold">Personal Information</h6>
                                    <ul className="grid grid-cols-2 gap-3">
                                        <li>
                                            <p className="text-color2 text-sm">Full Name</p>
                                            <span className="">John Doe</span>
                                        </li>
                                        <li>
                                            <p className="text-color2 text-sm">Email Address</p>
                                            <span className="">john.doe@example.com</span>
                                        </li>
                                        <li>
                                            <p className="text-color2 text-sm">Phone Number</p>
                                            <span className="">+1 (555) 123-4567</span>
                                        </li>
                                        <li>
                                            <p className="text-color2 text-sm">Date of Birth</p>
                                            <span className="">January 15, 1985</span>
                                        </li>
                                        <li>
                                            <p className="text-color2 text-sm">Address</p>
                                            <span className="">123 Main Street, Apt 4B
                                                New York, NY 10001</span>
                                        </li>
                                    </ul>
                                    <hr className="my-8 border-border" />
                                    <h6 className="text-xl mb-3 font-semibold">Payment Information</h6>
                                    <ul className="grid grid-cols-2 gap-3">
                                        <li>
                                            <p className="text-color2 text-sm">Full Name</p>
                                            <span className="">John Doe</span>
                                        </li>
                                        <li>
                                            <p className="text-color2 text-sm">Email Address</p>
                                            <span className="">john.doe@example.com</span>
                                        </li>
                                        <li>
                                            <p className="text-color2 text-sm">Phone Number</p>
                                            <span className="">+1 (555) 123-4567</span>
                                        </li>
                                        <li>
                                            <p className="text-color2 text-sm">Date of Birth</p>
                                            <span className="">January 15, 1985</span>
                                        </li>
                                        <li>
                                            <p className="text-color2 text-sm">Address</p>
                                            <span className="">123 Main Street, Apt 4B
                                                New York, NY 10001</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile