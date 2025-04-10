import { showroom } from '../../assets/images'

const PersonalizedExperience = () => {
    return (
        <div className='bg-[#FAFAFA]'>
            <div className='container mx-auto py-20'>
                <div className='grid grid-cols-2 gap-6 items-center'>
                    <img src={showroom} className='w-full h-auto object-cover' data-aos="zoom-in" data-aos-duration="800" />
                    <div>
                        <h2 data-aos="fade-left" className='text-5xl font-semibold leading-14 '>More Than Transportation, It's a Personalized Experience</h2>
                        <p data-aos="fade-left" data-aos-delay="200" className='text-[rgb(82,82,82)] mt-5 text-lg'>CarRide is not just about providing vehicles; it's about crafting a special travel experience. With friendly customer service and a well-maintained fleet, we're ready to make every journey memorable</p>
                        <button data-aos="fade-left" data-aos-delay="300" className='mt-5 px-7 py-3 bg-primary rounded-full text-white'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalizedExperience