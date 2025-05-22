import { CarRentalOutlined, DateRangeOutlined } from '@mui/icons-material'
import React from 'react'
import { icon5 } from '../../assets/Icons'

const YourChoice = () => {
    return (
        <div className='container mx-auto py-20'>
            <div className='flex gap-18'>
                <div className='w-2/5'>
                    <h2 data-aos="fade-right" className='text-5xl leading-14 font-semibold'>Your Journey, Your Choice – Here's Why CarRide Stands Out</h2>
                    <p data-aos="fade-right" data-aos-delay="200" className='text-[#525252] text-lg mt-5'>At CarRide, we understand that your choice of a car rental service is a crucial decision for your journey. We take pride in offering a unique and unparalleled experience that sets us apart from the rest.</p>
                    <button data-aos="fade-right" data-aos-delay="300" className='px-6 py-2 border border-primary rounded-full text-primary mt-5'>Book Now</button>
                </div>
                <div className='flex-1 flex gap-6'>
                    <div className='w-1/2 flex flex-col gap-6'>
                        <div className='bg-primary text-white rounded-3xl p-6' data-aos="fade-up">
                            <div className='p-2 w-fit rounded-full bg-white/20'>
                                <img className='w-10' src={icon5} />
                            </div>
                            <p className='my-5 font-semibold text-2xl'>Wide Fleet Variety</p>
                            <p className='text-base'>Car Ride boasts a diverse fleet to cater to your every need, from fuel-efficient city cars to luxurious SUVs</p>
                        </div>
                        <div className='bg-[#fafafa] rounded-3xl p-6' data-aos="fade-up" data-aos-delay="100">
                            <div className='p-3 w-fit rounded-full border-2 '>
                                <DateRangeOutlined />
                            </div>
                            <p className='my-5 font-semibold text-2xl'>Transparent Picking</p>
                            <p className='text-base text-[#525252]'>No hidden fees or surprises. CarRide provides transparent pricing, ensuring you get the best value for your money. What you see is what you pay</p>
                        </div>
                    </div>
                    <div className='w-1/2 flex flex-col gap-6'>
                        <div className='bg-[#fafafa] rounded-3xl p-6' data-aos="fade-up" data-aos-delay="200">
                            <div className='p-3 w-fit rounded-full border-2 '>
                                <DateRangeOutlined />
                            </div>
                            <p className='my-5 font-semibold text-2xl'>Easy Reservation System</p>
                            <p className='text-base text-[#525252]'>Our user-friendly reservation system allows you to book your ride seamlessly. Experience simplicity, security, and swift confirmation for a hassle-free journey</p>
                        </div>
                        <div className='bg-[#fafafa] rounded-3xl p-6' data-aos="fade-up" data-aos-delay="300">
                            <div className='p-3 w-fit rounded-full border-2 '>
                                <DateRangeOutlined />
                            </div>
                            <p className='my-5 font-semibold text-2xl'>Exceptional Customer Service</p>
                            <p className='text-base text-[#525252]'>Our friendly customer service team is ready to assist you at every step, ensuring a personalized and delightful experience</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourChoice