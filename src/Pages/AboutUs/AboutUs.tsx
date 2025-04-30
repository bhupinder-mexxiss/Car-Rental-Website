import React from 'react'
import { Link } from 'react-router'

const AboutUs = () => {
    return (
        <div>
            <div className="bg-[#121212] text-white py-16">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-4">About CarRide</h1>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">Driving excellence and premium experiences for all your journeys.</p>
                        <Link to="/contact-us" className="btn3 w-fit mx-auto mt-4">Get in Touch</Link>
                    </div>
                </div>
            </div>
            <div className='py-16 bg-[#fafafa]'>
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-[#121212] mb-6">Our Story</h2>
                            <p className="text-[#525252] mb-6 text-lg">Founded in 2010, CarRide began with a simple mission: to transform the car rental experience by combining premium vehicles with exceptional customer service.</p>

                            <p className="text-[#525252] mb-6 text-lg">What started as a small fleet of just 10 vehicles has grown into a nationwide service offering hundreds of premium cars for every need and occasion. Our journey has been driven by our commitment to excellence and our passion for providing memorable travel experiences.</p>

                            <p className="text-[#525252] mb-6 text-lg">Today, CarRide stands as a leader in the rental industry, known for our extensive fleet, transparent pricing, and customer-first approach. We continue to innovate and expand, but our core values remain the same – quality, reliability, and exceptional service.</p>

                            <div className="mt-8">
                                <a href="#" className="btn3 w-fit">Learn More</a>
                            </div>
                        </div>
                        <div className="relative">
                            <img src="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&amp;w=2936&amp;auto=format&amp;fit=crop" alt="ClassNameic car" className="rounded-xl shadow-lg w-full max-h-[600px] object-cover" />
                            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-lg p-6 w-48">
                                <div className="text-4xl font-bold text-[#f07e2c]">13+</div>
                                <div className="text-[#121212] font-medium">Years of Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-[#121212] mb-4">Our Values</h2>
                        <p className="text-[#525252] text-lg">The core principles that guide everything we do at CarRide, from customer service to fleet management.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="about-card p-8 bg-white border border-gray-100 shadow-sm">
                            <div className="w-16 h-16 rounded-full bg-[#f07e2c]/10 flex items-center justify-center mb-6">
                                <i className="fas fa-medal text-2xl text-[#f07e2c]"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-[#121212] mb-4">Excellence</h3>
                            <p className="text-[#525252]">We strive for excellence in every aspect of our service, from the quality of our vehicles to the professionalism of our staff. We believe in setting high standards and consistently exceeding them.</p>
                        </div>

                        <div className="about-card p-8 bg-white border border-gray-100 shadow-sm">
                            <div className="w-16 h-16 rounded-full bg-[#f07e2c]/10 flex items-center justify-center mb-6">
                                <i className="fas fa-handshake text-2xl text-[#f07e2c]"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-[#121212] mb-4">Integrity</h3>
                            <p className="text-[#525252]">Honesty and transparency are the foundations of our business. We believe in clear communication, fair pricing, and ethical practices in all our dealings with customers and partners.</p>
                        </div>

                        <div className="about-card p-8 bg-white border border-gray-100 shadow-sm">
                            <div className="w-16 h-16 rounded-full bg-[#f07e2c]/10 flex items-center justify-center mb-6">
                                <i className="fas fa-users text-2xl text-[#f07e2c]"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-[#121212] mb-4">Customer Focus</h3>
                            <p className="text-[#525252]">Our customers are at the heart of everything we do. We listen to their needs, anticipate their requirements, and go above and beyond to ensure their satisfaction and comfort.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-primary counter-section py-16 text-white">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold mb-2">500+</div>
                            <div className="text-xl font-medium">Premium Cars</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2">30+</div>
                            <div className="text-xl font-medium">Locations</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2">50K+</div>
                            <div className="text-xl font-medium">Happy Customers</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2">24/7</div>
                            <div className="text-xl font-medium">Customer Support</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-16'>
                <div className="container ">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-[#121212] mb-4">Meet Our Team</h2>
                        <p className="text-[#525252] text-lg">The dedicated professionals behind CarRide's success, committed to delivering exceptional service every day.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="team-member">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=2574&amp;auto=format&amp;fit=crop" alt="CEO" className="w-full h-96 object-cover" />
                            <div className="team-member-info">
                                <h3 className="text-xl font-semibold">Robert Johnson</h3>
                                <p className="text-gray-200">Founder &amp; CEO</p>
                                <div className="social-links">
                                    <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                                    <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="team-member">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=2576&amp;auto=format&amp;fit=crop" alt="COO" className="w-full h-96 object-cover" />
                            <div className="team-member-info">
                                <h3 className="text-xl font-semibold">Sarah Mitchell</h3>
                                <p className="text-gray-200">Chief Operations Officer</p>
                                <div className="social-links">
                                    <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                                    <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="team-member">
                            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=2574&amp;auto=format&amp;fit=crop" alt="Fleet Manager" className="w-full h-96 object-cover" />
                            <div className="team-member-info">
                                <h3 className="text-xl font-semibold">David Chen</h3>
                                <p className="text-gray-200">Fleet Manager</p>
                                <div className="social-links">
                                    <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                                    <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="team-member">
                            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=2522&amp;auto=format&amp;fit=crop" alt="Customer Service" className="w-full h-96 object-cover" />
                            <div className="team-member-info">
                                <h3 className="text-xl font-semibold">Emily Rodriguez</h3>
                                <p className="text-gray-200">Head of Customer Service</p>
                                <div className="social-links">
                                    <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                                    <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-[#121212] mb-4">What Our Customers Say</h2>
                        <p className="text-[#525252] text-lg">Don't just take our word for it – hear from our satisfied customers about their CarRide experience.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 bg-white rounded-xl shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="text-[#f07e2c]">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <p className="text-[#525252] mb-6 italic">"CarRide made my business trip so much easier. The car was immaculate, the pickup process was swift, and the staff were incredibly helpful. I'll definitely be using them again for future trips."</p>
                            <div className="flex items-center">
                                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h4 className="font-semibold text-[#121212]">Michael Thompson</h4>
                                    <p className="text-sm text-[#525252]">Business Traveler</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-white rounded-xl shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="text-[#f07e2c]">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <p className="text-[#525252] mb-6 italic">"Our family vacation was enhanced by the spacious SUV we rented from CarRide. The kids had plenty of room, and the vehicle was perfect for our road trip. The pricing was transparent with no hidden fees."</p>
                            <div className="flex items-center">
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h4 className="font-semibold text-[#121212]">Jennifer Williams</h4>
                                    <p className="text-sm text-[#525252]">Family Traveler</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-white rounded-xl shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="text-[#f07e2c]">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                            <p className="text-[#525252] mb-6 italic">"I needed a luxury car for a special occasion and CarRide delivered beyond my expectations. The vehicle was stunning, and the staff made me feel like a VIP. The entire experience was top-notch from start to finish."</p>
                            <div className="flex items-center">
                                <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h4 className="font-semibold text-[#121212]">Daniel Roberts</h4>
                                    <p className="text-sm text-[#525252]">Special Occasion</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-16 bg-[#fafafa]'>
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-[#121212] mb-4">Our Trusted Partners</h2>
                        <p className="text-[#525252] text-lg">We collaborate with leading brands to provide you with the best vehicles and services.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                        <img src="https://logowik.com/content/uploads/images/bmw8459.jpg" alt="BMW" className="h-20 object-contain mx-auto grayscale hover:grayscale-0 transition-all" />
                        <img src="https://logowik.com/content/uploads/images/699_mercedes_benz.jpg" alt="Mercedes" className="h-20 object-contain mx-auto grayscale hover:grayscale-0 transition-all" />
                        <img src="https://logowik.com/content/uploads/images/audi-new3564.jpg" alt="Audi" className="h-20 object-contain mx-auto grayscale hover:grayscale-0 transition-all" />
                        <img src="https://logowik.com/content/uploads/images/toyota6701.jpg" alt="Toyota" className="h-20 object-contain mx-auto grayscale hover:grayscale-0 transition-all" />
                        <img src="https://logowik.com/content/uploads/images/volvo5826.jpg" alt="Volvo" className="h-20 object-contain mx-auto grayscale hover:grayscale-0 transition-all" />
                        <img src="https://logowik.com/content/uploads/images/ford-motor-company4463.jpg" alt="Ford" className="h-20 object-contain mx-auto grayscale hover:grayscale-0 transition-all" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs