import { Car12 } from '../../assets/images'
import { door, gear, pass } from '../../assets/Icons'

const CarCard = () => {
    return (
        <div className='bg-[#fefefe] shadow-xs hover:shadow-[0px_0px_15px_-10px_rgba(66,68,90,1)] duration-300 border border-black/5 rounded-2xl p-3'>
            <div className='h-[200px]'>
                <img src={Car12} alt="" className='w-full h-full object-cover rounded-2xl' />
            </div>
            <div className='mt-3'>
                <div className='flex items-center justify-between'>
                    <h4 className='text-color1 font-semibold text-lg'>Mercedes</h4>
                    <span className='text-primary font-semibold text-xl'>₹2,549</span>
                </div>
                <div className='flex items-center justify-between'>
                    <span className='text-color2 text-sm'>SUV</span>
                    <span className='text-color2 text-sm'>per day</span>
                </div>
                <div className='flex items-center justify-between mt-2 pb-2'>
                    <span className='text-color2 text-sm flex items-center gap-1'><img src={pass} className='w-4' />4</span>
                    <span className='text-color2 text-sm flex items-center gap-1'><img src={gear} className='w-4' />Auto</span>
                    <span className='text-color2 text-sm flex items-center gap-1'><img src={door} className='w-4' />5</span>
                </div>
            </div>
        </div>
    )
}

export default CarCard