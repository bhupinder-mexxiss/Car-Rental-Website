import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../../Components/ui/button";
import ListingCard from "./ListingCard";
import { FormatListBulletedOutlined, GridViewOutlined } from "@mui/icons-material";
import { useGetMyCarListQuery } from "../../redux/api/car";
import { Car } from "../../Types/car";

const tabs = ['all', 'active', 'inactive', 'draft']

const MyListings = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [gridView, setGridView] = useState(false);
    const { data } = useGetMyCarListQuery({ status: activeTab })
    return (

        <div className=''>
            <div className="">
                <div className="py-4 px-4 bg-black rounded-t-xl flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold text-white">My Listings</h1>
                        <p className="text-white/80">
                            Manage your listings effortlessly.
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => setGridView(true)} className={`h-9 w-9 hover:bg-gray-200 hover:text-color2 rounded flex items-center justify-center cursor-pointer ${gridView ? "bg-gray-200" : "text-white "}`}><GridViewOutlined className="!text-lg" /></button>
                        <button onClick={() => setGridView(false)} className={`h-9 w-9 hover:bg-gray-200 hover:text-color2 rounded flex items-center justify-center cursor-pointer ${!gridView ? "bg-gray-200" : "text-white "}`}><FormatListBulletedOutlined className="!text-lg" /></button>

                        <Link to="/add-car">
                            <Button className="btn3" >Add New Listing</Button>
                        </Link>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-b-xl">
                    <ul className="px-4 flex gap-8 w-full border-b border-border">
                        {tabs.map((e) => (
                            <li key={e} className={`cursor-pointer text-sm flex items-center gap-1.5 py-3 capitalize ${activeTab === e && "text-primary"}`} onClick={() => setActiveTab(e)}>{e}</li>
                        ))}
                    </ul>
                    <div className="px-4 py-5">
                        <div className={`grid gap-4 ${gridView ? "grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
                            {data?.map((car: Car, i: number) => (
                                <ListingCard key={i} gridview={gridView} car={car} />
                            ))}
                        </div>
                    </div>
                </div>
                {/* <div className="flex flex-col min-h-screen">
                        <main className="flex-1 bg-gray-50">
                            <div className="container mx-auto py-8 px-4">
                                <div className="flex justify-between items-center mb-8">
                                    <h1 className="text-3xl font-bold">My Listings</h1>
                                    <div className="flex items-center gap-2">
                                        <button onClick={() => setGridView(true)} className={`h-9 w-9 hover:bg-gray-200 hover:text-color2 rounded flex items-center justify-center cursor-pointer ${gridView && "bg-gray-200"}`}><GridViewOutlined className="!text-lg" /></button>
                                        <button onClick={() => setGridView(false)} className={`h-9 w-9 hover:bg-gray-200 hover:text-color2 rounded flex items-center justify-center cursor-pointer ${!gridView && "bg-gray-200"}`}><FormatListBulletedOutlined className="!text-lg" /></button>

                                        <Link to="/add-car">
                                            <Button className="btn3" >Add New Listing</Button>
                                        </Link>
                                    </div>
                                </div>

                                <ul className="grid grid-cols-4 items-center justify-between p-1.5 rounded bg-gray-200/80 w-full">
                                    {tabs.map((e) => (
                                        <li key={e} className={`cursor-pointer font-medium text-center rounded-sm text-color2 px-3 py-1.5 text-sm capitalize ${activeTab === e && "shadow-sm bg-white"}`} onClick={() => setActiveTab(e)}>{e}</li>
                                    ))}
                                </ul>
                                <div className={`mt-6 grid gap-4 ${gridView ? "grid-cols-4" : "grid-cols-1"}`}>
                                    {data?.map((car, i) => (
                                        <ListingCard key={i} gridview={gridView} car={car} />
                                    ))}
                                </div>
                            </div>
                        </main>
                    </div> */}
            </div>
        </div>
    );
};

export default MyListings;