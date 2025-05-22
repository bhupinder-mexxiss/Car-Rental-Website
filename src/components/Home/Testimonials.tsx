import { EastOutlined, WestOutlined } from '@mui/icons-material'
import React from 'react'
import { user1 } from '../../assets/images'

const Testimonials = () => {
    return (
        <div className='py-20 bg-[#FAFAFA]'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-end'>
                    <div className='w-3/5'>
                        <h2 data-aos="fade-right" className='text-5xl font-semibold leading-14'>Your Queries Answered - Explore Common Questions About CarRide</h2>
                        <p data-aos="fade-right" data-aos-delay="200" className='text-[#525252] text-lg mt-4'>Read the testimonials from our valued customers who have chosen CarRide for their journeys. Their stories showcase the authentic experiences and satisfaction that define the CarRide difference</p>
                    </div>
                    {/* <div className='flex gap-4'>
                        <button className='p-3 rounded-full border border-black text-black hover:bg-primary hover:text-white'><WestOutlined /></button>
                        <button className='p-3 rounded-full border border-primary bg-primary text-white hover:bg-primary hover:text-white'><EastOutlined /></button>
                    </div> */}
                </div>
                <div className='grid grid-cols-2 gap-x-16 gap-y-14 mt-16'>
                    <div className='flex gap-4 w-full' data-aos="fade-up">
                        <img className='w-22 h-22 rounded-full border-2 border-primary object-cover' src={user1} />
                        <div>
                            <p className='text-[#525252]'>“CarRide made our business trip seamless and stress-free. The quality of service and the ease of booking were exceptional. Highly recommended for corporate travels.”</p>
                            <p className='text-primary font-semibold mt-3 text-lg'>Martin Schleifer</p>
                            <p className='text-[#525252]'>Adventure Blogger</p>
                        </div>
                    </div>
                    <div className='flex gap-4 w-full' data-aos="fade-up" data-aos-delay="100">
                        <img className='w-22 h-22 rounded-full border-2 border-primary object-cover' src={user1} />
                        <div>
                            <p className='text-[#525252]'>“CarRide made our business trip seamless and stress-free. The quality of service and the ease of booking were exceptional. Highly recommended for corporate travels.”</p>
                            <p className='text-primary font-semibold mt-3 text-lg'>Martin Schleifer</p>
                            <p className='text-[#525252]'>Adventure Blogger</p>
                        </div>
                    </div>
                    <div className='flex gap-4 w-full' data-aos="fade-up" data-aos-delay="200">
                        <img className='w-22 h-22 rounded-full border-2 border-primary object-cover' src={user1} />
                        <div>
                            <p className='text-[#525252]'>“CarRide made our business trip seamless and stress-free. The quality of service and the ease of booking were exceptional. Highly recommended for corporate travels.”</p>
                            <p className='text-primary font-semibold mt-3 text-lg'>Martin Schleifer</p>
                            <p className='text-[#525252]'>Adventure Blogger</p>
                        </div>
                    </div>
                    <div className='flex gap-4 w-full' data-aos="fade-up" data-aos-delay="300">
                        <img className='w-22 h-22 rounded-full border-2 border-primary object-cover' src={user1} />
                        <div>
                            <p className='text-[#525252]'>“CarRide made our business trip seamless and stress-free. The quality of service and the ease of booking were exceptional. Highly recommended for corporate travels.”</p>
                            <p className='text-primary font-semibold mt-3 text-lg'>Martin Schleifer</p>
                            <p className='text-[#525252]'>Adventure Blogger</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials