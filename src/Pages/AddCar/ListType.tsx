import { useState } from 'react';
import { useSearchParams } from 'react-router';

const ListType = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [listingType, setListingType] = useState<string>(searchParams.get("type") || "rent");
    console.log(searchParams);
    
    const handleChange = (value: string) => {
        setListingType(value);
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-8">List your car</h2>
            <div>
                <h2 className="text-xl font-semibold mb-6">What would you like to do with your car?</h2>
                <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Rent Option */}
                        <label
                            className={`block border rounded-lg p-6 cursor-pointer transition-all duration-200 w-full ${listingType === 'rent'
                                ? 'border-blue-600 bg-blue-50 shadow-md'
                                : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'
                                }`}
                        >
                            <div className="flex items-start space-x-3">
                                <input
                                    type="radio"
                                    name="listType"
                                    value="rent"
                                    checked={listingType === 'rent'}
                                    onChange={() => handleChange('rent')}
                                    className="mt-1"
                                />
                                <div>
                                    <span className="text-lg font-medium">Rent Your Car</span>
                                    <p className="text-gray-600 text-sm mt-1">
                                        Make money by renting out your car when you're not using it. Set your own schedule and pricing.
                                    </p>
                                    <ul className="text-sm text-gray-600 list-disc pl-5 mt-2 space-y-1">
                                        <li>Choose when your car is available</li>
                                        <li>Set your own rental rates</li>
                                        <li>Meet and screen potential renters</li>
                                        <li>Earn passive income from your vehicle</li>
                                    </ul>
                                </div>
                            </div>
                        </label>

                        {/* Sell Option */}
                        <label
                            className={`block border rounded-lg p-6 cursor-pointer transition-all duration-200 w-full ${listingType === 'sell'
                                ? 'border-blue-600 bg-blue-50 shadow-md'
                                : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'
                                }`}
                        >
                            <div className="flex items-start space-x-3">
                                <input
                                    type="radio"
                                    name="listType"
                                    value="sell"
                                    checked={listingType === 'sell'}
                                    onChange={() => handleChange('sell')}
                                    className="mt-1"
                                />
                                <div>
                                    <span className="text-lg font-medium">Sell Your Car</span>
                                    <p className="text-gray-600 text-sm mt-1">
                                        List your car for sale to our network of verified buyers. Get competitive offers quickly.
                                    </p>
                                    <ul className="text-sm text-gray-600 list-disc pl-5 mt-2 space-y-1">
                                        <li>Reach thousands of potential buyers</li>
                                        <li>Set your asking price</li>
                                        <li>Secure payment processing</li>
                                        <li>Transfer ownership with ease</li>
                                    </ul>
                                </div>
                            </div>
                        </label>
                    </div>

                    {/* Listing Guidelines */}
                    <div className="bg-blue-50 p-4 rounded-md">
                        <h3 className="text-blue-800 font-medium mb-2">Listing Guidelines</h3>
                        <p className="text-sm text-blue-700">
                            Whether you're renting or selling, providing detailed and accurate information about your vehicle helps attract serious inquiries. High-quality photos and detailed descriptions can significantly increase interest in your listing.
                        </p>
                    </div>
                </div>

                {/* Debug or save button */}
                <div className="mt-6">
                    <button
                        onClick={() => {
                            const newParams = new URLSearchParams(searchParams);
                            newParams.set('type', listingType);
                            setSearchParams(newParams);
                        }}
                        className="bg-primary hover:bg-primary-focus text-white py-2 px-4 rounded cursor-pointer"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ListType;
