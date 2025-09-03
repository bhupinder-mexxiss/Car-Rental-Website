import { useNavigate } from "react-router"

const CheckoutSuccess = () => {
    const navigate = useNavigate()
    return (
        <div className="pt-10">
            <div className="container">
                <div className="flex-grow flex items-center justify-center min-h-[60vh]">
                    <div className="text-center max-w-md mx-auto px-4">
                        {/* Success Icon */}
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg
                                className="w-10 h-10 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>

                        {/* Success Message */}
                        <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
                        <p className="text-lg text-muted-foreground mb-6">
                            Your booking has been confirmed. We've sent a confirmation email with all the details.
                        </p>

                        {/* Booking Reference */}
                        <div className="bg-card border rounded-lg p-6 mb-8">
                            <h3 className="font-semibold mb-2">Booking Reference</h3>
                            <p className="text-2xl font-mono font-bold text-primary">
                                CAR-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                            </p>
                            <p className="text-sm text-muted-foreground mt-2">
                                Please save this reference number for your records
                            </p>
                        </div>

                        {/* Next Steps */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                            <h4 className="font-semibold text-blue-800 mb-2">What's Next?</h4>
                            <ul className="text-sm text-blue-700 space-y-1 text-left">
                                <li>• Check your email for booking confirmation</li>
                                <li>• Present your ID at pickup location</li>
                                <li>• Arrive 15 minutes before pickup time</li>
                                <li>• Contact us if you need to make changes</li>
                            </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={() => navigate('/my-bookings')}
                                className="btn3 flex-1"
                            >
                                View My Bookings
                            </button>
                            <button
                                onClick={() => navigate('/cars')}
                                className="btn2 flex-1"
                            >
                                Book Another Car
                            </button>
                        </div>

                        {/* Support Contact */}
                        <div className="mt-8 pt-6 border-t">
                            <p className="text-sm text-muted-foreground">
                                Need help? Contact our support team at{' '}
                                <a href="mailto:support@carrental.com" className="text-primary hover:underline">
                                    support@carrental.com
                                </a>{' '}
                                or call{' '}
                                <a href="tel:+1234567890" className="text-primary hover:underline">
                                    (123) 456-7890
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutSuccess