import { CheckCircle, Facebook, Instagram, WhatsApp } from '@mui/icons-material'
import { Car8 } from '../../assets/images'
import { door, gear, pass } from '../../assets/Icons'
import DateRangePicker from '../../components/DateRangePicker/DateRangePicker'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import '@photo-sphere-viewer/markers-plugin/index.css';

const CarDetails = () => {
    const navigate = useNavigate();
    const [showViewer360, setShowViewer360] = useState(false);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [formComplete, setFormComplete] = useState(false);


    useEffect(() => {
        setFormComplete(!!(startDate && endDate && pickupLocation && dropoffLocation));
    }, [startDate, endDate, pickupLocation, dropoffLocation]);

    const handleBooking = () => {
        // if (!car) return;

        // // In a real app, you would pass booking details through route state or context
        // navigate(`/booking/${car.id}`, {
        //     state: {
        //         car,
        //         startDate,
        //         endDate,
        //         pickupLocation,
        //         dropoffLocation
        //     }
        // });
    };
    const baseUrl = "https://l13.alamy.com/360/RJ1TM2/360-angle-panorama-view-in-interior-of-prestige-modern-car-blue-background-full-360-by-180-degrees-seamless-equirectangular-equidistant-spherical-pan-RJ1TM2.jpg";
    return (
        <div className='pt-14'>
            <div className="container">
                <div>
                    <div className='flex gap-10'>
                        <div className='w-[70%]'>
                            <div>
                                <div className='h-[480px] 2xl:h-[580px] w-full rounded-xl overflow-hidden relative'>
                                    {showViewer360
                                        ?
                                        <>
                                            <ReactPhotoSphereViewer
                                                src={baseUrl}
                                                width="100%"
                                                height="100%"
                                                defaultZoomLvl={0}
                                                keyboard={
                                                    true
                                                }
                                                navbar={[
                                                    'zoom',
                                                    'move',
                                                    {
                                                        id: 'change',
                                                        title: 'Change image',
                                                        content: (document.querySelector('#icon') as HTMLElement | null)?.innerText ?? '',
                                                        onClick(viewer) {
                                                            viewer.setPanorama(baseUrl + 'sphere-test.jpg', {
                                                                caption: '',
                                                                description: undefined,
                                                            });
                                                            viewer.navbar.getButton('change').hide();
                                                        },
                                                    },
                                                    'caption',
                                                    'fullscreen',
                                                ]}
                                            // plugins={plugins}
                                            />

                                        </>
                                        :
                                        <img src={Car8} className='w-full h-full object-cover' />
                                    }
                                    <button className={`px-3 py-2 rounded bg-white text-color1 text-sm absolute right-3 cursor-pointer ${showViewer360 ? "bottom-12" : "bottom-3"}`} onClick={() => setShowViewer360(!showViewer360)}>{ showViewer360 ? "Show Gallery" :"View 360°"}</button>
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
                                <div className="bg-primary/5 p-4 rounded-md">
                                    <h2 className="text-xl font-bold mb-6">Book This Car</h2>
                                    <div className="mb-6">
                                        <DateRangePicker
                                            startDate={startDate}
                                            endDate={endDate}
                                            setStartDate={setStartDate}
                                            setEndDate={setEndDate}
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <div className="form-control">
                                            <label htmlFor="pickup-location" className="form-label">
                                                Pick-up Location
                                            </label>
                                            <select
                                                id="pickup-location"
                                                className="form-input"
                                                value={pickupLocation}
                                                onChange={(e) => setPickupLocation(e.target.value)}
                                            >
                                                <option value="">Select Location</option>
                                                <option value="Airport">Airport</option>
                                                <option value="Downtown">Downtown</option>
                                                <option value="North Office">North Office</option>
                                                <option value="South Office">South Office</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <div className="form-control">
                                            <label htmlFor="dropoff-location" className="form-label">
                                                Drop-off Location
                                            </label>
                                            <select
                                                id="dropoff-location"
                                                className="form-input"
                                                value={dropoffLocation}
                                                onChange={(e) => setDropoffLocation(e.target.value)}
                                            >
                                                <option value="">Select Location</option>
                                                <option value="Airport">Airport</option>
                                                <option value="Downtown">Downtown</option>
                                                <option value="North Office">North Office</option>
                                                <option value="South Office">South Office</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button
                                        className={`w-full btn3 ${formComplete ? '' : 'disabled'}`}
                                        disabled={!formComplete}
                                        onClick={handleBooking}
                                    >
                                        Continue to Booking
                                    </button>

                                    {!formComplete && (
                                        <p className="text-xs text-gray-500 mt-2 text-center">
                                            Please fill all fields to proceed
                                        </p>
                                    )}

                                    <div className="mt-6 flex items-center justify-center text-gray-600 text-sm">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                        </svg>
                                        Free cancellation up to 24 hours before pickup
                                    </div>
                                </div>
                                <div className='bg-primary/5 p-4 rounded-md mt-6'>
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