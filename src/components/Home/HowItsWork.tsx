import React from 'react'
import { img2 } from '../../assets/images'
import { EmojiEmotionsOutlined, EventAvailableOutlined, SearchRounded } from '@mui/icons-material'

const HowItsWork = () => {
    return (
        <div className='py-20'>
            <div className="container">
                <div className="max-w-[720px] mx-auto text-color1">
                    <h2 data-aos="fade-down" className="text-5xl font-semibold text-center">How it woks</h2>
                    <p data-aos="fade-down" data-aos-delay="200" className="text-center mt-2 lg:text-[17px]">Renting a luxury car has never been easier. Our streamlined process makes it simple for you to book and confirm your vehicle of choice online</p>
                </div>
                <div className='mt-10 grid grid-cols-2 items-center gap-6'>
                    <div className='flex flex-col gap-6 relative z-10'>
                        <div className='bg-white/80 p-5 border-2 border-color1/15 backdrop-blur-sm rounded-2xl flex gap-6' data-aos="fade-right">
                            <div className='h-full flex items-center p-3 bg-[#fafafa] rounded-2xl'>
                                <SearchRounded className='!text-2xl' />
                            </div>
                            <div>
                                <p className='text-2xl font-semibold'>Browse and select</p>
                                <p className='text-color2 mt-2'>Choose from our wide range of premium cars, select the pickup and return dates and locations that suit you best.</p>
                            </div>
                        </div>
                        <div className='bg-white/80 p-5 border-2 border-color1/15 backdrop-blur-sm rounded-2xl flex gap-6' data-aos="fade-right" data-aos-delay="200">
                            <div className='h-full flex items-center p-3 bg-[#fafafa] rounded-2xl'>
                                <EventAvailableOutlined className='!text-2xl' />
                            </div>
                            <div>
                                <p className='text-2xl font-semibold'>Book and Confirm</p>
                                <p className='text-color2 mt-2'>Book your desired car with just a few clicks and receive an instant confirmation via email or SMS.</p>
                            </div>
                        </div>
                        <div className='bg-white/80 p-5 border-2 border-color1/15 backdrop-blur-sm rounded-2xl flex gap-6' data-aos="fade-right" data-aos-delay="3  00">
                            <div className='h-full flex items-center p-3 bg-[#fafafa] rounded-2xl'>
                                <EmojiEmotionsOutlined className='!text-2xl' />
                            </div>
                            <div>
                                <p className='text-2xl font-semibold'>Enjoy your ride</p>
                                <p className='text-color2 mt-2'>Pick up your car at the designated location and enjoy your premium driving experience with our top-quality service.</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative py-10'>
                        <div className='bg-primary absolute right-0 top-0 w-[calc(100%_+_150px)] h-full rounded-2xl'></div>
                        <img src={img2} alt="" className='relative' data-aos="zoom-in-left" data-aos-duration="1000" data-aos-delay="300" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItsWork