import { PlaceRounded, Remove, Search } from '@mui/icons-material'

const Filter = () => {
    return (
        <div className='bg-white/80 py-5 border border-color1/15 rounded-2xl h-24 xl:w-[90%] shadow-[0px_30px_60px_-15px_#17172f2e] backdrop-blur-xs'>
            <div className="flex">
                <div className='w-1/5'>
                    <div className='border-r-2 border-border px-5'>
                        <label htmlFor="" className='font-semibold text-color1 text-lg'>Location</label>
                        <div className='relative mt-1'>
                            <input type="text" className='p-0 w-full pr-6 border-none focus:ring-0 bg-transparent placeholder:text-color2 text-color1' placeholder='Select your City' />
                            <PlaceRounded className='!text-lg text-primary absolute right-1 top-1/2 -translate-y-1/2' />
                        </div>
                    </div>
                </div>
                <div className='w-1/5'>
                    <div className='border-r-2 border-border px-5'>
                        <label htmlFor="" className='font-semibold text-color1 text-lg'>Pick Up</label>
                        <div className='relative mt-1'>
                            <input type="text" className='p-0 w-full pr-6 border-none focus:ring-0 bg-transparent placeholder:text-color2 text-color1' placeholder='Select your City' />
                            <PlaceRounded className='!text-lg text-primary absolute right-1 top-1/2 -translate-y-1/2' />
                        </div>
                    </div>
                </div>
                <div className='w-1/5'>
                    <div className='border-r-2 border-border px-5'>
                        <label htmlFor="" className='font-semibold text-color1 text-lg'>Car Type</label>
                        <div className='relative mt-1'>
                            <select name="" id="" className='p-0 w-full pr-6 border-none focus:ring-0 bg-transparent'>
                                <option value="">Choose Car Type</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='w-1/3'>
                    <div className='px-5'>
                        <label htmlFor="" className='font-semibold text-color1 text-lg'>Date</label>
                        <div className='flex items-center gap-2'>
                            <div className='relative mt-1'>
                                <input type="date" className='p-0 w-full border-none focus:ring-0 bg-transparent placeholder:text-color2 text-color1' placeholder='Select your City' />
                            </div>
                            <span><Remove /></span>
                            <div className='relative mt-1'>
                                <input type="date" className='p-0 w-full border-none focus:ring-0 bg-transparent placeholder:text-color2 text-color1' placeholder='Select your City' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-5'>
                    <button className='btn1 h-full rounded-2xl'>
                        <Search />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Filter