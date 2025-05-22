import React from 'react'
import { img1 } from '../../assets/images'

const StayConnected = () => {
    return (
        <div className='gradient1 pt-20 relative overflow-hidden'>
            <div className='rounded-full absolute -top-[80px] -right-[200px] w-[400px] h-[400px] border-2 border-white/20'></div>
            <div className='rounded-full absolute -bottom-[280px] -left-[60px] w-[380px] h-[380px] border-2 border-white/20'></div>
            <div className="container mx-auto">
                <div className='relative'>
                    <div className="grid grid-cols-2 items-start text-white gap-20">
                        <div>
                            <h2 data-aos="fade-right" className="text-5xl font-semibold leading-14">Stay Connected with CarRide – Subscribe to Our Newsletter</h2>
                            <p data-aos="fade-right" data-aos-delay="200" className=" mt-3 lg:text-lg font-light tracking-wide text-justify">Don't miss out on the latest updates, special offers, and travel insights from CarRide. Subscribe to our newsletter and be the first to know about exciting promotions, new destinations, and tips to enhance your travel experience</p>
                        </div>
                        <div>
                            <div data-aos="fade-left" data-aos-delay="200" className='w-full bg-white rounded-full mt-5 flex items-center p-2'>
                                <input className='flex-1 pl-4 text-lg' placeholder='Enter your email' />
                                <button className='btn2 text-white bg-black tracking-wide hover:bg-primary hover:text-white mx-auto'>Subscribe</button>
                            </div>
                            <div data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000" className='mt-10'>
                                <img src={img1} className=' ml-auto' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StayConnected