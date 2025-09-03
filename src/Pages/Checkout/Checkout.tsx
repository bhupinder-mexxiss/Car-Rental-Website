import BookingSummary from "../../Components/BookingSummary/BookingSummary"

const Checkout = () => {
    const formComplete = true
    const processing = false

    // if (!bookingData) {
    //     return (
    //         <div className="min-h-screen flex flex-col">
    //             <main className="flex-grow flex items-center justify-center">
    //                 <div className="text-center">
    //                     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
    //                     <p className="text-gray-600">Loading checkout...</p>
    //                 </div>
    //             </main>
    //         </div>
    //     );
    // }
    return (
        <div className="pt-10">
            <div className="container">
                <div>
                    <h1 className="text-3xl font-bold mb-8">Payment</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                        {/* Payment Form */}
                        <div className="lg:col-span-2 sticky top-20">
                            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                                <h2 className="text-xl font-bold mb-6">Payment Details</h2>

                                <form>
                                    <div className="mb-6">
                                        <div className="form-control">
                                            <label htmlFor="card-number" className="form-label">
                                                Card Number
                                            </label>
                                            <input
                                                type="text"
                                                id="card-number"
                                                className="form-input"
                                                // value={cardNumber}
                                                // onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                                                placeholder="1234 5678 9012 3456"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <div className="form-control">
                                            <label htmlFor="card-name" className="form-label">
                                                Name on Card
                                            </label>
                                            <input
                                                type="text"
                                                id="card-name"
                                                className="form-input"
                                                // value={cardName}
                                                // onChange={(e) => setCardName(e.target.value)}
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div className="form-control">
                                            <label htmlFor="expiry-date" className="form-label">
                                                Expiry Date (MM/YY)
                                            </label>
                                            <input
                                                type="text"
                                                id="expiry-date"
                                                className="form-input"
                                                // value={expiryDate}
                                                // onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                                                placeholder="MM/YY"
                                                required
                                            />
                                        </div>
                                        <div className="form-control">
                                            <label htmlFor="cvv" className="form-label">
                                                CVV
                                            </label>
                                            <input
                                                type="text"
                                                id="cvv"
                                                className="form-input"
                                                // value={cvv}
                                                // onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                                                placeholder="123"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                                            <div className="flex">
                                                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <p className="text-sm text-blue-700">
                                                    This is a demo application. No actual payment will be processed.
                                                    You can use any card details for testing.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className={`w-full btn ${formComplete ? 'btn3' : 'bg-gray-300 cursor-not-allowed'} py-3 flex justify-center items-center`}
                                    // disabled={!formComplete || processing}
                                    >
                                        {processing ? (
                                            <>
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                Processing...
                                            </>
                                        ) : (
                                            'Pay Now'
                                        )}
                                    </button>

                                    <div className="flex items-center justify-center mt-4">
                                        <svg className="w-10 h-6 text-gray-400 mr-2" viewBox="0 0 32 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M26.58 0H5.42C2.43 0 0 2.43 0 5.42v10.16C0 18.57 2.43 21 5.42 21h21.16c2.99 0 5.42-2.43 5.42-5.42V5.42C32 2.43 29.57 0 26.58 0z" fill="#fff" />
                                            <path d="M12.17 7.39v6.43h-1.3V7.39h1.3zm6.28 4.31v2.12h-1.19v-1.93c0-.47-.2-.8-.73-.8-.4 0-.66.3-.76.6-.3.07-.5.18-.5.29v1.84h-1.18v-3.27h-.01V8.83h1.19v1.5c.2-.3.61-.55 1.13-.55 1.06 0 1.6.69 1.6 1.92zm-8.27-4.31l-1.89 4.55h-.02l-.14.36v1.52H6.95v-1.52l-.15-.36h-.02l-1.89-4.55h1.42l.93 2.76h.06l.93-2.76h1.95zm14.28 3.53c0 1.8-1.27 3.04-3.13 3.04-1.88 0-3.14-1.24-3.14-3.04 0-1.78 1.27-3.01 3.14-3.01 1.87 0 3.13 1.24 3.13 3.01zm-1.3 0c0-1.07-.69-1.85-1.83-1.85-1.13 0-1.83.78-1.83 1.85 0 1.08.69 1.87 1.83 1.87 1.14 0 1.83-.79 1.83-1.87z" fill="#3086C8" />
                                        </svg>
                                        <svg className="w-10 h-6 text-gray-400 mr-2" viewBox="0 0 32 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M26.58 0H5.42C2.43 0 0 2.43 0 5.42v10.16C0 18.57 2.43 21 5.42 21h21.16c2.99 0 5.42-2.43 5.42-5.42V5.42C32 2.43 29.57 0 26.58 0z" fill="#fff" />
                                            <path d="M12.43 13.55v-5.2h4.87c1.3 0 2.22.28 2.22 1.46 0 .57-.4 1.05-.92 1.22v.04c.66.14 1.04.63 1.04 1.29 0 1.29-1.24 1.2-2.25 1.2h-4.96zm1.77-3.36h1.75c.37 0 .96 0 .96-.55 0-.51-.58-.51-.94-.51h-1.77v1.06zm0 1.92H16c.45 0 1.05.02 1.05-.6 0-.6-.57-.65-1.03-.65h-1.82v1.25zm6.38-3.76h1.6l1.5 5.2h-1.76l-.26-1.04h-1.72l-.27 1.04H18l1.58-5.2zm.76 3.04l-.5-2.18h-.03l-.54 2.18h1.07zM5.5 8.35h3.4l.76 5.2H7.88L7.7 12.4H6.13l-.17 1.15H4.37l1.13-5.2zm1.35 2.94h1.07l-.53-2.37h-.03l-.51 2.37z" fill="#EB001B" />
                                        </svg>
                                        <svg className="w-10 h-6 text-gray-400" viewBox="0 0 32 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M26.58 0H5.42C2.43 0 0 2.43 0 5.42v10.16C0 18.57 2.43 21 5.42 21h21.16c2.99 0 5.42-2.43 5.42-5.42V5.42C32 2.43 29.57 0 26.58 0z" fill="#fff" />
                                            <path d="M13.06 11.97c0-1.71 1.6-1.93 1.6-2.66 0-.24-.28-.51-.88-.51-.74 0-1.25.2-1.25.2l-.23-1.11s.38-.21 1.5-.21c1.28 0 2.12.66 2.12 1.83 0 .49-.32.92-.67 1.22-.35.3-.45.5-.45.7 0 .26.29.42.45.53.44.25.58.69.58 1.02 0 1.25-1.1 2.13-2.87 2.13-.73 0-1.32-.11-1.7-.3l.27-1.12c.38.2.97.3 1.42.3.58 0 .98-.2.98-.6 0-1.04-1.87-.83-1.87-2.42zm4.95 2.83h-1.3V9.8h1.3v5zm1.93-3.33c0-.2-.02-.36-.04-.5h1.16l.05.33h.03c.15-.2.53-.4 1.05-.4.7 0 1.22.44 1.22 1.4v2.5h-1.3v-2.4c0-.41-.15-.7-.53-.7-.29 0-.46.2-.53.39-.03.07-.04.17-.04.27v2.44h-1.3v-2.9h.03v.07zm-4-3.57c-.4 0-.71-.29-.71-.67 0-.39.32-.67.72-.67.42 0 .71.28.72.67 0 .38-.3.67-.73.67zm9.28 5.4c.73 0 1.04-.47 1.04-.47h.02l.06.4h1.15c-.03-.25-.05-.67-.05-1.08V9.8h-1.3v1.95c0 .11-.03.22-.08.3-.14.3-.46.55-.85.55-.6 0-.85-.47-.85-.94v-1.86h-1.3v2c0 1.13.64 1.97 1.63 1.97h.53z" fill="#6772E5" />
                                        </svg>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Booking Summary */}
                        <div className="lg:col-span-1">
                            <BookingSummary
                            // car={bookingData.car}
                            // startDate={bookingData.startDate}
                            // endDate={bookingData.endDate}
                            // pickupLocation={bookingData.pickupLocation}
                            // dropoffLocation={bookingData.dropoffLocation}
                            />
                            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 mt-6">
                                <h3 className="text-lg font-bold mb-4">Customer Details</h3>

                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Name:</span>
                                        <span className="font-medium">Inder</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Email:</span>
                                        <span className="font-medium">inder@gmail.com</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Phone:</span>
                                        <span className="font-medium">9876543210</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout