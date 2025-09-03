import BookingSummary from "../../Components/BookingSummary/BookingSummary"

const Booking = () => {

    const formComplete = true

    // if (!car || !startDate || !endDate) {
    //     return (
    //         <div className="min-h-screen flex flex-col">
    //             <main className="flex-grow flex items-center justify-center">
    //                 <div className="text-center">
    //                     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
    //                     <p className="text-gray-600">Loading booking details...</p>
    //                 </div>
    //             </main>
    //         </div>
    //     );
    // }
    return (
        <div>
            <div className="container">
                <div className="pt-10">
                    <div className="container-custom">
                        <h1 className="text-3xl font-bold mb-8">Booking Details</h1>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Booking Form */}
                            <div className="lg:col-span-2">
                                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                                    <h2 className="text-xl font-bold mb-6">Personal Information</h2>

                                    <form>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                            <div className="form-control">
                                                <label htmlFor="firstName" className="form-label">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    className="form-input"
                                                    required
                                                />
                                            </div>
                                            <div className="form-control">
                                                <label htmlFor="lastName" className="form-label">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    className="form-input"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                            <div className="form-control">
                                                <label htmlFor="email" className="form-label">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="form-input"
                                                    required
                                                />
                                            </div>
                                            <div className="form-control">
                                                <label htmlFor="phone" className="form-label">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    className="form-input"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <h2 className="text-xl font-bold mb-4">Booking Summary</h2>

                                            <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                                <div className="flex justify-between mb-2">
                                                    <span className="text-gray-600">Car:</span>
                                                    <span className="font-medium">Honda Honda Civic</span>
                                                </div>
                                                <div className="flex justify-between mb-2">
                                                    <span className="text-gray-600">Pick-up:</span>
                                                    <span className="font-medium">
                                                        Sep 10, 2025 - Airport
                                                    </span>
                                                </div>
                                                <div className="flex justify-between mb-2">
                                                    <span className="text-gray-600">Drop-off:</span>
                                                    <span className="font-medium">
                                                        Sep 12, 2025 - Downtown
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="terms"
                                                    className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                                                    required
                                                />
                                                <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                                                    I agree to the <a href="#" className="text-orange-500 hover:underline">Terms and Conditions</a> and <a href="#" className="text-orange-500 hover:underline">Privacy Policy</a>
                                                </label>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className={`w-full btn ${formComplete ? 'btn3' : 'bg-gray-300 cursor-not-allowed'} py-3`}
                                        // disabled={!formComplete}
                                        >
                                            Proceed to Payment
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Booking Summary */}
                            <div className="lg:col-span-1">
                                <BookingSummary
                                // car={car}
                                // startDate={startDate}
                                // endDate={endDate}
                                // pickupLocation={pickupLocation}
                                // dropoffLocation={dropoffLocation}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking