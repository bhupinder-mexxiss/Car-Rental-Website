import React from 'react'
import { icon1, icon2, icon3, icon4 } from '../../assets/Icons'
import { StarRounded } from '@mui/icons-material'

const ProductCard = () => {
    return (
        <div className='border border-[#FAFAFA26] rounded-2xl p-4'>
            <div className='h-[230px] rounded-lg overflow-hidden relative'>
                <img src="https://i.ibb.co/6v0Xj7K/Rectangle-1.png" alt="" className='w-full h-full object-cover' />
                <div className='w-fit absolute top-3 left-3 bg-white/20 border border-white/50 py-1 px-2 text-sm rounded-full flex items-center justify-center gap-1'>
                    <StarRounded className='text-primary !text-xl' />
                    <span className='text-color1 font-medium'>4.5</span>

                </div>
            </div>
            <div className='mt-4'>
                <h4 className='text-white font-semibold text-xl text-ellipsis w-full overflow-hidden text-nowrap'>Genesis G70</h4>
                <ul className='flex items-center justify-between mt-2'>
                    <li className='flex items-center gap-1.5 font-medium text-white'><img src={icon1} className='w-4' /> 5</li>
                    <li className='flex items-center gap-1.5 font-medium text-white'><img src={icon2} className='w-4' /> Auto</li>
                    <li className='flex items-center gap-1.5 font-medium text-white'><img src={icon3} className='w-4' /> Sedan</li>
                    <li className='flex items-center gap-1.5 font-medium text-white'><img src={icon4} className='w-4' /> 4</li>
                </ul>
                <hr className='my-4 border-[#FAFAFA26]' />
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='text-border text-sm'>Daily rate from</p>
                        <span className='text-2xl font-semibold text-white'>₹1,999</span>
                    </div>
                    <button className='btn3'>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard