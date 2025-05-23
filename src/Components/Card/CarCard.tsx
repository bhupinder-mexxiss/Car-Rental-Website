import { LocalGasStationOutlined, StarRounded } from '@mui/icons-material';
import { door, gear, pass } from '../../assets/Icons'
import { Link } from 'react-router'

interface CarCardProps {
    car: any;
    forSale?: boolean;
}
const CarCard = ({ car, forSale = true }: CarCardProps) => {
    return (
        <div className='bg-[#fefefe] shadow-xs hover:shadow-[0px_0px_15px_-10px_rgba(66,68,90,1)] duration-300 border border-black/5 rounded-2xl p-3 relative'>
            <Link to="/car/1" className='absolute top-0 left-0 w-full h-full' ></Link>
            <div className='h-[200px]'>
                <img src={car} alt="" className='w-full h-full object-cover rounded-2xl' />
            </div>
            <div className='mt-3'>
                <div className='flex items-center justify-between'>
                    <h4 className='text-color1 font-semibold text-lg'>Mercedes</h4>
                    <span className='font-semibold text-sm flex items-center'><StarRounded className='!text-xl text-primary' /> 4.5</span>
                </div>
                <div className='flex items-center justify-between'>
                    <span className='text-color2 text-sm'>SUV</span>
                </div>
                <div className='flex items-center justify-between mt-2 pb-2'>
                    <span className='text-color2 text-sm flex items-center gap-1'><img src={pass} className='w-4' />4</span>
                    <span className='text-color2 text-sm flex items-center gap-1'><img src={gear} className='w-4' />Auto</span>
                    <span className='text-color2 text-sm flex items-center gap-1'><img src={door} className='w-4' />5</span>
                    <span className='text-color2 text-sm flex items-center gap-1'><LocalGasStationOutlined className='!text-xl' />Gasoline</span>
                </div>
            </div>
            <div className="pt-3 mt-2 border-t border-border flex justify-between items-center relative">
                <span className="text-xl font-bold text-gray-800">
                    ₹2,549
                    {!forSale && <span className="text-sm font-normal text-gray-600">/day</span>}
                </span>
                <Link to="/car/1" className="btn3 text-sm py-2 px-4">
                    {forSale ? 'Buy Now' : 'Rent Now'}
                </Link>
            </div>
        </div>
    )
}

export default CarCard