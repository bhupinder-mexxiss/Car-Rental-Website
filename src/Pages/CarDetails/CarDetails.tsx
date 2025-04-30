import { CheckCircle, Facebook, Instagram, WhatsApp } from '@mui/icons-material'
import React from 'react'
import { Car8 } from '../../assets/images'
import { door, gear, pass } from '../../assets/Icons'

const CarDetails = () => {
    return (
        <div className='pt-14'>
            <div className="container">
                <div>
                    <div className='flex gap-10'>
                        <div className='w-[70%]'>
                            <div>
                                <div className='h-[580px] w-full rounded-2xl overflow-hidden'>
                                    <img src={Car8} className='w-full h-full object-cover' />
                                </div>
                                <div className='mt-6'>
                                    <div className='flex items-center gap-10'>
                                        <div>
                                            <p className='text-color2'>Daily</p>
                                            <span className='text-color1 text-2xl font-semibold'>AED 1360</span>
                                        </div>
                                        <div>
                                            <p className='text-color2'>Weekly</p>
                                            <span className='text-color1 text-2xl font-semibold'>AED 8860</span>
                                        </div>
                                        <div>
                                            <p className='text-color2'>Monthly</p>
                                            <span className='text-color1 text-2xl font-semibold'>AED 27860</span>
                                        </div>
                                    </div>
                                    <div className='bg-primary/5 p-4 rounded-md mt-6'>
                                        <div className='flex items-center gap-6'>
                                            <span className='text-color2 text-lg font-semibold flex items-center gap-1.5'><img src={pass} className='w-5' />4</span>
                                            <span className='text-color2 text-lg font-semibold flex items-center gap-1.5'><img src={gear} className='w-5' />Auto</span>
                                            <span className='text-color2 text-lg font-semibold flex items-center gap-1.5'><img src={door} className='w-5' />5</span>
                                        </div>
                                        <hr className='border-primary my-4' />
                                        <div>
                                            <h4 className='text-xl font-semibold mb-4'>Car Features</h4>
                                            <ul className='grid grid-cols-3 gap-3'>
                                                <li className='flex items-center gap-2 font-medium'><CheckCircle className='!text-xl text-primary' /> ABS</li>
                                                <li className='flex items-center gap-2 font-medium'><CheckCircle className='!text-xl text-primary' /> Adaptive Cruise Control</li>
                                                <li className='flex items-center gap-2 font-medium'><CheckCircle className='!text-xl text-primary' /> Air Suspension</li>
                                                <li className='flex items-center gap-2 font-medium'><CheckCircle className='!text-xl text-primary' /> Apple CarPlay</li>
                                                <li className='flex items-center gap-2 font-medium'><CheckCircle className='!text-xl text-primary' /> Bluetooth</li>
                                                <li className='flex items-center gap-2 font-medium'><CheckCircle className='!text-xl text-primary' /> Built in GPS</li>
                                                <li className='flex items-center gap-2 font-medium'><CheckCircle className='!text-xl text-primary' /> Cruise Control</li>
                                                <li className='flex items-center gap-2 font-medium'><CheckCircle className='!text-xl text-primary' /> Fabric Seats</li>
                                                <li className='flex items-center gap-2 font-medium'><CheckCircle className='!text-xl text-primary' /> FM Radio</li>
                                            </ul>
                                            <button className='text-primary font-semibold hover:underline duration-300 mt-2 cursor-pointer'>Show more</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-6'>
                                    <h6 className='font-semibold text-xl'>Rent Mercedes Benz AMG G63 Black in Dubai | Al Safeer Car Rental</h6>
                                    <p className='mt-2 text-color2'>Imagine cruising through the iconic streets of Dubai in the powerful and luxurious Mercedes Benz AMG G63 Black 2022. Known for its rugged performance and opulent design, this SUV is not just a vehicle; it’s a statement. Whether you’re attending a business meeting, exploring the city’s vibrant nightlife, or embarking on a desert adventure, the G63 is your ultimate companion. At Al Safeer Car Rental, we make it easy for you to experience the sophistication and strength of this legendary SUV.</p>
                                    <hr className='my-5 border-color1/30' />
                                    <h6 className='font-semibold text-xl'>Why Rent the Mercedes Benz AMG G63 in Dubai?</h6>
                                    <p className='mt-2 text-color2'>Dubai is a city that celebrates extravagance, and the Mercedes Benz G63 is the perfect vehicle to match its vibe. This SUV combines the elegance of a luxury car with the performance of a powerful off-roader. From its commanding presence to its smooth handling, every detail of the G63 has been designed to impress. Renting the G63 in Dubai is not just about getting from one place to another—it’s about making a grand entrance and enjoying every moment of your drive.</p>
                                    <p className='mt-2 text-color2'>Whether you're navigating the urban streets of Dubai Marina or heading out to explore the golden dunes of the desert, the G63 adapts effortlessly to any terrain, ensuring a ride that's both comfortable and exhilarating.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[30%]'>
                            <div className='sticky top-24'>
                                <div className='bg-primary/5 p-4 rounded-md'>
                                    <h4 className='text-xl font-semibold mb-4'>Contact Information</h4>
                                    <div className="sellerInfo flex items-center gap-4">
                                        <div className='w-20 h-20 rounded-full overflow-hidden border border-primary'>
                                            <img src="https://alsafeercarrental.com/assets/images/logo.jpg" className='w-full h-full object-cover' />
                                        </div>
                                        <div className='text-color1'>
                                            <p className='text-lg font-semibold'>Al Safeer Car Rental</p>
                                            <p className='text-sm'>+971 50 134 0100</p>
                                            <p className='text-sm'>sales@alsafeercarrental.com</p>
                                        </div>
                                    </div>
                                    <div className="form mt-4 flex flex-col gap-3">
                                        <div>
                                            <input type="text" placeholder='First Name*' className='w-full focus:border-primary focus:ring-0 bg-transparent rounded-md' />
                                        </div>
                                        <div>
                                            <input type="text" placeholder='Last Name*' className='w-full focus:border-primary focus:ring-0 bg-transparent rounded-md' />
                                        </div>
                                        <div>
                                            <input type="text" placeholder='Email Address*' className='w-full focus:border-primary focus:ring-0 bg-transparent rounded-md' />
                                        </div>
                                        <div>
                                            <input type="text" placeholder='Phone Number*' className='w-full focus:border-primary focus:ring-0 bg-transparent rounded-md' />
                                        </div>
                                        <div>
                                            <textarea placeholder='Message...' className='w-full focus:border-primary focus:ring-0 bg-transparent rounded-md resize-none' />
                                        </div>
                                        <div>
                                            <button className='btn3 w-full flex items-center justify-center'>Send message</button>
                                            <button className='mt-3 btn1 bg-[#25d366] border-[#25d366] w-full flex items-center justify-center gap-2'><WhatsApp /> Whatsapp</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-primary/5 p-4 rounded-md mt-6'>
                                    <h4 className='text-xl font-semibold mb-4'>Share Now</h4>
                                    <div>
                                        <ul className='flex items-center gap-4'>
                                            <li className='hover:text-primary duration-300 cursor-pointer w-8 h-8 border rounded-full flex items-center justify-center'><Facebook className='!text-base' /></li>
                                            <li className='hover:text-primary duration-300 cursor-pointer w-8 h-8 border rounded-full flex items-center justify-center'><Instagram className='!text-base' /></li>
                                            <li className='hover:text-primary duration-300 cursor-pointer w-8 h-8 border rounded-full flex items-center justify-center'><WhatsApp className='!text-base' /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CarDetails