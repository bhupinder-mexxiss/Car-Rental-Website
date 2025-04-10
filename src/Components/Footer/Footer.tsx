import { Email, Phone } from '@mui/icons-material'
import { face, insta, linkdin, twitter, youtube } from '../../assets/Icons'

const Footer = () => {
    return (
        <div className='pt-20 bg-[#FAFAFA]'>
            <div className="container mx-auto">
                <div className='grid grid-cols-3 gap-20'>
                    <div>
                        <p className='font-semibold text-xl'>CarRide</p>
                        <p className='text-color2 text-sm mt-1'>CarRide is not just about providing vehicles. It's about crafting.</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div>
                            <h5 className='font-semibold'>Pages</h5>
                            <ul className='text-color2 text-sm flex flex-col gap-2 mt-2'>
                                <li className='hover:text-primary cursor-pointer hover:translate-x-1'>Home</li>
                                <li className='hover:text-primary cursor-pointer hover:translate-x-1'>About Us</li>
                                <li className='hover:text-primary cursor-pointer hover:translate-x-1'>Fleet</li>
                                <li className='hover:text-primary cursor-pointer hover:translate-x-1'>FAQ</li>
                                <li className='hover:text-primary cursor-pointer hover:translate-x-1'>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className='font-semibold'>Contact</h5>
                            <ul className='text-color2 text-sm flex flex-col gap-2 mt-2'>
                                <li>4118 Constellation Rd, Lompoc, California 93436, USA</li>
                                <li><Email className='!text-lg mr-2' /> Hello@gmail.com</li>
                                <li><Phone className='!text-lg mr-2' /> +(62) 123 456 789</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h5 className='font-semibold text-primary'>Follow Us</h5>
                        <ul className='text-color2 text-sm flex gap-3 mt-2'>
                            <li className='w-9 h-9 rounded-full border border-border flex items-center justify-center cursor-pointer hover:-translate-y-1'><img src={linkdin} alt="" className='h-5' /></li>
                            <li className='w-9 h-9 rounded-full border border-border flex items-center justify-center cursor-pointer hover:-translate-y-1'><img src={twitter} alt="" className='h-5' /></li>
                            <li className='w-9 h-9 rounded-full border border-border flex items-center justify-center cursor-pointer hover:-translate-y-1'><img src={face} alt="" className='h-5' /></li>
                            <li className='w-9 h-9 rounded-full border border-border flex items-center justify-center cursor-pointer hover:-translate-y-1'><img src={youtube} alt="" className='h-5' /></li>
                            <li className='w-9 h-9 rounded-full border border-border flex items-center justify-center cursor-pointer hover:-translate-y-1'><img src={insta} alt="" className='h-5' /></li>
                        </ul>
                    </div>
                </div>
                <hr className='mt-10 border-[1.5px] border-border' />
                <div className='py-6'>
                    <p className='text-lg text-center'>©2025 CarRide® Global Inc. All right reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer