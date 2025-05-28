import PartnerApplication from "./PartnerApplication"
import PartnershipType from "./PartnershipType"

const Partner = () => {
    return (
        <>
            <div className="bg-color1">
                <div className="container mx-auto">
                    <div className="text-white text-center py-14">
                        <h2 className="text-4xl font-semibold">Become a CarRide Partner</h2>
                        <p className="mt-2 mb-8">List your vehicles and grow your business with CarRide's trusted platform</p>
                        <button className="btn3 mx-auto">Apply Now</button>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-10 lg:py-14">
                <div className="container">
                    <div>
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-[#121212] mb-4">Why Partner With Us?</h2>
                            <p className="text-[#525252] text-lg">Join thousands of successful vehicle owners and dealerships who have expanded their business with CarRide</p>
                        </div>
                        <div className="grid grid-cols-3 gap-6">
                            <div className="rounded-xl p-4 bg-white duration-300 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]">
                                <div className="w-16 h-16 rounded-full bg-[#f07e2c]/10 flex items-center justify-center mb-6">
                                    <i className="fas fa-chart-line text-2xl text-[#f07e2c]"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-[#121212] mb-4">Increased Revenue</h3>
                                <p className="text-[#525252]">Expand your market reach and maximize your earning potential by listing your vehicles on our platform. Our partners see an average increase of 35% in booking revenue.</p>
                            </div>
                            <div className="rounded-xl p-4 bg-white duration-300 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]">
                                <div className="w-16 h-16 rounded-full bg-[#f07e2c]/10 flex items-center justify-center mb-6">
                                    <i className="fas fa-tools text-2xl text-[#f07e2c]"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-[#121212] mb-4">Powerful Tools</h3>
                                <p className="text-[#525252]">Access comprehensive management tools, analytics dashboard, and booking system to efficiently run your vehicle rental and sales business from one central platform.</p>
                            </div>
                            <div className="rounded-xl p-4 bg-white duration-300 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]">
                                <div className="w-16 h-16 rounded-full bg-[#f07e2c]/10 flex items-center justify-center mb-6">
                                    <i className="fas fa-user-shield text-2xl text-[#f07e2c]"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-[#121212] mb-4">Verified Customers</h3>
                                <p className="text-[#525252]">Connect with vetted customers who have been verified through our secure platform. Reduce risks and focus on providing great service to quality clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-10 lg:py-14">
                <div className="container">
                    <div>
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-[#121212] mb-4">How It Works</h2>
                            <p className="text-[#525252] text-lg">Becoming a CarRide partner is easy with our streamlined process.</p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-10 max-w-5xl mx-auto">
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-[#f07e2c] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">1</div>
                                <h3 className="text-xl font-bold text-[#121212] mb-2">Apply</h3>
                                <p className="text-[#525252]">Complete the partner application form with your business details</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-[#f07e2c] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">2</div>
                                <h3 className="text-xl font-bold text-[#121212] mb-2">Verification</h3>
                                <p className="text-[#525252]">We'll review your application and verify your business credentials</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-[#f07e2c] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">3</div>
                                <h3 className="text-xl font-bold text-[#121212] mb-2">Onboarding</h3>
                                <p className="text-[#525252]">Complete onboarding and training for the partner dashboard</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-[#f07e2c] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">4</div>
                                <h3 className="text-xl font-bold text-[#121212] mb-2">Start Listing</h3>
                                <p className="text-[#525252]">Begin listing your vehicles and managing bookings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PartnershipType />
            <PartnerApplication />
        </>
    )
}

export default Partner