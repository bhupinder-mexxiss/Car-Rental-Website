import { EmailOutlined, PhoneOutlined, PlaceOutlined } from "@mui/icons-material"

const ContactUS = () => {
    return (
        <div>
            <div className="bg-[#121212] text-white py-16">
                <div className="container">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">Have questions about our services? Looking for support? We're here to help you with any inquiries about our car rental services.</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="contact-card">
                        <div className="contact-icon">
                            <PhoneOutlined />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-[#121212]">Call Us</h3>
                        <p className="text-[#525252] mb-4">Our team is available to assist you during business hours.</p>
                        <p className="text-lg font-medium text-[#f07e2c]">+1 (555) 123-4567</p>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">
                            <EmailOutlined />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-[#121212]">Email Us</h3>
                        <p className="text-[#525252] mb-4">Send us an email and we'll respond within 24 hours.</p>
                        <p className="text-lg font-medium text-[#f07e2c]">info@carride.com</p>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">
                            <PlaceOutlined />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-[#121212]">Visit Us</h3>
                        <p className="text-[#525252] mb-4">Come to our main office during business hours.</p>
                        <p className="text-lg font-medium text-[#f07e2c]">123 Main Street, New York, NY 10001</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-[#121212] mb-6">Get in Touch</h2>
                        <p className="text-[#525252] mb-8">Fill out the form, and our team will get back to you as soon as possible.</p>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-medium text-[#525252] mb-2">First Name</label>
                                    <input type="text" id="first-name" className="w-full px-4 py-3 rounded-lg border border-[#d4d3d9] focus:border-[#f07e2c] focus:outline-none" placeholder="Enter your first name" required />
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-medium text-[#525252] mb-2">Last Name</label>
                                    <input type="text" id="last-name" className="w-full px-4 py-3 rounded-lg border border-[#d4d3d9] focus:border-[#f07e2c] focus:outline-none" placeholder="Enter your last name" required />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[#525252] mb-2">Email Address</label>
                                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-[#d4d3d9] focus:border-[#f07e2c] focus:outline-none" placeholder="Enter your email address" required />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-[#525252] mb-2">Phone Number</label>
                                <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-[#d4d3d9] focus:border-[#f07e2c] focus:outline-none" placeholder="Enter your phone number" />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-[#525252] mb-2">Subject</label>
                                <select id="subject" className="w-full px-4 py-3 rounded-lg border border-[#d4d3d9] focus:border-[#f07e2c] focus:outline-none" required>
                                    <option value="" selected disabled>Select a subject</option>
                                    <option value="reservation">Car Reservation</option>
                                    <option value="support">Customer Support</option>
                                    <option value="partnership">Business Partnership</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[#525252] mb-2">Message</label>
                                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-[#d4d3d9] focus:border-[#f07e2c] focus:outline-none" placeholder="Write your message here..." required></textarea>
                            </div>

                            <button type="submit" className="btn3 px-8 py-3">Send Message</button>
                        </form>
                    </div>

                    <div className="hidden lg:block h-full">
                        <div className="bg-white rounded-lg overflow-hidden h-full">
                            <div className="h-full bg-gray-200">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1678912345678!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy">
                                </iframe>
                            </div>
                            {/* <div className="p-6">
                                <h3 className="text-xl font-semibold mb-4 text-[#121212]">Business Hours</h3>
                                <ul className="space-y-3 text-[#525252]">
                                    <li className="flex justify-between">
                                        <span className="font-medium">Monday - Friday:</span>
                                        <span>9:00 AM - 8:00 PM</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="font-medium">Saturday:</span>
                                        <span>10:00 AM - 6:00 PM</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="font-medium">Sunday:</span>
                                        <span>Closed</span>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUS