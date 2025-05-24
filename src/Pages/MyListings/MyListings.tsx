import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../../Components/ui/button";

const tabs = ['all', 'active', 'inactive', 'draft']

const MyListings = () => {
    const [activeTab, setActiveTab] = useState("all");

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

    const getFilteredListings = () => {
        switch (activeTab) {
            case "active":
                return mockListings.filter(listing => listing.status === "active");
            case "draft":
                return mockListings.filter(listing => listing.status === "draft");
            default:
                return mockListings;
        }
    };

    const ListingCard = ({ listing }) => (
        <div className="hover:shadow-lg transition-shadow">
            <div className="p-0">
                <div className="flex">
                    <div className="w-48 h-32 bg-gray-200 rounded-l-lg">
                        <img
                            src={listing.image}
                            alt={listing.title}
                            className="w-full h-full object-cover rounded-l-lg"
                        />
                    </div>
                    <div className="flex-1 p-4">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="text-lg font-semibold">{listing.title}</h3>
                                <p className="text-sm text-gray-600">{listing.location}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${listing.status === 'active'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                    {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
                                </span>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreVertical className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mb-3">
                            <div className="text-lg font-bold text-blue-600">
                                ${listing.price}
                                {listing.type === "rent" && <span className="text-sm text-gray-500">/{listing.priceUnit}</span>}
                            </div>
                            <div className="text-sm text-gray-500">
                                {listing.views} views • {listing.bookings} {listing.type === "rent" ? "bookings" : "inquiries"}
                            </div>
                        </div>

                        <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4 mr-1" />
                                View
                            </Button>
                            <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4 mr-1" />
                                Edit
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                                <Trash2 className="h-4 w-4 mr-1" />
                                Delete
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 bg-gray-50">
                <div className="container mx-auto py-8 px-4">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold">My Listings</h1>
                        <Link to="/add-car">
                            <Button className="btn1" >Add New Listing</Button>
                        </Link>
                    </div>

                    <ul className="grid grid-cols-4 items-center justify-between p-1.5 rounded bg-gray-200/80 w-full">
                        {tabs.map((e) => (
                            <li key={e} className={`font-medium text-center rounded-sm text-color2 px-3 py-1.5 text-sm capitalize ${activeTab === e && "shadow-sm bg-white"}`} onClick={() => setActiveTab(e)}>{e}</li>
                        ))}
                    </ul>
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