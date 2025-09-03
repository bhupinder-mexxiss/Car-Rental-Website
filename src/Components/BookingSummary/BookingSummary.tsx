
const BookingSummary = () => {
    return (

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
            <h3 className="text-lg font-bold mb-4">Booking Summary</h3>

            <div className="flex items-center gap-3 mb-4">
                <img
                    // src={car.thumbnail}
                    // alt={car.name}
                    className="w-20 h-14 object-cover rounded"
                />
                <div>
                    <h4 className="font-semibold">Honda Honda Civic</h4>
                    <p className="text-sm text-gray-600">Economy</p>
                </div>
            </div>

            <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{2} days</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Pick-up:</span>
                    <span className="font-medium">Sep 10, 2025</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Drop-off:</span>
                    <span className="font-medium">Sep 12, 2025</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Pick-up location:</span>
                    <span className="font-medium">{"Airport" || 'Not selected'}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Drop-off location:</span>
                    <span className="font-medium">{"Downtown" || 'Not selected'}</span>
                </div>
            </div>

            <div className="border-t border-gray-100 pt-4 mb-4">
                <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Rental price:</span>
                    <span className="font-medium">${"90.00"}</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Taxes & fees:</span>
                    <span className="font-medium">${"10.00"}</span>
                </div>
            </div>

            <div className="border-t border-gray-100 pt-4">
                <div className="flex justify-between">
                    <span className="font-semibold">Total price:</span>
                    <span className="font-bold text-xl">${"100.00"}</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                    Includes taxes and fees. Additional charges may apply for optional services.
                </p>
            </div>
        </div>
    )
}

export default BookingSummary