import { CheckCircle, Facebook, Instagram, WhatsApp } from '@mui/icons-material'
import { Car8 } from '../../assets/images'
import { door, gear, pass } from '../../assets/Icons'
import DateRangePicker from '../../Components/DateRangePicker/DateRangePicker'
import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router'
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import '@photo-sphere-viewer/markers-plugin/index.css';
import { useGetCarDetailsQuery } from '../../redux/api/car'
import { useParams } from 'react-router'
import Slider from 'react-slick'

const CarDetails = () => {
    // const navigate = useNavigate();
    const { id } = useParams()
    const { data } = useGetCarDetailsQuery(id)
    const [showViewer360, setShowViewer360] = useState(false);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [formComplete, setFormComplete] = useState(false);
    const [showAll, setShowAll] = useState(false);

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

    const settings = {
        dots: true
    }

    return (
        <div className='pt-14'>
            <div className="container">
                <div>
                    <div className='flex gap-6'>
                        <div className='w-[70%]'>
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
                                    <Slider {...settings}>
                                        {data?.images?.map((image) => (
                                            <div className='h-[480px] 2xl:h-[580px] w-full'>
                                                <img src={image.url} className='w-full h-full object-cover' />
                                            </div>
                                        ))}
                                    </Slider>
                                }
                                <button className={`px-3 py-2 rounded bg-white text-color1 text-sm absolute right-3 cursor-pointer ${showViewer360 ? "bottom-12" : "bottom-3"}`} onClick={() => setShowViewer360(!showViewer360)}>{showViewer360 ? "Show Gallery" : "View 360°"}</button>
                            </div>
                            <div>
                                <div className='mt-6'>
                                    <div className='flex items-center gap-10'>
                                        <div>
                                            <p className='text-color2 text-lg'>{data?.listingType === "sell" && data.year} {data?.brand?.name} {data?.model}</p>
                                            <div className='flex items-center gap-2 mt-3'>
                                                <div>
                                                    <span className='text-color1 text-2xl font-semibold'>AED {data?.listingType === "rent" ? data?.rentPrice?.price : data?.price}</span>
                                                    {data?.listingType === "rent" && <span>/{data?.rentPrice?.priceUnit}</span>}
                                                </div>
                                                {data?.isNegotiable && <span className='text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium'>Negotiable</span>}
                                            </div>
                                            {data?.listingType === "rent" &&
                                                <div className='flex gap-3 mt-1'>
                                                    <p className='pr-3 border-r'>{data?.rentPrice?.kmDrive} km/{data?.rentPrice?.priceUnit}</p>
                                                    <p className='pr-3 border-r'>AED {data?.rentPrice?.extraKmFee} for each additional km</p>
                                                    <p className='pr-3 border-r'>AED {data?.rentPrice?.lateFee} late fee</p>
                                                    <p>AED {data?.rentPrice?.deposit} Security Deposit</p>
                                                </div>
                                            }
                                        </div>
                                        {/* <div>
                                            <p className='text-color2'>Weekly</p>
                                            <span className='text-color1 text-2xl font-semibold'>AED 8860</span>
                                        </div>
                                        <div>
                                            <p className='text-color2'>Monthly</p>
                                            <span className='text-color1 text-2xl font-semibold'>AED 27860</span>
                                        </div> */}
                                    </div>
                                    <div className='bg-primary/5 p-4 rounded-md mt-6'>
                                        <div className='flex items-center gap-6'>
                                            <span className='text-color2 text-lg font-semibold flex items-center gap-1.5'><img src={pass} className='w-5' />{data?.seats}</span>
                                            <span className='text-color2 text-lg font-semibold flex items-center gap-1.5'><img src={gear} className='w-5' />{data?.transmission}</span>
                                            <span className='text-color2 text-lg font-semibold flex items-center gap-1.5'><img src={door} className='w-5' />{data?.doors}</span>
                                        </div>
                                        <hr className='border-primary my-4' />
                                        <div>
                                            <h4 className='text-xl font-semibold mb-4'>Car Features</h4>
                                            <ul className='grid grid-cols-3 gap-3'>
                                                {(showAll ? data?.features : data?.features?.slice(0, 6))?.map((e) => (
                                                    <li key={e} className='flex items-center gap-1 font-medium text-sm'><CheckCircle className='!text-xl text-primary' />{e}</li>
                                                ))}
                                            </ul>
                                            <button
                                                onClick={() => setShowAll(!showAll)}
                                                className='text-primary font-semibold hover:underline duration-300 mt-2 cursor-pointer'
                                                hidden={!data?.features || data.features.length <= 6}
                                            >
                                                {showAll ? "Show less" : "Show more"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-6'>
                                    <h6 className='font-semibold text-xl'>Rent Mercedes Benz AMG G63 Black in Dubai | Al Safeer Car Rental</h6>
                                    <p className='mt-2 text-color2'>{data?.description}</p>
                                    {/* <hr className='my-5 border-color1/30' /> */}
                                </div>
                                <div className="mt-6">
                                    <h6 className='font-semibold text-xl'>Specifications</h6>
                                    <ul className='mt-3 grid grid-cols-2 gap-x-12 gap-y-2'>
                                        <li className='flex text-sm justify-between'>
                                            <span className='text-color2 inline-block '>Brand :</span>
                                            <span className='font-medium capitalize'>{data?.brand?.name}</span>
                                        </li>
                                        <li className='flex text-sm justify-between'>
                                            <span className='text-color2 inline-block '>Color :</span>
                                            <span className='font-medium capitalize'>{data?.color}</span>
                                        </li>
                                        <li className='flex text-sm justify-between'>
                                            <span className='text-color2 inline-block '>Doors :</span>
                                            <span className='font-medium capitalize'>{data?.doors}</span>
                                        </li>
                                        <li className='flex text-sm justify-between'>
                                            <span className='text-color2 inline-block '>Seats :</span>
                                            <span className='font-medium capitalize'>{data?.seats}</span>
                                        </li>
                                        <li className='flex text-sm justify-between'>
                                            <span className='text-color2 inline-block '>Transmission :</span>
                                            <span className='font-medium capitalize'>{data?.transmission}</span>
                                        </li>
                                        <li className='flex text-sm justify-between'>
                                            <span className='text-color2 inline-block '>Fuel Type :</span>
                                            <span className='font-medium capitalize'>{data?.fuelType}</span>
                                        </li>
                                        <li className='flex text-sm justify-between'>
                                            <span className='text-color2 inline-block '>Car Type :</span>
                                            <span className='font-medium capitalize'>{data?.carType}</span>
                                        </li>
                                        <li className='flex text-sm justify-between'>
                                            <span className='text-color2 inline-block '>condition :</span>
                                            <span className='font-medium capitalize'>{data?.condition}</span>
                                        </li>
                                        <li className='flex text-sm justify-between'>
                                            <span className='text-color2 inline-block '>KM Driven :</span>
                                            <span className='font-medium capitalize'>{data?.kmDriven} KM</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div className='sticky top-24 flex flex-col gap-6'>
                                {data?.listingType === "rent" &&
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
                                }
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
                                            <input type="text" placeholder='Email Address*' className='w-full focus:border-primary focus:ring-0 bg-transparent rounded-md' />
                                        </div>
                                        <div>
                                            <input type="text" placeholder='Phone Number*' className='w-full focus:border-primary focus:ring-0 bg-transparent rounded-md' />
                                        </div>
                                        <div>
                                            <input type="text" placeholder='Offer Amount*' className='w-full focus:border-primary focus:ring-0 bg-transparent rounded-md' />
                                        </div>
                                        <div>
                                            <textarea placeholder='Message...' className='w-full focus:border-primary focus:ring-0 bg-transparent rounded-md resize-none' />
                                        </div>
                                        <div>
                                            <button className='btn3 w-full flex items-center justify-center'>Make offer</button>
                                            <button className='mt-3 btn1 bg-[#25d366] border-[#25d366] w-full flex items-center justify-center gap-2'><WhatsApp className='!text-xl' /> Whatsapp</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-primary/5 p-4 rounded-md'>
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