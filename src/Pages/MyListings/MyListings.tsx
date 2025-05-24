import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../../Components/ui/button";
import ListingCard from "./ListingCard";
import { FormatListBulletedOutlined, GridViewOutlined } from "@mui/icons-material";

const tabs = ['all', 'active', 'inactive', 'draft']

const MyListings = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [gridView, setGridView] = useState(false);

    // Mock data for listings
    const mockListings = [
        {
            id: 1,
            title: "Honda Civic 2020",
            status: "active",
            type: "rent",
            price: 45,
            priceUnit: "day",
            image: "/placeholder.svg",
            location: "New York, NY",
            views: 124,
            bookings: 8,
            createdAt: "2024-01-15",
        },
        {
            id: 2,
            title: "Toyota Camry 2019",
            status: "draft",
            type: "sell",
            price: 18500,
            image: "/placeholder.svg",
            location: "Los Angeles, CA",
            views: 0,
            bookings: 0,
            createdAt: "2024-01-20",
        },
        {
            id: 3,
            title: "BMW X5 2021",
            status: "active",
            type: "rent",
            price: 95,
            priceUnit: "day",
            image: "/placeholder.svg",
            location: "Miami, FL",
            views: 89,
            bookings: 12,
            createdAt: "2024-01-10",
        },
    ];
    return (
        <div className="flex flex-col min-h-screen">
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
                            <li key={e} className={`font-medium text-center rounded-sm text-color2 px-3 py-1.5 text-sm capitalize ${activeTab === e && "shadow-sm bg-white"}`} onClick={() => setActiveTab(e)}>{e}</li>
                        ))}
                    </ul>
                    <div className={`mt-6 grid gap-4 ${gridView ? "grid-cols-4" : "grid-cols-1"}`}>
                        <ListingCard gridview={gridView} />
                        {/* <ListingCard gridview={gridView} /> */}
                    </div>
                    {/* <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="all">All ({mockListings.length})</TabsTrigger>
                            <TabsTrigger value="active">
                                Active ({mockListings.filter(l => l.status === "active").length})
                            </TabsTrigger>
                            <TabsTrigger value="draft">
                                Draft ({mockListings.filter(l => l.status === "draft").length})
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="all" className="mt-6">
                            <div className="space-y-4">
                                {getFilteredListings().length === 0 ? (
                                    <Card>
                                        <CardContent className="text-center py-12">
                                            <p className="text-gray-500 mb-4">No listings found</p>
                                            <Link to="/add-car">
                                                <Button>Create Your First Listing</Button>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                ) : (
                                    getFilteredListings().map(listing => (
                                        <ListingCard key={listing.id} listing={listing} />
                                    ))
                                )}
                            </div>
                        </TabsContent>

                        <TabsContent value="active" className="mt-6">
                            <div className="space-y-4">
                                {getFilteredListings().length === 0 ? (
                                    <Card>
                                        <CardContent className="text-center py-12">
                                            <p className="text-gray-500 mb-4">No active listings found</p>
                                            <Link to="/add-car">
                                                <Button>Create Your First Listing</Button>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                ) : (
                                    getFilteredListings().map(listing => (
                                        <ListingCard key={listing.id} listing={listing} />
                                    ))
                                )}
                            </div>
                        </TabsContent>

                        <TabsContent value="draft" className="mt-6">
                            <div className="space-y-4">
                                {getFilteredListings().length === 0 ? (
                                    <Card>
                                        <CardContent className="text-center py-12">
                                            <p className="text-gray-500 mb-4">No draft listings found</p>
                                            <Link to="/add-car">
                                                <Button>Create Your First Listing</Button>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                ) : (
                                    getFilteredListings().map(listing => (
                                        <ListingCard key={listing.id} listing={listing} />
                                    ))
                                )}
                            </div>
                        </TabsContent>
                    </Tabs> */}
                </div>
            </main>
        </div>
    );
};

export default MyListings;